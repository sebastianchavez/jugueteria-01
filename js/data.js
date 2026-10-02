/* ============================================
   DATA.JS - Datos mockeados Mi Mundo de Juguetes
   ============================================ */

const CATEGORIAS = [
  { id: 'munecas', nombre: 'Muñecas y Accesorios', icono: '🪆', descripcion: 'Muñecas, casas y sets' },
  { id: 'figuras', nombre: 'Figuras de Acción', icono: '🦸', descripcion: 'Superhéroes y coleccionables' },
  { id: 'mesa', nombre: 'Juegos de Mesa', icono: '🎲', descripcion: 'Diversión en familia' },
  { id: 'peluches', nombre: 'Peluches', icono: '🧸', descripcion: 'Suaves y abrazables' },
  { id: 'educativos', nombre: 'Juguetes Educativos', icono: '📚', descripcion: 'Aprender jugando' },
  { id: 'vehiculos', nombre: 'Vehículos y Pistas', icono: '🚗', descripcion: 'Autos, trenes y más' },
  { id: 'arte', nombre: 'Arte y Manualidades', icono: '🎨', descripcion: 'Pintura, plastilina, kits' },
  { id: 'exterior', nombre: 'Exterior y Deportes', icono: '⚽', descripcion: 'A jugar al aire libre' }
];

const EDADES = [
  { id: '0-2', label: '0 a 2 años', min: 0, max: 2 },
  { id: '3-5', label: '3 a 5 años', min: 3, max: 5 },
  { id: '6-8', label: '6 a 8 años', min: 6, max: 8 },
  { id: '9-12', label: '9 a 12 años', min: 9, max: 12 },
  { id: '13+', label: '13 años o más', min: 13, max: 99 }
];

