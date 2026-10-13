// Server-only helper. For photos marked `missing`, checks at build time
// whether the file has since been added to /public/images/. If it has, the
// real photo is used; otherwise the card shows the pine placeholder.
import fs from 'node:fs';
import path from 'node:path';
import { IMAGES } from '@/data/images';

export function img(key, title = '') {
  const image = IMAGES[key];
  if (!image) throw new Error(`Unknown image key: ${key}`);
  const missing =
    Boolean(image.missing) && !fs.existsSync(path.join(process.cwd(), 'public', image.src));
  return { ...image, missing, title };
}
