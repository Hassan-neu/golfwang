import Hero from "@/components/pages/home/hero";
import NewArrivals from "@/components/pages/home/newArrivals";
import ThirdHero from "@/components/pages/home/thirdHero";
import Catalog from "@/components/pages/home/catalog";
import About from "@/components/pages/home/about";
import Collections from "@/components/pages/home/collections";
import Socials from "@/components/pages/home/socials";
import { Suspense } from "react";
import { ArrivalsLoading } from "@/components/pages/home/newArrivals";
export default function Home() {
    return (
        <main className="">
            <Hero />
            <Suspense fallback={<ArrivalsLoading />}>
                <NewArrivals />
            </Suspense>
            <ThirdHero />
            <Catalog />
            <About />
            <Collections />
            <Socials />
        </main>
    );
}
