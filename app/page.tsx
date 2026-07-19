import Image from "next/image";
import Link from "next/link";

export default function LocalePickerPage() {
  return (
    <main className="locale-picker">
      <div className="locale-picker__card">
        <div className="locale-picker__brand">
          <div className="locale-picker__logo">
            <Image src="/images/logo-dark.png" alt="World Pet Association" width={300} height={80} priority />
          </div>
          <h1>World Pet Association</h1>
          <p>Select your language / আপনার ভাষা নির্বাচন করুন</p>
        </div>
        <div className="locale-picker__links">
          <Link href="/en" className="locale-picker__btn">
            <span className="locale-picker__btn-label">English</span>
            <span className="locale-picker__btn-desc">Browse in English</span>
          </Link>
          <Link href="/bn" className="locale-picker__btn">
            <span className="locale-picker__btn-label">বাংলা</span>
            <span className="locale-picker__btn-desc">বাংলায় দেখুন</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
