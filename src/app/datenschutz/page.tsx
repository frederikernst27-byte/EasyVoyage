import Link from 'next/link';

export default function DatenschutzPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4 text-foreground">
        <h1 className="font-headline text-4xl font-bold">Datenschutzerklärung</h1>

        <h2 className="mt-8 text-2xl font-semibold">1. Verantwortlicher</h2>
        <p className="mt-2">
          Frederik Ernst – AutomateX Solutions
          <br />
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
          <br />
          Adresse: Niehusmannskamp 15, 45326 Essen
        </p>

        <h2 className="mt-8 text-2xl font-semibold">2. Hosting</h2>
        <p className="mt-2">
          Diese Website wird über Vercel gehostet. Beim Aufruf der Website
          können technisch notwendige Zugriffsdaten (z. B. IP-Adresse,
          Datum/Uhrzeit, User-Agent) verarbeitet werden.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">3. Kontaktformular</h2>
        <p className="mt-2">
          Bei Nutzung des Kontaktformulars werden die eingegebenen Daten (Name,
          E-Mail, Budget, Anfrageinhalt) zur Bearbeitung Ihrer Anfrage
          verarbeitet.
        </p>
        <p className="mt-2">
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
          Maßnahmen) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          effizienter Kommunikation).
        </p>

        <h2 className="mt-8 text-2xl font-semibold">4. Formular-Übermittlung (FormSubmit)</h2>
        <p className="mt-2">
          Zur Formularübermittlung wird FormSubmit (formsubmit.co) genutzt.
          Dabei können Formulardaten an FormSubmit übermittelt werden. Bitte
          prüfen Sie ggf. zusätzlich die Datenschutzhinweise von FormSubmit.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">5. Speicherdauer</h2>
        <p className="mt-2">
          Wir speichern personenbezogene Daten nur so lange, wie es für die
          Bearbeitung der Anfrage oder aufgrund gesetzlicher Pflichten
          erforderlich ist.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">6. Ihre Rechte</h2>
        <p className="mt-2">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch
          (Art. 15 ff. DSGVO).
        </p>

        <h2 className="mt-8 text-2xl font-semibold">7. Beschwerderecht</h2>
        <p className="mt-2">
          Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
          beschweren.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">8. Sicherheit</h2>
        <p className="mt-2">
          Wir setzen angemessene technische und organisatorische Maßnahmen ein,
          um Ihre Daten zu schützen.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">9. Stand</h2>
        <p className="mt-2">Stand: Februar 2026</p>

        <p className="mt-8">
          <Link href="/" className="text-primary underline">
            ← Zurück zur Startseite
          </Link>
        </p>

        <div className="mt-8 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900">
          Hinweis: Diese Erklärung ist eine allgemeine Vorlage und ersetzt
          keine individuelle Rechtsberatung.
        </div>
      </div>
    </div>
  );
}
