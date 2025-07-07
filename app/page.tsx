import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { TableOfContents } from "./_components/TableOfContents";
import { About } from "./_components/About";
import { Projects } from "./_components/Projects";
import { Status } from "./_components/Status";
import { Skills } from "./_components/Skills";
import { Testimonials } from "./_components/Testimonials";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { ScrollToTop } from "./_components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Page de couverture avec nom, titre, coordonnées */}
      <section id="hero">
        <Spacing size="md" />
        <Hero />
      </section>

      {/* Table des matières pour faciliter la navigation */}
      <section id="navigation">
        <Spacing size="lg" />
        <TableOfContents />
      </section>

      {/* À propos / Biographie avec parcours et compétences clés */}
      <section id="about">
        <Spacing size="lg" />
        <About />
      </section>

      {/* Réalisations/Projets avec descriptions détaillées et résultats */}
      <section id="projects">
        <Spacing size="lg" />
        <Projects />
      </section>

      {/* Compétences techniques et transversales */}
      <section id="skills">
        <Spacing size="lg" />
        <Skills />
      </section>

      {/* Statut de disponibilité */}
      <section id="status">
        <Spacing size="lg" />
        <Status />
      </section>

      {/* Recommandations, témoignages et diplômes & certificats */}
      <section id="testimonials">
        <Spacing size="lg" />
        <Testimonials />
      </section>

      {/* Page de contact avec email, téléphone, liens professionnels */}
      <section id="contact">
        <Spacing size="lg" />
        <Contact />
      </section>

      <Spacing size="lg" />
      <Footer />

      <ScrollToTop />
    </main>
  );
}
