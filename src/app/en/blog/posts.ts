import type { BlogPost } from "@/app/blog/data";

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    slug: "cuanto-cuesta-una-web-argentina-2026",
    title: "How much does a website cost in Argentina in 2026",
    summary:
      "Real ranges for Argentina in 2026: landing page USD 500–800, e-commerce USD 900–1.500 and a management system from USD 1.000. Clear prices and the logic behind each number.",
    description:
      "Real price ranges for landing pages, e-commerce and management systems in Argentina, explained with the reasoning behind each number.",
    author: "Gonzalo Daniel Vega",
    category: "Pricing",
    datePublished: "2026-07-10",
    dateModified: "2026-08-29",
    tags: ["pricing", "landing-page", "ecommerce", "management-systems"],
    ogImage: "/blog/og/cuanto-cuesta-una-web-argentina-2026.webp",
    ctaText: "Have a project in mind and you're not sure which category it fits?",
    ctaHref: "/en#contacto",
    sections: [
      {
        type: "text",
        content:
          "The question I get asked the most isn't \"what do you do?\". It's \"how much does it cost?\". And most agencies dodge it with a \"free quote\" that answers nothing. I'd rather give you the number and explain why it's that number.",
      },
      {
        type: "heading",
        content: "Landing page: USD 500 – 800 (about $300.000 – $500.000 ARS)",
      },
      {
        type: "text",
        content:
          "A landing page solves one specific problem: someone finds you on Google or Instagram and needs to understand in 10 seconds what you do and how to reach you. There's no backend, no admin panel, no business logic. The cost is in the design and in copy that converts, not in technical complexity. Estimated time: 2 to 3 weeks. Paid in 2 or 3 installments.",
      },
      {
        type: "text",
        content:
          "Real example. With SmartHome the problem wasn't a lack of reputation — they had an Instagram feed full of real work. The problem was that every new client started from zero explaining who they were. A landing page with product packs, testimonials and a pre-filled WhatsApp link solved that without needing anything more complex.",
      },
      {
        type: "heading",
        content: "E-commerce: USD 900 – 1.500 (about $800.000 – $1.400.000 ARS)",
      },
      {
        type: "text",
        content:
          "Here the price goes up because the goal changes. It's not \"make it look good\", it's communicating scale and seriousness to a buyer who compares suppliers before deciding. With Comercial Río Hondo, the real client wasn't the homeowner who needs a bag of sand — it was the site manager looking for a supplier weeks before a job starts. That means technical product sheets, a process gallery and a form that pre-loads the inquiry with the specific material. More structured content, more research time before touching the editor. Estimated time: 6 to 10 weeks. Paid in 2 or 3 installments.",
      },
      {
        type: "heading",
        content: "Custom management system: from USD 1.000 (from $1.500.000 ARS)",
      },
      {
        type: "text",
        content:
          "Here we're no longer talking about a website; we're talking about software. A CRM, an appointment or inventory system, invoicing. The price depends on how many modules, how many user roles, and whether there are integrations with payments or existing systems. Before quoting this, I always map the client's real workflow. It makes no sense to put a number without understanding how big the problem is that needs solving. Estimated time: 8 to 16 weeks. Can be paid in up to 6 installments.",
      },
      {
        type: "heading",
        content: "Why I don't give a single price",
      },
      {
        type: "text",
        content:
          "Because it doesn't exist. Anyone who gives you a fixed price without asking anything, without knowing what you need, is throwing a number into the air. What I can give you is the criteria so you know which category your project falls into before talking to anyone.",
      },
      {
        type: "heading",
        content: "How I quote",
      },
      {
        type: "text",
        content:
          "First I understand the problem, not the request. Someone can ask for \"a website\" when what they really need is to stop having their entire business depend on a single WhatsApp channel. Then the price isn't about the website; it's about solving that specific problem.",
      },
      {
        type: "cta",
        content:
          "If you have a project in mind and you're not sure which category it falls into, write to me and we'll talk it through. No 20-field forms, no waiting three days for a generic answer.",
      },
    ],
  },
  {
    slug: "comercial-rio-hondo-entender-antes-de-hacer",
    title: "Why an aggregates company's website isn't built for the person buying sand",
    summary:
      "An aggregates supplier's website is designed for the site manager and the construction company comparing suppliers — not for the casual buyer of a bag of sand. Here's how we solved it with Comercial Río Hondo.",
    description:
      "The real Comercial Río Hondo case: how we identified who the actual buyer was before designing a single screen.",
    author: "Gonzalo Daniel Vega",
    category: "Case studies",
    datePublished: "2026-07-22",
    dateModified: "2026-08-29",
    tags: ["case-studies", "corporate-website"],
    ogImage: "/blog/og/comercial-rio-hondo-entender-antes-de-hacer.webp",
    ctaText: "Does your business depend on a technical buyer trusting you before reaching out?",
    ctaHref: "/en#contacto",
    sections: [
      {
        type: "text",
        content:
          "Understand before you build. It's the first principle I apply in any project, and this case shows it well.",
      },
      {
        type: "heading",
        content: "The request",
      },
      {
        type: "text",
        content:
          "Comercial Río Hondo has been selling aggregates and crushed stone for more than 10 years. They supply civil works, roads and highways in Santiago del Estero. They had real track record, more than a decade in the market. What they didn't have was a website. Zero online presence.",
      },
      {
        type: "text",
        content:
          "If I had taken the request literally — \"a page that shows the products\" — I would have delivered a pretty catalogue that nobody would actually use well.",
      },
      {
        type: "heading",
        content: "What really needed to be solved",
      },
      {
        type: "text",
        content:
          "Before opening the editor, the question was simple: who searches for this on Google?",
      },
      {
        type: "text",
        content:
          "It's not the neighbour who needs two bags of sand for the backyard. It's the site manager, the engineer, the construction company. Someone who compares suppliers weeks before a job starts, and needs three things fast: what material is available, in what quantity, and how to get in touch without wasting time.",
      },
      {
        type: "text",
        content:
          "That changes the whole design. No shopping cart, no retail catalogue. What's needed is for an engineer to land, find the technical sheet for Piedra 19/38 or Base 0/32, see that the company has real scale, and send the inquiry with the material already specified.",
      },
      {
        type: "heading",
        content: "What we built with that in mind",
      },
      {
        type: "list",
        items: [
          "Technical sheet for each product with real applications, not generic descriptions.",
          "Quarry and process gallery: in construction, scale is communicated by showing, not by saying \"we're big\".",
          "A form that pre-loads the inquiry into WhatsApp with the product and the project already filled in, so the first message already has context.",
        ],
      },
      {
        type: "text",
        content:
          "None of this comes from a template. It comes from understanding that the buying cycle in construction is long, and that you need to be present at the exact moment someone is comparing suppliers.",
      },
      {
        type: "heading",
        content: "The result",
      },
      {
        type: "text",
        content:
          "The company now has a presence that matches the projects it does. Engineers and construction companies looking for suppliers in the area find them, see the available materials, and reach out with the information they need.",
      },
      {
        type: "heading",
        content: "The bigger idea",
      },
      {
        type: "text",
        content:
          "Any B2B business starting to think about its website should ask itself the same question before anything else. Not \"what do I want to show?\", but \"who is the one deciding, and what do they need to see to trust?\". The design comes after. First you have to understand who you're talking to.",
      },
      {
        type: "cta",
        content:
          "Does your business depend on a technical buyer trusting you before reaching out? Let's talk about how to show it.",
      },
    ],
  },
  {
    slug: "wix-tiendanube-o-desarrollo-a-medida",
    title: "Wix, hosted store builders or custom development: when each one makes sense",
    summary:
      "A builder (Wix, Tienda Nube) is enough if you're validating an idea or your operation is simple. Custom development wins when you have your own logic, manual workflows or performance that matters.",
    description:
      "An honest comparison between generic builders and custom development, including when a builder is enough and you don't need to overpay.",
    author: "Gonzalo Daniel Vega",
    category: "Comparisons",
    datePublished: "2026-08-05",
    dateModified: "2026-08-29",
    tags: ["comparisons", "landing-page", "ecommerce"],
    ogImage: "/blog/og/wix-tiendanube-o-desarrollo-a-medida.webp",
    ctaText: "Not sure which category your business falls into?",
    ctaHref: "/en#contacto",
    sections: [
      {
        type: "text",
        content:
          "I'm going to say something you might not expect from someone who makes custom websites for a living. In some cases, a generic builder is the right decision. Avoiding unnecessary complexity is one of the principles I work with, and sometimes that means not selling you what you don't need.",
      },
      {
        type: "heading",
        content: "When a builder is enough",
      },
      {
        type: "text",
        content:
          "If you're just starting out, you don't have a team, and you need something working this week, Wix or Tienda Nube solve that well. If your product basically sells itself with photos and a price, with no special logic needed, a ready-made template saves you time and money.",
      },
      {
        type: "text",
        content:
          "It's also enough if your business is still validating. Before investing in something custom, it makes sense to test with the minimum and see if the model works.",
      },
      {
        type: "heading",
        content: "Where a builder starts to hold you back",
      },
      {
        type: "text",
        content:
          "The ceiling appears when your business has its own logic that the template doesn't cover. An appointment system with specific rules. A technical catalogue with product sheets that need their own structure. A pre-filled WhatsApp flow based on what the customer chose on the site, instead of a generic contact button.",
      },
      {
        type: "text",
        content:
          "It also appears when performance starts to matter. Builders load a lot of JavaScript you don't use, and that hits page speed directly — which today is part of how Google decides whether to show you in the top results.",
      },
      {
        type: "heading",
        content: "The middle ground almost nobody tells you about",
      },
      {
        type: "text",
        content:
          "It's not black and white. You can start with a builder and migrate when the business demands it. What doesn't work is investing in custom development when you don't yet know what your business needs, or staying five years on a template when you feel the ceiling every day.",
      },
      {
        type: "heading",
        content: "How I decide when I talk to someone",
      },
      {
        type: "text",
        content:
          "I ask what part of their operation is still handled \"by hand\" today: by WhatsApp, by Excel, by spreadsheet. If that part is small, a builder absorbs it without drama. If that part is the heart of the business, that's where custom development stops being a luxury and becomes the right tool.",
      },
      {
        type: "cta",
        content:
          "Not sure which category your business falls into? I'll tell you straight, without overselling.",
      },
    ],
  },
  {
    slug: "sistemas-gestion-pymes-noa",
    title: "The 5 management systems most requested by SMEs in northern Argentina (and which one your business needs)",
    summary:
      "Auto repair shops, clinics, gyms, veterinary practices and restaurants: the five industries in northern Argentina that most need a custom management system. They all share the same pain: a process that today lives in a notebook, WhatsApp or Excel.",
    description:
      "Auto repair shops, clinics, gyms, veterinary practices and restaurants: the five industries in northern Argentina that most need a custom management system. With real examples and prices.",
    author: "Gonzalo Daniel Vega",
    category: "Management systems",
    datePublished: "2026-08-14",
    dateModified: "2026-08-29",
    tags: ["management-systems", "custom-software", "smes", "argentina"],
    ogImage: "/blog/og/sistemas-gestion-pymes-noa.webp",
    ctaText: "Does your business still depend on a notebook or an Excel sheet to run?",
    ctaHref: "/en#contacto",
    sections: [
      {
        type: "text",
        content:
          "I work from Catamarca. And most agencies that talk about management software think about Buenos Aires. Up north the problem is different: SMEs don't need a corporate system that costs thousands of dollars — they need to get rid of the disorder that slows them down every day.",
      },
      {
        type: "text",
        content:
          "These are the five custom management systems we get asked for the most. They all share the same thing: the owner loses hours every week on tasks a system could handle on its own, and every month that goes by without automating that, money is lost.",
      },
      {
        type: "heading",
        content: "1. Management system for auto repair shops",
      },
      {
        type: "text",
        content:
          "The notebook at the counter. That's where everything lives: what car came in, what part was ordered, when it's ready, how much was charged. If the owner isn't there, nobody knows anything. A shop management system solves this at the root.",
      },
      {
        type: "text",
        content:
          "Each vehicle enters the system with its plate, client, diagnosis and estimate. Technicians log what they did and the system updates the status automatically. The owner sees in real time which cars are ready to pick up, which are waiting for parts and which invoices are pending. Full history per client and stock alerts for parts. You stop depending on one person's memory and get real control over the shop.",
      },
      {
        type: "heading",
        content: "2. Management software for clinics and practices",
      },
      {
        type: "text",
        content:
          "This is the most complex of all, and the one that hurts the most when it fails. Because here it's not just about money: it's about medical information that can't be lost or mixed up.",
      },
      {
        type: "text",
        content:
          "Appointments that overlap because the receptionist writes in a paper diary. Patients calling to confirm because there's no automatic reminder. Medical records in folders that get mixed up. Billing on one side, patient files on another. A clinic management system solves all of it in one place: appointment scheduling with automatic WhatsApp confirmation, a digital patient record, insurance tracking and integrated billing. The doctor opens it, sees who's next, opens the clinical file and logs the visit. No paper, no calls, no errors.",
      },
      {
        type: "heading",
        content: "3. Member control system for gyms",
      },
      {
        type: "text",
        content:
          "The classic: an Excel sheet with the members, paid dues in a separate column that gets updated \"whenever I remember\". The result is you never know how many members are up to date, how many stopped paying two months ago and who is about to lapse. A gym management system eliminates that.",
      },
      {
        type: "text",
        content:
          "Member sign-ups with the plan and expiry date. Access control by QR code or fingerprint. Dues collection with automatic record. A dashboard for the owner showing on one screen how many active members there are, how many paid this month, how many are about to lapse and how much was billed. The owner stops chasing payments and starts making decisions with real data.",
      },
      {
        type: "heading",
        content: "4. Management software for veterinary practices",
      },
      {
        type: "text",
        content:
          "Same problem as a human clinic, but with a patient that doesn't talk and an owner who needs to be reminded when to come back. A medical record for each animal with vaccines, deworming, surgeries and scheduled check-ups. Stock of vaccines, medication, food and accessories with expiry alerts. Automatic reminders to the client when it's time for a booster or a check-up.",
      },
      {
        type: "text",
        content:
          "A custom veterinary system doesn't just organise the practice: it builds loyalty. When the client gets an automatic WhatsApp saying \"Chicho needs a check-up in 5 days\", they feel the practice cares. And they come back.",
      },
      {
        type: "heading",
        content: "5. Management system for restaurants",
      },
      {
        type: "text",
        content:
          "The most repeated request is simple to explain and complicated to solve: orders that don't get lost between the table, the kitchen and the cash register. And inventory control that warns you before the flour runs out on a Friday at nine at night. A restaurant management system connects those three ends.",
      },
      {
        type: "text",
        content:
          "The waiter enters the order from a tablet or phone, the kitchen receives it in real time without anyone shouting, and when the customer asks for the bill the register already knows exactly what they had. The owner sees on the dashboard how much was billed that day, which dishes sold most, which ingredients are running low and what margin each table left. Fewer mistakes, less waste, more control.",
      },
      {
        type: "heading",
        content: "Why custom software and not an off-the-shelf system?",
      },
      {
        type: "text",
        content:
          "Generic software is built for a thousand businesses and fits none of them well. It forces the team to change how they work to adapt to the system. I do it the other way around: I map how your team works today, understand where the bottleneck is, and build a custom management system that fits exactly that.",
      },
      {
        type: "text",
        content:
          "The result is that your people don't have to learn a new system — they open a screen they already understand because it works the way they work. That's the difference between software that gets used and software that gets abandoned after two months.",
      },
      {
        type: "text",
        content:
          "We build custom web management systems for Argentine SMEs from $1.500.000 ARS. No hidden costs, no modules you don't need, no monthly licenses. The system is yours. If your industry isn't on this list, that doesn't mean we can't help: these five are the most repeated, but the criteria are the same for any business with a process that today lives in a notebook, WhatsApp or Excel.",
      },
      {
        type: "cta",
        content:
          "How many hours do you lose every week on tasks a system could do on its own? Tell me how your business works today and I'll tell you whether automating it makes sense.",
      },
    ],
  },
];