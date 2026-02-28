import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const offers = {
  beach: [
    {
      title: 'Malediven Traum',
      description: 'Entspannen Sie an den weißen Sandstränden und genießen Sie das kristallklare Wasser.',
      image: PlaceHolderImages.find((p) => p.id === 'offer-beach'),
      price: 'ab 1.899€',
      duration: '7 Nächte',
    },
    {
      title: 'Santorini Sonnenuntergang',
      description: 'Erleben Sie die ikonischen weißen Dörfer und atemberaubenden Ausblicke auf die Ägäis.',
      image: PlaceHolderImages.find((p) => p.id === 'offer-greece-beach'),
      price: 'ab 999€',
      duration: '5 Nächte',
    },
  ],
  adventure: [
    {
      title: 'Alpen-Abenteuer Österreich',
      description: 'Wandern Sie durch die majestätischen Alpen und entdecken Sie unberührte Natur.',
      image: PlaceHolderImages.find((p) => p.id === 'offer-austria-mountains'),
      price: 'ab 749€',
      duration: '4 Nächte',
    },
    {
      title: 'Himalaya-Trekking Nepal',
      description: 'Eine unvergessliche Reise zum Dach der Welt für erfahrene Wanderer.',
      image: PlaceHolderImages.find((p) => p.id === 'offer-adventure'),
      price: 'ab 2.499€',
      duration: '14 Nächte',
    },
  ],
  city: [
    {
      title: 'Pulsierendes New York',
      description: 'Entdecken Sie den Big Apple, von den Lichtern des Times Square bis zur Ruhe des Central Park.',
      image: PlaceHolderImages.find((p) => p.id === 'offer-newyork-city'),
      price: 'ab 1.299€',
      duration: '5 Nächte',
    },
    {
      title: 'Charme von Paris',
      description: 'Erkunden Sie die Stadt der Liebe, ihre Kunst, Kultur und kulinarischen Köstlichkeiten.',
      image: PlaceHolderImages.find((p) => p.id === 'offer-city'),
      price: 'ab 699€',
      duration: '3 Nächte',
    },
  ],
};


export default function OffersPage() {
  return (
    <div className="flex-1 bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">
              Unsere Urlaubsangebote
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
              Entdecken Sie unsere sorgfältig zusammengestellten Reisen. Jedes
              Angebot ist ein Vorschlag, den wir gerne an Ihre Wünsche anpassen.
              Durch unsere exklusiven Kontakte zu Hotels weltweit können wir
              häufig besonders attraktive Preise anbieten.
            </p>
          </div>

          <Tabs defaultValue="beach" className="w-full">
            <TabsList className="mx-auto mb-10 grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="beach">Strandurlaub</TabsTrigger>
              <TabsTrigger value="adventure">Abenteuer</TabsTrigger>
              <TabsTrigger value="city">Städtereisen</TabsTrigger>
            </TabsList>
            
            <TabsContent value="beach">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {offers.beach.map((offer) => (
                  <OfferCard key={offer.title} {...offer} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="adventure">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {offers.adventure.map((offer) => (
                  <OfferCard key={offer.title} {...offer} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="city">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {offers.city.map((offer) => (
                  <OfferCard key={offer.title} {...offer} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <h3 className="font-headline text-2xl font-semibold">Nicht das Richtige dabei?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-foreground/70">
              Kein Problem! Teilen Sie uns Ihre Wünsche mit und wir erstellen Ihr ganz persönliches Traumangebot.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/plan">
                Zur persönlichen Reiseplanung <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function OfferCard({ title, description, image, price, duration }: { title: string; description: string; image: any; price: string; duration: string; }) {
  return (
    <Card className="group flex flex-col overflow-hidden">
      {image && (
        <div className="overflow-hidden">
          <Image
            src={image.imageUrl}
            alt={image.description}
            width={600}
            height={400}
            className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline">{title}</CardTitle>
        <div className='flex items-center gap-2 pt-1'>
            <Badge variant="secondary">{duration}</Badge>
            <Badge variant="outline">{price}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/70">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
            <Link href="/contact">Anfragen</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
