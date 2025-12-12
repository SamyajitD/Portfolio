<script>
    import { projects } from "../data/profile.js";
</script>

<section id="projects" class="projects">
    <div class="container">
        <h2 class="section-title">Featured Projects</h2>

        <div class="projects-grid">
            {#each projects as project}
                <article class="project-card">
                    <div class="project-header">
                        <div class="project-icon">🚀</div>
                        <div class="project-links">
                            {#if project.github}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="GitHub"
                                    class="project-link"
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
                            {/if}
                            {#if project.live}
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="Live Demo"
                                    class="project-link"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        width="20"
                                        height="20"
                                    >
                                        <path
                                            d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                                        />
                                    </svg>
                                </a>
                            {/if}
                        </div>
                    </div>

                    <h3 class="project-title">{project.title}</h3>
                    <p class="project-subtitle">{project.subtitle}</p>

                    <p class="project-description">{project.description}</p>

                    <ul class="project-highlights">
                        {#each project.highlights as highlight}
                            <li>{highlight}</li>
                        {/each}
                    </ul>

                    <div class="project-tech">
                        {#each project.tech as tech}
                            <span class="tech-tag">{tech}</span>
                        {/each}
                    </div>
                </article>
            {/each}

            <!-- Placeholder for more projects -->
            <div class="project-placeholder">
                <div class="placeholder-icon">➕</div>
                <p>More projects coming soon...</p>
            </div>
        </div>
    </div>
</section>

<style>
    .projects {
        background: var(--section-projects);
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
    }

    .project-card {
        background: white;
        border-radius: 16px;
        padding: 2rem;
        box-shadow: 0 4px 20px rgba(62, 39, 35, 0.08);
        transition: var(--transition-smooth);
        display: flex;
        flex-direction: column;
    }

    .project-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 40px rgba(62, 39, 35, 0.15);
    }

    .project-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1.5rem;
    }

    .project-icon {
        font-size: 2.5rem;
    }

    .project-links {
        display: flex;
        gap: 0.75rem;
    }

    .project-link {
        color: var(--wood-light);
        padding: 0.5rem;
        border-radius: 8px;
        transition: var(--transition-smooth);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .project-link:hover {
        color: var(--accent-amber);
        background: var(--wood-cream);
    }

    .project-title {
        color: var(--wood-dark);
        font-size: 1.4rem;
        margin-bottom: 0.25rem;
    }

    .project-subtitle {
        color: var(--wood-light);
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    .project-description {
        color: var(--wood-medium);
        font-size: 0.95rem;
        line-height: 1.7;
        margin-bottom: 1.5rem;
    }

    .project-highlights {
        list-style: none;
        padding: 0;
        margin-bottom: 1.5rem;
        flex: 1;
    }

    .project-highlights li {
        position: relative;
        padding-left: 1.25rem;
        margin-bottom: 0.5rem;
        color: var(--wood-medium);
        font-size: 0.9rem;
        line-height: 1.6;
    }

    .project-highlights li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: var(--accent-amber);
        font-weight: bold;
    }

    .project-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: auto;
    }

    .tech-tag {
        background: var(--wood-cream);
        color: var(--wood-dark);
        padding: 0.3rem 0.75rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 500;
    }

    .project-placeholder {
        background: var(--wood-cream);
        border: 2px dashed var(--wood-grain);
        border-radius: 16px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        min-height: 300px;
        color: var(--wood-light);
    }

    .placeholder-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        opacity: 0.5;
    }

    @media (max-width: 768px) {
        .projects-grid {
            grid-template-columns: 1fr;
        }

        .project-card {
            padding: 1.5rem;
        }
    }
</style>
