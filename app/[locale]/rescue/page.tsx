import { ProgramPageTemplate } from "../../../components/common/ProgramPageTemplate";
import { getProgramsContent } from "../../../lib/programsContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function RescuePage({ params }: PageProps) {
  const { locale } = await params;
  const { rescue } = getProgramsContent(locale);
  return <ProgramPageTemplate locale={locale} content={rescue} />;
}
