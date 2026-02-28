import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, CheckCircle, Award, PiggyBank, Smile } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const serviceImage = PlaceHolderImages.find((p) => p.id === 'service-process');

export default function ServicesPage() {
  return (
    <div className="flex-1 bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">
              Unser Service: Reisen ohne Stress
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
              Wir glauben, dass Urlaubsplanung genauso entspannend sein sollte
              wie der Urlaub selbst. Erfahren Sie, wie wir das für Sie
              verwirklichen.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {serviceImage && (
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={serviceImage.imageUrl}
                  alt={serviceImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={serviceImage.imageHint}
                />
              </div>
            )}

            <div>
              <h2 className="font-headline text-3xl font-bold">
                Wie EasyVoyage funktioniert
              </h2>
              <p className="mt-4 text-foreground/70">
                Unser Prozess ist darauf ausgelegt, Ihnen maximalen Komfort und
                ein perfektes Reiseerlebnis zu bieten.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold">Ihre Wünsche sind der Start</h4>
                    <p className="text-foreground/60">
                      Alles beginnt mit Ihnen. Sie teilen uns Ihr Budget, Ihre
                      Reisedaten und Ihre Vorstellungen mit.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold">Maßgeschneiderte Planung</h4>
                    <p className="text-foreground/60">
                      Unser Team stellt ein individuelles Paket zusammen, das
                      Flüge, Hotels, Transfers und Aktivitäten umfasst.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold">Buchung & Betreuung</h4>
                    <p className="text-foreground/60">
                      Nach Ihrer Zustimmung kümmern wir uns um alle Buchungen.
                      Wir stehen Ihnen vor, während und nach der Reise zur Seite.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background/50 py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Ihre exklusiven Vorteile
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
              Profitieren Sie von unserem einzigartigen Service und unserem
              weltweiten Netzwerk aus exklusiven Hotelkontakten.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <PiggyBank className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline">Beste Hotelpreise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Dank exklusiver Kontakte zu Hotels in vielen Ländern erhalten
                  Sie über uns häufig Konditionen, die online so nicht verfügbar
                  sind.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline">Individuelle Planung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Keine Reise von der Stange. Jeder Plan ist ein Unikat,
                  zugeschnitten auf Ihre Träume.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Smile className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline">Rundum-Sorglos-Paket</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Wir sind Ihr einziger Ansprechpartner. Von der ersten Idee bis
                  zur Rückkehr nach Hause.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-16 text-center">
            <h3 className="font-headline text-2xl font-semibold">
              Bereit für Ihre Traumreise?
            </h3>
            <Button asChild size="lg" className="mt-6">
              <Link href="/plan">
                Jetzt Reise planen <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
