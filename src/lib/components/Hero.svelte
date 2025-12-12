<script>
  import { profile } from "../data/profile.js";
</script>

<section id="hero" class="hero wood-grain">
  <div class="hero-content container">
    <div class="hero-text">
      <p class="greeting">Hello, I'm</p>
      <h1 class="name">{profile.name}</h1>
      <h2 class="title">{profile.title}</h2>
      <p class="tagline">{profile.tagline}</p>

      <div class="hero-cta">
        <a href="#projects" class="btn btn-primary">View My Work</a>
        <a href="#contact" class="btn btn-secondary">Get In Touch</a>
      </div>

      <div class="hero-socials">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>
        <a href="mailto:{profile.email}" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
        </a>
      </div>
    </div>

    <div class="hero-decoration">
      <div class="wood-ring ring-1"></div>
      <div class="wood-ring ring-2"></div>
      <div class="wood-ring ring-3"></div>
      <div class="profile-photo">
        <img src="/profile.png" alt={profile.name} />
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: var(--section-hero);
    position: relative;
    overflow: hidden;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    padding-top: 4rem;
  }

  .hero-text {
    color: var(--wood-cream);
  }

  .greeting {
    font-size: 1.1rem;
    color: var(--accent-gold);
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .name {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, var(--wood-cream), var(--accent-gold));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .title {
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
    color: var(--wood-lighter);
    font-weight: 400;
    margin-bottom: 1rem;
  }

  .tagline {
    font-size: 1.1rem;
    color: var(--wood-grain);
    margin-bottom: 2rem;
    max-width: 500px;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .hero-socials {
    display: flex;
    gap: 1.5rem;
  }

  .hero-socials a {
    color: var(--wood-lighter);
    transition: var(--transition-smooth);
  }

  .hero-socials a:hover {
    color: var(--accent-amber);
    transform: translateY(-3px);
  }

  .hero-decoration {
    position: relative;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wood-ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid rgba(255, 213, 79, 0.2);
    animation: pulse 4s ease-in-out infinite;
  }

  .ring-1 {
    width: 200px;
    height: 200px;
    animation-delay: 0s;
  }

  .ring-2 {
    width: 300px;
    height: 300px;
    animation-delay: 1s;
  }

  .ring-3 {
    width: 400px;
    height: 400px;
    animation-delay: 2s;
  }

  .profile-photo {
    position: absolute;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid rgba(255, 213, 79, 0.4);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      0 0 0 8px rgba(255, 213, 79, 0.1);
    z-index: 10;
    animation: photoFloat 6s ease-in-out infinite;
  }

  .profile-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .profile-photo:hover img {
    transform: scale(1.05);
  }

  @keyframes photoFloat {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.05);
    }
  }

  @keyframes scroll {
    0% {
      opacity: 1;
      transform: scaleY(0);
      transform-origin: top;
    }
    50% {
      transform: scaleY(1);
      transform-origin: top;
    }
    51% {
      transform-origin: bottom;
    }
    100% {
      opacity: 0;
      transform: scaleY(0);
      transform-origin: bottom;
    }
  }

  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .hero-text {
      order: 2;
    }

    .tagline {
      margin-left: auto;
      margin-right: auto;
    }

    .hero-cta,
    .hero-socials {
      justify-content: center;
    }

    .hero-decoration {
      order: 1;
      height: 200px;
    }

    .ring-1 {
      width: 100px;
      height: 100px;
    }
    .ring-2 {
      width: 150px;
      height: 150px;
    }
    .ring-3 {
      width: 200px;
      height: 200px;
    }

    .profile-photo {
      width: 80px;
      height: 80px;
      border-width: 3px;
    }
  }
</style>
