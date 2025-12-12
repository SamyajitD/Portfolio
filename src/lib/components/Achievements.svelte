<script>
    import { achievements } from "../data/profile.js";

    let expandedCategories = {
        hackathons: true,
        competitiveProgramming: true,
        contests: true,
    };

    function toggleCategory(category) {
        expandedCategories[category] = !expandedCategories[category];
    }

    // Platform logo mappings
    const platformLogos = {
        CodeChef: `<svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" class="codechef-logo"><path d="M11.2 0L2.47 5.2v10.4l8.73 5.2L20 15.6V5.2L11.2 0zm.53 3.17l5.87 3.5v7l-5.87 3.5-5.87-3.5v-7l5.87-3.5z"/><circle cx="11.73" cy="10.37" r="2.5"/></svg>`,
        Codeforces: `<svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" class="codeforces-logo"><path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/></svg>`,
        LeetCode: `<svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" class="leetcode-logo"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>`,
        "Amazon ML Challenge 2025": `<svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" class="amazon-logo"><path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.493.13.112.19.008.36-.308.52-.353.182-.882.424-1.587.725-2.545 1.083-5.243 1.625-8.095 1.625-4.507 0-8.667-1.2-12.479-3.596-.218-.138-.28-.29-.18-.457l-.117-.226zm-.03-.02zm6.69-3.12c-.201-.25-.394-.315-.573-.196-.18.12-.232.35-.155.69l.073.32c.206.9.31 1.49.31 1.77 0 .27-.067.48-.2.63-.134.15-.317.23-.55.23-.206 0-.53-.08-.97-.24l-.19-.08c-.18-.08-.33-.1-.45-.05-.11.05-.18.14-.2.27-.02.14.01.28.1.44.09.15.2.27.34.36.21.13.44.23.68.3.34.1.67.15.99.15.68 0 1.22-.19 1.62-.56.27-.25.45-.55.53-.9.08-.35.09-.76.02-1.23-.06-.47-.18-.98-.35-1.52l-.05-.15c-.06-.17-.14-.36-.24-.57-.1-.21-.18-.38-.26-.52l-.14-.26zm5.97 2.76c-.206 0-.372.077-.5.23-.126.153-.19.35-.19.59 0 .43.17.77.51 1.02.34.25.76.37 1.27.37.58 0 1.11-.13 1.6-.4.13-.07.22-.16.26-.27.05-.12.04-.24-.01-.36-.05-.12-.14-.2-.26-.23-.12-.03-.25 0-.4.09-.36.2-.73.3-1.11.3-.2 0-.37-.03-.5-.1-.14-.07-.25-.17-.34-.3-.09-.13-.13-.27-.13-.42 0-.148.05-.27.16-.368.11-.1.24-.14.4-.14.16 0 .32.04.47.11l.22.1c.08.04.15.05.22.04.07-.01.13-.05.18-.1.05-.06.07-.13.07-.21 0-.09-.03-.16-.09-.23-.06-.06-.14-.11-.24-.15-.34-.12-.67-.18-1-.18-.39 0-.72.08-1 .24-.27.16-.41.38-.41.66z"/><path d="M21.29 19.3c2.07-1.45 3.23-3.86 3.23-6.4 0-4.48-3.04-8.15-7.36-10.07-.22-.1-.45.063-.45.254 0 .11.06.21.17.26 4 1.87 6.42 5.28 6.42 9.56 0 2.47-1.1 4.8-3.03 6.38-.12.1-.14.27-.05.39.1.12.28.13.4.04z"/></svg>`,
    };

    function getPlatformLogo(platform) {
        return platformLogos[platform] || null;
    }
</script>

