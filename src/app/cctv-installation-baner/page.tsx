import LocationLandingPage, {
  buildLocationMetadata,
} from '@/components/LocationLandingPage';

const SLUG = '/cctv-installation-baner';

export const metadata = buildLocationMetadata(SLUG);

export default function Page() {
  return <LocationLandingPage slug={SLUG} />;
}
