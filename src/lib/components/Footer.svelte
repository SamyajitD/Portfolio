<script>
    import { profile } from "../data/profile.js";

    const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-brand">
                <a href="#hero" class="footer-logo">
                    <span>{profile.name.split(" ")[0]}</span>
                    <span class="dot">.</span>
                </a>
                <p>{profile.title}</p>
            </div>

            <div class="footer-links">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#achievements">Achievements</a>
                <a href="#contact">Contact</a>
            </div>

            <div class="footer-socials">
                <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener"
                    aria-label="GitHub"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                    >
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
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                    >
                        <path
                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                        />
                    </svg>
                </a>
                <a href="mailto:{profile.email}" aria-label="Email">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                    >
                        <path
                            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                        />
                    </svg>
                </a>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; {currentYear} {profile.name}. Built with Svelte & ☕</p>
            <p class="wood-credit">Crafted with a wood-inspired theme</p>
        </div>
    </div>
</footer>

<style>
    .footer {
        background: var(--wood-darkest);
        color: var(--wood-lighter);
        padding: 3rem 0 1.5rem;
    }

    .footer-content {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        gap: 2rem;
        align-items: start;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 1.5rem;
    }

    .footer-logo {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--wood-cream);
        text-decoration: none;
    }

    .footer-logo .dot {
        color: var(--accent-amber);
    }

    .footer-brand p {
        font-size: 0.9rem;
        color: var(--wood-light);
        margin-top: 0.5rem;
    }

    .footer-links {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        justify-content: center;
    }

    .footer-links a {
        color: var(--wood-lighter);
        font-size: 0.9rem;
        transition: var(--transition-smooth);
    }

    .footer-links a:hover {
        color: var(--accent-amber);
    }

    .footer-socials {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
    }

    .footer-socials a {
        color: var(--wood-lighter);
        padding: 0.5rem;
        border-radius: 8px;
        transition: var(--transition-smooth);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer-socials a:hover {
        color: var(--accent-amber);
        background: rgba(255, 255, 255, 0.05);
    }

    .footer-bottom {
        text-align: center;
    }

    .footer-bottom p {
        font-size: 0.85rem;
        color: var(--wood-light);
        margin-bottom: 0.25rem;
    }

    .wood-credit {
        font-size: 0.8rem;
        opacity: 0.7;
    }

    @media (max-width: 768px) {
        .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 1.5rem;
        }

        .footer-links {
            gap: 1rem;
        }

        .footer-socials {
            justify-content: center;
        }
    }
</style>
