import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  MessageSquare,
  Phone,
  Wallet,
  Compass,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-background');

const pillars = [
  {
    title: 'Budget zuerst',
    description:
      'Sie nennen Ihr Budget – wir bauen darauf ein realistisches, hochwertiges Angebot auf.',
    icon: Wallet,
  },
  {
    title: 'Maßgeschneiderte Auswahl',
    description:
      'Flüge, Hotels und Aktivitäten werden passend zu Ihren Wünschen kuratiert.',
    icon: Compass,
  },
  {
    title: 'Sicher & transparent',
    description:
      'Klare Kommunikation, nachvollziehbare Empfehlungen und persönliche Betreuung.',
    icon: ShieldCheck,
  },
];

const audiences = [
  'Familien, die stressfrei planen möchten',
  'Paare mit begrenzter Zeit für Recherche',
  'Berufstätige, die ein passendes Angebot statt Suchchaos wollen',
];

export default function Home() {
  return (
    <div className="flex-1">
      <section className="relative flex min-h-[70vh] w-full items-center justify-center text-center text-white md:min-h-[82vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-5xl p-4">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            EasyVoyage • Travel Made Simple
          </p>
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-7xl">
            Ihr Online-Reisebüro für die besten Flüge und Urlaubsangebote
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg md:text-xl">
            Wir finden für Sie passende Reisen – abgestimmt auf Budget,
            Bedürfnisse und Reisestil. Dank unseres internationalen Netzwerks
            mit exklusiven Hotelkontakten sichern wir häufig besonders starke
            Konditionen.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact#meeting">
                <Phone className="mr-2 h-5 w-5" />
                Kostenloses Beratungsgespräch
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/plan">
                <MessageSquare className="mr-2 h-5 w-5" />
                Reisewünsche eingeben
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-10 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              So funktioniert EasyVoyage
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-foreground/80">
              Ein klarer Ablauf, der Planung vereinfacht und zu besseren Reisen
              führt.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background/50 py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="font-headline text-3xl font-bold md:text-4xl">
                Für wen ist EasyVoyage ideal?
              </h3>
              <ul className="mt-6 space-y-3 text-foreground/80">
                {audiences.map((a) => (
                  <li key={a}>• {a}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/offers">
                    Angebote ansehen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Kontakt aufnehmen</Link>
                </Button>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">
                  Warum nicht einfach selbst buchen?
                </CardTitle>
                <CardDescription>
                  Weil Zeit, Vergleich und Planung oft unterschätzt werden.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-foreground/80">
                <p>✓ Sie sparen Zeit bei Recherche und Angebotsvergleich.</p>
                <p>✓ Sie erhalten kuratierte Optionen statt 1000 Tabs.</p>
                <p>✓ Sie haben einen Ansprechpartner für Rückfragen.</p>
                <p>✓ Sie bekommen eine Planung, die zu Ihrem Budget passt.</p>
                <p>
                  ✓ Über unsere weltweiten Hotelpartner können wir in vielen
                  Fällen bessere Preise für Sie verhandeln.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
