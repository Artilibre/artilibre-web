"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export const NavBar = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1" />

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 md:flex">
            <Link href="/artisans" className="text-sm font-medium text-primary hover:text-primary/80">
              Les artisans
            </Link>
            <Link href="/concept" className="text-sm font-medium text-primary hover:text-primary/80">
              Le concept
            </Link>
            <Link href="/tarifs" className="text-sm font-medium text-primary hover:text-primary/80">
              Les tarifs
            </Link>
            <Button variant="default" className="bg-orange-500 text-white hover:bg-orange-600">
              Vous êtes artisan ?
            </Button>
            <Button variant="ghost" size="icon" className="ml-2">
              <User className="h-5 w-5" />
              <span className="sr-only">User account</span>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-4 md:hidden">
            <Button variant="ghost" size="icon" className="ml-2">
              <User className="h-5 w-5" />
              <span className="sr-only">User account</span>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                {/* Need to keep hidden sheet title to avoid errors */}
                <VisuallyHidden.Root>
                  <SheetTitle>Menu</SheetTitle>
                </VisuallyHidden.Root>
                <nav className="mt-8 flex flex-col space-y-4">
                  <Link href="/artisans" className="nav-bar-link">
                    Les artisans
                  </Link>
                  <Link href="/concept" className="nav-bar-link">
                    Le concept
                  </Link>
                  <Link href="/tarifs" className="nav-bar-link">
                    Les tarifs
                  </Link>
                  <Button variant="default" className="w-full bg-orange-500 text-white hover:bg-orange-600">
                    Vous êtes artisan ?
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
