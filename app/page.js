import ClosingCta from '@/components/ClosingCta';
import EnquirySection from '@/components/EnquirySection';
import Experiences from '@/components/Experiences';
import Faq from '@/components/Faq';
import Hero from '@/components/Hero';
import Places from '@/components/Places';
import Reviews from '@/components/Reviews';
import TripOverview from '@/components/TripOverview';
import WhyUs from '@/components/WhyUs';

export const metadata = {
  title: { absolute: 'Kashmir Tour Packages for Students, Families & Honeymoon | KamaalTravels' },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Kashmir Tour Packages for Students, Families & Honeymoon | KamaalTravels',
    url: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TripOverview />
      <WhyUs />
      <Places />
      <Experiences />
      <Reviews />
      <Faq />
      <EnquirySection />
      <ClosingCta />
    </>
  );
}