<section id="achievements" class="achievements wood-grain">
    <div class="container">
        <h2 class="section-title">Achievements</h2>

        <div class="achievements-grid">
            <!-- Hackathons -->
            <div class="achievement-category">
                <button
                    class="category-header"
                    on:click={() => toggleCategory("hackathons")}
                    aria-expanded={expandedCategories.hackathons}
                >
                    <span class="category-icon">🏆</span>
                    <h3>Hackathons & Competitions</h3>
                    <span
                        class="toggle-icon"
                        class:expanded={expandedCategories.hackathons}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="24"
                            height="24"
                        >
                            <path
                                d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                            />
                        </svg>
                    </span>
                </button>

                {#if expandedCategories.hackathons}
                    <div class="category-content">
                        {#each achievements.hackathons as item}
                            <div class="achievement-item hackathon-item">
                                <span
                                    class="item-icon platform-icon amazon-icon"
                                >
                                    {#if item.title.includes("Amazon")}
                                        <img
                                            src="/amazon-icon.svg"
                                            alt="Amazon"
                                            class="platform-svg"
                                        />
                                    {:else}
                                        {item.icon}
                                    {/if}
                                </span>
                                <div class="item-content">
                                    <h4>{item.title}</h4>
                                    <p class="item-result">{item.result}</p>
                                    <p class="item-detail">{item.detail}</p>
                                </div>
                            </div>
                        {/each}

                        <div class="add-more">
                            <span>+ Add more achievements in profile.js</span>
                        </div>
                    </div>
                {/if}
            </div>

            <!-- Competitive Programming -->
            <div class="achievement-category">
                <button
                    class="category-header"
                    on:click={() => toggleCategory("competitiveProgramming")}
                    aria-expanded={expandedCategories.competitiveProgramming}
                >
                    <span class="category-icon">💻</span>
                    <h3>Competitive Programming</h3>
                    <span
                        class="toggle-icon"
                        class:expanded={expandedCategories.competitiveProgramming}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="24"
                            height="24"
                        >
                            <path
                                d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                            />
                        </svg>
                    </span>
                </button>

                {#if expandedCategories.competitiveProgramming}
                    <div class="category-content">
                        {#each achievements.competitiveProgramming as item}
                            <div class="achievement-item cp-item">
                                <span
                                    class="item-icon platform-icon {item.platform.toLowerCase()}-icon"
                                >
                                    {#if item.platform === "CodeChef"}
                                        <img
                                            src="/codechef.svg"
                                            alt="CodeChef"
                                            class="platform-svg"
                                        />
                                    {:else if item.platform === "Codeforces"}
                                        <img
                                            src="/codeforces.svg"
                                            alt="Codeforces"
                                            class="platform-svg"
                                        />
                                    {:else if item.platform === "LeetCode"}
                                        <img
                                            src="/leetcode.svg"
                                            alt="LeetCode"
                                            class="platform-svg"
                                        />
                                    {:else}
                                        {item.icon}
                                    {/if}
                                </span>
                                <div class="item-content">
                                    <div class="cp-header">
                                        <h4>{item.platform}</h4>
                                        <span class="cp-badge"
                                            >{item.achievement}</span
                                        >
                                    </div>
                                    <p class="item-detail">{item.detail}</p>
                                    <p class="item-highlight">
                                        ✨ {item.highlight}
                                    </p>
                                    {#if item.link}
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener"
                                            class="profile-link"
                                        >
                                            View Profile →
                                        </a>
                                    {/if}
                                </div>
                            </div>
                        {/each}
                    </div>
                {/if}
            </div>

            <!-- Contests -->
            <div class="achievement-category">
                <button
                    class="category-header"
                    on:click={() => toggleCategory("contests")}
                    aria-expanded={expandedCategories.contests}
                >
                    <span class="category-icon">🥇</span>
                    <h3>Coding Contests</h3>
                    <span
                        class="toggle-icon"
                        class:expanded={expandedCategories.contests}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="24"
                            height="24"
                        >
                            <path
                                d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                            />
                        </svg>
                    </span>
                </button>

                {#if expandedCategories.contests}
                    <div class="category-content">
                        {#each achievements.contests as item}
                            <div class="achievement-item">
                                <span class="item-icon">{item.icon}</span>
                                <div class="item-content">
                                    <h4>{item.title}</h4>
                                    <p class="item-result">{item.result}</p>
                                    <p class="item-detail">{item.detail}</p>
                                </div>
                            </div>
                        {/each}

                        <div class="add-more">
                            <span>+ Add more achievements in profile.js</span>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</section>

<style>
    .achievements {
        background: var(--section-achievements);
        color: var(--wood-cream);
    }

    .achievements .section-title {
        color: var(--wood-cream);
    }

    .achievements-grid {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 900px;
        margin: 0 auto;
    }

    .achievement-category {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        overflow: hidden;
        backdrop-filter: blur(10px);
    }

    .category-header {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem;
        background: transparent;
        border: none;
        color: var(--wood-cream);
        cursor: pointer;
        text-align: left;
        transition: var(--transition-smooth);
    }

    .category-header:hover {
        background: rgba(255, 255, 255, 0.05);
    }

    .category-icon {
        font-size: 1.5rem;
    }

    .category-header h3 {
        flex: 1;
        font-size: 1.2rem;
        color: var(--accent-gold);
    }

    .toggle-icon {
        color: var(--wood-lighter);
        transition: transform 0.3s ease;
    }

    .toggle-icon.expanded {
        transform: rotate(180deg);
    }

    .category-content {
        padding: 0 1.5rem 1.5rem;
        animation: slideDown 0.3s ease;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .achievement-item {
        display: flex;
        gap: 1rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 12px;
        margin-bottom: 1rem;
        transition: var(--transition-smooth);
    }

    .achievement-item:hover {
        background: rgba(255, 255, 255, 0.08);
        transform: translateX(4px);
    }

    .item-icon {
        font-size: 1.5rem;
        flex-shrink: 0;
    }

    .platform-icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
    }

    .platform-svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .codechef-icon {
        background: linear-gradient(135deg, #5b4638, #8b6914);
        color: white;
    }

    .codeforces-icon {
        background: linear-gradient(135deg, #1f8acb, #ff4500);
        color: white;
    }

    .leetcode-icon {
        background: linear-gradient(135deg, #ffa116, #b3b3b3);
        color: #1a1a1a;
    }

    .amazon-icon {
        background: linear-gradient(135deg, #ff9900, #232f3e);
        color: white;
    }

    .item-content {
        flex: 1;
    }

    .item-content h4 {
        color: var(--wood-cream);
        font-size: 1rem;
        margin-bottom: 0.25rem;
    }

    .item-result {
        color: var(--accent-amber);
        font-weight: 600;
        font-size: 0.95rem;
        margin-bottom: 0.25rem;
    }

    .item-detail {
        color: var(--wood-lighter);
        font-size: 0.9rem;
        line-height: 1.5;
    }

    .cp-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 0.5rem;
        flex-wrap: wrap;
    }

    .cp-badge {
        background: linear-gradient(
            135deg,
            var(--accent-amber),
            var(--accent-gold)
        );
        color: var(--wood-darkest);
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .item-highlight {
        color: var(--accent-gold);
        font-size: 0.85rem;
        margin-top: 0.5rem;
    }

    .profile-link {
        display: inline-block;
        color: var(--accent-amber);
        font-size: 0.85rem;
        margin-top: 0.5rem;
        font-weight: 500;
    }

    .profile-link:hover {
        color: var(--accent-gold);
    }

    .add-more {
        padding: 1rem;
        text-align: center;
        color: var(--wood-lighter);
        font-size: 0.85rem;
        font-style: italic;
        opacity: 0.6;
    }

    @media (max-width: 768px) {
        .category-header {
            padding: 1rem;
        }

        .category-header h3 {
            font-size: 1rem;
        }

        .achievement-item {
            flex-direction: column;
            gap: 0.5rem;
        }
    }
</style>