const PRODUCTOS = [
  // MUÑECAS Y ACCESORIOS
  {
    id: 'j001',
    nombre: 'Muñeca Bebé Reborn Llorona',
    categoria: 'munecas',
    precio: 18990,
    precioAnterior: 22990,
    imagen: 'https://picsum.photos/seed/j001/600/600',
    descripcion: 'Muñeca reborn de 45cm con rasgos realistas. Incluye pijama, chupete y certificado de nacimiento.',
    edadMin: 3,
    edadMax: 8,
    marca: 'Bebé Feliz',
    stock: 12,
    destacado: true,
    rating: 4.9
  },
  {
    id: 'j002',
    nombre: 'Casa de Muñecas de Madera 3 Pisos',
    categoria: 'munecas',
    precio: 34990,
    precioAnterior: null,
    imagen: 'https://picsum.photos/seed/j002/600/600',
    descripcion: 'Casa de muñecas de madera con 3 pisos, amoblada y con 4 muñecos incluidos.',
    edadMin: 6,
    edadMax: 12,
    marca: 'Casita Mágica',
    stock: 6,
    destacado: true,
    rating: 4.8
  },
  {
    id: 'j003',
    nombre: 'Set de Accesorios para Muñecas (24 piezas)',
    categoria: 'munecas',
    precio: 8990,
    precioAnterior: 11990,
    imagen: 'https://picsum.photos/seed/j003/600/600',
    descripcion: 'Set con 24 accesorios: ropa, zapatos, peinetas, joyas y maletín de transporte.',
    edadMin: 3,
    edadMax: 10,
    marca: 'Fashion Doll',
    stock: 25,
    destacado: false,
    rating: 4.6
  },

  // FIGURAS DE ACCIÓN
  {
    id: 'j004',
    nombre: 'Pack Superhéroes Mega Colección',
    categoria: 'figuras',
    precio: 14990,
    precioAnterior: 19990,
    imagen: 'https://picsum.photos/seed/j004/600/600',
    descripcion: 'Pack de 8 figuras de superhéroes articuladas de 15cm con accesorios intercambiables.',
    edadMin: 4,
    edadMax: 12,
    marca: 'HeroForce',
    stock: 18,
    destacado: true,
    rating: 4.9
  },
  {
    id: 'j005',
    nombre: 'Set de Dinosaurios Realistas (12 piezas)',
    categoria: 'figuras',
    precio: 11990,
    precioAnterior: null,
    imagen: 'https://picsum.photos/seed/j005/600/600',
    descripcion: 'Colección de 12 dinosaurios de plástico con detalles pintados a mano. Tamaño entre 8 y 20cm.',
    edadMin: 3,
    edadMax: 12,
    marca: 'DinoWorld',
    stock: 22,
    destacado: false,
    rating: 4.7
  },
  {
    id: 'j006',
    nombre: 'Ejército de Soldados (50 figuras)',
    categoria: 'figuras',
    precio: 9990,
    precioAnterior: null,
    imagen: 'https://picsum.photos/seed/j006/600/600',
    descripcion: 'Set de 50 soldados de plástico en distintas poses con vehículos militares incluidos.',
    edadMin: 5,
    edadMax: 12,
    marca: 'Comando Toys',
    stock: 15,
    destacado: false,
    rating: 4.5
  },

  // JUEGOS DE MESA
  {
    id: 'j007',
    nombre: 'Monopolio Clásico Familiar',
    categoria: 'mesa',
    precio: 18990,
    precioAnterior: 22990,
    imagen: 'https://picsum.photos/seed/j007/600/600',
    descripcion: 'El clásico juego de propiedades y dinero para 2-8 jugadores. Versión actualizada.',
    edadMin: 8,
    edadMax: 99,
    marca: 'Hasbro',
    stock: 20,
    destacado: true,
    rating: 4.8
  },
  {
    id: 'j008',
    nombre: 'Ajedrez de Madera Tallada',
    categoria: 'mesa',
    precio: 15990,
    precioAnterior: null,
    imagen: 'https://picsum.photos/seed/j008/600/600',
    descripcion: 'Tablero de ajedrez de madera con piezas talladas a mano de 8cm. Incluye estuche.',
    edadMin: 6,
    edadMax: 99,
    marca: 'Madera Viva',
    stock: 10,
    destacado: false,
    rating: 4.9
  },
  {
    id: 'j009',
    nombre: 'UNO Edición Familiar',
    categoria: 'mesa',
    precio: 5990,
    precioAnterior: null,
    imagen: 'https://picsum.photos/seed/j009/600/600',
    descripcion: 'El clásico juego de cartas UNO para 2-10 jugadores. Ideal para reuniones familiares.',
    edadMin: 6,
    edadMax: 99,
    marca: 'Mattel',
    stock: 40,
    destacado: true,
    rating: 4.9
  },

  // PELUCHES
  {
    id: 'j010',
    nombre: 'Oso de Peluche Gigante 1.2m',
    categoria: 'peluches',
    precio: 24990,
    precioAnterior: 29990,
    imagen: 'https://picsum.photos/seed/j010/600/600',
    descripcion: 'Oso de peluche gigante de 1.2 metros, súper suave y abrazable. Color marrón caramelo.',
    edadMin: 0,
    edadMax: 99,
    marca: 'PelucheCloud',
    stock: 8,
    destacado: true,
    rating: 4.9
  },
  {
    id: 'j011',
    nombre: 'Conejito Suave Rosa 40cm',
    categoria: 'peluches',
    precio: 7990,
    precioAnterior: null,
    imagen: 'https://picsum.photos/seed/j011/600/600',
    descripcion: 'Conejito de peluche rosa de 40cm con cinta satinada en el cuello. Material hipoalergénico.',
    edadMin: 0,
    edadMax: 8,
    marca: 'PelucheCloud',
    stock: 30,
    destacado: false,
    rating: 4.7
  },
  {
    id: 'j012',
    nombre: 'Unicornio Mágico Arcoíris 60cm',
    categoria: 'peluches',
    precio: 12990,
    precioAnterior: 15990,
    imagen: 'https://picsum.photos/seed/j012/600/600',
    descripcion: 'Unicornio de peluche con crin de colores, alas brillantes y cola multicolor. Brilla en la oscuridad.',
    edadMin: 3,
    edadMax: 12,
    marca: 'MagicPet',
    stock: 18,
    destacado: true,
    rating: 4.8
  },

  // JUGUETES EDUCATIVOS
  {
    id: 'j013',
    nombre: 'Lego Classic Caja Creativa 484 piezas',
    categoria: 'educativos',
    precio: 22990,
    precioAnterior: null,
    imagen: 'https://picsum.photos/seed/j013/600/600',
    descripcion: 'Set de 484 piezas Lego Classic en 35 colores diferentes para crear lo que imagines.',
    edadMin: 4,
    edadMax: 12,
    marca: 'LEGO',
    stock: 14,
    destacado: true,
    rating: 5.0
  },
  {
    id: 'j014',
    nombre: 'Set de Ciencias: Volcán Eruptivo',
    categoria: 'educativos',
    precio: 9990,
    precioAnterior: 12990,
    imagen: 'https://picsum.photos/seed/j014/600/600',
    descripcion: 'Kit científico para crear un volcán en erupción. Incluye instrucciones, bicarbonato y colorante.',
    edadMin: 6,
    edadMax: 12,
    marca: 'CienciaDivertida',
    stock: 22,
    destacado: false,
    rating: 4.6
  },
  {
    id: 'j015',
    nombre: 'Pizarra Magnética Doble Cara',
    categoria: 'educativos',
    precio: 14990,
    precioAnterior: null,
    imagen: 'https://picsum.photos/seed/j015/600/600',
    descripcion: 'Pizarra blanca y verde magnética de 60x80cm con 50 letras magnéticas y 20 números.',
    edadMin: 3,
    edadMax: 10,
    marca: 'EduPlay',
    stock: 16,
    destacado: false,
    rating: 4.7
  },

  // VEHÍCULOS Y PISTAS
  {
    id: 'j016',
    nombre: 'Pista Hot Wheels Mega Loop',
    categoria: 'vehiculos',
    precio: 19990,
    precioAnterior: 24990,
    imagen: 'https://picsum.photos/seed/j016/600/600',
    descripcion: 'Pista de autos con loop 360°, más de 4 metros de recorrido y 2 autos incluidos.',
    edadMin: 5,
    edadMax: 12,
    marca: 'Hot Wheels',
    stock: 11,
    destacado: true,
    rating: 4.8
  },
  {
    id: 'j017',
    nombre: 'Camión de Bomberos a Control Remoto',
    categoria: 'vehiculos',
    precio: 16990,
    precioAnterior: null,
    imagen: 'https://picsum.photos/seed/j017/600/600',
    descripcion: 'Camión de bomberos a control remoto con luces, sonido de sirena y manguera de agua funcional.',
    edadMin: 6,
    edadMax: 12,
    marca: 'RC Adventures',
    stock: 9,
    destacado: false,
    rating: 4.5
  },
  {
    id: 'j018',
    nombre: 'Set de Tren Eléctrico de Madera',
    categoria: 'vehiculos',
    precio: 24990,
    precioAnterior: null,
    imagen: 'https://picsum.photos/seed/j018/600/600',
    descripcion: 'Tren eléctrico con 12 vías de madera, locomotora, 3 vagones y estación incluida.',
    edadMin: 3,
    edadMax: 10,
    marca: 'TrenKids',
    stock: 7,
    destacado: true,
    rating: 4.9
  },

  // ARTE Y MANUALIDADES
  {
    id: 'j019',
    nombre: 'Set de Pinturas Acuarela 48 colores',
    categoria: 'arte',
    precio: 9990,
    precioAnterior: 13990,
    imagen: 'https://picsum.photos/seed/j019/600/600',
    descripcion: 'Set profesional de acuarelas con 48 colores vibrantes, pinceles y bloc de papel de 50 hojas.',
    edadMin: 5,
    edadMax: 99,
    marca: 'ArtMaster',
    stock: 28,
    destacado: true,
    rating: 4.8
  },
  {
    id: 'j020',
    nombre: 'Plastilina 24 Colores No Tóxica',
    categoria: 'arte',
    precio: 5990,
    precioAnterior: null,
    imagen: 'https://picsum.photos/seed/j020/600/600',
    descripcion: 'Set de 24 barras de plastilina no tóxica con herramientas de modelado y moldes.',
    edadMin: 3,
    edadMax: 12,
    marca: 'PlastiKids',
    stock: 35,
    destacado: false,
    rating: 4.7
  },
  {
    id: 'j021',
    nombre: 'Kit de Pulseras y Joyería para Niñas',
    categoria: 'arte',
    precio: 7990,
    precioAnterior: 9990,
    imagen: 'https://picsum.photos/seed/j021/600/600',
    descripcion: 'Kit para crear pulseras y collares con más de 1000 cuentas de colores, hilos y charms.',
    edadMin: 6,
    edadMax: 12,
    marca: 'JoyaCreativa',
    stock: 20,
    destacado: false,
    rating: 4.6
  },

  // EXTERIOR Y DEPORTES
  {
    id: 'j022',
    nombre: 'Pelota de Fútbol Profesional Talla 4',
    categoria: 'exterior',
    precio: 11990,
    precioAnterior: null,
    imagen: 'https://picsum.photos/seed/j022/600/600',
    descripcion: 'Pelota de fútbol tamaño 4 (para niños 8-12 años), cosida a mano y resistente.',
    edadMin: 6,
    edadMax: 14,
    marca: 'Golazo',
    stock: 24,
    destacado: true,
    rating: 4.8
  },
  {
    id: 'j023',
    nombre: 'Bicicleta Infantil Rodada 16 con Ruedines',
    categoria: 'exterior',
    precio: 89990,
    precioAnterior: 99990,
    imagen: 'https://picsum.photos/seed/j023/600/600',
    descripcion: 'Bicicleta rodada 16 para niños de 4-7 años. Incluye ruedines, canasto y timbre.',
    edadMin: 4,
    edadMax: 8,
    marca: 'BikeKids',
    stock: 5,
    destacado: true,
    rating: 4.9
  },
  {
    id: 'j024',
    nombre: 'Set de Playa: Cubeta, Moldes y Palas',
    categoria: 'exterior',
    precio: 4990,
    precioAnterior: null,
    imagen: 'https://picsum.photos/seed/j024/600/600',
    descripcion: 'Set completo de playa con 20 piezas: cubeta, regadera, palas, moldes de animales y más.',
    edadMin: 2,
    edadMax: 10,
    marca: 'SummerFun',
    stock: 40,
    destacado: false,
    rating: 4.6
  }
];

