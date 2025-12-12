<script>
  import Header from "./lib/components/Header.svelte";
  import Hero from "./lib/components/Hero.svelte";
  import About from "./lib/components/About.svelte";
  import Education from "./lib/components/Education.svelte";
  import Experience from "./lib/components/Experience.svelte";
  import Projects from "./lib/components/Projects.svelte";
  import TechStack from "./lib/components/TechStack.svelte";
  import Achievements from "./lib/components/Achievements.svelte";
  import Organizations from "./lib/components/Organizations.svelte";
  import Contact from "./lib/components/Contact.svelte";
  import Footer from "./lib/components/Footer.svelte";
</script>

<Header />

<main>
  <Hero />
  <About />
  <Education />
  <Experience />
  <Projects />
  <TechStack />
  <Achievements />
  <Organizations />
  <Contact />
</main>

<Footer />

<style>
  main {
    overflow-x: hidden;
  }
</style>
