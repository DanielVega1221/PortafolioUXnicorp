import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search, Zap, Package, CheckCircle, Sparkles, Rocket, TrendingUp, FileText, Code, Palette, ShoppingCart, Settings, ArrowRight } from "lucide-react";
import "./Servicios.css";
import "../../section-glass-card.css";

const serviciosData = {
  auditorias: [
    {
      icon: <Search size={32} />,
      titulo: "Auditoría UX/UI Profesional",
      descripcion: "Analizamos experiencia, usabilidad, navegación y performance sin tocar tu código",
      incluye: [
        "Análisis de usabilidad y jerarquía visual",
        "Evaluación de performance y accesibilidad",
        "Informe detallado con soluciones priorizadas",
        "Reunión personalizada de devolución"
      ],
      entrega: "5-7 días",
      color: "#f37aa6"
    },
    {
      icon: <TrendingUp size={32} />,
      titulo: "Optimización de Conversión (CRO)",
      descripcion: "Identificamos por qué tu página no convierte y cómo solucionarlo",
      incluye: [
        "Análisis de estrategia y mensajes",
        "Evaluación de títulos, CTAs y formularios",
        "Informe estratégico con mejoras recomendadas",
        "Priorización por impacto comercial"
      ],
      entrega: "7-15 días",
      color: "#81ade7"
    },
    {
      icon: <Code size={32} />,
      titulo: "Revisión Técnica + Mini-Refactor",
      descripcion: "Auditoría técnica completa con refactor puntual de módulos críticos",
      incluye: [
        "Auditoría técnica del código",
        "Refactor de 1-2 módulos prioritarios",
        "Informe técnico final",
        "Recomendaciones de mejora"
      ],
      entrega: "7-15 días",
      color: "#e0a6d8"
    }
  ],
  paginas: [
    {
      icon: <Zap size={32} />,
      titulo: "Landing Express Basic",
      descripcion: "Tu página funcionando en 72 horas. Rápida, clara y efectiva",
      incluye: [
        "Hero + 2-3 secciones adicionales",
        "SEO básico configurado",
        "Responsive básico",
        "Carga de contenido provisto"
      ],
      entrega: "72 hs",
      destacado: true,
      color: "#4bb543"
    },
    {
      icon: <Sparkles size={32} />,
      titulo: "Landing Express Intermedia",
      descripcion: "Landing moderna con microinteracciones y animaciones profesionales",
      incluye: [
        "Hasta 5 secciones completas",
        "Animaciones profesionales",
        "SEO intermedio",
        "Diseño premium optimizado"
      ],
      entrega: "5-10 días",
      color: "#ffc107"
    },
    {
      icon: <Rocket size={32} />,
      titulo: "Landing Express Full",
      descripcion: "Presencia digital completa para negocios que buscan escala",
      incluye: [
        "6 secciones + 1 página extra",
        "SEO avanzado optimizado",
        "Performance profesional",
        "Diseño optimizado para conversión"
      ],
      entrega: "1-2 semanas",
      color: "#ff5722"
    },
    {
      icon: <FileText size={32} />,
      titulo: "Landing Flyer Promo",
      descripcion: "Tu anuncio digital en formato landing. Directo y vendedor",
      incluye: [
        "Hero con mensaje y botón a WhatsApp",
        "PDF profesional creado por nosotros",
        "Diseño tipo flyer premium",
        "Optimizado para móviles"
      ],
      entrega: "3-5 días",
      color: "#9c27b0"
    },
    {
      icon: <Palette size={32} />,
      titulo: "Landing Premium a Medida",
      descripcion: "Diseño 100% personalizado sin plantillas, hecho específicamente para tu marca",
      incluye: [
        "5 secciones diseñadas a medida",
        "1 página extra incluida",
        "SEO profesional optimizado",
        "Microinteracciones premium"
      ],
      entrega: "2-3 semanas",
      destacado: true,
      color: "#3f51b5"
    },
    {
      icon: <ShoppingCart size={32} />,
      titulo: "E-commerce",
      descripcion: "Tiendas online simples o robustas con panel admin y pasarela de pagos",
      incluye: [
        "Panel de administración",
        "Carrito y pasarela de pagos",
        "Gestión de productos y categorías",
        "Capacitación incluida"
      ],
      entrega: "3 meses",
      color: "#00bcd4"
    },
    {
      icon: <Settings size={32} />,
      titulo: "Sistemas de Gestión",
      descripcion: "Software a medida para automatizar procesos de tu negocio",
      incluye: [
        "Módulos personalizados",
        "Paneles admin a medida",
        "Capacitación y soporte",
        "Documentación completa"
      ],
      entrega: "Variable",
      color: "#607d8b"
    }
  ],
  paquetes: [
    {
      icon: <Rocket size={32} />,
      titulo: "Paquete Emprendedor",
      subtitulo: "Presencia Rápida",
      descripcion: "Arrancá rápido con presencia profesional",
      incluye: [
        "Landing Express Basic (72hs)",
        "Microbranding Web (UI Base)",
        "Paleta de colores y tipografías",
        "Hero de referencia diseñado"
      ],
      ideal: "Emprendedores y pequeños negocios",
      color: "#f37aa6",
      destacado: true
    },
    {
      icon: <Search size={32} />,
      titulo: "Paquete Auditoría Integral",
      subtitulo: "Revisión Estratégica",
      descripcion: "Descubrí exactamente qué falla en tu web",
      incluye: [
        "Auditoría UX/UI completa",
        "Informe CRO (Optimización)",
        "Análisis de experiencia",
        "Estrategia de conversión"
      ],
      ideal: "Negocios que quieren optimizar su web existente",
      entrega: "7-15 días",
      color: "#81ade7"
    },
    {
      icon: <TrendingUp size={32} />,
      titulo: "Plan Evolución",
      subtitulo: "Escalá tu Web",
      descripcion: "Comenzá simple y evolucioná pagando solo la diferencia",
      incluye: [
        "Inicio con Landing Basic",
        "Evolución a Intermedia o Full",
        "Pagás solo 50% de diferencia",
        "Crecimiento progresivo"
      ],
      ideal: "Startups que quieren crecer sin invertir todo de una",
      color: "#4bb543"
    }
  ]
};

