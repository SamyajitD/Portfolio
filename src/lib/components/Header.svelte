<script>
  import { profile } from "../data/profile.js";

  let scrolled = false;
  let mobileMenuOpen = false;

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  function handleScroll() {
    scrolled = window.scrollY > 50;
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<header class:scrolled>
  <nav class="container">
    <a href="#hero" class="logo" on:click={closeMobileMenu}>
      <span class="logo-text">{profile.name.split(" ")[0]}</span>
      <span class="logo-dot">.</span>
    </a>

    <button
      class="mobile-toggle"
      on:click={toggleMobileMenu}
      aria-label="Toggle menu"
    >
      <span class:open={mobileMenuOpen}></span>
    </button>

    <ul class="nav-links" class:open={mobileMenuOpen}>
      {#each navItems as item}
        <li>
          <a href={item.href} on:click={closeMobileMenu}>{item.label}</a>
        </li>
      {/each}
      <li>
        <a
          href="https://drive.google.com/file/d/15p1OwORAlXhdVLf9rv_NVSVqVwrSftN9/view?usp=drive_link"
          target="_blank"
          rel="noopener"
          class="btn btn-primary"
        >
          Resume
        </a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1rem 0;
    transition: var(--transition-smooth);
    background: transparent;
  }

  header.scrolled {
    background: rgba(62, 39, 35, 0.95);
    backdrop-filter: blur(10px);
    padding: 0.75rem 0;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--wood-cream);
    text-decoration: none;
  }

  .logo-dot {
    color: var(--accent-amber);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
  }

  .nav-links a:not(.btn) {
    color: var(--wood-cream);
    font-weight: 500;
    font-size: 0.9rem;
    position: relative;
    padding: 0.25rem 0;
  }

  .nav-links a:not(.btn)::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-amber);
    transition: width 0.3s ease;
  }

  .nav-links a:not(.btn):hover::after {
    width: 100%;
  }

  .mobile-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 1001;
  }

  .mobile-toggle span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--wood-cream);
    position: relative;
    transition: var(--transition-smooth);
  }

  .mobile-toggle span::before,
  .mobile-toggle span::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 2px;
    background: var(--wood-cream);
    transition: var(--transition-smooth);
  }

  .mobile-toggle span::before {
    top: -7px;
  }

  .mobile-toggle span::after {
    top: 7px;
  }

  .mobile-toggle span.open {
    background: transparent;
  }

  .mobile-toggle span.open::before {
    transform: rotate(45deg);
    top: 0;
  }

  .mobile-toggle span.open::after {
    transform: rotate(-45deg);
    top: 0;
  }

  @media (max-width: 768px) {
    .mobile-toggle {
      display: block;
    }

    .nav-links {
      position: fixed;
      top: 0;
      right: -100%;
      width: 70%;
      max-width: 300px;
      height: 100vh;
      background: var(--wood-dark);
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      transition: right 0.3s ease;
      box-shadow: -5px 0 30px rgba(0, 0, 0, 0.3);
    }

    .nav-links.open {
      right: 0;
    }
  }
</style>