const EQUIPO = [
  { id: 'e1', nombre: 'Camila Torres', rol: 'Fundadora y CEO', foto: 'https://picsum.photos/seed/equipo-camila/400/400', bio: 'Mamá de 2 y apasionada por el juego. Creó Mi Mundo de Juguetes en 2018.' },
  { id: 'e2', nombre: 'Sebastián Rojas', rol: 'Gerente de Tienda', foto: 'https://picsum.photos/seed/equipo-sebastian/400/400', bio: 'Especialista en juguetes educativos con 10 años de experiencia en retail.' },
  { id: 'e3', nombre: 'Francisca Pérez', rol: 'Atención al Cliente', foto: 'https://picsum.photos/seed/equipo-francisca/400/400', bio: 'La voz amable que te ayuda a elegir el juguete perfecto para cada edad.' },
  { id: 'e4', nombre: 'Matías González', rol: 'Diseñador de Experiencias', foto: 'https://picsum.photos/seed/equipo-matias/400/400', bio: 'Se encarga de que cada visita a nuestra tienda sea mágica e inolvidable.' },
  { id: 'e5', nombre: 'Valentina Soto', rol: 'Community Manager', foto: 'https://picsum.photos/seed/equipo-valentina/400/400', bio: 'Comparte ideas de juego y actividades en nuestras redes sociales.' }
];

