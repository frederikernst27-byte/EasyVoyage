'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name muss mindestens 2 Zeichen lang sein.' }),
  email: z.string().email({ message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' }),
  budget: z.coerce.number().optional(),
  message: z.string().min(10, { message: 'Nachricht muss mindestens 10 Zeichen lang sein.' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: ContactFormData) {
    try {
      const response = await fetch('https://formsubmit.co/ajax/frederik.ernst27@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Neue EasyVoyage Kontaktanfrage',
          _template: 'table',
          name: values.name,
          email: values.email,
          budget: values.budget ?? 'nicht angegeben',
          message: values.message,
        }),
      });

      if (!response.ok) {
        throw new Error('FormSubmit konnte die Anfrage nicht verarbeiten.');
      }

      toast({
        title: 'Anfrage gesendet!',
        description:
          'Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen.',
      });
      form.reset();
    } catch {
      toast({
        variant: 'destructive',
        title: 'Senden fehlgeschlagen',
        description:
          'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an frederik.ernst27@gmail.com.',
      });
    }
  }

  return (
    <Card id="form" className="w-full">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          Schreiben Sie uns eine E-Mail
        </CardTitle>
        <CardDescription>
          Füllen Sie das Formular aus, damit wir Ihnen ein passendes Angebot senden können.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ihr Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Max Mustermann" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail-Adresse</FormLabel>
                  <FormControl>
                    <Input placeholder="max@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget (€, optional)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="1500" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ihre Wünsche</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Erzählen Sie uns von Ihrer Traumreise..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Anfrage senden
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
