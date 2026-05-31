import LocationLandingPage, {
  buildLocationMetadata,
} from '@/components/LocationLandingPage';

const SLUG = '/cctv-installation-wakad';

export const metadata = buildLocationMetadata(SLUG);

export default function Page() {
  return <LocationLandingPage slug={SLUG} />;
}
