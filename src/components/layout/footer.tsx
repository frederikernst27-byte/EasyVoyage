import Link from 'next/link';
import { Plane } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Plane className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold text-primary">
              EasyVoyage
            </span>
          </Link>
          <p className="text-sm text-foreground/60">
            Travel Made Simple. Finden Sie passende Flüge und Urlaubsangebote –
            abgestimmt auf Ihr Budget und Ihre Wünsche.
          </p>
          <div className="space-y-1 text-sm text-foreground/70">
            <p>E-Mail: frederik.ernst27@gmail.com</p>
            <p>Telefon: 01772988022</p>
            <p>
              Instagram:{' '}
              <a
                href="https://www.instagram.com/easy_voyage_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                @easy_voyage_
              </a>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
          <div>
            <h3 className="font-headline text-base font-semibold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/offers"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Angebote
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Bewertungen
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-base font-semibold">Support</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/plan"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Reise planen
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-base font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/datenschutz"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="container mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 md:px-6">
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} EasyVoyage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
