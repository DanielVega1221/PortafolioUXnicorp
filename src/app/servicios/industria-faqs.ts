import type { FaqItem } from "@/components/FaqBlock";

export const INDUSTRIA_FAQS: Record<string, FaqItem[]> = {
  restaurantes: [
    {
      q: "¿Cuánto cuesta un sistema de gestión para restaurantes?",
      a: "Depende del alcance, pero los sistemas a medida arrancan desde USD 1.000 (desde $1.500.000 ARS). Antes de cotizar mapeamos cómo trabaja tu restaurante hoy: comandas, stock, reservas y facturación.",
    },
    {
      q: "¿Incluye menú digital con QR?",
      a: "Sí. El menú online se actualiza en tiempo real: el cliente escanea un QR y ve precios, fotos y opciones sin imprimir nada.",
    },
    {
      q: "¿Se integra con facturación electrónica?",
      a: "Sí. La facturación se conecta con las ventas para que no cargues datos dos veces. Integramos el procesador o facturador que ya uses.",
    },
    {
      q: "¿El sistema es mío o pago una licencia?",
      a: "El sistema es tuyo, sin licencias mensuales ni costo por usuario. Es software a medida, a diferencia de un sistema genérico en la nube.",
    },
    {
      q: "¿Mis empleados lo van a poder usar?",
      a: "Sí. Está pensado para que el mozo cargue una comanda desde una tablet o el celular sin capacitación extensa, e incluimos capacitación del equipo.",
    },
  ],
  construccion: [
    {
      q: "¿Qué hace un sistema de gestión para constructoras?",
      a: "Centraliza obras, presupuestos, proveedores, compras y control de avance en un solo lugar. Podés ver costos reales contra presupuestados por obra sin depender de planillas.",
    },
    {
      q: "¿Cuánto cuesta?",
      a: "Los sistemas a medida arrancan desde USD 1.000 (desde $1.500.000 ARS). El precio depende de las obras, usuarios e integraciones que necesite tu empresa.",
    },
    {
      q: "¿Puedo ver el avance de cada obra en tiempo real?",
      a: "Sí. Cada obra muestra su estado: compras realizadas, certificaciones, proveedores pendientes y desvíos de presupuesto, desde un panel central.",
    },
    {
      q: "¿Se integra con facturación?",
      a: "Sí. La facturación se conecta con compras y ventas para que la información fluya entre obra y administración sin cargarla dos veces.",
    },
    {
      q: "¿Sirve para una constructora chica también?",
      a: "Sí. Se diseña según la cantidad de obras y el equipo que la va a usar, para que no pagues módulos que no necesitás.",
    },
  ],
  clinicas: [
    {
      q: "¿Cuánto cuesta un sistema de gestión para clínicas?",
      a: "Depende del alcance, pero arranca desde USD 1.000 (desde $1.500.000 ARS). Antes de cotizar mapeamos cómo se manejan hoy los turnos, las historias clínicas y la facturación.",
    },
    {
      q: "¿La información médica está segura?",
      a: "Sí. El sistema se despliega con acceso por roles, contraseñas y auditoría de quién accede a cada ficha, y la información queda en tu infraestructura con backups programados.",
    },
    {
      q: "¿Se integra con obra social y facturación?",
      a: "Sí. El control de obra social y la facturación se conectan con los turnos para que cargues la información una sola vez.",
    },
    {
      q: "¿Los médicos lo pueden usar sin saber tecnología?",
      a: "Sí. La interfaz se diseña para que el profesional vea su agenda, abra la ficha y registre la consulta en segundos, sin pantallas redundantes.",
    },
    {
      q: "¿El sistema es nuestro o pagamos mensualidad?",
      a: "El sistema es tuyo, sin licencias mensuales por profesional. Es un desarrollo a medida, no un SaaS genérico.",
    },
  ],
  inmobiliarias: [
    {
      q: "¿Cuánto cuesta un sistema para inmobiliarias?",
      a: "Los sistemas a medida arrancan desde USD 1.000 (desde $1.500.000 ARS). El precio depende de propiedades, usuarios y si administrás alquileres además de ventas.",
    },
    {
      q: "¿Administra alquileres y contratos?",
      a: "Sí. Podés llevar la cartera completa: propiedades, contratos, vencimientos, cobros de alquiler y expensas con alertas automáticas.",
    },
    {
      q: "¿Puedo tener toda la cartera en un solo lugar?",
      a: "Sí. Cada propiedad con su estado: disponible, alquilada, en venta o en trámite, con histórico de publicaciones y consultas.",
    },
    {
      q: "¿Se integra con el cobro de alquileres?",
      a: "Sí, integramos el cobro por MercadoPago u otros y el sistema registra el pago automáticamente en la cuenta del cliente.",
    },
    {
      q: "¿El sistema es nuestro?",
      a: "Sí, es 100% tuyo. Sin suscripción mensual ni costo por propiedad.",
    },
  ],
  gimnasios: [
    {
      q: "¿Cuánto cuesta un sistema para gimnasios?",
      a: "Los sistemas a medida arrancan desde USD 1.000 (desde $1.500.000 ARS). El precio depende de la cantidad de socios, planes y si incluye control de acceso físico.",
    },
    {
      q: "¿Controla el acceso con QR o huella?",
      a: "Sí. Cada socio accede con su código QR o huella y el sistema valida si está al día al instante.",
    },
    {
      q: "¿Puedo ver quién debe la cuota?",
      a: "Sí. El panel muestra socios al día, por vencer y en mora, con recordatorios automáticos de cobro.",
    },
    {
      q: "¿Se integra con cobros automáticos?",
      a: "Sí, con MercadoPago u otros. El pago de la cuota se registra solo y actualiza el estado del socio.",
    },
    {
      q: "¿El sistema es nuestro o una suscripción?",
      a: "El sistema es tuyo, sin mensualidad ni costo por socio. Es un desarrollo a medida.",
    },
  ],
  veterinarias: [
    {
      q: "¿Cuánto cuesta un software para veterinarias?",
      a: "Los sistemas a medida arrancan desde USD 1.000 (desde $1.500.000 ARS). El precio depende de los módulos: historia clínica, stock y recordatorios.",
    },
    {
      q: "¿Guarda historia clínica de cada animal?",
      a: "Sí. Cada paciente tiene su ficha con vacunas, desparasitaciones, cirugías, controles programados y evolución, buscable por nombre o dueño.",
    },
    {
      q: "¿Envía recordatorios automáticos?",
      a: "Sí. Cuando toca un refuerzo de vacuna o un control, el sistema avisa al cliente por WhatsApp automáticamente.",
    },
    {
      q: "¿Controla stock de medicamentos y vacunas?",
      a: "Sí, con alertas de vencimiento y stock mínimo, conectado con lo que se consume en cada consulta.",
    },
    {
      q: "¿El sistema es nuestro?",
      a: "Sí, es 100% tuyo, sin licencias mensuales.",
    },
  ],
  talleres: [
    {
      q: "¿Cuánto cuesta un sistema para talleres mecánicos?",
      a: "Los sistemas a medida arrancan desde USD 1.000 (desde $1.500.000 ARS). El precio depende de si necesitás control de stock de repuestos, presupuestos y facturación.",
    },
    {
      q: "¿Puedo dar seguimiento a cada auto por patente?",
      a: "Sí. Cada vehículo entra con su patente, cliente, diagnóstico y presupuesto, y el sistema actualiza el estado en tiempo real.",
    },
    {
      q: "¿Controla repuestos y stock?",
      a: "Sí, con alertas de stock mínimo y registro de qué repuesto se usó en cada trabajo.",
    },
    {
      q: "¿Se integra con facturación?",
      a: "Sí. La facturación se conecta con cada orden de trabajo para que el cobro cierre con lo que realmente se hizo.",
    },
    {
      q: "¿El dueño puede ver todo en una pantalla?",
      a: "Sí. El panel muestra qué autos están listos, cuáles esperan repuestos y qué facturas están pendientes, sin depender de la memoria de nadie.",
    },
  ],
  dentistas: [
    {
      q: "¿Cuánto cuesta un sistema para consultorios dentales?",
      a: "Los sistemas a medida arrancan desde USD 1.000 (desde $1.500.000 ARS). El precio depende de los módulos: agenda, fichas de tratamiento y facturación.",
    },
    {
      q: "¿Guarda la ficha del paciente y los tratamientos?",
      a: "Sí. Cada paciente tiene su ficha con odontograma, tratamientos, indicaciones e historial de turnos.",
    },
    {
      q: "¿Con agenda de turnos con recordatorios?",
      a: "Sí. La agenda maneja disponibilidad por profesional y envía recordatorios automáticos para reducir ausencias.",
    },
    {
      q: "¿Se integra con obra social?",
      a: "Sí. El control de obra social y la facturación se conectan con los turnos y tratamientos realizados.",
    },
    {
      q: "¿El sistema es nuestro?",
      a: "Sí, es 100% tuyo, sin mensualidad por profesional.",
    },
  ],
  hoteles: [
    {
      q: "¿Cuánto cuesta un sistema de gestión hotelera?",
      a: "Los sistemas a medida arrancan desde USD 1.000 (desde $1.500.000 ARS). El precio depende de habitaciones, canales de reserva y si manejás varios establecimientos.",
    },
    {
      q: "¿Administra reservas y disponibilidad?",
      a: "Sí. Cada habitación con su estado, calendario de reservas y capacidad, con confirmación automática y control de overbooking.",
    },
    {
      q: "¿Lleva control de housekeeping y limpieza?",
      a: "Sí. El equipo de limpieza ve qué habitaciones están para check-out, ocupadas o pendientes de limpieza en tiempo real.",
    },
    {
      q: "¿Se integra con facturación?",
      a: "Sí. La facturación se conecta con la estancia para que el check-out cierre los consumos sin cargar nada dos veces.",
    },
    {
      q: "¿El sistema es nuestro?",
      a: "Sí, es 100% tuyo, sin licencias mensuales por habitación.",
    },
  ],
  nutricionistas: [
    {
      q: "¿Cuánto cuesta un sistema para nutricionistas?",
      a: "Los sistemas a medida arrancan desde USD 1.000 (desde $1.500.000 ARS). El precio depende de los módulos: planes, turnos y seguimiento de pacientes.",
    },
    {
      q: "¿Guarda los planes nutricionales de cada paciente?",
      a: "Sí. Cada paciente tiene sus planes, objetivos y medidas en una ficha donde podés comparar la evolución consulta a consulta.",
    },
    {
      q: "¿Gestiona turnos y recordatorios?",
      a: "Sí. La agenda maneja disponibilidad y envía recordatorios automáticos para reducir inasistencias.",
    },
    {
      q: "¿Puedo hacer seguimiento de evolución?",
      a: "Sí. El panel muestra el avance de cada paciente con gráficos y métricas, sin buscar en carpetas o papel.",
    },
    {
      q: "¿El sistema es nuestro?",
      a: "Sí, es 100% tuyo, sin mensualidad por profesional.",
    },
  ],
  "estudios-juridicos": [
    {
      q: "¿Cuánto cuesta un sistema para estudios jurídicos?",
      a: "Los sistemas a medida arrancan desde USD 1.000 (desde $1.500.000 ARS). El precio depende de la cantidad de causas, abogados y si necesitás control de plazos.",
    },
    {
      q: "¿Lleva causas, expedientes y plazos?",
      a: "Sí. Cada causa con su expediente, partes, movimientos y vencimientos, organizada por abogado y cliente.",
    },
    {
      q: "¿Hace seguimiento de vencimientos procesales?",
      a: "Sí. El sistema alerta antes de cada vencimiento o corrida de plazos para que nada se caiga por una fecha.",
    },
    {
      q: "¿Controla honorarios y facturación?",
      a: "Sí. Honorarios por caso, adelantos y facturación conectada con cada causa.",
    },
    {
      q: "¿El sistema es nuestro?",
      a: "Sí, es 100% tuyo, sin licencias mensuales por abogado.",
    },
  ],
  ferreterias: [
    {
      q: "¿Cuánto cuesta un sistema para ferreterías?",
      a: "Los sistemas a medida arrancan desde USD 1.000 (desde $1.500.000 ARS). El precio depende de la cantidad de productos, sucursales e integraciones.",
    },
    {
      q: "¿Lleva control de stock con alertas?",
      a: "Sí. Cada producto con su stock en tiempo real, alertas de mínimo y movimientos por venta, compra o ajuste.",
    },
    {
      q: "¿Se integra con facturación electrónica?",
      a: "Sí. La venta genera la factura automáticamente y descuenta el stock en la misma operación.",
    },
    {
      q: "¿Puedo manejar varios puntos de venta?",
      a: "Sí, con ventas por sucursal y stock discriminado por local, desde un mismo panel.",
    },
    {
      q: "¿El sistema es nuestro?",
      a: "Sí, es 100% tuyo, sin mensualidad ni costo por vendedor.",
    },
  ],
  concesionarias: [
    {
      q: "¿Cuánto cuesta un sistema para concesionarias?",
      a: "Los sistemas a medida arrancan desde USD 1.000 (desde $1.500.000 ARS). El precio depende de las unidades, vendedores e integraciones con tu operación.",
    },
    {
      q: "¿Administra unidades, stock y reventa?",
      a: "Sí. Cada unidad con su estado: disponible, reservada, vendida o en trámite, con historial por vehículo.",
    },
    {
      q: "¿Hace seguimiento de clientes y ventas?",
      a: "Sí. Pipeline de ventas por vendedor, consultas, test drives y cierre de operaciones con métricas individuales.",
    },
    {
      q: "¿Se integra con facturación?",
      a: "Sí. La facturación se conecta con la venta para que la operación cierre sin cargar datos dos veces.",
    },
    {
      q: "¿El sistema es nuestro?",
      a: "Sí, es 100% tuyo, sin licencias mensuales por vendedor.",
    },
  ],
};