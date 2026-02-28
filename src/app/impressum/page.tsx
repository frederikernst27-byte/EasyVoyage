import Link from 'next/link';

export default function ImpressumPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4 text-foreground">
        <h1 className="font-headline text-4xl font-bold">Impressum</h1>
        <p className="mt-4">Angaben gemäß § 5 TMG</p>

        <p className="mt-8">
          <strong>Frederik Ernst</strong>
          <br />
          AutomateX Solutions
          <br />
          Niehusmannskamp 15
          <br />
          45326 Essen
          <br />
          Deutschland
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Kontakt</h2>
        <p className="mt-2">
          E-Mail:{' '}
          <a
            href="mailto:frederik.ernst@automate-x-solutions.de"
            className="text-primary underline"
          >
            frederik.ernst@automate-x-solutions.de
          </a>
          <br />
          Telefon:{' '}
          <a href="tel:+491772988022" className="text-primary underline">
            01772988022
          </a>
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Umsatzsteuer</h2>
        <p className="mt-2">Keine Umsatzsteuer-Identifikationsnummer vorhanden.</p>

        <h2 className="mt-8 text-2xl font-semibold">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p className="mt-2">
          Frederik Ernst
          <br />
          Niehusmannskamp 15, 45326 Essen
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Hinweis gemäß § 36 VSBG</h2>
        <p className="mt-2">
          Wir sind nicht bereit oder verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>

        <p className="mt-8">
          <Link href="/" className="text-primary underline">
            ← Zurück zur Startseite
          </Link>
        </p>
      </div>
    </div>
  );
}