function Servicios() {
  const [activeTab, setActiveTab] = useState('auditorias');
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'auditorias', label: 'Auditorías', icon: <Search size={20} /> },
    { id: 'paginas', label: 'Páginas Web', icon: <Code size={20} /> },
    { id: 'paquetes', label: 'Paquetes', icon: <Package size={20} /> }
  ];

  const currentServices = serviciosData[activeTab];

  const handleConsultarClick = (servicioTitulo) => {
    if (location.pathname === '/') {
      // Si ya estamos en home, solo scroll
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Esperar a que termine el scroll y luego setear el servicio
        setTimeout(() => {
          const servicioSelect = document.getElementById('servicio');
          if (servicioSelect) {
            servicioSelect.value = servicioTitulo;
            servicioSelect.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }, 800);
      }
    } else {
      // Si estamos en otra página, navegar
      navigate('/#contact');
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => {
            const servicioSelect = document.getElementById('servicio');
            if (servicioSelect) {
              servicioSelect.value = servicioTitulo;
              servicioSelect.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }, 500);
        }
      }, 500);
    }
  };

  return (
    <section id="servicios" className="servicios-section-modern">
      <div className="section-glass-card">
        <h2 className="servicios-titulo-modern">
          Servicios que impulsan <span className="servicios-highlight">tu negocio</span>
        </h2>
        <p className="servicios-subtitulo-modern">
          Diseño, desarrollo y sistemas a medida con rapidez, calidad y enfoque 100% orientado a resultados
        </p>

        {/* Tabs de categorías */}
        <div className="servicios-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`servicios-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Grid de servicios */}
        <div className="servicios-grid-modern">
          {currentServices.map((servicio, idx) => (
            <div 
              key={idx} 
              className={`servicio-card-modern ${servicio.destacado ? 'destacado' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {servicio.destacado && (
                <div className="servicio-badge-destacado">
                  <Sparkles size={14} />
                  Popular
                </div>
              )}
              
              <div className="servicio-icon-wrapper" style={{ background: `${servicio.color}15`, color: servicio.color }}>
                {servicio.icon}
              </div>
              
              <div className="servicio-content">
                <h3 className="servicio-titulo">{servicio.titulo}</h3>
                {servicio.subtitulo && (
                  <p className="servicio-subtitulo">{servicio.subtitulo}</p>
                )}
                <p className="servicio-descripcion">{servicio.descripcion}</p>
                
                <div className="servicio-incluye">
                  <h4>Incluye:</h4>
                  <ul>
                    {servicio.incluye.map((item, i) => (
                      <li key={i}>
                        <CheckCircle size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {servicio.ideal && (
                  <div className="servicio-ideal">
                    <strong>Ideal para:</strong> {servicio.ideal}
                  </div>
                )}
                
                {servicio.entrega && (
                  <div className="servicio-entrega">
                    <span className="servicio-entrega-label">Entrega:</span>
                    <span className="servicio-entrega-valor">{servicio.entrega}</span>
                  </div>
                )}
                
                <button 
                  className="servicio-btn-consultar"
                  onClick={() => handleConsultarClick(servicio.titulo)}
                >
                  Consultar servicio
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;
