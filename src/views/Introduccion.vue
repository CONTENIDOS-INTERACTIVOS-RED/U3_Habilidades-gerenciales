<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 El liderazgo, como concepto, abarca mucho más que la mera capacidad de dirigir. Es la habilidad de influir e inspirar a otros para alcanzar objetivos comunes, independientemente de la posición jerárquica que se ocupe. Este tema, vital en cualquier contexto organizacional, no solo se limita al ámbito empresarial, sino que también se manifiesta en espacios educativos, sociales y familiares, destacando su relevancia universal en el desarrollo humano y colectivo.

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-rojo.p-4.mb-4 
          span En un entorno laboral, el liderazgo efectivo trasciende el cumplimiento de metas y se centra en la creación de equipos cohesionados, motivados y orientados al logro. A través de competencias clave como la comunicación asertiva, la empatía y la capacidad de tomar decisiones estratégicas, los líderes no solo guían a sus equipos, sino que también contribuyen a la construcción de un ambiente laboral positivo que potencia el talento individual y colectivo.
        span Además, el liderazgo está intrínsecamente ligado a la comunicación y al clima empresarial, factores que fortalecen la dinámica organizacional y promueven el éxito sostenible. Al combinar estas cualidades con una visión estratégica y una actitud proactiva, los líderes actuales tienen el potencial de transformar no solo a las organizaciones, sino también a las comunidades en las que operan.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')

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
