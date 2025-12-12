<script>
    import { education } from "../data/profile.js";
</script>

<section id="education" class="education">
    <div class="container">
        <h2 class="section-title">Education</h2>

        <div class="education-timeline">
            {#each education as edu, index}
                <div class="education-item">
                    <div class="timeline-marker">
                        <div class="marker-dot"></div>
                        {#if index < education.length - 1}
                            <div class="marker-line"></div>
                        {/if}
                    </div>

                    <div class="education-card card">
                        <div class="edu-header">
                            <h3>{edu.institution}</h3>
                            <span class="edu-duration">{edu.duration}</span>
                        </div>
                        <p class="edu-degree">{edu.degree}</p>
                        <div class="edu-footer">
                            <span class="edu-location">📍 {edu.location}</span>
                            <span class="edu-score">{edu.score}</span>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .education {
        background: var(--wood-cream);
    }

    .education-timeline {
        max-width: 800px;
        margin: 0 auto;
    }

    .education-item {
        display: flex;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .timeline-marker {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
    }

    .marker-dot {
        width: 16px;
        height: 16px;
        background: linear-gradient(
            135deg,
            var(--accent-amber),
            var(--accent-honey)
        );
        border-radius: 50%;
        box-shadow:
            0 0 0 4px var(--wood-cream),
            0 0 0 6px var(--accent-amber);
    }

    .marker-line {
        width: 2px;
        flex: 1;
        background: linear-gradient(
            to bottom,
            var(--accent-amber),
            var(--wood-grain)
        );
        margin-top: 0.5rem;
    }

    .education-card {
        flex: 1;
        background: white;
    }

    .edu-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 0.5rem;
        flex-wrap: wrap;
    }

    .edu-header h3 {
        color: var(--wood-dark);
        font-size: 1.1rem;
    }

    .edu-duration {
        color: var(--accent-amber);
        font-size: 0.9rem;
        font-weight: 500;
        white-space: nowrap;
    }

    .edu-degree {
        color: var(--wood-medium);
        margin-bottom: 1rem;
        font-size: 0.95rem;
    }

    .edu-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .edu-location {
        color: var(--wood-light);
        font-size: 0.85rem;
    }

    .edu-score {
        background: var(--wood-grain);
        color: var(--wood-dark);
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        .education-item {
            gap: 1rem;
        }

        .edu-header {
            flex-direction: column;
        }
    }
</style>
