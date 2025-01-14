<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Liderazgo: conceptualización, características y modelos empresariales de liderazgo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        p.mb-4 El liderazgo, aunque se presenta como un concepto sencillo, encierra una complejidad que requiere una comprensión profunda de sus dimensiones y aplicaciones. Este concepto no se limita a quienes tienen a cargo un equipo o una posición de mando. Muchas personas, especialmente en etapas tempranas de sus carreras, tienden a relacionar el liderazgo únicamente con roles de "jefatura". Sin embargo, ser líder trasciende este ámbito, ya que implica influir, motivar e inspirar a otros, independientemente de un título formal. 
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Esta perspectiva amplía el entendimiento del liderazgo como una capacidad que puede ejercerse en diversos contextos, desde lo personal hasta lo organizacional. El desarrollo de habilidades de liderazgo comienza con el auto-liderazgo, que consiste en gestionar las propias acciones con responsabilidad, cumplir acuerdos establecidos y aportar valor a las tareas asignadas.
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')  

    p.mb-4 Un líder efectivo no solo tiene la capacidad de dirigir, sino también de marcar una diferencia significativa en cada acción que realiza. Este esfuerzo adicional, conocido como "la milla extra", refleja el compromiso y la proactividad que definen al liderazgo auténtico. Estas cualidades no se desarrollan de un día para otro; son el resultado de un proceso continuo de aprendizaje y desarrollo personal que debería fomentarse desde una edad temprana.
    h2 El liderazgo en contextos diversos
    p.mb-4 El liderazgo no se limita al ámbito empresarial o organizacional. Puede surgir en diferentes contextos, como en el deporte, la educación, los círculos sociales e incluso en el entorno familiar. En cada uno de estos escenarios, un líder inspira y guía a otros hacia un objetivo común, demostrando que el liderazgo no depende de una estructura jerárquica.
    p.mb-4 Es importante aclarar un concepto erróneo asociado con el liderazgo: la idea de que un líder debe necesariamente tener un equipo de trabajo a su cargo.
    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") Existen numerosos ejemplos de líderes que, sin ocupar roles jerárquicos, ejercen una influencia significativa a través de su ejemplo, compromiso y capacidad para inspirar. Este liderazgo individual demuestra que la esencia de liderar radica en las acciones y no en los títulos.

    h2 Distinción entre líder y jefe
    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        p.mb-4  Uno de los aspectos esenciales para comprender el liderazgo es la diferenciación entre un "líder" y un "jefe". Mientras que el jefe se asocia con la imposición y la autoridad formal, el líder se distingue por su capacidad de influir positivamente en su equipo.
        .d-flex.align-items-start.bg-azul.p-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-6.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") El "jefe" suele ser visto como alguien que ordena y supervisa, pero carece de las habilidades necesarias para inspirar y motivar. Por otro lado, el líder construye relaciones basadas en la confianza y la colaboración, fomentando un ambiente de trabajo que potencia el compromiso y el desempeño de los miembros del equipo.
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')  

    p.mb-4 En el ámbito laboral actual, el término "jefe" ha sido desplazado por el de "líder", ya que este último refleja un enfoque más humano e inclusivo. Las organizaciones modernas valoran el liderazgo auténtico, que se centra en el desarrollo de las personas y en la creación de una cultura organizacional positiva.
    h2 Características del liderazgo
    p.mb-4 El liderazgo efectivo se basa en una serie de características que definen su impacto y alcance:

    ImagenInfografica.color-secundario.mb-4.d-none.d-lg-block
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')

      .tarjeta.bg-marron.p-4(x="26%" y="47%" numero="+")
        .h5.mb-2 Comunicación efectiva
        p La capacidad de transmitir ideas de manera clara y persuasiva es fundamental para un liderazgo exitoso.
      .tarjeta.bg-amarillo.p-4(x="27.5%" y="21%" numero="+")
        .h5.mb-2 Empatía
        p Un buen líder comprende las necesidades y emociones de los demás, lo que le permite construir relaciones sólidas.
      .tarjeta.bg-azul.p-4(x="49.5%" y="13%" numero="+")
        .h5.mb-2 Adaptabilidad
        p La flexibilidad para ajustarse a cambios y desafíos es una cualidad indispensable en un entorno dinámico.
      .tarjeta.bg-gris.p-4(x="72%" y="21%" numero="+")
        .h5.mb-2 Toma de decisiones
        p Un líder debe ser capaz de analizar situaciones, evaluar opciones y tomar decisiones acertadas bajo presión.
      .tarjeta.bg-rojo.p-4(x="74%" y="47%" numero="+")
        .h5.mb-2 Proactividad
        p La disposición para anticiparse a los problemas y buscar soluciones demuestra el compromiso y la responsabilidad del líder.

    ImagenInfografica.color-secundario.mb-4.d-block.d-lg-none
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
      .tarjeta.bg-marron.p-4(x="26%" y="47%" numero="+")
        .h5.mb-2 Comunicación efectiva
        p La capacidad de transmitir ideas de manera clara y persuasiva es fundamental para un liderazgo exitoso.
      .tarjeta.bg-amarillo.p-4(x="27.5%" y="21%" numero="+")
        .h5.mb-2 Empatía
        p Un buen líder comprende las necesidades y emociones de los demás, lo que le permite construir relaciones sólidas.
      .tarjeta.bg-azul.p-4(x="49.5%" y="13%" numero="+")
        .h5.mb-2 Adaptabilidad
        p La flexibilidad para ajustarse a cambios y desafíos es una cualidad indispensable en un entorno dinámico.
      .tarjeta.bg-gris.p-4(x="72%" y="21%" numero="+")
        .h5.mb-2 Toma de decisiones
        p Un líder debe ser capaz de analizar situaciones, evaluar opciones y tomar decisiones acertadas bajo presión.
      .tarjeta.bg-rojo.p-4(x="74%" y="47%" numero="+")
        .h5.mb-2 Proactividad
        p La disposición para anticiparse a los problemas y buscar soluciones demuestra el compromiso y la responsabilidad del líder.

    h2 Liderazgo individual y organizacional
    p.mb-4 El liderazgo puede entenderse desde dos perspectivas principales:

    .row.position-relative.mb-4.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Liderazgo individual
              p Se centra en las características personales del líder, como sus habilidades, conocimientos y principios éticos. Es crucial para inspirar y guiar a otros hacia objetivos comunes.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Liderazgo organizacional
              p Va más allá del individuo, abarcando sistemas y procesos que fomentan una cultura de liderazgo dentro de la organización, asegurando su continuidad a largo plazo.

    h2 Definición académica del liderazgo
    .row.mb-4
      .col-12.col-lg-4
        .bg-azul.p-4.mb-4(data-aos="fade-right")
          span Según Ruiz (2017), "el liderazgo es la actitud que mueve a la iniciativa de un individuo para cambiar el estado de cosas que deben ser cambiadas". Esta definición resalta que el liderazgo se identifica en la acción, cuando alguien toma la iniciativa para transformar una situación que afecta a una persona, grupo o comunidad.
      .col-3.d-none.d-lg-block
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
      .col-12.col-lg-5(data-aos="fade-left")
        .bg-marron-claro.p-4
          span El liderazgo no se limita a una posición de poder, sino que se manifiesta en la capacidad de influir y transformar realidades. Este concepto abarca tanto el desarrollo personal como la creación de estructuras organizacionales que fomenten un liderazgo sostenible. La distinción entre "líder" y "jefe", las características esenciales del liderazgo y su aplicación en diversos contextos destacan la importancia de esta competencia en todos los ámbitos de la vida.
      
    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Características del liderazgo 

    p.mb-4 El liderazgo no se define por un único atributo, sino por una combinación de competencias y habilidades que en conjunto permiten a una persona destacarse como líder. A continuación, se detallan varias características esenciales del liderazgo, basadas en propuestas de diversos autores, para proporcionar un marco integral de desarrollo personal y profesional.
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-marron-claro.p-4.h-100
          p.text-bold Comunicación asertiva
          .d-flex.align-items-start
            img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-13.svg', alt='Texto que describa la imagen')
            .d-flex.flex-column
              p.pe-xl-3.mb-0(data-aos="fade-up") La comunicación asertiva es una habilidad clave en el desarrollo de líderes, aunque se abordará con mayor profundidad en un capítulo posterior. En términos generales, se trata de un estilo de comunicación que permite expresar pensamientos, sentimientos y necesidades de manera clara y directa, respetando siempre a los demás.

      .d-none.d-xl-block.col-xl-5(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')

    p.mb-4 Sus características principales incluyen:
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo
              span 1
            p.mb-0 <b>Claridad. </b>Expresión de ideas y sentimientos de forma comprensible.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo
              span 2
            p.mb-0 <b>Respeto. </b>Consideración tanto por las propias opiniones como por las de los demás, evitando actitudes agresivas o pasivas.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo
              span 3
            p.mb-0 <b>Empatía (rapport). </b>Capacidad para comprender el punto de vista de la otra persona, eligiendo el momento y lugar ideales para conversar.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-rojo
              span 4
            p.mb-0 <b>Escucha activa. </b>Disposición para conectar genuinamente con el otro y prestar atención a lo que expresa.

    p.mb-4 La comunicación asertiva es fundamental en las relaciones interpersonales, especialmente en contextos laborales y en la resolución de conflictos, ya que promueve un ambiente de respeto y colaboración.
    h3 Retroalimentación (feedback)
    p.mb-4 La retroalimentación es una herramienta esencial del liderazgo, que va más allá de la simple evaluación del desempeño. Este proceso implica proporcionar información constructiva sobre el comportamiento, los resultados o la actuación de una persona, con el objetivo de fomentar la mejora o reforzar acciones positivas.
    p.mb-4.text-bold Algunas características clave del feedback son:
    .row.mb-4
      .col-12.col-xl-8
        .w-100.p-3.bg-marron(data-aos="fade-up")
          p.mb-0.text-center.text-bold Madurez
        .w-100.p-4.bg-marron-claro.mb-4(data-aos="fade-up")
          p.mb-0.text-center Capacidad de sostener conversaciones difíciles pero constructivas, considerándooslos aspectos externos (ambiente, momento adecuado, contexto) e internos(elección de palabras, tonos de voz, gestión emocional).
        .w-100.p-3.bg-marron(data-aos="fade-up")
          p.mb-0.text-center.text-bold Claridad de expectativas
        .w-100.p-4.bg-marron-claro.mb-4(data-aos="fade-up")
          p.mb-0.text-center Permite alinear a los equipos en torno a objetivos comunes.
        .w-100.p-3.bg-marron(data-aos="fade-up")
          p.mb-0.text-center.text-bold Relaciones fortalecidas
        .w-100.p-4.bg-marron-claro(data-aos="fade-up")
          p.mb-0.text-center Favorece un ambiente de confianza y conexionarme efectiva dentro de los equipos.

      .col-8.col-xl-4.mx-auto(data-aos="fade-left")
        img.d-none.d-xl-block.mb-4(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
        span Aunque el feedback puede generar resistencia cuando se percibe de manera personal, abordarlo con sensibilidad y cuidado asegura que sea constructivo. Este proceso no solo mejora el rendimiento, sino que también contribuye a crear un entorno laboral positivo, donde las personas se sientan valoradas y motivadas.

    .bg-fondo-2.bg-full-width
      .px-5.pb-md-3.py-4

        h2 Toma de decisiones
        p.mb-4 La toma de decisiones es otra habilidad crucial en el liderazgo, ya que implica evaluar alternativas y considerar sus impactos a corto y largo plazo. Un buen líder debe:
        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-17.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Analizar riesgos y Consecuencias
              p.px-1.text-small.mb-0.d-flex.text-center Anticiparse a escenarios futuros y tomar decisiones informadas.
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-18.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Fomentar la colaboración
              p.px-1.text-small.mb-0.d-flex.text-center Involucrar a su equipo en el proceso de toma de decisiones, escuchando sus opiniones y enriqueciendo el análisis. 
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-19.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Comunicar claramente
              p.px-1.text-small.mb-0.d-flex.text-center Explicar el “que” y el “por que” detrás de cada decisión, promoviendo transparencias y confianza.
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-left")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Adaptarse a los cambios
              p.px-1.text-small.mb-0.d-flex.text-center Mostrar flexibilidad y aprender de experiencias pasadas para mejorar en el futuro.

    p.mb-4 La capacidad de tomar decisiones acertadas afecta directamente el éxito del equipo, la moral y el compromiso de sus miembros, quienes se sentirán valorados al ver que su líder actúa con claridad y propósito.
    h3 Otras características esenciales del liderazgo
    p.mb-4 Para identificar a un líder efectivo, es importante considerar diversas cualidades que son clave para su desempeño, como:
    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8(data-aos="fade-left")
        .bg-azul.p-4.px-md-5
          div.d-flex.mb-2
            p.me-2 •
            p.mb-0 <b>Inteligencia emocional: </b>Capacidad de comprender y gestionar emociones propias y ajenas.
          div.d-flex.mb-2
            p.me-2 •
            p.mb-0 <b>Relaciones saludables: </b>Construcción de vínculos sólidos y promoción del trabajo colaborativo.
          div.d-flex.mb-2
            p.me-2 •
            p.mb-0 <b>Autocontrol: </b>Mantenimiento de la calma y el enfoque en situaciones desafiantes.
          div.d-flex.mb-2
            p.me-2 •
            p.mb-0 <b>Adaptación al cambio y resiliencia: </b>Habilidad para enfrentar adversidades y ajustarse a nuevos contextos.
          div.d-flex.mb-2
            p.me-2 •
            p.mb-0 <b>Integridad: </b>Actuar con ética y honestidad en todas las interacciones.

    p.mb-4 Estas características no solo fortalecen la confianza y el compromiso dentro del equipo, sino que también contribuyen al éxito y sostenibilidad de cualquier proyecto liderado.
    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2
        h2 Modelos empresariales de liderazgo

    p.mb-4 El liderazgo en un contexto organizacional, especialmente en áreas críticas como la seguridad y la salud en el trabajo, demanda un enfoque integral que combine competencias clave y modelos efectivos. A continuación, se analizan las características esenciales del liderazgo y se profundiza en diferentes modelos empresariales, destacando su relevancia en la gestión estratégica y el desarrollo profesional.
    h2 Características del líder ideal
    p.mb-4 El líder ideal se distingue por una combinación de cualidades que fortalecen el rendimiento organizacional y potencian el desarrollo de los  equipos.

    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Visión estratégica")
            p Habilidad para prever desafíos y oportunidades mediante un análisis detallado de tendencias internas y externas. Este enfoque permite a la organización adaptarse y responder ágilmente a los cambios, maximizando su desempeño y resultados.
          .div(titulo="Capacidad para generar soluciones")
            p Implica analizar exhaustivamente variables y equipos involucrados, anticiparse a problemas y diseñar estrategias que aporten valor y promuevan la sostenibilidad organizacional.
          .div(titulo="Gestión y desarrollo de equipos")
            p Incluye competencias como comunicación efectiva, motivación, formación continua, delegación estratégica, manejo de conflictos y construcción de un ambiente colaborativo basado en la confianza y la adaptabilidad.

    h2 El modelo del "nuevo líder" 
    p.mb-4 Este modelo propone dos ejes para estructurar las competencias del liderazgo:

    .row.mb-4
      .col-10.col-md-6.col-lg-4.mb-4.mx-auto.ms-lg-auto.me-lg-0(data-aos="fade-right")
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
          div.mb-4
            p.text-bold.text-center Tiempo
            p.text-small.px-4.text-center.pb-2 Distingue entre el corto plazo operativo y el largo plazo estratégico.
      .col-10.col-md-6.col-lg-4.mb-4.mx-auto.me-lg-auto.ms-lg-0(data-aos="fade-right")
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
          div.mb-4
            p.text-bold.text-center Atención
            p.text-small.px-4.text-center.pb-2 Diferenci las capacidades organizacionales de las habilidades individuales. 

    p.mb-4 De esta intersección surgen cuatro áreas clave del liderazgo:
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        .bg-marron-claro.p-4.px-md-5
          div.d-flex.mb-2
            p.me-2 •
            p.mb-0 <b>Estratega: </b>Se enfoca en la visión a largo plazo de la organización.
          div.d-flex.mb-2
            p.me-2 •
            p.mb-0 <b>Ejecutor: </b>Opera en el corto plazo, asegurando resultados inmediatos.
          div.d-flex.mb-2
            p.me-2 •
            p.mb-0 <b>Gestor del talento: </b>Desarrolla el potencial de los colaboradores en el corto plazo.
          div.d-flex.mb-2
            p.me-2 •
            p.mb-0 <b>Desarrollador del capital humano: </b>Fomenta el crecimiento a largo plazo de los individuos.

    p.mb-4 En el centro del modelo se encuentra la eficiencia personal, como base para equilibrar estas áreas y garantizar un liderazgo efectivo.
    h2 Principales modelos de liderazgo
    p.mb-4 Los principales modelos de liderazgo ofrecen enfoques diversos para guiar equipos y organizaciones hacia el logro de objetivos.

    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Liderazgo transformacional")
            p - Inspira y motiva a los empleados para alcanzar su máximo potencial. <br>- Fomenta la innovación, el cambio y el compromiso con una visión compartida. <br>- Es uno de los modelos más aplicables en contextos actuales.

          .div(titulo="Liderazgo transaccional")
            p - Basado en recompensas y castigos para incentivar el rendimiento. <br>- Tiene un enfoque rígido y limitado en la generación de valor, lo que lo hace menos efectivo.

          .div(titulo="Liderazgo servidor")
            p - Prioriza el bienestar y desarrollo de los colaboradores. <br>- Fomenta un entorno colaborativo y de apoyo.

      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Liderazgo situacional")
            p - Propone que no existe un único estilo de liderazgo efectivo. <br>- El liderazgo debe adaptarse según las competencias de los seguidores y las circunstancias del entorno.

          .div(titulo="Liderazgo auténtico")
            p - Los líderes actúan en coherencia con sus valores y principios. <br>- Promueve la confianza y la transparencia en los equipos.

          .div(titulo="Liderazgo participativo")
            p - Involucra a los colaboradores en la toma de decisiones. <br>- Aumenta el compromiso y la motivación de los empleados.

          .div(titulo="Liderazgo carismático")
            p - Se basa en la capacidad del líder para inspirar y motivar mediante su personalidad y habilidades comunicativas. <br>- Puede generar lealtad y entusiasmo, aunque a veces depende excesivamente del líder.

          .div(titulo="Liderazgo visionario")
            p - Enfocado en tener una visión clara del futuro y comunicarla efectivamente. <br>- Inspira a los equipos a trabajar hacia metas a largo plazo.

          .div(titulo="Liderazgo adaptativo")
            p - Se caracteriza por su flexibilidad y capacidad de respuesta ante cambios en el entorno. <br>- Especialmente útil en situaciones de incertidumbre.


    p.mb-4 El liderazgo empresarial es multifacético y su efectividad radica en equilibrar competencias estratégicas, operativas y personales. Modelos como el del "nuevo líder" destacan la importancia de integrar habilidades individuales con capacidades organizacionales, promoviendo un liderazgo que inspire, motive y movilice equipos hacia el logro de objetivos compartidos.
    .row.mb-5
      .col-12.col-xl-8(data-aos="fade-right")
        .bg-azul.p-4.h-100
          span Adoptar estos modelos y características no solo mejora la gestión en áreas como la seguridad y la salud en el trabajo, sino que también fomenta la innovación, la resiliencia y el crecimiento sostenible en un entorno cambiante y competitivo. Un líder ideal no solo dirige, sino que construye un legado basado en valores, confianza y visión estratégica.
          
      .d-none.d-xl-block.col-xl-4(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/105616") Ramos Ramos, P. (2015). Dirección de equipos de trabajo: liderazgo y motivación. Editorial ICB.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/63188") Mercader Juan, C. & Gairín Sallán, J. (2018). Liderazgo y gestión del talento en las organizaciones.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/48843") Bordas Martínez, M. J. (2016). Gestión estratégica del clima laboral. UNED.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=Sav_nXb8new") Pedro Ricardo Fernandez Coca. (2023). TEMA 1 CONCEPTO DE LIDERAZGO [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
