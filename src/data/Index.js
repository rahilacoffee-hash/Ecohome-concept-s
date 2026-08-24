import executiveGovernmentResidences from "./Executivegovernmentresidences";
import civicLegislativeBuildings from "./Civiclegislativebuildings";
import administrativeOffices from "./Administrativeoffices";
import urbanMarketStadiumDevelopment from "./Urbanmarketstadiumdevelopment";
import projectManagement from "./Projectmanagement";
import interiorDesign from "./Interiordesign";

let servicesData = {
  "executive-government-residences": executiveGovernmentResidences,
  "civic-legislative-buildings": civicLegislativeBuildings,
  "administrative-offices": administrativeOffices,
  "urban-market-stadium-development": urbanMarketStadiumDevelopment,
  "project-management": projectManagement,
  "interior-design": interiorDesign,
};

export function getServiceBySlug(slug) {
  return servicesData[slug] ?? null;
}

export default servicesData;