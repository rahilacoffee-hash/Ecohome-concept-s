const configuredApiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
const apiUrl = configuredApiUrl.replace(/\/api\/?$/, "");

const normaliseService = (service) => ({
  ...service,
  description: service.description || service.brief,
  link: `/services/${service.slug}`,
});

const request = async (path) => {
  const response = await fetch(`${apiUrl}${path}`);
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    throw new Error("The API returned an unexpected response. Check that the backend is running and VITE_API_URL points to it.");
  }

  const payload = await response.json();

  if (!response.ok) {
    const error = new Error(payload.message || "Unable to fetch services");
    error.status = response.status;
    throw error;
  }

  return payload.data;
};

export const fetchServices = async () => {
  const { services } = await request("/api/services");
  return services.map(normaliseService);
};

export const fetchServiceBySlug = async (slug) => {
  const { service } = await request(`/api/services/${encodeURIComponent(slug)}`);
  return normaliseService(service);
};
