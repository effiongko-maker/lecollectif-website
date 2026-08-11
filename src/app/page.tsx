import { HomeHero } from "@/components/sections/HomeHero";
import { HomeIntro } from "@/components/sections/HomeIntro";
import { HomeSpaces } from "@/components/sections/HomeSpaces";
import { HomeCafe } from "@/components/sections/HomeCafe";
import { HomeEvents } from "@/components/sections/HomeEvents";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeSpaces />
      <HomeCafe />
      <HomeEvents />
    </>
  );
}
