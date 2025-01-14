<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.mb-4.align-items-start.p-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") El coaching, empowerment y la administración efectiva del tiempo son conceptos clave en el desarrollo personal, profesional y organizacional. Cada uno, desde su enfoque particular, contribuye al logro de objetivos, el fortalecimiento de habilidades y la optimización del rendimiento tanto individual como colectivo. Estas prácticas han evolucionado con el tiempo, integrando aportes de diversas disciplinas y adaptándose a las necesidades cambiantes de las personas y las organizaciones.
        .bg-amarillo.p-4
          span El coaching, por ejemplo, es un proceso que impulsa el autoconocimiento y la superación personal mediante una relación colaborativa entre el coach y el coachee. Por otro lado, el empowerment destaca por su capacidad de fomentar la autonomía y la responsabilidad en los equipos, fortaleciendo el liderazgo y la confianza mutua. Ambos conceptos se complementan, promoviendo una cultura de aprendizaje, toma de decisiones conscientes y desarrollo continuo.
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')  

    span Finalmente, la administración efectiva del tiempo se presenta como una habilidad esencial para gestionar recursos limitados y equilibrar las demandas de la vida laboral y personal. A través de estrategias claras, como la priorización de tareas y la organización, se busca maximizar la productividad y minimizar el estrés. Juntos, estos conceptos ofrecen herramientas prácticas para alcanzar un desempeño óptimo y sostenible en diversos contextos.


</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
