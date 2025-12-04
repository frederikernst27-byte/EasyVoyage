import { PersonalizedRecommendationForm } from '@/components/feature/personalized-recommendation-form';
import { Wand2 } from 'lucide-react';

export default function PlanPage() {
  return (
    <div className="flex-1">
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <Wand2 className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="font-headline text-4xl font-bold md:text-5xl">
              Ihr persönlicher Reiseplaner
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
              Nutzen Sie unsere künstliche Intelligenz, um in Sekunden
              maßgeschneiderte Reisevorschläge zu erhalten, die perfekt zu Ihrem
              Budget und Ihren Wünschen passen.
            </p>
          </div>
          <PersonalizedRecommendationForm />
        </div>
      </section>
    </div>
  );
}
