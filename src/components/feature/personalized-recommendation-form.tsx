'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Wand2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { generateRecommendations } from '@/app/plan/actions';
import type { PersonalizedTravelRecommendationsOutput } from '@/ai/flows/personalized-travel-recommendations';

const formSchema = z.object({
  budget: z.coerce
    .number()
    .min(100, 'Das Budget muss mindestens 100 betragen.'),
  preferences: z
    .string()
    .min(10, 'Bitte beschreiben Sie Ihre Wünsche mit mindestens 10 Zeichen.'),
  pastTravelData: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function PersonalizedRecommendationForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] =
    useState<PersonalizedTravelRecommendationsOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      budget: 1000,
      preferences: '',
      pastTravelData: '',
    },
  });

  async function onSubmit(values: FormData) {
    setLoading(true);
    setResult(null);
    setError(null);

    const response = await generateRecommendations(values);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      setError(response.error || 'Ein unbekannter Fehler ist aufgetreten.');
    }
    setLoading(false);
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">
            Ihre Reisewünsche
          </CardTitle>
          <CardDescription>
            Erzählen Sie uns, was Sie sich vorstellen, und unsere KI findet die
            perfekte Reise für Sie.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ihr Budget (€)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="z.B. 1500" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="preferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ihre Wünsche und Vorlieben</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="z.B. Entspannter Strandurlaub, kinderfreundliches Hotel, Interesse an Kultur..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pastTravelData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Frühere Reisen (optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="z.B. Wir waren letztes Jahr in Italien und haben die Landschaft geliebt."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Empfehlungen erhalten
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="flex items-center justify-center">
        {loading && (
          <div className="flex flex-col items-center gap-4 text-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-lg font-semibold">
              Einen Moment, wir suchen nach den besten Reisen...
            </p>
          </div>
        )}
        {error && (
          <Card className="w-full border-destructive bg-destructive/10">
            <CardHeader>
              <CardTitle className="text-destructive">Fehler</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{error}</p>
            </CardContent>
          </Card>
        )}
        {result && (
          <Card className="w-full animate-in fade-in-50">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                Ihre persönlichen Empfehlungen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none text-foreground">
                <p>{result.recommendations}</p>
              </div>
            </CardContent>
          </Card>
        )}
        {!loading && !result && !error && (
          <div className="rounded-lg border-2 border-dashed p-8 text-center text-foreground/60">
            <Wand2 className="mx-auto mb-4 h-12 w-12" />
            <p className="font-semibold">
              Ihre maßgeschneiderten Reisevorschläge erscheinen hier.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
