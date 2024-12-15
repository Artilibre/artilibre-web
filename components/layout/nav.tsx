"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

// @private
export const Nav = () => {
  return (
    <>
      <Link href="/artisans" className="nav-link">
        Les artisans
      </Link>
      <Link href="/concept" className="nav-link">
        Le concept
      </Link>
      <Link href="/tarifs" className="nav-link">
        Les tarifs
      </Link>
      <Button variant="default">Vous êtes artisan ?</Button>
      <Button variant="ghost" size="icon" className="ml-2">
        <User className="h-5 w-5" />
        <span className="sr-only">User account</span>
      </Button>
    </>
  );
};
