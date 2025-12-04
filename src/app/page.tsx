import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  MessageSquare,
  Phone,
  MapPin,
  DollarSign,
  Smile,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-background');
const offerImages = {
  beach: PlaceHolderImages.find((p) => p.id === 'offer-beach'),
  adventure: PlaceHolderImages.find((p) => p.id === 'offer-adventure'),
  city: PlaceHolderImages.find((p) => p.id === 'offer-city'),
};
const testimonialImages = {
  person1: PlaceHolderImages.find((p) => p.id === 'testimonial-1'),
  person2: PlaceHolderImages.find((p) => p.id === 'testimonial-2'),
};

export default function Home() {
  return (
    <div className="flex-1">
      <section className="relative flex h-[60vh] w-full items-center justify-center text-center text-white md:h-[80vh]">
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl p-4">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-7xl">
            Travel Made Simple
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg md:mt-6 md:text-xl">
            Geben Sie einfach Ihr Budget und Ihre Wünsche an – wir kümmern uns
            um den Rest. Von exklusiven Hotelpreisen bis zur maßgeschneiderten
            Reiseplanung.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact#meeting">
                <Phone className="mr-2 h-5 w-5" />
                Telefonmeeting buchen
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact#form">
                <MessageSquare className="mr-2 h-5 w-5" />
                Anfrage senden
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              So einfach geht&apos;s zu Ihrem Traumurlaub
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
              Dank direktem Zugang zu Hotels und maßgeschneiderter Planung buchen
              Sie mit uns Urlaubsreisen zum besten Preis.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold">
                1. Budget & Wünsche
              </h3>
              <p className="mt-2 text-foreground/70">
                Sie geben uns Ihr Reisebudget und Ihre Vorstellungen bekannt.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold">
                2. Wir planen
              </h3>
              <p className="mt-2 text-foreground/70">
                Wir erstellen ein maßgeschneidertes Angebot mit Flügen, Hotels
                und Aktivitäten.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Smile className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold">
                3. Sie genießen
              </h3>
              <p className="mt-2 text-foreground/70">
                Lehnen Sie sich zurück und freuen Sie sich auf einen perfekt
                organisierten Urlaub.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background/50 py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Beliebte Reiseziele
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Lassen Sie sich von unseren Top-Angeboten inspirieren.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="group overflow-hidden">
              {offerImages.beach && (
                <div className="overflow-hidden">
                  <Image
                    src={offerImages.beach.imageUrl}
                    alt={offerImages.beach.description}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={offerImages.beach.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">Strandurlaub</CardTitle>
                <CardDescription>Malediven</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Entspannen Sie an den weißen Sandstränden und genießen Sie das
                  kristallklare Wasser.
                </p>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden">
              {offerImages.adventure && (
                <div className="overflow-hidden">
                  <Image
                    src={offerImages.adventure.imageUrl}
                    alt={offerImages.adventure.description}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={offerImages.adventure.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">Abenteuerreise</CardTitle>
                <CardDescription>Nepal</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Erleben Sie atemberaubende Berglandschaften und
                  unvergessliche Trekking-Touren.
                </p>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden">
              {offerImages.city && (
                <div className="overflow-hidden">
                  <Image
                    src={offerImages.city.imageUrl}
                    alt={offerImages.city.description}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={offerImages.city.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">Städtereise</CardTitle>
                <CardDescription>Paris</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Entdecken Sie die Stadt der Liebe mit all ihren
                  Sehenswürdigkeiten und ihrem Charme.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/offers">
                Alle Angebote ansehen <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Was unsere Kunden sagen
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-4">
                  {testimonialImages.person1 && (
                    <Avatar>
                      <AvatarImage
                        src={testimonialImages.person1.imageUrl}
                        alt="Familie Müller"
                        data-ai-hint={testimonialImages.person1.imageHint}
                      />
                      <AvatarFallback>FM</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold">Familie Müller</p>
                    <p className="text-sm text-foreground/60">
                      Familienurlaub in Spanien
                    </p>
                  </div>
                </div>
                <blockquote className="italic text-foreground/80">
                  &quot;EasyVoyage hat unseren Familienurlaub perfekt
                  organisiert. Alles war auf unsere Bedürfnisse zugeschnitten,
                  und die Kinder hatten die Zeit ihres Lebens. Absolut
                  empfehlenswert!&quot;
                </blockquote>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-4">
                  {testimonialImages.person2 && (
                    <Avatar>
                      <AvatarImage
                        src={testimonialImages.person2.imageUrl}
                        alt="Anna S."
                        data-ai-hint={testimonialImages.person2.imageHint}
                      />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold">Anna S.</p>
                    <p className="text-sm text-foreground/60">
                      Städtereise nach Rom
                    </p>
                  </div>
                </div>
                <blockquote className="italic text-foreground/80">
                  &quot;Dank EasyVoyage habe ich ein wunderschönes Hotel zu
                  einem unschlagbaren Preis gefunden. Die persönliche Betreuung
                  war erstklassig. Jederzeit wieder!&quot;
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
