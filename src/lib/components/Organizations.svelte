<script>
    import { organizations } from "../data/profile.js";
</script>

<section id="organizations" class="organizations">
    <div class="container">
        <h2 class="section-title">Organizations</h2>

        <div class="org-list">
            {#each organizations as org}
                <div class="org-card card">
                    <div class="org-icon">🏛️</div>
                    <div class="org-content">
                        <h3>{org.name}</h3>
                        <span class="org-role">{org.role}</span>
                        <p>{org.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .organizations {
        background: var(--wood-cream);
    }

    .org-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        max-width: 800px;
        margin: 0 auto;
    }

    .org-card {
        display: flex;
        gap: 1.5rem;
        padding: 2rem;
        background: white;
        border-left: 4px solid var(--accent-amber);
    }

    .org-icon {
        font-size: 2.5rem;
        flex-shrink: 0;
    }

    .org-content h3 {
        color: var(--wood-dark);
        font-size: 1.1rem;
        margin-bottom: 0.25rem;
    }

    .org-role {
        display: inline-block;
        color: var(--accent-amber);
        font-weight: 600;
        font-size: 0.9rem;
        margin-bottom: 0.75rem;
    }

    .org-content p {
        color: var(--wood-medium);
        font-size: 0.95rem;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        .org-card {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }
    }
</style>
