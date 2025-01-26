<script>
  const projects = [
    {
      title: "Modern Dashboard",
      media: "/shots/1.mp4",
      type: "video",
      url: "https://acetechautomation.com",
      tags: ["Webdesign"]
    },
    {
      title: "Illustration Series",
      media: "/shots/2.mp4",
      type: "video",
      url: "https://acetechsafety.in",
      tags: ["Ecommerce"]
    },
    {
      title: "Mobile App UI",
      media: "/shots/3.mp4",
      type: "video",
      tags: ["UX"]
    },
    {
      title: "Web Design",
      media: "/shots/4.mp4",
      type: "video",
      url: "https://acetechtools.com",
      tags: ["Webdesign"]
    },
    {
      title: "Brand Identity",
      media: "/shots/5.mp4",
      type: "video",
      url: "/src/assets/5.mp4",
      tags: ["Webdesign"]
    },
    {
      title: "Brand Identity",
      media: "/shots/d6a.webp",
      type: "image",
      url: "https://678fe1690369c600875493bb--symphonious-basbousa-80096b.netlify.app/",
      tags: ["Webdesign"]
    },
    {
      title: "Brand Identity",
      media: "/shots/d7.png",
      type: "image",
      url: "https://stirring-chimera-91d42f.netlify.app/",
      tags: ["Webdesign"]
    },
    {
      title: "Brand Identity",
      media: "/shots/d8.png",
      type: "image",
      url: "https://grand-treacle-e0a0fc.netlify.app/",
      tags: ["Webdesign"]
    },
    {
      title: "Brand Identity",
      media: "/shots/d9.png",
      type: "image",
      url: "https://nhsc.edu.in/pharmacy-wing/",
      tags: ["Webdesign"]
    },
    {
      title: "Brand Identity",
      media: "/shots/d10.png",
      type: "image",
      url: "https://www.pawschef.com/",
      tags: ["Ecommerce"]
    },
    {
      title: "Brand Identity",
      media: "/shots/d12.png",
      type: "image",
      url: "https://dancing-babka-53ab85.netlify.app",
      tags: ["Webdesign"]
    },
    {
      title: "Brand Identity",
      media: "/shots/d14.png",
      type: "image",
      url: "https://jocular-dragon-9a6b41.netlify.app",
      tags: ["Webdesign"]
    },
    {
      title: "Brand Identity",
      media: "/shots/d15.png",
      type: "image",
      tags: ["UI"]
    },
    {
    title: "Brand Identity",
      media: "/shots/d16.jpg",
      type: "image",
      tags: ["UI"]
    },
    {
    title: "Brand Identity",
      media: "/shots/d17.jpg",
      type: "image",
      tags: ["UI"]
    },
    {
    title: "Brand Identity",
      media: "/shots/d18.jpg",
      type: "image",
      tags: ["UI"]
    },
    {
    title: "Brand Identity",
      media: "/shots/d19.png",
      type: "image",
      tags: ["UI"]
    }
  ];

  // Get unique tags from projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  let selectedTag = 'All';

  $: filteredProjects = selectedTag === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedTag));
</script>

<nav class="nav">
  <div class="nav-brand">wetar studio<span>.</span></div>
  <div class="nav-links">
    <a href="/contact">Contact</a>
  </div>
</nav>

<div class="tags-container">
  <div class="tags-filter">
    <button 
      class="tag-btn {selectedTag === 'All' ? 'active' : ''}"
      on:click={() => selectedTag = 'All'}
    >
      All
    </button>
    {#each allTags as tag}
      <button 
        class="tag-btn {selectedTag === tag ? 'active' : ''}"
        on:click={() => selectedTag = tag}
      >
        {tag}
      </button>
    {/each}
  </div>
</div>

<main class="projects-grid">
  {#each filteredProjects as project}
    <a href={project.url} target="_blank" rel="noopener noreferrer" class="project-card">
      {#if project.type === 'video'}
        <video 
          src={project.media} 
          autoplay 
          muted 
          loop 
          playsinline
          class="project-media"
        />
      {:else}
        <img 
          src={project.media} 
          alt={project.title}
          class="project-media"
        />
      {/if}
    </a>
  {/each}
</main>

<footer class="footer">
  <div class="footer-content">
    <div class="footer-left">
      <p>&copy; {new Date().getFullYear()} wetar studio. All rights reserved.</p>
    </div>
    <div class="footer-right">
      <a href="https://mastodon.social" target="_blank" rel="noopener noreferrer">Mastodon</a>
    </div>
  </div>
</footer>

<style>
  .nav {
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
  }

  .nav-brand {
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.5px;
  }

  .nav-brand span {
    color: #ea4c89;
  }

  .nav-links a {
    color: #666;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .tags-container {
    border-bottom: 1px solid #eee;
    background: white;
  }

  .tags-filter {
    display: flex;
    gap: 4px;
    padding: 1rem 2rem;
    max-width: 1920px;
    margin: 0 auto;
    overflow-x: auto;
  }

  .tag-btn {
    padding: 6px 12px;
    border-radius: 6px;
    border: none;
    background: transparent;
    color: #666;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: 500;
    white-space: nowrap;
  }

  .tag-btn:hover {
    background: #f6f6f6;
    color: #333;
  }

  .tag-btn.active {
    background: #0d0c22;
    color: white;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 24px;
    padding: 24px;
    max-width: 1920px;
    margin: 0 auto;
    padding-top: 2rem;
  }

  .project-card {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    transition: all 0.25s ease;
    aspect-ratio: 16/12;
    position: relative;
    background: #ffffff;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    position: relative;
  }

  .project-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.08);
  }

  .project-media {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
  }

  .project-tags, .tag {
    display: none;
  }

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      padding: 16px;
      gap: 16px;
    }
    
    .project-card {
      padding: 8px;
    }
  }

  .footer {
    border-top: 1px solid #eee;
    padding: 2rem;
    background: white;
    margin-top: 2rem;
  }

  .footer-content {
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer p {
    color: #666;
    font-size: 0.875rem;
    margin: 0;
  }

  .footer-right {
    display: flex;
    gap: 2rem;
  }

  .footer-right a {
    color: #666;
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s ease;
  }

  .footer-right a:hover {
    color: #ea4c89;
  }

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }

    .footer-right {
      gap: 1rem;
    }
  }
</style>
