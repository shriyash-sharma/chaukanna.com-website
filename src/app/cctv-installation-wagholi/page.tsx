import LocationLandingPage, {
  buildLocationMetadata,
} from '@/components/LocationLandingPage';

const SLUG = '/cctv-installation-wagholi';

export const metadata = buildLocationMetadata(SLUG);

export default function Page() {
  return <LocationLandingPage slug={SLUG} />;
}
