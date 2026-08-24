const configuredApiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
const apiUrl = configuredApiUrl.replace(/\/api\/?$/, "");

const normaliseTestimonial = (testimonial) => ({
  ...testimonial,
  name: testimonial.clientName,
  role: testimonial.clientRole,
  quote: testimonial.content,
  avatar: testimonial.image,
});

export const fetchTestimonials = async () => {
  const response = await fetch(`${apiUrl}/api/testimonials`);
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    throw new Error("The API returned an unexpected response. Check that the backend is running and VITE_API_URL points to it.");
  }

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.message || "Unable to fetch testimonials");
  }

  return payload.data.testimonials.map(normaliseTestimonial);
};
