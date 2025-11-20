"use client";

import { Tagline } from "~/components/pro-blocks/landing-page/tagline";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import Image from "next/image";

export function HeroSection1() {
  return (
    <section className="bg-background section-padding-y" aria-labelledby="hero-heading">
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          <div className="section-title-gap-xl flex flex-col">
            <Tagline>Champion Section</Tagline>
            <h1 id="hero-heading" className="heading-xl">
              Learn to be Champ?
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg">
              Start your journey today and take the steps that turn beginners into champions. Stay focused, stay driven, and become the best version of yourself.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Get started</Button>
            <Button variant="ghost">
              Explore
              <ArrowRight />
            </Button>
          </div>
        </div>

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
