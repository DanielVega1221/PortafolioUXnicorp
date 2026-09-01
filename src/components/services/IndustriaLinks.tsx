import TransitionLink from "@/components/TransitionLink";

type Industria = {
  es: string;
  en: string;
  esNombre: string;
  enNombre: string;
  enTagline?: string;
};

export const INDUSTRIAS: Industria[] = [
  { es: "restaurantes", en: "restaurants", esNombre: "Restaurantes", enNombre: "Restaurants", enTagline: "Reservations, digital menu, inventory, billing" },
  { es: "construccion", en: "construction", esNombre: "Construcción", enNombre: "Construction", enTagline: "Project tracking, budgets, suppliers, documentation" },
  { es: "clinicas", en: "clinics", esNombre: "Clínicas", enNombre: "Clinics", enTagline: "Appointments, medical records, billing, patients" },
  { es: "inmobiliarias", en: "real-estate", esNombre: "Inmobiliarias", enNombre: "Real Estate", enTagline: "Property listings, contracts, clients, billing" },
  { es: "gimnasios", en: "gyms", esNombre: "Gimnasios", enNombre: "Gyms", enTagline: "Memberships, classes, attendance, billing" },
  { es: "veterinarias", en: "veterinary", esNombre: "Veterinarias", enNombre: "Veterinary", enTagline: "Appointments, pets, vaccines, history" },
  { es: "talleres", en: "auto-repair", esNombre: "Talleres", enNombre: "Auto Repair", enTagline: "Work orders, vehicles, parts, quotes" },
  { es: "dentistas", en: "dental", esNombre: "Dentistas", enNombre: "Dental", enTagline: "Appointments, treatments, x-rays, billing" },
  { es: "hoteles", en: "hotels", esNombre: "Hoteles", enNombre: "Hotels", enTagline: "Bookings, rooms, check-in/out, billing" },
  { es: "nutricionistas", en: "nutritionists", esNombre: "Nutricionistas", enNombre: "Nutritionists", enTagline: "Patients, plans, progress, consultations" },
  { es: "estudios-juridicos", en: "law-firms", esNombre: "Estudios Jurídicos", enNombre: "Law Firms", enTagline: "Cases, clients, deadlines, documents" },
  { es: "ferreterias", en: "hardware-stores", esNombre: "Ferreterías", enNombre: "Hardware Stores", enTagline: "Stock, suppliers, sales, alerts" },
  { es: "concesionarias", en: "car-dealerships", esNombre: "Concesionarias", enNombre: "Car Dealerships", enTagline: "Units, sales, clients, financing" },
];

const chipStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  padding: "0.55rem 1.1rem",
  borderRadius: "0.75rem",
  background: "rgba(224,166,216,0.45)",
  border: "1px solid rgba(255,255,255,0.65)",
  fontSize: "0.84rem",
  fontWeight: 600,
  color: "#111",
  textDecoration: "none",
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1.1rem 1.5rem",
  borderRadius: "1rem",
  background: "rgba(224,166,216,0.45)",
  border: "1px solid rgba(255,255,255,0.6)",
  textDecoration: "none",
};

const arrowSvg = (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
    <path d="M2 5.5h7M6 3l2.5 2.5L6 8" stroke="#9040b0" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const rowArrowSvg = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: "#6b7280", flexShrink: 0 }} aria-hidden="true">
    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function IndustriaLinks({ locale }: { locale: "es" | "en" }) {
  if (locale === "en") {
    return (
      <div style={{ marginTop: "2rem" }}>
        <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginBottom: "1rem" }}>
          Industry solutions
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {INDUSTRIAS.map((i) => (
            <TransitionLink key={i.en} href={`/en/servicios/management-systems/${i.en}`} style={rowStyle}>
              <div>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111" }}>{i.enNombre}</span>
                {i.enTagline ? <span style={{ fontSize: "0.8rem", color: "#6b7280", marginLeft: "0.75rem" }}>{i.enTagline}</span> : null}
              </div>
              {rowArrowSvg}
            </TransitionLink>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "1.5rem" }}>
      <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#6b7280", marginBottom: "0.875rem" }}>
        Soluciones por industria
      </p>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        {INDUSTRIAS.map((i) => (
          <TransitionLink key={i.es} href={`/servicios/sistemas-gestion/${i.es}`} style={chipStyle}>
            {i.esNombre}
            {arrowSvg}
          </TransitionLink>
        ))}
      </div>
    </div>
  );
}