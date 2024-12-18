import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto flex flex-grow flex-col items-center justify-center px-4 py-8 text-center">
        <div className="max-w-2xl space-y-8">
          <div>
            <Image src="/artilibre-logo-simple.png" className="mx-auto" alt="Artilibre" width={200} height={200} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Oups ! Cette page est en travaux</h1>

          <p className="text-xl text-muted-foreground">
            Même les meilleurs artisans peuvent parfois se tromper de chantier. La page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          {/* Illustration */}
          <div className="my-8">
            <Image src="/craftman-perplexed.jpeg" alt="Illustration d'un artisan perplexe" className="mx-auto" width={200} height={200} />
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Artilibre. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default NotFound;
