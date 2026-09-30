async function loadProjects() {
  const projectLists = document.querySelectorAll('[data-projects]');
  if (!projectLists.length) return;

  try {
    const response = await fetch('data/projects.json');
    if (!response.ok) throw new Error('Project data could not be loaded.');
    const projects = await response.json();

    projectLists.forEach((list) => {
      const limit = Number(list.dataset.limit) || projects.length;
      list.replaceChildren(...projects.slice(0, limit).map((project) => {
        const card = document.createElement('article');
        card.className = 'project-card';

        const title = document.createElement('h3');
        title.textContent = project.title;
        const description = document.createElement('p');
        description.textContent = project.description;
        const tags = document.createElement('p');
        tags.className = 'tags';
        tags.textContent = project.stack.join(' · ');

        card.append(title, description, tags);
        if (project.url) {
          const link = document.createElement('a');
          link.href = project.url;
          link.textContent = 'View project';
          card.append(link);
        }
        return card;
      }));
    });
  } catch (error) {
    projectLists.forEach((list) => {
      const message = document.createElement('p');
      message.className = 'error-message';
      message.textContent = 'Projects are unavailable right now. Open this site through a local web server and check data/projects.json.';
      list.replaceChildren(message);
    });
  }
}

loadProjects();