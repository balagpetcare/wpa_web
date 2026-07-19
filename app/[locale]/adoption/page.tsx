import { AdoptionProgramPage } from "../../../components/common/AdoptionProgramPage";
import { getProgramsContent } from "../../../lib/programsContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AdoptionPage({ params }: PageProps) {
  const { locale } = await params;
  const { adoption } = getProgramsContent(locale);
  return <AdoptionProgramPage locale={locale} content={adoption} />;
}
