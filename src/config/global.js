export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '3',
    tituloUnidad: 'Trabajo en equipo y equipos de alto desempeño',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Coaching',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Empowerment ',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Administración efectiva del tiempo',
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alles, M. A. (2007). Rol del jefe: cómo ser un buen jefe. Buenos Aires, Argentina: Ediciones Granica.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/66683?page=18',
    },
    {
      referencia:
        'Barbosa Cano, E. (2014). Administración del tiempo: cómo evitar que se desperdicie en el trabajo. Grupo Vanchri.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/167010?page=1',
    },
    {
      referencia:
        'Menéndez Cuenca, J. L. (2023). Principios del coaching (3 ed.). Madrid: Bubok Publishing S.L.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/260546?page=32',
    },
    {
      referencia:
        'Muradep, L., Goldvarg, D. y Perel de Goldvarg, N. (2022). Coaching Pack (1 ed.). Buenos Aires: Ediciones Granica.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/267032?page=36',
    },
    {
      referencia:
        'Pasquín, F. (2023). ¡No tengo tiempo! Claves para optimizar el tiempo y mejorar la gestión empresarial (1 ed.). FC Editorial.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/275488?page=53',
    },
    {
      referencia:
        'Pérez Rodríguez, M. D. (Coord.). (2017). Coaching. Editorial ICB.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/113235?page=10',
    },
    {
      referencia:
        'Ramos Ramos, P. (Coord.). (2015). Dirección de equipos de trabajo: liderazgo y motivación (2 ed.). Editorial ICB.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/105616?page=32',
    },
    {
      referencia:
        'Rodríguez González, Á. (2019). Coaching empresarial (1 ed.). Málaga, España: Editorial ICB.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/225276?page=48',
    },
  ],
  glosario: [
    {
      termino: 'Administración del tiempo',
      significado:
        'Habilidad para gestionar el tiempo de manera eficiente, priorizando tareas y reduciendo distracciones.',
    },
    {
      termino: 'Autoconocimiento',
      significado:
        'Capacidad de una persona para comprender sus propias emociones, comportamientos y pensamientos.',
    },
    {
      termino: 'Batching',
      significado:
        'Técnica para agrupar tareas similares y realizar actividades relacionadas en un mismo bloque de tiempo.',
    },
    {
      termino: 'Coaching',
      significado:
        'Proceso de acompañamiento profesional para ayudar a una persona a alcanzar metas personales o profesionales.',
    },
    {
      termino: 'Empowerment',
      significado:
        'Delegación de poder y autonomía a los empleados para fomentar la responsabilidad y el liderazgo compartido.',
    },
    {
      termino: 'Feedback',
      significado:
        'Retroalimentación dada a una persona o equipo para mejorar su desempeño y resultados.',
    },
    {
      termino: 'Inteligencia emocional',
      significado:
        'Capacidad para gestionar las propias emociones y comprender las de los demás de manera efectiva.',
    },
    {
      termino: 'Kairos',
      significado:
        'Concepto de tiempo cualitativo que se enfoca en el momento oportuno y significativo.',
    },
    {
      termino: 'Multitasking',
      significado:
        'Realización de múltiples tareas simultáneamente, alternando rápidamente entre ellas.',
    },
    {
      termino: 'Procrastinación',
      significado:
        'Tendencia a posponer tareas importantes, priorizando actividades menos relevantes.',
    },
    {
      termino: 'Proxémica',
      significado:
        'Estudio del uso del espacio personal y la distancia en la comunicación interpersonal.',
    },
    {
      termino: 'Timeboxing',
      significado:
        'Técnica de gestión del tiempo que divide tareas en bloques específicos y predefinidos.',
    },
    {
      termino: 'Visión organizacional',
      significado:
        'Idea clara y compartida sobre el futuro deseado de una organización.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
