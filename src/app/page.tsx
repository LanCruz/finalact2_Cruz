"use client";

import { Logo } from "~/components/pro-blocks/logo";
import { Button } from "~/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Tagline } from "~/components/pro-blocks/landing-page/tagline";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import Image from "next/image";

const MENU_ITEMS = [
  { label: "Products", href: "#" },
  { label: "Use cases", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "FAQ", href: "#" },
] as const;

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href}>
        <Button variant="ghost" className="w-full md:w-auto">
          {label}
        </Button>
      </Link>
    ))}
  </div>
);

function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-background sticky top-0 isolate z-50 py-3.5 md:py-4">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Go to homepage">
            <Logo className="size-7" />
          </Link>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-5 md:flex">
          <NavMenuItems />
          <Link href="#">
            <Button>Get started</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <NavMenuItems />
            <Link href="#">
              <Button className="w-full">Get started</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
function HeaderSection1() {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="page-heading"
    >
      <div className="container-padding-x container mx-auto">
        <div className="section-title-gap-xl mx-auto flex max-w-xl flex-1 flex-col items-center text-center">
          <div className="section-title-gap-xl flex flex-col items-center">
            <Tagline>Counter-Strike</Tagline>
            <h1 id="page-heading" className="heading-xl text-foreground">
              Headline
            </h1>
            <p
              className="text-muted-foreground text-base lg:text-lg"
              aria-description="page description"
            >
              CHRISTIAN APARIS CHAMPION
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function HeroSection1() {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* Tagline */}
            <Tagline>Champion Section</Tagline>
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl">
              Learn to be Champ?
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              Start your journer today and take the steps that turn beginners
              into champions. Stay focused, stay driven, and become the best
              version of yourself.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Get started</Button>
            <Button variant="ghost">
              Explore
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/aparis.PNG"
              alt="Hero section visual"
              fill
              priority
              className="h-full w-full rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}


export default function HomePage(){
  return(
    <div>
      <LpNavbar1 />
      <HeaderSection1 />
      <HeroSection1 />
    </div>
  );
}