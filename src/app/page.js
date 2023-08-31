import Navbar from "@/components/navbar";
import Hero from "@/components/home/hero";
import NewArivals from "@/components/home/newArrivals";
import ThirdHero from "@/components/home/thirdHero";
import Footer from "@/components/footer";
import Catalog from "@/components/home/catalog";
import About from "@/components/home/about";
import Collections from "@/components/home/collections";
import Socials from "@/components/home/socials";
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
