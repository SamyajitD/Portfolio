<script>
    import { experience } from "../data/profile.js";
</script>

<section id="experience" class="experience wood-grain">
    <div class="container">
        <h2 class="section-title">Work Experience</h2>

        <div class="experience-list">
            {#each experience as exp}
                <div class="experience-card">
                    <div class="exp-header">
                        <div class="exp-company-info">
                            <div class="company-title-row">
                                {#if exp.company === "Google"}
                                    <span class="company-logo google-logo">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            width="32"
                                            height="32"
                                        >
                                            <path
                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                fill="#4285F4"
                                            />
                                            <path
                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                fill="#34A853"
                                            />
                                            <path
                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                fill="#FBBC05"
                                            />
                                            <path
                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                fill="#EA4335"
                                            />
                                        </svg>
                                    </span>
                                {:else}
                                    <span class="company-logo default-logo">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            width="28"
                                            height="28"
                                        >
                                            <path
                                                d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"
                                            />
                                        </svg>
                                    </span>
                                {/if}
                                <h3 class="exp-company">{exp.company}</h3>
                            </div>
                            <p class="exp-role">{exp.role}</p>
                        </div>
                        <div class="exp-meta">
                            <span class="exp-duration">{exp.duration}</span>
                            <span class="exp-location">📍 {exp.location}</span>
                        </div>
                    </div>

                    <ul class="exp-highlights">
                        {#each exp.highlights as highlight}
                            <li>{highlight}</li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .experience {
        background: var(--section-experience);
        color: var(--wood-cream);
    }

    .experience .section-title {
        color: var(--wood-cream);
    }

    .experience-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 900px;
        margin: 0 auto;
    }

    .experience-card {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 2rem;
        backdrop-filter: blur(10px);
        transition: var(--transition-smooth);
    }

    .experience-card:hover {
        background: rgba(255, 255, 255, 0.08);
        transform: translateY(-4px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }

    .exp-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .exp-company {
        font-size: 1.5rem;
        color: var(--accent-gold);
        margin-bottom: 0.25rem;
    }

    .company-title-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .company-logo {
        width: 42px;
        height: 42px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .google-logo {
        background: white;
        padding: 6px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    .default-logo {
        background: linear-gradient(
            135deg,
            var(--accent-amber),
            var(--accent-gold)
        );
        color: var(--wood-darkest);
        padding: 6px;
    }

    .exp-role {
        color: var(--wood-cream);
        font-size: 1.1rem;
        font-weight: 500;
    }

    .exp-meta {
        text-align: right;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .exp-duration {
        color: var(--accent-amber);
        font-weight: 600;
        font-size: 0.95rem;
    }

    .exp-location {
        color: var(--wood-lighter);
        font-size: 0.9rem;
    }

    .exp-highlights {
        list-style: none;
        padding: 0;
    }

    .exp-highlights li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 1rem;
        color: var(--wood-grain);
        line-height: 1.7;
        font-size: 0.95rem;
    }

    .exp-highlights li::before {
        content: "▸";
        position: absolute;
        left: 0;
        color: var(--accent-amber);
        font-size: 1rem;
    }

    .exp-highlights li:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        .experience-card {
            padding: 1.5rem;
        }

        .exp-header {
            flex-direction: column;
        }

        .exp-meta {
            text-align: left;
            flex-direction: row;
            gap: 1rem;
        }
    }
</style>
