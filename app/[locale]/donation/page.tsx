import { DonationProgramPage } from "../../../components/common/DonationProgramPage";
import { getProgramsContent } from "../../../lib/programsContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function DonationPage({ params }: PageProps) {
  const { locale } = await params;
  const { donation } = getProgramsContent(locale);
  return <DonationProgramPage locale={locale} content={donation} />;
}
