import { ContactForm } from '@/components/feature/contact-form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const calendarImage = PlaceHolderImages.find(
  (p) => p.id === 'contact-calendar'
);

export default function ContactPage() {
  return (
    <div className="flex-1 bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">
              Kontaktieren Sie uns
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
              Wir sind hier, um Ihnen zu helfen, Ihre Traumreise zu planen.
              Wählen Sie die für Sie passende Kontaktmethode.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <Card id="meeting" className="overflow-hidden">
                {calendarImage && (
                  <div className="relative aspect-video">
                    <Image
                      src={calendarImage.imageUrl}
                      alt={calendarImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={calendarImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">
                    Buchen Sie ein Beratungsgespräch
                  </CardTitle>
                  <CardDescription>
                    Lassen Sie uns persönlich über Ihre Reisepläne sprechen.
                    Kostenlos und unverbindlich.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild size="lg" className="w-full">
                    {/* Replace with your actual scheduling link */}
                    <Link
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Termin auswählen
                    </Link>
                  </Button>
                  <div className="mt-6 space-y-4 text-sm">
                    <div className="flex items-start gap-4">
                      <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <h4 className="font-semibold">Telefon</h4>
                        <p className="text-foreground/70">+49 123 456789</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <h4 className="font-semibold">E-Mail</h4>
                        <p className="text-foreground/70">
                          kontakt@easyvoyage.de
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