const TESTIMONIOS = [
  {
    id: 't1',
    nombre: 'Andrea M.',
    texto: 'Mis hijos están felices con cada compra. Los juguetes son seguros, educativos y de excelente calidad. ¡100% recomendado!',
    avatar: 'https://picsum.photos/seed/avatar-maria/200/200',
    rating: 5
  },
  {
    id: 't2',
    nombre: 'Rodrigo P.',
    texto: 'El servicio de despacho es rapidísimo y la atención al cliente es de primer nivel. Encontré el regalo perfecto para mi hija.',
    avatar: 'https://picsum.photos/seed/avatar-juan/200/200',
    rating: 5
  },
  {
    id: 't3',
    nombre: 'Carolina L.',
    texto: 'Me encanta que tengan juguetes para todas las edades y que se preocupen por la seguridad. Siempre vuelvo a comprar.',
    avatar: 'https://picsum.photos/seed/avatar-valentina/200/200',
    rating: 5
  }
];

const USUARIOS_INICIALES = [
  {
    id: 'u1',
    nombre: 'María González',
    email: 'maria@ejemplo.com',
    password: '123456',
    telefono: '+56 9 8765 4321',
    direccion: 'Av. Las Flores 1234, Depto 502',
    comuna: 'Providencia',
    region: 'Región Metropolitana',
    fechaRegistro: '2024-08-15T10:30:00Z'
  },
  {
    id: 'u2',
    nombre: 'Juan Pérez',
    email: 'juan@ejemplo.com',
    password: '123456',
    telefono: '+56 9 1234 5678',
    direccion: 'Los Placeres 567',
    comuna: 'Viña del Mar',
    region: 'Región de Valparaíso',
    fechaRegistro: '2024-09-20T14:20:00Z'
  }
];

