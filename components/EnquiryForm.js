'use client';

import { useEffect, useRef, useState } from 'react';
import { MONTHS } from '@/data/content';
import { TRIP_TYPES } from '@/data/trips';
import { PREFILL_EVENT } from '@/lib/prefill';
import { SITE, whatsappLink } from '@/lib/site';
import { WhatsAppIcon } from './Icons';

const COUNTS = Array.from({ length: 11 }, (_, i) => String(i));

function emptyValues(tripType) {
  return {
    name: '',
    phone: '',
    email: '',
    tripType: tripType || '',
    travelMonth: 'Not sure yet',
    adults: '2',
    children: '0',
    fromCity: '',
    message: '',
    consent: false,
    website: '', // honeypot: real visitors never see or fill this
  };
}

// Accepts "98765 43210", "+91 98765 43210", "098765-43210" etc.
// Returns the 10-digit number, or null if it is not a valid Indian mobile.
function normalisePhone(raw) {
  let digits = raw.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your full name.';
  if (!normalisePhone(values.phone)) errors.phone = 'Please enter a 10-digit Indian mobile number.';
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please check your email address, or leave it blank.';
  }
  if (!values.tripType) errors.tripType = 'Please choose a trip type.';
  if (!values.consent) errors.consent = 'Please tick this box so we can contact you.';
  return errors;
}

const FIELD_ORDER = ['name', 'phone', 'email', 'tripType', 'consent'];

export default function EnquiryForm({ defaultTripType = '' }) {
  const [values, setValues] = useState(() => emptyValues(defaultTripType));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [firstName, setFirstName] = useState('');
  const formRef = useRef(null);
  const statusRef = useRef(null);

  // Preselect values sent by the trip finder or an "Enquire" button.
  useEffect(() => {
    function onPrefill(event) {
      const { tripType, travelMonth } = event.detail || {};
      setValues((current) => ({
        ...current,
        ...(tripType ? { tripType } : {}),
        ...(travelMonth ? { travelMonth } : {}),
      }));
      if (tripType) setErrors((current) => ({ ...current, tripType: undefined }));
    }
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  useEffect(() => {
    if (status === 'success' || status === 'error') statusRef.current?.focus();
  }, [status]);

  function update(event) {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;

    const found = validate(values);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((key) => found[key]);
    if (firstInvalid) {
      formRef.current?.elements.namedItem(firstInvalid)?.focus();
      return;
    }

    const name = values.name.trim();
    setFirstName(name.split(/\s+/)[0]);

    // Spam bots fill every field. Pretend it worked and save nothing.
    if (values.website) {
      setStatus('success');
      return;
    }

    setStatus('sending');
    try {
      const { saveEnquiry } = await import('@/lib/firebase');
      await saveEnquiry({
        name,
        phone: normalisePhone(values.phone),
        email: values.email.trim(),
        tripType: values.tripType,
        travelMonth: values.travelMonth,
        adults: Number(values.adults),
        children: Number(values.children),
        fromCity: values.fromCity.trim(),
        message: values.message.trim(),
        consent: values.consent,
        sourcePage: window.location.pathname,
      });
      setStatus('success');
    } catch (error) {
      console.error('Enquiry could not be saved', error);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-card form-result" data-enquiry-form>
        <p className="form-result-title" ref={statusRef} tabIndex={-1} role="status">
          Thanks, {firstName}! We&apos;ll call or WhatsApp you within {SITE.responseTime}.
        </p>
        <button
          type="button"
          className="btn btn-secondary btn-bordered"
          onClick={() => {
            setValues(emptyValues(defaultTripType));
            setStatus('idle');
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const err = (key) =>
    errors[key] ? (
      <span className="field-error" id={`${key}-error`}>
        {errors[key]}
      </span>
    ) : null;
  const describedBy = (key) => (errors[key] ? `${key}-error` : undefined);

  return (
    <form ref={formRef} className="form-card enquiry-form" onSubmit={onSubmit} noValidate data-enquiry-form>
      <div className="form-grid">
        <label className="field">
          <span className="field-label">Full name *</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            value={values.name}
            onChange={update}
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy('name')}
          />
          {err('name')}
        </label>

        <label className="field">
          <span className="field-label">Phone / WhatsApp *</span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="10-digit mobile number"
            value={values.phone}
            onChange={update}
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy('phone')}
          />
          {err('phone')}
        </label>

        <label className="field">
          <span className="field-label">Email (optional)</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={200}
            value={values.email}
            onChange={update}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy('email')}
          />
          {err('email')}
        </label>

        <label className="field">
          <span className="field-label">Trip type *</span>
          <select
            name="tripType"
            value={values.tripType}
            onChange={update}
            required
            aria-invalid={Boolean(errors.tripType)}
            aria-describedby={describedBy('tripType')}
          >
            <option value="" disabled>
              Choose a trip
            </option>
            {TRIP_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {err('tripType')}
        </label>

        <label className="field">
          <span className="field-label">Travel month</span>
          <select name="travelMonth" value={values.travelMonth} onChange={update}>
            <option>Not sure yet</option>
            {MONTHS.map((month) => (
              <option key={month}>{month}</option>
            ))}
          </select>
        </label>

        <div className="field-pair">
          <label className="field">
            <span className="field-label">Adults</span>
            <select name="adults" value={values.adults} onChange={update}>
              {COUNTS.slice(1).map((n) => (
                <option key={n}>{n}</option>
              ))}
              <option value="11">More than 10</option>
            </select>
          </label>
          <label className="field">
            <span className="field-label">Children</span>
            <select name="children" value={values.children} onChange={update}>
              {COUNTS.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="field">
          <span className="field-label">Departing from (city)</span>
          <input name="fromCity" type="text" autoComplete="address-level2" maxLength={100} value={values.fromCity} onChange={update} />
        </label>

        <label className="field field--full">
          <span className="field-label">Message (optional)</span>
          <textarea name="message" rows={4} maxLength={2000} value={values.message} onChange={update} />
        </label>

        {/* Honeypot: hidden from people and screen readers, filled only by bots. */}
        <div className="honeypot" aria-hidden="true">
          <label>
            Leave this field empty
            <input name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={update} />
          </label>
        </div>

        <div className="field--full">
          <label className="consent">
            <input
              name="consent"
              type="checkbox"
              checked={values.consent}
              onChange={update}
              required
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={describedBy('consent')}
            />
            <span>
              I agree to be contacted by KamaalTravels about my enquiry. Read our{' '}
              <a href="/privacy-policy" className="inline-link">
                Privacy Policy
              </a>
              . *
            </span>
          </label>
          {err('consent')}
        </div>
      </div>

      {status === 'error' ? (
        <div className="form-error" role="alert" ref={statusRef} tabIndex={-1}>
          <p>Sorry, we couldn&apos;t send your enquiry. Please try again, or message us on WhatsApp instead.</p>
          <a href={whatsappLink()} className="btn btn-secondary btn-bordered" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
        </div>
      ) : null}

      <button type="submit" className="btn btn-primary btn-block form-submit" disabled={status === 'sending'} aria-busy={status === 'sending'}>
        {status === 'sending' ? (
          <>
            <span className="spinner" aria-hidden="true" /> Sending…
          </>
        ) : (
          'Send Enquiry'
        )}
      </button>
      <p className="form-footnote">* Required</p>
    </form>
  );
}
