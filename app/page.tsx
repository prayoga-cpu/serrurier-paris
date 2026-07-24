import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import MobileCallBar from "@/components/MobileCallBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-20 lg:pb-0">
        <Hero />
        <TrustStrip />
      </main>
      <MobileCallBar />
    </>
  );
}
