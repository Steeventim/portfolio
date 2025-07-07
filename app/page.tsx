import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { About } from "./_components/About";
import { Projects } from "./_components/Projects";
import { Status } from "./_components/Status";
import { Skills } from "./_components/Skills";
import { Footer } from "./_components/Footer";
import { ScrollToTop } from "./_components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <Spacing size="md" />
      <Hero />

      <Spacing size="lg" />
      <About />

      <Spacing size="lg" />
      <Projects />

      <Spacing size="lg" />
      <Skills />

      <Spacing size="lg" />
      <Status />

      <Spacing size="lg" />
      <Footer />
      
      <ScrollToTop />
    </main>
  );
}
