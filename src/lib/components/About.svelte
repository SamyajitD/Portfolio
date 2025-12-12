<script>
  import { profile } from '../data/profile.js';
</script>

<section id="about" class="about">
  <div class="container">
    <h2 class="section-title">About Me</h2>
    
    <div class="about-content">
      <div class="about-text">
        <p>{profile.about}</p>
        
        <div class="about-details">
          <div class="detail-item">
            <span class="detail-icon">📍</span>
            <span>{profile.location}</span>
          </div>
          <div class="detail-item">
            <span class="detail-icon">📧</span>
            <a href="mailto:{profile.email}">{profile.email}</a>
          </div>
        </div>
      </div>
      
      <div class="about-highlights">
        <div class="highlight-card">
          <span class="highlight-icon">🎓</span>
          <h4>Education</h4>
          <p>B.Tech CS @ IIEST Shibpur</p>
          <span class="highlight-stat">CGPA 8.7</span>
        </div>
        
        <div class="highlight-card">
          <span class="highlight-icon">💼</span>
          <h4>Experience</h4>
          <p>Google SWE Intern</p>
          <span class="highlight-stat">Go + K8s</span>
        </div>
        
        <div class="highlight-card">
          <span class="highlight-icon">🏆</span>
          <h4>Achievements</h4>
          <p>Amazon ML Challenge</p>
          <span class="highlight-stat">2nd / 20K</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    background: var(--section-about);
    position: relative;
  }
  
  .about::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, var(--wood-dark), transparent);
    opacity: 0.05;
  }
  
  .about-content {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 4rem;
    align-items: start;
  }
  
  .about-text p {
    font-size: 1.1rem;
    color: var(--wood-medium);
    margin-bottom: 2rem;
    line-height: 1.9;
  }
  
  .about-details {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  .detail-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--wood-dark);
  }
  
  .detail-icon {
    font-size: 1.2rem;
  }
  
  .about-highlights {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .highlight-card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(62, 39, 35, 0.08);
    border-left: 4px solid var(--accent-amber);
    transition: var(--transition-smooth);
  }
  
  .highlight-card:hover {
    transform: translateX(8px);
    box-shadow: 0 8px 30px rgba(62, 39, 35, 0.12);
  }
  
  .highlight-icon {
    font-size: 1.5rem;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .highlight-card h4 {
    color: var(--wood-dark);
    margin-bottom: 0.25rem;
    font-size: 1rem;
  }
  
  .highlight-card p {
    color: var(--wood-light);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  
  .highlight-stat {
    display: inline-block;
    background: linear-gradient(135deg, var(--accent-amber), var(--accent-honey));
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    .about-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .about-highlights {
      flex-direction: row;
      overflow-x: auto;
      padding-bottom: 1rem;
    }
    
    .highlight-card {
      min-width: 200px;
      flex-shrink: 0;
    }
  }
</style>