const PEDIDOS_INICIALES = [
  {
    id: 'PED-2024-001',
    usuarioId: 'u1',
    fecha: '2024-09-10T15:30:00Z',
    estado: 'entregado',
    items: [
      { productoId: 'j013', nombre: 'Lego Classic Caja Creativa 484 piezas', precio: 22990, cantidad: 1, imagen: PRODUCTOS.find(p => p.id === 'j013').imagen },
      { productoId: 'j019', nombre: 'Set de Pinturas Acuarela 48 colores', precio: 9990, cantidad: 1, imagen: PRODUCTOS.find(p => p.id === 'j019').imagen }
    ],
    subtotal: 32980,
    envio: 3990,
    envioTipo: 'Estándar (3-5 días hábiles)',
    total: 36970,
    direccion: 'Av. Las Flores 1234, Depto 502, Providencia',
    pago: 'Webpay',
    seguimiento: [
      { estado: 'Confirmado', fecha: '2024-09-10T15:30:00Z' },
      { estado: 'Preparando', fecha: '2024-09-11T09:00:00Z' },
      { estado: 'En camino', fecha: '2024-09-12T14:00:00Z' },
      { estado: 'Entregado', fecha: '2024-09-14T11:30:00Z' }
    ]
  },
  {
    id: 'PED-2024-002',
    usuarioId: 'u1',
    fecha: '2024-09-25T11:15:00Z',
    estado: 'en-camino',
    items: [
      { productoId: 'j010', nombre: 'Oso de Peluche Gigante 1.2m', precio: 24990, cantidad: 1, imagen: PRODUCTOS.find(p => p.id === 'j010').imagen },
      { productoId: 'j011', nombre: 'Conejito Suave Rosa 40cm', precio: 7990, cantidad: 2, imagen: PRODUCTOS.find(p => p.id === 'j011').imagen }
    ],
    subtotal: 40970,
    envio: 7990,
    envioTipo: 'Express (24h)',
    total: 48960,
    direccion: 'Av. Las Flores 1234, Depto 502, Providencia',
    pago: 'Webpay',
    seguimiento: [
      { estado: 'Confirmado', fecha: '2024-09-25T11:15:00Z' },
      { estado: 'Preparando', fecha: '2024-09-25T16:00:00Z' },
      { estado: 'En camino', fecha: '2024-09-26T10:00:00Z' }
    ]
  },
  {
    id: 'PED-2024-003',
    usuarioId: 'u1',
    fecha: '2024-09-30T18:45:00Z',
    estado: 'preparando',
    items: [
      { productoId: 'j022', nombre: 'Pelota de Fútbol Profesional Talla 4', precio: 11990, cantidad: 1, imagen: PRODUCTOS.find(p => p.id === 'j022').imagen }
    ],
    subtotal: 11990,
    envio: 0,
    envioTipo: 'Retiro en tienda',
    total: 11990,
    direccion: 'Retiro en tienda: Av. Providencia 1234, Local 5',
    pago: 'Transferencia bancaria',
    seguimiento: [
      { estado: 'Confirmado', fecha: '2024-09-30T18:45:00Z' },
      { estado: 'Preparando', fecha: '2024-10-01T09:00:00Z' }
    ]
  }
];

