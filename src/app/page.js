import Hero from "@/components/pages/home/hero";
import NewArivals from "@/components/pages/home/newArrivals";
import ThirdHero from "@/components/pages/home/thirdHero";
import Catalog from "@/components/pages/home/catalog";
import About from "@/components/pages/home/about";
import Collections from "@/components/pages/home/collections";
import Socials from "@/components/pages/home/socials";
export default function Home() {
    return (
        <main className="">
            <Hero />
            <NewArivals />
            <ThirdHero />
            <Catalog />
            <About />
            <Collections />
            <Socials />
        </main>
    );
}
