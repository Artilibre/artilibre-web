"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

// @private
export const Nav = () => {
  return (
    <>
      <Link href="/artisans" className="nav-bar-link">
        Les artisans
      </Link>
      <Link href="/concept" className="nav-bar-link">
        Le concept
      </Link>
      <Link href="/tarifs" className="nav-bar-link">
        Les tarifs
      </Link>
      <Button variant="default" className="bg-orange-500 text-white hover:bg-orange-600">
        Vous êtes artisan ?
      </Button>
      <Button variant="ghost" size="icon" className="ml-2">
        <User className="h-5 w-5" />
        <span className="sr-only">User account</span>
      </Button>
    </>
  );
};
