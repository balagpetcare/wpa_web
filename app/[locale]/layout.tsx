import { Header } from "../../components/layout/header";
import { Footer } from "../../components/layout/footer";
import { BackToTopButton } from "../../components/common/BackToTopButton";
import { LocaleHtmlAttributes } from "../../components/common/LocaleHtmlAttributes";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  return (
    <>
      <LocaleHtmlAttributes locale={locale} />
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTopButton />
    </>
  );
}
