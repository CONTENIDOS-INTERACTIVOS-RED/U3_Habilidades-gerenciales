<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Liderazgo: conceptualización, características y modelos empresariales de liderazgo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") El coaching se ha convertido en una disciplina que trasciende los contextos organizacionales y profesionales, abarcando también el desarrollo personal, la educación y la salud. Aunque su traducción literal del inglés es "entrenamiento" o "formación", su enfoque va mucho más allá de simples técnicas. Este proceso involucra una colaboración entre dos actores principales: el coach y el coachee. El primero guía al segundo para identificar metas, potenciar habilidades y superar obstáculos, promoviendo su crecimiento y desarrollo en diferentes áreas de la vida.
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')  

    h2 Historia y evolución
    p.mb-4 El coaching tiene sus raíces en el deporte profesional, donde nació hace aproximadamente 30 años en Estados Unidos como una herramienta para mejorar el rendimiento de los atletas. Sin embargo, sus principios han evolucionado y encontrado aplicaciones en el ámbito empresarial, personal y educativo. Aunque reciente como disciplina formal, el coaching integra influencias profundas de la filosofía socrática, el método mayéutico, y corrientes filosóficas como la fenomenología y el existencialismo. También se inspira en tradiciones como el sufismo y el budismo, y en disciplinas modernas como la psicología humanista, el psicoanálisis y la logoterapia.
    .row.mb-4
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-azul.mb-4.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-6.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") A finales del siglo XX, el coaching comenzó a integrarse al mundo empresarial, especialmente en Estados Unidos. Durante este periodo, figuras como Thomas Leonard y John Whitmore jugaron un papel esencial. Leonard, en 1992, fundó la International Coach Federation (ICF), con el objetivo de profesionalizar la práctica y establecer estándares éticos. Whitmore, por su parte, sistematizó el coaching empresarial con la metodología GROW (Objetivo, Realidad, Opciones y Voluntad).
        span Ya en el siglo XXI, el coaching se diversificó en áreas como el life coaching (personal), el coaching ejecutivo, de salud y más. Esta expansión fue impulsada por tendencias como la psicología positiva y el mindfulness. Además, la incorporación de tecnologías digitales ha permitido llevar el coaching a un público global a través de plataformas en línea.

    h2 Principios y características
    p.mb-4 El coaching es un proceso estructurado que se centra en el presente y el futuro, en lugar de explorar el pasado en profundidad. Entre sus principales características destacan:
    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Enfoque en el autodescubrimiento
              p Ayuda al coachee a encontrar sus propias respuestas y soluciones.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Definición de metas claras
              p Establece objetivos específicos y alcanzables alineados con los valores del coachee.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Responsabilidad
              p Promueve que el coachee asuma el control de sus decisiones y acciones.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Uso de herramientas reflexivas
              p Utiliza preguntas abiertas, generación de conciencia y planificación de acciones.

    p.mb-4 El coaching busca que el coachee tome conciencia de su situación actual para transformarla y alcanzar los resultados deseados. Este proceso no pretende resolver problemas de manera instantánea, sino proporcionar herramientas que permitan al coachee desarrollar habilidades necesarias para su crecimiento personal y profesional.
    p.text-bold.mb-4(data-aos="fade-up") Relación con la inteligencia emocional
    p.mb-4 La inteligencia emocional desempeña un papel fundamental en el coaching, ya que este proceso fomenta el autoconocimiento y la autorregulación emocional. A través del coaching, el coachee aprende a:

    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        .bg-marron-claro.p-4
           div.d-flex.mb-2
            p.mb-0.me-3 • 
            p.mb-0 <b>Reconocer sus emociones: </b>identificando cómo afectan sus decisiones y comportamientos.
           div.d-flex.mb-2
            p.mb-0.me-3 • 
            p.mb-0 <b>Manejar situaciones desafiantes: </b>como conflictos o presiones laborales.
           div.d-flex.mb-2
            p.mb-0.me-3 • 
            p.mb-0 <b>Fomentar la empatía: </b>mejorando sus relaciones personales y profesionales.
           div.d-flex.mb-2
            p.mb-0.me-3 • 
            p.mb-0 <b>Establecer metas y mantenerse motivado: </b>incluso frente a obstáculos.
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')

    p.mb-4 La empatía, tanto del coach como del coachee, fortalece la relación y permite un aprendizaje más profundo y significativo.
    h3 Diferencias entre coaching y psicología
    p.mb-4 Aunque el coaching y la psicología comparten algunos objetivos relacionados con el desarrollo personal, existen diferencias clave en sus enfoques y métodos:
    p.mb-3 <b>Tabla 1.</b> Diferencias entre psicología y coaching
    .row.mb-4
      .col-12.col-lg-10.mx-auto
        .tabla-a
          table
            thead
              tr
                th(style="border-right: 1px solid #D9D9D9 !important;").text-center.bg-rojo-2.text-bold(width="25%") Aspecto
                th(style="border-right: 1px solid #D9D9D9;").text-center.bg-rojo-2.text-bold Psicología
                th.text-center.bg-rojo-2.text-bold Coaching
            tbody.bg-rojo-2-claro
              tr
                td.text-bold.text-center Enfoque
                td(style="border-right: 1px solid #D9D9D9;") Tratar problemas emocionales y mentales
                td Mejorar el rendimiento y alcanzar metas
              tr.bg-rojo-2-claro
                td.text-bold.text-center Objetivo
                td(style="border-right: 1px solid #D9D9D9;") Diagnóstico y tratamiento de trastornos psicológicos
                td Desarrollo personal y profesional, superación de objetivos
              tr.bg-rojo-2-claro
                td.text-bold.text-center Método
                td(style="border-right: 1px solid #D9D9D9;") Terapias científicas, análisis del pasado 
                td Herramientas prácticas, metas a futuro
              tr.bg-rojo-2-claro
                td.text-bold.text-center Relación
                td(style="border-right: 1px solid #D9D9D9;") Terapéutica, guía profesional
                td Colaborativa, facilita la autoexploración
              tr.bg-rojo-2-claro
                td.text-bold.text-center Duración
                td(style="border-right: 1px solid #D9D9D9;") Larga (dependiendo del caso)
                td Corto o medio plazo, según los objetivos
              tr.bg-rojo-2-claro
                td.text-bold.text-center Formación
                td(style="border-right: 1px solid #D9D9D9;") Título universitario en psicología
                td Formación específica en coaching
              tr.bg-rojo-2-claro
                td.text-bold.text-center Ámbito
                td(style="border-right: 1px solid #D9D9D9;") Salud mental, intervención clínica
                td Desarrollo personal, profesional, liderazgo

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-gris.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-12.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 El coaching y la psicología comparten el objetivo del bienestar y desarrollo personal, pero sus enfoques difieren significativamente. Mientras la psicología aborda problemas emocionales y mentales profundos, el coaching se orienta hacia la consecución de metas específicas y el desarrollo personal. Este último, aunque complementario en ciertos casos, carece de sustento clínico y de una intervención profunda en las raíces de los problemas del ser humano, lo que ha generado cuestionamientos, especialmente desde el ámbito psicológico.

    p.text-bold.mb-4(data-aos="fade-up") Tipos de coaching
    p.mb-4 Existen diversas formas de coaching que se adaptan a las necesidades específicas de las personas y organizaciones. Según Muradep y Perel (2022), se reconocen los siguientes tipos principales:
    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Coaching personal o life coaching")
            p Se centra en aspectos de la vida personal, como relaciones, carrera, finanzas y desempeño laboral. Busca ayudar al coachee a identificar metas personales, superar obstáculos y mejorar su calidad de vida.
          .div(titulo="Coaching ejecutivo")
            p Este coaching se realiza de manera individual y está orientado a personas con altos cargos dentro de una organización. Su objetivo es apoyarlas en el alcance de metas personales y organizacionales, trabajando en aspectos como la toma de decisiones, el liderazgo y las dinámicas laborales.
          .div(titulo="Coaching empresarial u organizacional")
            p Este enfoque se dirige principalmente a líderes y empleados clave dentro de las organizaciones. Se enfoca en el desarrollo del capital humano y busca optimizar el desempeño laboral, fomentar el liderazgo y mejorar la cultura organizacional. Aunque no es accesible para todos los colaboradores, suele ser una inversión estratégica en el desarrollo de high potentials y líderes.
          .div(titulo="Coaching de equipos")
            p Este subtipo del coaching organizacional busca mejorar la efectividad de los equipos de trabajo. Se centra en las interacciones y relaciones dentro del grupo, alineando las tareas y metas individuales con los objetivos colectivos.
          .div(titulo="Manager coach")
            p Se refiere al enfoque donde un líder o directivo actúa como coach dentro de la organización, ayudando a los colaboradores a crecer profesionalmente y alcanzar sus objetivos.
    p.text-bold.mb-4(data-aos="fade-up") Funciones clave del coaching organizacional
    p.mb-4 El coaching organizacional es una herramienta estratégica para el desarrollo de individuos y equipos en un entorno empresarial. Entre sus principales funciones se encuentran:

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Desarrollo de competencias de liderazgo
              p Ayuda a los líderes a fortalecer habilidades como la toma de decisiones, gestión del cambio y liderazgo transformacional.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Mejora de la comunicación organizacional
              p Promueve un flujo de información transparente y eficiente, reduciendo malentendidos y mejorando la colaboración.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Alineación de objetivos
              p Asegura que los empleados comprendan y se alineen con los objetivos estratégicos de la empresa, fomentando compromiso y enfoque.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Resolución de conflictos
              p Facilita la mediación y negociación entre las partes involucradas, promoviendo un ambiente laboral armonioso.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Gestión del cambio
              p Durante procesos de transformación, el coaching ayuda a los empleados a adaptarse y aceptar nuevas formas de trabajo, reduciendo la resistencia al cambio.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Desarrollo y bienestar del talento
              p Fomenta el crecimiento profesional, ayudando a los empleados a identificar fortalezas y áreas de mejora, proporcionando herramientas para alcanzar su máximo potencial.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Mejora del clima laboral
              p Al trabajar con individuos y equipos, el coaching contribuye a crear un ambiente positivo, incrementando la motivación y satisfacción de los empleados.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Fomento de la innovación
              p Promueve un entorno de creatividad y apertura, inspirando a los empleados a proponer ideas innovadoras y contribuir al desarrollo continuo de la organización.
    p.tex-bold.mb-4(data-aos="fade-up") Premisas del aprendizaje en coaching
    p.mb-4 El aprendizaje dentro del coaching se basa en un enfoque activo que combina experiencias desafiantes, retroalimentación oportuna y una diversidad de estrategias prácticas. Este proceso requiere del coachee compromiso, motivación y voluntad para gestionar las herramientas proporcionadas por el coach. Las etapas clave incluyen:
    .row.mb-4
      .col-6.col-lg-4.mx-auto.d-flex.flex-column(data-aos="fade-right")
        .bg-amarillo.p-4.mb-0.text-center
          p.text-bold.mb-0 Toma de conciencia
        .bg-amarillo-claro.p-4.text-center.h-100
          span.text-center Identificar el problema y construir alternativas para alcanzar la meta.
      .col-6.col-lg-4.mx-auto.d-flex.flex-column(data-aos="fade-up")
        .bg-azul-oscuro.p-4.mb-0.text-center
          p.text-bold.mb-0 Planificación y acción
        .bg-azul.p-4.text-center.h-100
          span.text-center Diseñar y ejecutar un plan para superar los obstáculos identificados.
      .col-6.col-lg-4.mx-auto.d-flex.flex-column(data-aos="fade-left")
        .bg-amarillo.p-4.mb-0.text-center
          p.text-bold.mb-0 Evaluación y retroalimentación
        .bg-amarillo-claro.p-4.text-center.h-100
          span.text-center Revisar los resultados y extraer aprendizajes para futuras acciones.

    p.text-bold.mb-4(data-aos="fade-up") Impacto del coaching organizacional
    p.mb-4 El coaching organizacional beneficia tanto a líderes como a empleados, contribuyendo al éxito empresarial. Su impacto incluye:

    .row.position-relative.mb-5.py-4.bg-rojo-2-claro.bg-full-width
      div.px-4.px-md-5.py-md-3

        .row
          .col-6.d-none.d-lg-block
            img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
          .col-12.col-lg-6
            .bg-rojo-2.py-2.px-4.mb-2.w-100(data-aos="fade-up")
              span Fortalecimiento del liderazgo transformacional.
            .bg-rojo-2.py-2.p-4.mb-2.w-100(data-aos="fade-up")
              span Construcción de una comunicación más efectiva y transparente.
            .bg-rojo-2.py-2.p-4.mb-2.w-100(data-aos="fade-up")
              span Mayor compromiso y alineación con los objetivos estratégicos.
            .bg-rojo-2.py-2.p-4.mb-2.w-100(data-aos="fade-up")
              span Resolución constructiva de conflictos internos.
            .bg-rojo-2.py-2.p-4.mb-2.w-100(data-aos="fade-up")
              span Adaptación exitosa a procesos de cambio y reestructuración.
            .bg-rojo-2.py-2.p-4.mb-2.w-100(data-aos="fade-up")
              span Creación de un clima laboral positivo y motivador.
            .bg-rojo-2.py-2.p-4.mb-2.w-100(data-aos="fade-up")
              span Impulso a la creatividad e innovación organizacional.

    p.mb-5 En conclusión, el coaching organizacional no solo potencia el desempeño individual y colectivo, sino que también contribuye al éxito y sostenibilidad de las empresas a largo plazo. Sin embargo, su efectividad depende de la responsabilidad y compromiso tanto del coach como del coachee, quienes deben trabajar en conjunto para alcanzar los objetivos establecidos.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/225273") Hilario Gómez, S. (2019). Coaching de equipos. Editorial ICB.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/270625") Launer, V. & Cannio, S. (2008). Prácticas de Coaching. LID Editorial España.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=5fCOFnwxgUw") Coaching ICG. (2019). Qué es Coaching [Vídeo]
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
