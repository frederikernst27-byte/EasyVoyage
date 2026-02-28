import { ContactForm } from '@/components/feature/contact-form';
import { FileText } from 'lucide-react';

export default function PlanPage() {
  return (
    <div className="flex-1">
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <FileText className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="font-headline text-4xl font-bold md:text-5xl">
              Reiseanfrage stellen
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
              Beschreiben Sie Ihre Wünsche und Ihr Budget. Wir melden uns per
              E-Mail mit passenden Reisevorschlägen.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
