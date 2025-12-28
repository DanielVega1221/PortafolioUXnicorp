import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Search, Zap, Package, CheckCircle, Sparkles, Rocket, TrendingUp, FileText, Code, Palette, ShoppingCart, Settings, ArrowRight, HelpCircle, X, ExternalLink } from "lucide-react";
import "./Servicios.css";
import "../../section-glass-card.css";

const explicacionesCriollas = {
  "Auditoría UX/UI Profesional": {
    que: "Es una revisión completa de tu página web para ver qué anda bien y qué se puede mejorar, sin tocar el código.",
    paraque: "Sirve para saber si tu página es fácil de usar, si se ve bien, si carga rápido y si funciona en todos los dispositivos. Te da un diagnóstico claro de qué arreglar.",
    como: "Navegamos tu sitio como lo haría un usuario real, tomamos nota de todo lo que se puede mejorar y te entregamos un informe detallado con soluciones priorizadas.",
    cuando: "Es ideal cuando tenés una web funcionando pero sentís que algo no está bien, que la gente no la entiende o que querés mejorarla pero no sabés por dónde empezar."
  },
  "Optimización de Conversión (CRO)": {
    que: "Es un análisis enfocado en descubrir por qué la gente entra a tu web pero no compra, no se contacta o no hace lo que vos querés que haga.",
    paraque: "Sirve para aumentar las ventas o contactos sin necesidad de traer más visitas. Te dice qué cambiar en textos, botones y formularios para que más gente se anime a dar el paso.",
    como: "Revisamos toda la estrategia de tu página: mensajes, llamados a la acción, formularios, diseño. Te mostramos qué está frenando a tus clientes y cómo solucionarlo.",
    cuando: "Es perfecto cuando tenés tráfico (gente que visita tu web) pero no se concretan ventas o contactos. También si querés vender más sin gastar más en publicidad."
  },
  "Revisión Técnica + Mini-Refactor": {
    que: "Es una auditoría técnica del código de tu sitio más una limpieza express de 1 o 2 módulos que estén mal hechos o desactualizados.",
    paraque: "Sirve para que tu web funcione más rápido, sea más fácil de mantener y esté preparada para crecer sin problemas técnicos.",
    como: "Revisamos el código completo, identificamos qué está mal y arreglamos las partes más críticas. Te entregamos todo documentado y mejorado.",
    cuando: "Es necesario cuando tu web anda lenta, tiene errores raros o fue hecha hace tiempo y necesita una actualización técnica urgente."
  },
  "Landing Express Basic": {
    que: "Es una página web de una sola página (landing page) lista en 72 horas. Tiene lo esencial: un encabezado con tu mensaje principal y 2-3 secciones más.",
    paraque: "Sirve para tener presencia online rápido, mostrar tu negocio de forma profesional y dar una línea directa de contacto a WhatsApp o formulario.",
    como: "Vos nos das tu contenido (textos e imágenes), nosotros lo armamos en un diseño limpio y funcional, y en 3 días está online y listo para usar.",
    cuando: "Son recomendadas para emprendedores, profesionales o negocios que necesitan presencia digital urgente. Por ejemplo: plomeros, electricistas, coaches, diseñadores freelance que quieren que los contacten."
  },
  "Landing Express Intermedia": {
    que: "Es una landing page más completa y moderna con hasta 5 secciones y animaciones profesionales que se activan cuando scrolleas.",
    paraque: "Sirve para causar una mejor primera impresión, transmitir profesionalismo y dar más información sobre tu negocio o servicio de forma atractiva.",
    como: "Diseñamos una página con más contenido organizado, agregamos efectos visuales copados y optimizamos todo para que se vea increíble en cualquier dispositivo.",
    cuando: "Es ideal para negocios que quieren destacarse de la competencia, estudios profesionales, agencias, consultores o empresas que buscan generar confianza antes del contacto."
  },
  "Landing Express Full": {
    que: "Es la versión completa: una landing de 6 secciones + 1 página adicional (como 'Sobre nosotros' o 'Portfolio'). Todo optimizado para Google y velocidad.",
    paraque: "Sirve para tener una presencia digital profesional y completa, aparecer bien posicionado en Google y convertir visitas en clientes de forma efectiva.",
    como: "Creamos una web robusta con SEO técnico implementado, imágenes optimizadas, textos estratégicos y diseño pensado para que la gente te contacte.",
    cuando: "Es para negocios que van en serio: empresas de servicios, estudios jurídicos, clínicas, constructoras, agencias que necesitan una web que genere resultados reales."
  },
  "Landing Flyer Promo": {
    que: "Es un anuncio digital en formato web. Una página super simple con tu oferta, mensaje principal y un botón directo a WhatsApp.",
    paraque: "Sirve para promociones puntuales, lanzamientos o campañas específicas. La idea es que la gente vea tu oferta y te contacte al toque.",
    como: "Vos nos das tu promo, nosotros armamos un diseño tipo flyer digital profesional con un PDF incluido, y lo subimos para que lo compartas por redes.",
    cuando: "Es perfecto para campañas de descuentos, black friday, lanzamientos de productos o servicios temporales. También para eventos o promociones con fecha límite."
  },
  "Landing Premium a Medida": {
    que: "Es una landing diseñada desde cero, 100% personalizada para tu marca. Sin plantillas, todo hecho específicamente según tu identidad y necesidades.",
    paraque: "Sirve para proyectos donde la imagen de marca es fundamental y querés algo único que te diferencie por completo de la competencia.",
    como: "Hacemos sesiones de briefing, diseñamos todo desde cero (colores, tipografías, animaciones, estructura) y desarrollamos una página única e irrepetible.",
    cuando: "Es para marcas premium, lanzamientos importantes, estudios de arquitectura/diseño, marcas de moda, productos exclusivos o negocios donde la estética es clave."
  },
  "E-commerce": {
    que: "Es una tienda online completa donde podés vender tus productos por internet. Incluye carrito de compras, pasarela de pagos y panel de administración.",
    paraque: "Sirve para vender 24/7 sin depender de redes sociales, automatizar ventas, gestionar stock y cobrar por Mercado Pago u otras plataformas.",
    como: "Desarrollamos toda la tienda con sistema de productos, categorías, carrito, checkout y te enseñamos a administrarla. Vos cargás productos y empezás a vender.",
    cuando: "Es para negocios que venden productos físicos o digitales y quieren profesionalizar sus ventas: tiendas de ropa, accesorios, tecnología, alimentos, cursos online, etc."
  },
  "Sistemas de Gestión": {
    que: "Es un software personalizado hecho a medida para automatizar y organizar procesos específicos de tu negocio.",
    paraque: "Sirve para dejar de usar mil planillas de Excel, automatizar tareas repetitivas y tener todo centralizado en un solo lugar. Ahorrás tiempo y evitás errores.",
    como: "Analizamos cómo funciona tu negocio, diseñamos el sistema que necesitás (clientes, ventas, inventario, turnos, lo que sea) y lo desarrollamos desde cero.",
    cuando: "Es para negocios que ya crecieron y necesitan orden: talleres mecánicos, clínicas, estudios contables, empresas de logística, cualquier negocio con procesos complejos."
  },
  "Paquete Emprendedor": {
    que: "Es un combo para arrancar rápido: landing básica en 72hs + colores y tipografías definidas para tu marca (microbranding).",
    paraque: "Sirve para tener presencia online profesional desde el día uno sin gastar una fortuna. Ideal para emprendedores que recién arrancan.",
    como: "Te armamos la landing express básica y además te damos una paleta de colores y tipografías para que uses en redes, flyers y todo lo que hagas.",
    cuando: "Es perfecto para nuevos emprendimientos, freelancers que recién empiezan, profesionales independientes o cualquiera que necesite presencia digital rápida y económica."
  },
  "Paquete Auditoría Integral": {
    que: "Es el combo completo de auditorías: revisión UX/UI + análisis de conversión (CRO) para saber exactamente qué está fallando en tu web.",
    paraque: "Sirve para tener un diagnóstico 360° de tu sitio: qué se puede mejorar en diseño, usabilidad y estrategia de ventas/contacto.",
    como: "Hacemos ambas auditorías en paralelo y te entregamos un informe integral con todas las mejoras priorizadas por impacto y urgencia.",
    cuando: "Es ideal cuando tenés una web funcionando pero no está dando los resultados esperados y querés saber exactamente qué cambiar para que funcione mejor."
  },
  "Plan Evolución": {
    que: "Es un plan que te permite empezar con una landing básica y después mejorarla a intermedia o full pagando solo el 50% de la diferencia.",
    paraque: "Sirve para empezar con una inversión baja y después ir escalando sin tener que pagar el precio completo de la versión mejorada.",
    como: "Arrancás con la Basic, y cuando quieras mejorar, solo pagás la mitad de la diferencia de precio. El resto lo absorbemos nosotros.",
    cuando: "Es perfecto para startups o negocios que quieren empezar ya pero saben que van a necesitar algo más robusto en unos meses. Vas creciendo a tu ritmo."
  }
};

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
  const [modalAbierto, setModalAbierto] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'auditorias', label: 'Auditorías', icon: <Search size={20} /> },
    { id: 'paginas', label: 'Páginas Web', icon: <Code size={20} /> },
    { id: 'paquetes', label: 'Paquetes', icon: <Package size={20} /> }
  ];

  const currentServices = serviciosData[activeTab];

  const abrirModal = (titulo) => {
    setServicioSeleccionado(titulo);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setServicioSeleccionado(null);
  };

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
                
                <div className="servicio-botones">
                  <button 
                    className="servicio-btn-ayuda"
                    onClick={() => abrirModal(servicio.titulo)}
                    title="¿Qué es esto?"
                  >
                    <HelpCircle size={18} />
                  </button>
                  <button 
                    className="servicio-btn-consultar"
                    onClick={() => handleConsultarClick(servicio.titulo)}
                  >
                    Consultar servicio
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación a páginas específicas */}
        {activeTab === 'paginas' && (
          <div className="servicios-cta-extra" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link 
              to="/landing-pages" 
              className="servicios-link-pagina"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #f37aa6, #ff8cc8)',
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(243, 122, 166, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <ExternalLink size={20} />
              Ver todos los servicios de Landing Pages
            </Link>
          </div>
        )}

        {activeTab === 'paquetes' && (
          <div className="servicios-cta-extra" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link 
              to="/casos-reales" 
              className="servicios-link-pagina"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #81ade7, #f37aa6)',
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(129, 173, 231, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <ExternalLink size={20} />
              Ver casos reales de éxito
            </Link>
          </div>
        )}
      </div>

      {/* Modal de explicación */}
      {modalAbierto && servicioSeleccionado && explicacionesCriollas[servicioSeleccionado] && (
        <div className="servicio-modal-overlay" onClick={cerrarModal}>
          <div className="servicio-modal" onClick={(e) => e.stopPropagation()}>
            <button className="servicio-modal-cerrar" onClick={cerrarModal}>
              <X size={24} />
            </button>
            <div className="servicio-modal-header">
              <HelpCircle size={32} color="#81ade7" />
              <h3>{servicioSeleccionado}</h3>
            </div>
            <div className="servicio-modal-contenido">
              <div className="servicio-modal-seccion">
                <h4>¿Qué es?</h4>
                <p>{explicacionesCriollas[servicioSeleccionado].que}</p>
              </div>
              <div className="servicio-modal-seccion">
                <h4>¿Para qué sirve?</h4>
                <p>{explicacionesCriollas[servicioSeleccionado].paraque}</p>
              </div>
              <div className="servicio-modal-seccion">
                <h4>¿Cómo funciona?</h4>
                <p>{explicacionesCriollas[servicioSeleccionado].como}</p>
              </div>
              <div className="servicio-modal-seccion">
                <h4>¿Cuándo es recomendado?</h4>
                <p>{explicacionesCriollas[servicioSeleccionado].cuando}</p>
              </div>
            </div>
            <div className="servicio-modal-footer">
              <button className="servicio-modal-btn-entendido" onClick={cerrarModal}>
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Servicios;
