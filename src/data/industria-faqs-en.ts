import type { FaqItem } from "@/components/FaqBlock";

export const INDUSTRIA_FAQS_EN: Record<string, FaqItem[]> = {
  restaurants: [
    {
      q: "How much does a restaurant management system cost?",
      a: "It depends on the scope, but custom systems start at USD 1,000 (from ARS 1,500,000). Before quoting, we map how your restaurant works today: orders, inventory, reservations and billing.",
    },
    {
      q: "Does it include a digital menu with QR code?",
      a: "Yes. The online menu updates in real time: customers scan a QR code and see prices, photos and options without printing anything.",
    },
    {
      q: "Does it integrate with electronic billing?",
      a: "Yes. Billing connects to sales so you don't enter data twice. We integrate the processor or invoicing system you already use.",
    },
    {
      q: "Do I own the system or do I pay a license?",
      a: "The system is yours, with no monthly licenses or per-user cost. It's custom software, unlike a generic cloud system.",
    },
    {
      q: "Will my staff be able to use it?",
      a: "Yes. It's designed so a waiter can take an order from a tablet or phone without extensive training, and we include team onboarding.",
    },
  ],
  construction: [
    {
      q: "What does a construction company management system do?",
      a: "It centralizes projects, budgets, suppliers, purchases and progress tracking in one place. You can see real costs against budgeted ones per project without relying on spreadsheets.",
    },
    {
      q: "How much does it cost?",
      a: "Custom systems start at USD 1,000 (from ARS 1,500,000). The price depends on the projects, users and integrations your company needs.",
    },
    {
      q: "Can I see each project's progress in real time?",
      a: "Yes. Each project shows its status: purchases made, certifications, pending suppliers and budget variances, all from a central dashboard.",
    },
    {
      q: "Does it integrate with billing?",
      a: "Yes. Billing connects to purchases and sales so information flows between the worksite and administration without being entered twice.",
    },
    {
      q: "Is it suitable for a small construction company too?",
      a: "Yes. It's designed around the number of projects and the team that will use it, so you don't pay for modules you don't need.",
    },
  ],
  clinics: [
    {
      q: "How much does a clinic management system cost?",
      a: "It depends on the scope, but it starts at USD 1,000 (from ARS 1,500,000). Before quoting, we map how appointments, medical records and billing work today.",
    },
    {
      q: "Is medical information secure?",
      a: "Yes. The system runs with role-based access, passwords and an audit trail of who views each record, and data stays in your infrastructure with scheduled backups.",
    },
    {
      q: "Does it integrate with health insurance and billing?",
      a: "Yes. Insurance management and billing connect to appointments so you enter information only once.",
    },
    {
      q: "Can doctors use it without being tech-savvy?",
      a: "Yes. The interface is designed so a professional sees their schedule, opens a record and logs a consultation in seconds, with no redundant screens.",
    },
    {
      q: "Do we own the system or pay a monthly fee?",
      a: "The system is yours, with no monthly licenses per professional. It's custom development, not generic SaaS.",
    },
  ],
  "real-estate": [
    {
      q: "How much does a real estate system cost?",
      a: "Custom systems start at USD 1,000 (from ARS 1,500,000). The price depends on properties, users and whether you manage rentals in addition to sales.",
    },
    {
      q: "Does it manage rentals and contracts?",
      a: "Yes. You can run your full portfolio: properties, contracts, expirations, rent collections and homeowner fees with automatic alerts.",
    },
    {
      q: "Can I have my whole portfolio in one place?",
      a: "Yes. Each property with its status: available, rented, for sale or in process, with a history of listings and inquiries.",
    },
    {
      q: "Does it integrate with rent collection?",
      a: "Yes. We integrate payments through MercadoPago or others, and the system automatically records the payment on the client's account.",
    },
    {
      q: "Do we own the system?",
      a: "Yes, it's 100% yours. No monthly subscription or per-property cost.",
    },
  ],
  gyms: [
    {
      q: "How much does a gym management system cost?",
      a: "Custom systems start at USD 1,000 (from ARS 1,500,000). The price depends on the number of members, plans and whether it includes physical access control.",
    },
    {
      q: "Does it control access with QR codes or fingerprints?",
      a: "Yes. Each member checks in with their QR code or fingerprint, and the system instantly validates whether they're up to date.",
    },
    {
      q: "Can I see who owes their membership fee?",
      a: "Yes. The dashboard shows members up to date, about to expire and overdue, with automatic payment reminders.",
    },
    {
      q: "Does it integrate with automatic payments?",
      a: "Yes, with MercadoPago or others. The membership payment is recorded automatically and updates the member's status.",
    },
    {
      q: "Do we own the system or is it a subscription?",
      a: "The system is yours, with no monthly fee or per-member cost. It's custom development.",
    },
  ],
  veterinary: [
    {
      q: "How much does veterinary software cost?",
      a: "Custom systems start at USD 1,000 (from ARS 1,500,000). The price depends on the modules: medical records, inventory and reminders.",
    },
    {
      q: "Does it keep a medical record for each animal?",
      a: "Yes. Each patient has a file with vaccines, deworming, surgeries, scheduled check-ups and progress, searchable by name or owner.",
    },
    {
      q: "Does it send automatic reminders?",
      a: "Yes. When a vaccine booster or check-up is due, the system automatically notifies the client by WhatsApp.",
    },
    {
      q: "Does it manage medicine and vaccine inventory?",
      a: "Yes, with expiration and low-stock alerts, linked to what's consumed at each consultation.",
    },
    {
      q: "Do we own the system?",
      a: "Yes, it's 100% yours, with no monthly licenses.",
    },
  ],
  "auto-repair": [
    {
      q: "How much does a system for auto repair shops cost?",
      a: "Custom systems start at USD 1,000 (from ARS 1,500,000). The price depends on whether you need parts inventory control, quotes and billing.",
    },
    {
      q: "Can I track each car by license plate?",
      a: "Yes. Each vehicle enters with its plate, customer, diagnosis and quote, and the system updates its status in real time.",
    },
    {
      q: "Does it manage parts and inventory?",
      a: "Yes, with low-stock alerts and a record of which part was used in each job.",
    },
    {
      q: "Does it integrate with billing?",
      a: "Yes. Billing connects to each work order so the charge matches what was actually done.",
    },
    {
      q: "Can the owner see everything on one screen?",
      a: "Yes. The dashboard shows which cars are ready, which are waiting for parts and which invoices are pending, without depending on anyone's memory.",
    },
  ],
  dental: [
    {
      q: "How much does a system for dental practices cost?",
      a: "Custom systems start at USD 1,000 (from ARS 1,500,000). The price depends on the modules: scheduling, treatment records and billing.",
    },
    {
      q: "Does it store patient records and treatments?",
      a: "Yes. Each patient has a file with an odontogram, treatments, instructions and appointment history.",
    },
    {
      q: "Does it have appointment scheduling with reminders?",
      a: "Yes. The schedule manages availability per professional and sends automatic reminders to reduce no-shows.",
    },
    {
      q: "Does it integrate with dental insurance?",
      a: "Yes. Insurance management and billing connect to appointments and completed treatments.",
    },
    {
      q: "Do we own the system?",
      a: "Yes, it's 100% yours, with no monthly fee per professional.",
    },
  ],
  hotels: [
    {
      q: "How much does a hotel management system cost?",
      a: "Custom systems start at USD 1,000 (from ARS 1,500,000). The price depends on rooms, booking channels and whether you manage multiple properties.",
    },
    {
      q: "Does it manage reservations and availability?",
      a: "Yes. Each room with its status, reservation calendar and capacity, with automatic confirmation and overbooking control.",
    },
    {
      q: "Does it track housekeeping and cleaning?",
      a: "Yes. The cleaning team sees which rooms are checked out, occupied or pending cleaning in real time.",
    },
    {
      q: "Does it integrate with billing?",
      a: "Yes. Billing connects to the stay so check-out closes out charges without entering anything twice.",
    },
    {
      q: "Do we own the system?",
      a: "Yes, it's 100% yours, with no monthly license per room.",
    },
  ],
  nutritionists: [
    {
      q: "How much does a system for nutritionists cost?",
      a: "Custom systems start at USD 1,000 (from ARS 1,500,000). The price depends on the modules: meal plans, appointments and patient tracking.",
    },
    {
      q: "Does it store each patient's meal plans?",
      a: "Yes. Each patient has their plans, goals and measurements in a record where you can compare progress visit by visit.",
    },
    {
      q: "Does it manage appointments and reminders?",
      a: "Yes. The schedule manages availability and sends automatic reminders to reduce no-shows.",
    },
    {
      q: "Can I track progress?",
      a: "Yes. The dashboard shows each patient's progress with charts and metrics, without searching through folders or paper.",
    },
    {
      q: "Do we own the system?",
      a: "Yes, it's 100% yours, with no monthly fee per professional.",
    },
  ],
  "law-firms": [
    {
      q: "How much does a system for law firms cost?",
      a: "Custom systems start at USD 1,000 (from ARS 1,500,000). The price depends on the number of cases, lawyers and whether you need deadline tracking.",
    },
    {
      q: "Does it manage cases, files and deadlines?",
      a: "Yes. Each case with its file, parties, docket entries and expirations, organized by lawyer and client.",
    },
    {
      q: "Does it track procedural deadlines?",
      a: "Yes. The system alerts you before each deadline or filing period so nothing slips through.",
    },
    {
      q: "Does it manage fees and billing?",
      a: "Yes. Per-case fees, advances and billing connected to each case.",
    },
    {
      q: "Do we own the system?",
      a: "Yes, it's 100% yours, with no monthly license per lawyer.",
    },
  ],
  "hardware-stores": [
    {
      q: "How much does a system for hardware stores cost?",
      a: "Custom systems start at USD 1,000 (from ARS 1,500,000). The price depends on the number of products, branches and integrations.",
    },
    {
      q: "Does it track inventory with alerts?",
      a: "Yes. Each product with real-time stock, low-stock alerts and movements from sales, purchases or adjustments.",
    },
    {
      q: "Does it integrate with electronic billing?",
      a: "Yes. A sale generates the invoice automatically and deducts stock in the same operation.",
    },
    {
      q: "Can I manage multiple points of sale?",
      a: "Yes, with per-branch sales and stock broken down by location, all from one dashboard.",
    },
    {
      q: "Do we own the system?",
      a: "Yes, it's 100% yours, with no monthly fee or per-seller cost.",
    },
  ],
  "car-dealerships": [
    {
      q: "How much does a system for car dealerships cost?",
      a: "Custom systems start at USD 1,000 (from ARS 1,500,000). The price depends on units, salespeople and integrations with your operation.",
    },
    {
      q: "Does it manage units, inventory and resale?",
      a: "Yes. Each unit with its status: available, reserved, sold or in process, with history per vehicle.",
    },
    {
      q: "Does it track customers and sales?",
      a: "Yes. Sales pipeline per salesperson, inquiries, test drives and deal closings with individual metrics.",
    },
    {
      q: "Does it integrate with billing?",
      a: "Yes. Billing connects to the sale so the deal closes without entering data twice.",
    },
    {
      q: "Do we own the system?",
      a: "Yes, it's 100% yours, with no monthly license per salesperson.",
    },
  ],
};