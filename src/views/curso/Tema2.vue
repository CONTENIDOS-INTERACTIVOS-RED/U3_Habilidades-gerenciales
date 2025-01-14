<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Empowerment '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.position-relative.mb-5.py-4.bg-fondo-3.bg-full-width
      div.px-4.px-md-5.py-md-3

        .row.mb-4.mx-0
          .col-12.col-xl-8.d-flex.align-items-center.bg-rojo-2-claro.p-4(data-aos="fade-right")
            p.mb-0(data-aos="fade-up") El empowerment o empoderamiento es una habilidad fundamental en la gestión y liderazgo organizacional, ya que permite delegar responsabilidades, fomentar la autonomía y promover la toma de decisiones dentro de los equipos de trabajo. Aunque delegar puede generar incertidumbre, este proceso se convierte en una herramienta clave para optimizar el rendimiento individual y colectivo, fortalecer la confianza mutua y crear un ambiente laboral más colaborativo.
          .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
            img.h-100(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')

        h2 Desafíos y fundamentos del empowerment
        p.mb-4 Uno de los mayores retos del empowerment es la resistencia natural a delegar, que se origina en la percepción de que solo al realizar personalmente las tareas se garantiza el éxito. Este temor genera sobrecarga laboral y desconfianza en el equipo. Para superar este obstáculo, es fundamental comprender que delegar implica aceptar que otros realizarán las tareas desde su propia perspectiva, ritmo e interpretación. El empowerment efectivo requiere:

        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-24.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Comunicación clara
              p.px-1.text-small.mb-0.d-flex.text-center Asegurar que las instrucciones, expectativas y límites sean comprendidos por todos los colaboradores.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-25.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Ambiente de confianza
              p.px-1.text-small.mb-0.d-flex.text-center Promover un espacio donde los empleados se sientan respaldados para tomar decisiones y asumir riesgos calculados.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-left")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-26.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Confianza mutua
              p.px-1.text-small.mb-0.d-flex.text-center Los líderes deben confiar en las capacidades de su equipo, mientras los empleados deben confiar en el apoyo continuo de sus líderes.

    h2 Comunicación en el empowerment: Las 4P's
    p.mb-4 La comunicación es esencial en el empowerment. Según Ramos (2015), este proceso puede analizarse desde las 4P’s:
    ImagenInfografica.color-secundario.mb-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="33%" y="9%" numero="+")
        .h5.mb-2 Pensamiento 
        p Definir claramente las ideas que se desean transmitir.
      .tarjeta.bg-white.p-4(x="67%" y="9%" numero="+")
        .h5.mb-2 Palabra
        p Considerar no solo el contenido verbal, sino también el tono, ritmo y énfasis en el mensaje.
      .tarjeta.bg-white.p-4(x="68%" y="65%" numero="+")
        .h5.mb-2 Postura
        p Observar la proximidad, gestos y contacto visual, elementos clave en la comunicación no verbal.
      .tarjeta.bg-white.p-4(x="33%" y="65%" numero="+")
        .h5.mb-2 Propósito
        p Identificar el objetivo de la comunicación, como informar, persuadir, delegar o establecer contacto.


    p.mb-4 Estas dimensiones aseguran que los colaboradores comprendan plenamente sus roles y responsabilidades, reduciendo malentendidos y fortaleciendo la autonomía.
    h2 Pasos para delegar eficazmente
    p.mb-4 De acuerdo con Alles (2007), delegar de manera efectiva implica seguir estos pasos:
    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8(data-aos="fade-left")
        .bg-azul.p-4
          p.mb-2(data-aos="fade-up") 1.	Analizar las tareas a delegar.
          p.mb-2(data-aos="fade-up") 2.	Asignar tareas considerando habilidades y competencias del colaborador.
          p.mb-2(data-aos="fade-up") 3.	Comunicar objetivos, plazos y recursos necesarios.
          p.mb-2(data-aos="fade-up") 4.	Asegurarse de que el colaborador tenga las herramientas necesarias.
          p.mb-2(data-aos="fade-up") 5.	Monitorear avances y ajustar si es necesario.
          p.mb-0(data-aos="fade-up") 6.	Evaluar el entregable final.

    p.mb-4 Este proceso asegura que las responsabilidades asignadas se lleven a cabo de manera eficiente, alineadas con los objetivos organizacionales.
    p.tex-bold.mb-4(data-aos="fade-up") Beneficios del empowerment
    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Para los empleados")
            div.d-flex.mb-2
              p.mb-0.me-3 • 
              p.mb-0 Motivación y compromiso. La autonomía fomenta un sentido de pertenencia y propósito. 
            div.d-flex.mb-2
              p.mb-0.me-3 • 
              p.mb-0 Desarrollo de habilidades. Asumir nuevas responsabilidades permite el crecimiento profesional.
            div.d-flex.mb-2
              p.mb-0.me-3 • 
              p.mb-0 Mayor responsabilidad.  Los colaboradores asumen un papel más activo en sus funciones.
          .div(titulo="Para las organizaciones")
            div.d-flex.mb-2
              p.mb-0.me-3 • 
              p.mb-0 Fortalecimiento de la cultura organizacional. Fomenta un ambiente colaborativo y enfocado en objetivos comunes.
            div.d-flex.mb-2
              p.mb-0.me-3 • 
              p.mb-0 Reducción de la rotación de personal. La satisfacción laboral y el reconocimiento disminuyen la intención de abandonar la organización.
            div.d-flex.mb-2
              p.mb-0.me-3 • 
              p.mb-0 Aumento de la productividad. La autonomía reduce la burocracia y permite una acción más rápida y eficiente.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')

    h2 Rol del líder en el empowerment
    p.mb-4 El líder juega un papel crucial en el éxito del empowerment. Además de delegar tareas, debe garantizar que estas se realicen de manera adecuada. Esto implica brindar apoyo continuo, monitorear avances y promover un aprendizaje activo basado en desafíos y retroalimentación. A través del empowerment, los líderes no solo optimizan el desempeño del equipo, sino que también contribuyen al desarrollo personal y profesional de sus miembros.
    .row.mb-4
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-31.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") El empowerment no es solo una herramienta de liderazgo, sino un componente estratégico para el éxito organizacional. Al fomentar la autonomía, la confianza y la comunicación efectiva, los líderes pueden transformar sus equipos en unidades autónomas, motivadas y orientadas a resultados, logrando beneficios tanto individuales como colectivos que impactan positivamente en la productividad y sostenibilidad de la organización.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/61150") Sierra, F. (2012). Comunicación y desarrollo: prácticas comunicativas y empoderamiento local. Editorial Gedisa.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/254930") Bustínduy, I. (2024). La gestión Smart Working del tiempo. Editorial UOC.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=rgT65r_om1Y") Daniel Colombo. (2019). 8 pasos para ser una persona empoderada [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')



</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
