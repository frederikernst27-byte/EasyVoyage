import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Familie Müller',
    trip: 'Familienurlaub in Spanien',
    image: PlaceHolderImages.find((p) => p.id === 'testimonial-1'),
    quote:
      'EasyVoyage hat unseren Familienurlaub perfekt organisiert. Alles war auf unsere Bedürfnisse zugeschnitten, und die Kinder hatten die Zeit ihres Lebens. Absolut empfehlenswert!',
    rating: 5,
  },
  {
    name: 'Anna S.',
    trip: 'Städtereise nach Rom',
    image: PlaceHolderImages.find((p) => p.id === 'testimonial-2'),
    quote:
      'Dank EasyVoyage habe ich ein wunderschönes Hotel zu einem unschlagbaren Preis gefunden. Die persönliche Betreuung war erstklassig. Jederzeit wieder!',
    rating: 5,
  },
  {
    name: 'Tom & Lena',
    trip: 'Abenteuer in Costa Rica',
    image: PlaceHolderImages.find((p) => p.id === 'testimonial-3'),
    quote:
      'Die Reise war von Anfang bis Ende ein Abenteuer. Die vorgeschlagenen Aktivitäten waren genau unser Geschmack. Die Organisation war tadellos.',
    rating: 5,
  },
  {
    name: 'Markus P.',
    trip: 'Rucksackreise durch Thailand',
    image: PlaceHolderImages.find((p) => p.id === 'testimonial-4'),
    quote:
      'Als Alleinreisender war mir Sicherheit und gute Planung wichtig. EasyVoyage hat meine Erwartungen übertroffen. Die Insidertipps waren Gold wert!',
    rating: 4,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex-1 bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">
              Stimmen unserer Reisenden
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
              Lesen Sie authentische Erfahrungsberichte von Familien, Paaren
              und Alleinreisenden, die mit uns die Welt entdeckt haben.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col">
                <CardContent className="flex flex-grow flex-col justify-between p-6">
                  <div>
                    <div className="mb-4 flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-muted text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="flex-grow italic text-foreground/80">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    {testimonial.image && (
                      <Avatar>
                        <AvatarImage
                          src={testimonial.image.imageUrl}
                          alt={testimonial.name}
                          data-ai-hint={testimonial.image.imageHint}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">
                        {testimonial.trip}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
