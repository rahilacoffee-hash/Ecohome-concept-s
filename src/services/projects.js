const configuredApiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
const apiUrl = configuredApiUrl.replace(/\/api\/?$/, "");

const normaliseProject = (project) => {
  const imageUrls = project.images?.map((image) => image.url).filter(Boolean) || [];

  return {
    ...project,
    image: project.coverImage || imageUrls[0] || "",
    gallery: imageUrls,
    description: project.description || project.brief,
    year: project.completionYear ? String(project.completionYear) : null,
    completed: project.completionYear ? String(project.completionYear) : "In progress",
    projectType: project.category,
    size: "Details on request",
    scope: project.brief,
  };
};

const request = async (path) => {
  const response = await fetch(`${apiUrl}${path}`);
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    throw new Error("The API returned an unexpected response. Check that the backend is running and VITE_API_URL points to it.");
  }

  const payload = await response.json();

  if (!response.ok) throw new Error(payload.message || "Unable to fetch projects");
  return payload.data;
};

export const fetchProjects = async () => {
  const { projects } = await request("/api/projects");
  return projects.map(normaliseProject);
};

export const fetchProjectBySlug = async (slug) => {
  const { project } = await request(`/api/projects/${encodeURIComponent(slug)}`);
  return normaliseProject(project);
};
