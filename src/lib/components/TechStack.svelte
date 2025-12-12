<script>
    import { techStack } from "../data/profile.js";
    import { onMount } from "svelte";

    let icons = [];

    // DevIcon CDN base URL
    const iconBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

    // Map tech names to devicon names
    const iconMap = {
        java: "java/java-original",
        javascript: "javascript/javascript-original",
        python: "python/python-original",
        go: "go/go-original-wordmark",
        cplusplus: "cplusplus/cplusplus-original",
        c: "c/c-original",
        mysql: "mysql/mysql-original",
        git: "git/git-original",
        spring: "spring/spring-original",
        tailwindcss: "tailwindcss/tailwindcss-original",
        nodejs: "nodejs/nodejs-original",
        mongodb: "mongodb/mongodb-original",
        prometheus: "prometheus/prometheus-original",
        kubernetes: "kubernetes/kubernetes-plain",
        docker: "docker/docker-original",
    };

    onMount(() => {
        // Combine all tech with random positions
        const allTech = [
            ...techStack.languages.map((t) => ({ ...t, category: "language" })),
            ...techStack.technologies.map((t) => ({ ...t, category: "tech" })),
        ];

        icons = allTech.map((tech, i) => ({
            ...tech,
            x: 10 + (i % 5) * 18 + Math.random() * 8,
            y: 10 + Math.floor(i / 5) * 25 + Math.random() * 10,
            delay: Math.random() * 5,
            duration: 3 + Math.random() * 2,
        }));
    });

    function getIconUrl(iconName) {
        const path = iconMap[iconName];
        if (path) {
            return `${iconBaseUrl}/${path}.svg`;
        }
        return null;
    }
</script>

<section id="skills" class="tech-stack wood-grain">
    <div class="container">
        <h2 class="section-title">Tech Stack</h2>

        <div class="floating-icons">
            {#each icons as icon}
                <div
                    class="floating-icon"
                    style="
            left: {icon.x}%;
            top: {icon.y}%;
            animation-delay: -{icon.delay}s;
            animation-duration: {icon.duration}s;
          "
                >
                    {#if getIconUrl(icon.icon)}
                        <img
                            src={getIconUrl(icon.icon)}
                            alt={icon.name}
                            class="icon-img"
                        />
                    {:else}
                        <span class="icon-fallback"
                            >{icon.name.slice(0, 2)}</span
                        >
                    {/if}
                    <span class="icon-tooltip">{icon.name}</span>
                </div>
            {/each}
        </div>

        <div class="tech-categories">
            <div class="tech-category">
                <h3>Languages</h3>
                <div class="tech-list">
                    {#each techStack.languages as lang}
                        <div class="tech-chip">
                            {#if getIconUrl(lang.icon)}
                                <img
                                    src={getIconUrl(lang.icon)}
                                    alt=""
                                    class="chip-icon"
                                />
                            {/if}
                            <span>{lang.name}</span>
                        </div>
                    {/each}
                </div>
            </div>

            <div class="tech-category">
                <h3>Technologies</h3>
                <div class="tech-list">
                    {#each techStack.technologies as tech}
                        <div class="tech-chip">
                            {#if getIconUrl(tech.icon)}
                                <img
                                    src={getIconUrl(tech.icon)}
                                    alt=""
                                    class="chip-icon"
                                />
                            {/if}
                            <span>{tech.name}</span>
                        </div>
                    {/each}
                </div>
            </div>

            <div class="tech-category">
                <h3>Coursework</h3>
                <div class="tech-list">
                    {#each techStack.coursework as course}
                        <div class="tech-chip course-chip">
                            <span>📚</span>
                            <span>{course}</span>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .tech-stack {
        background: var(--section-tech);
        color: var(--wood-cream);
        position: relative;
        overflow: hidden;
        min-height: 600px;
    }

    .tech-stack .section-title {
        color: var(--wood-cream);
    }

    .floating-icons {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        opacity: 0.15;
    }

    .floating-icon {
        position: absolute;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: float 4s ease-in-out infinite;
        pointer-events: auto;
        cursor: pointer;
    }

    .icon-img {
        width: 40px;
        height: 40px;
        filter: brightness(0) invert(1);
        transition: var(--transition-smooth);
    }

    .icon-fallback {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--wood-cream);
        background: rgba(255, 255, 255, 0.1);
        padding: 0.5rem;
        border-radius: 8px;
    }

    .icon-tooltip {
        position: absolute;
        bottom: -25px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--wood-dark);
        color: var(--accent-gold);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.7rem;
        white-space: nowrap;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }

    .floating-icon:hover .icon-tooltip {
        opacity: 1;
    }

    .floating-icon:hover .icon-img {
        transform: scale(1.3);
        filter: brightness(1) invert(0);
    }

    @keyframes float {
        0%,
        100% {
            transform: translateY(0) rotate(0deg);
        }
        50% {
            transform: translateY(-15px) rotate(5deg);
        }
    }

    .tech-categories {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }

    .tech-category {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 1.5rem;
        backdrop-filter: blur(10px);
    }

    .tech-category h3 {
        color: var(--accent-gold);
        font-size: 1.1rem;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
    }

    .tech-chip {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: rgba(255, 255, 255, 0.1);
        padding: 0.5rem 1rem;
        border-radius: 25px;
        font-size: 0.9rem;
        transition: var(--transition-smooth);
        cursor: default;
    }

    .tech-chip:hover {
        background: rgba(255, 143, 0, 0.2);
        transform: translateY(-2px);
    }

    .chip-icon {
        width: 20px;
        height: 20px;
    }

    .course-chip {
        background: rgba(255, 213, 79, 0.1);
    }

    @media (max-width: 768px) {
        .floating-icons {
            display: none;
        }

        .tech-categories {
            grid-template-columns: 1fr;
        }
    }
</style>