const RESENAS_INICIALES = [
  {
    id: 'r1',
    productoId: 'j013',
    usuarioId: 'u1',
    usuarioNombre: 'María González',
    usuarioAvatar: 'https://picsum.photos/seed/avatar-maria/200/200',
    rating: 5,
    titulo: '¡Increíble!',
    comentario: 'Mis hijos han creado cosas asombrosas con este set. La calidad de Lego es inigualable, las piezas encajan perfecto y el color es vibrante. Lo recomiendo 100%.',
    fecha: '2024-09-20T14:00:00Z'
  },
  {
    id: 'r2',
    productoId: 'j013',
    usuarioId: 'u2',
    usuarioNombre: 'Juan Pérez',
    usuarioAvatar: 'https://picsum.photos/seed/avatar-juan/200/200',
    rating: 5,
    titulo: 'Excelente regalo',
    comentario: 'Se lo regalé a mi hijo de 6 años y no ha parado de jugar. Le encanta construir sus propias historias.',
    fecha: '2024-09-22T10:30:00Z'
  },
  {
    id: 'r3',
    productoId: 'j019',
    usuarioId: 'u1',
    usuarioNombre: 'María González',
    usuarioAvatar: 'https://picsum.photos/seed/avatar-maria/200/200',
    rating: 4,
    titulo: 'Muy buena calidad',
    comentario: 'Los colores son muy vivos y el pincel se siente bien. Mi hija de 7 años está feliz.',
    fecha: '2024-09-21T16:20:00Z'
  },
  {
    id: 'r4',
    productoId: 'j010',
    usuarioId: 'u2',
    usuarioNombre: 'Juan Pérez',
    usuarioAvatar: 'https://picsum.photos/seed/avatar-juan/200/200',
    rating: 5,
    titulo: 'Mi hija lo ama',
    comentario: 'El oso es gigante, suave y súper lindo. Mi hija no lo suelta ni para dormir. La calidad del peluche es excelente.',
    fecha: '2024-09-18T19:00:00Z'
  },
  {
    id: 'r5',
    productoId: 'j022',
    usuarioId: 'u1',
    usuarioNombre: 'María González',
    usuarioAvatar: 'https://picsum.photos/seed/avatar-maria/200/200',
    rating: 5,
    titulo: 'Resistente y bonita',
    comentario: 'La pelota es muy resistente, aguanta los partidos más intensos del fin de semana. El diseño es muy bonito.',
    fecha: '2024-09-15T12:00:00Z'
  },
  {
    id: 'r6',
    productoId: 'j009',
    usuarioId: 'u2',
    usuarioNombre: 'Juan Pérez',
    usuarioAvatar: 'https://picsum.photos/seed/avatar-juan/200/200',
    rating: 5,
    titulo: 'Diversión asegurada',
    comentario: 'Jugamos en familia todas las noches. Es súper fácil de aprender y siempre hay risas.',
    fecha: '2024-09-12T20:00:00Z'
  }
];

const OPCIONES_ENVIO = [
  { id: 'retiro', nombre: 'Retiro en tienda', descripcion: 'Av. Providencia 1234, Local 5', dias: 'Disponible en 24h', precio: 0 },
  { id: 'estandar', nombre: 'Estándar', descripcion: 'Despacho a domicilio', dias: '3-5 días hábiles', precio: 3990 },
  { id: 'express', nombre: 'Express', descripcion: 'Despacho prioritario', dias: '24h hábiles', precio: 7990 }
];

const MEDIOS_PAGO = [
  { id: 'webpay', nombre: 'Webpay', descripcion: 'Tarjetas de crédito y débito', icono: '💳' },
  { id: 'transferencia', nombre: 'Transferencia bancaria', descripcion: 'Pago mediante transferencia', icono: '🏦' },
  { id: 'contraentrega', nombre: 'Contra entrega', descripcion: 'Paga al recibir tu pedido', icono: '📦' }
];

const INFO_TIENDA = {
  nombre: 'Mi Mundo de Juguetes',
  slogan: 'Donde la diversión comienza',
  email: 'hola@mimundodejuguetes.cl',
  telefono: '+56 2 2345 6789',
  whatsapp: '+56 9 8765 4321',
  direccion: 'Av. Providencia 1234, Local 5',
  comuna: 'Providencia',
  ciudad: 'Santiago',
  region: 'Región Metropolitana',
  horarios: [
    { dia: 'Lunes a Viernes', horario: '10:00 - 20:00' },
    { dia: 'Sábado', horario: '10:00 - 21:00' },
    { dia: 'Domingo', horario: '11:00 - 19:00' }
  ],
  redes: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://tiktok.com'
  }
};
