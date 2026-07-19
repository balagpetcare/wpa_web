import { ProgramPageTemplate } from "../../../components/common/ProgramPageTemplate";
import { getProgramsContent } from "../../../lib/programsContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AwarenessPage({ params }: PageProps) {
  const { locale } = await params;
  const { awareness } = getProgramsContent(locale);
  return <ProgramPageTemplate locale={locale} content={awareness} />;
}
