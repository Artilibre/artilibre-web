"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import artiLogo from "@/public/artilibre-logo.png";

export const Footer = () => {
  const craftmans = ["Plombier", "Chauffagiste", "Electricien", "Carreleur", "Couvreur", "Charpentier", "Macon"];

  return (
    <footer className="w-full bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo and Description Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <Image src={artiLogo} alt="Artilibre" width={140} height={40} className="h-10 w-auto" />
              </div>
            </Link>
            <p className="text-muted-foreground">
              Nulla libero purus, vestibulum nec maximus id, suscipit vel enim. Quisque scelerisque consequat lorem vel efficitur.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="nav-link">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="nav-link">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/company/artilibree/about/" className="nav-link">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Categories Columns */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nos catégories d'artisans</h3>
            <ul className="space-y-2">
              {craftmans.map(category => (
                <li key={category}>
                  <Link href="#" className="nav-link">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Concept & Tarifs */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Le concept</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="nav-link">
                    Comment ça marche ?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="nav-link">
                    Nos tarifs
                  </Link>
                </li>
              </ul>
            </div>

            <Button className="w-full">Vous êtes artisan ?</Button>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Mon compte</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="nav-link">
                    Mon compte
                  </Link>
                </li>
                <li>
                  <Link href="#" className="nav-link">
                    Créer un compte
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-2">
              <Link href="#" className="nav-link text-sm">
                Mentions légales
              </Link>
              <Link href="#" className="nav-link text-sm">
                Conditions générales de vente
              </Link>
              <Link href="#" className="nav-link text-sm">
                Politique RGPD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
