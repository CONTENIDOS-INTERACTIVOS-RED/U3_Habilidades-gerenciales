<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. La comunicación como fundamento del éxito empresarial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") La comunicación es una competencia central para el liderazgo, destacándose por su capacidad de construir relaciones sólidas, motivar equipos y resolver conflictos. Una comunicación efectiva no solo permite transmitir información de manera clara y precisa, sino también establecer un ambiente de confianza y colaboración en el que cada miembro del equipo se sienta valorado.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')

    h2 Tipos de comunicación
    p.mb-4 La comunicación se divide en dos tipos principales: verbal y no verbal, cada una desempeñando un rol esencial en las interacciones humanas.

    .row.position-relative.mb-4.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold.mb-4 Comunicación verbal 
              p Se centra en el lenguaje hablado o escrito.
              p Incluye el uso del tono de voz, el ritmo de la conversación y la elección de palabras adecuadas al contexto.
              p.text-bold Elementos clave: 
              p <b>- Claridad:</b> garantizar que las ideas se expresen de manera comprensible.
              p <b>- Respeto: </b>mantener consideración por las opiniones de los demás.
              p <b>- Escucha activa: </b>prestar atención y responder de manera empática.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold.mb-4 Comunicación no verbal
              p Abarca gestos, posturas, expresiones faciales y el lenguaje corporal.
              p.text-bold Ejemplos:
              p - Una postura abierta indica receptividad; una cerrada, defensividad.
              p.mb-4 - Gesticular puede enfatizar un mensaje o contradecirlo.
              p Importancia de ser consciente de estas señales para mejorar las interacciones.
    h3 Impacto de los medios tecnológicos en la comunicación
    p.mb-4 La tecnología ha transformado profundamente la forma en que nos comunicamos:
    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        .bg-azul.p-4.px-md-5.h-100
          div.d-flex.mb-2
            p.me-2 •
            p.mb-0 <b>Herramientas modernas: </b>Correos electrónicos, mensajería instantánea (WhatsApp, Telegram) y plataformas de chat empresarial.
  
          div.d-flex.mb-0
            p.me-2 •
            p.mb-0 <b>Recursos adicionales: </b>Stickers, emojis y notas de voz enriquecen los mensajes.
          div.d-flex.mb-2
            p.me-2 •
            p.mb-0 <b>Retos organizacionales:</b> <br>- Promover relaciones interpersonales a pesar de la virtualidad.<br>- Establecer culturas de comunicación abierta y fluida en entornos digitales.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
    
    h3 Modelos de comunicación organizacional
    p.mb-4 En las organizaciones, los flujos de comunicación son fundamentales para garantizar la coordinación y el intercambio de información.

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Comunicación descendente", :iconUrl="require('@/assets/curso/unidad/img-33.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4.mb-4 Comunicación descendente
            p(data-aos="fade-up").mb-1 - Fluye de directivos a operativos.
            p(data-aos="fade-up").mb-1 - Usada para transmitir normativas, procedimientos o cambios importantes.
            p(data-aos="fade-up").mb-1 - Desafíos: Puede generar distancia entre niveles jerárquicos, dificultando la accesibilidad.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Comunicación ascendente", :iconUrl="require('@/assets/curso/unidad/img-33.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4.mb-4 Comunicación ascendente
            p(data-aos="fade-up").mb-1 - Fluye de operativos a directivos. <br>- Permite a los líderes conocer la realidad operativa y el clima laboral. <br>- Es esencial para decisiones estratégicas bien informadas.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Comunicación horizontal", :iconUrl="require('@/assets/curso/unidad/img-33.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4.mb-4 Comunicación horizontal
            p(data-aos="fade-up").mb-1 - Interacción entre pares dentro de un mismo nivel jerárquico. <br>- Facilita la coordinación, evita duplicaciones y optimiza recursos.

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Comunicación diagonal", :iconUrl="require('@/assets/curso/unidad/img-33.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4.mb-4 Comunicación diagonal
            p(data-aos="fade-up").mb-1 - Conecta áreas o departamentos distintos, fomentando la  colaboración interdepartamental.

    h3 Cultura de comunicación abierta
    p.mb-1 Las organizaciones modernas tienden hacia una comunicación fluida que conecte a todos los colaboradores de manera oportuna.
    p.text-bold.mb-4 Los beneficios de una cultura comunicativa sólida son:
    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        .bg-gris.p-4.mb-4
          span Reduce el impacto negativo en el clima laboral al comunicar cambios de manera adecuada. <br>Fomenta la gestión activa del cambio y disminuye rumores y especulaciones.<br>Facilita la participación y compromiso de los empleados en los objetivos organizacionales.
        span La comunicación, tanto verbal como no verbal, es un pilar esencial del éxito empresarial. En un mundo donde los medios digitales son predominantes, adaptarse a estas nuevas herramientas y fomentar una cultura de comunicación abierta y transparente es vital para fortalecer el clima laboral y alcanzar los objetivos organizacionales. Lograrlo no solo beneficia al liderazgo, sino también a todos los miembros de la organización, promoviendo un entorno colaborativo y orientado hacia el logro colectivo.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')

    h2 Potencial humano y clima empresarial
    p.mb-4 El liderazgo en el contexto organizacional es una habilidad esencial para guiar y motivar equipos hacia el logro de objetivos comunes. Este concepto va más allá de ocupar una posición jerárquica y se centra en la capacidad de influir e inspirar a través del ejemplo, permitiendo que cada miembro alcance su máximo potencial. Asimismo, el liderazgo implica tanto la dirección estratégica como el desarrollo y empoderamiento de los integrantes del equipo. Un líder efectivo debe:


    .row.mb-4
      .col-12.col-md-6.mb-3(data-aos="fade-right")
        .bg-marron.py-3.w-100
          p.mb-0.text-center.text-bold Fomentar el desarrollo profesional
        .bg-marron-claro.p-4.w-100
          p.mb-0.text-center Brindar oportunidades de aprendizaje y crecimiento, promoviendo la innovación y el pensamiento crítico.
      .col-12.col-md-6.mb-3(data-aos="fade-right")
        .bg-amarillo-oscuro.py-3.w-100
          p.mb-0.text-center.text-bold Entender las relaciones humanas
        .bg-amarillo-claro.p-4.w-100
          p.mb-0.text-center Gestionar dinámicas interpersonales para mantener la cohesión del equipo.
      .col-12.col-md-6(data-aos="fade-left")
        .bg-amarillo-oscuro.py-3.w-100
          p.mb-0.text-center.text-bold Inspirar con el ejemplo
        .bg-amarillo-claro.p-4.w-100
          p.mb-0.text-center Actuar de manera coherente con los valores organizacionales para generar confianza.
      .col-12.col-md-6(data-aos="fade-left")
        .bg-marron.py-3.w-100
          p.mb-0.text-center.text-bold Adaptarse al cambio
        .bg-marron-claro.p-4.w-100
          p.mb-0.text-center Responder a las demandas del entorno para mantener el rendimiento del equipo.

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-gris.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-39.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-1 Estos elementos no solo potencian el desarrollo individual, sino que también generan beneficios tangibles para la organización al mejorar el rendimiento colectivo y alinear los esfuerzos hacia los objetivos estratégicos.
          span Por otro lado, el <b>clima empresarial</b> refleja la calidad de las interacciones y el ambiente laboral. Un entorno positivo influye directamente en la productividad y satisfacción de los empleados, generando efectos como:

    .row.position-relative.mb-4.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold.mb-4 Mayor compromiso
              p Los colaboradores se sienten motivados y alineados con los valores de la empresa.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold.mb-4 Reducción de la rotación
              p Un buen clima laboral disminuye la intención de abandonar la organización.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5
              figure
                img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold.mb-4 Fortalecimiento de la equidad
              p Los empleados perciben justicia en el trato y en las oportunidades dentro de la organización.
    
    p.mb-4 En conclusión, el liderazgo orientado al desarrollo del potencial humano es esencial para consolidar un clima empresarial favorable. Este enfoque fomenta la colaboración, la innovación y el compromiso, creando una base sólida para alcanzar el éxito organizacional.
    .row.bg-marron-claro.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Competencias clave del liderazgo para el desarrollo de equipos de trabajo  
          p.mb-5 En el documento se profundiza en las competencias clave del liderazgo necesarias para desarrollar equipos de trabajo efectivos, destacando habilidades como la comunicación asertiva, la delegación eficiente, el establecimiento de límites y el seguimiento equilibrado.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Competencias clave del liderazgo 
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul.mb-4
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/95863") Nader, M. (2009). Influencia de los valores sobre los estilos de liderazgo. Pontificia Universidad Javeriana.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/270626") Gallardo, V. (2009). Liderazgo transformador. LID Editorial España.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/222463") Valencia Tovar, Á. (2015). El liderazgo, clave del éxito en la empresa. CESA.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/podcast-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://open.spotify.com/episode/1oeGjkgmb9YsvnRi3HSaTy") Liderazgo y gestión empresarial [Podcast]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Habilidades de Liderazgo',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la resiliencia en el contexto del liderazgo?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La habilidad de evitar problemas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La capacidad de recuperarse de situaciones difíciles',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La tendencia a rendirse ante obstáculos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La habilidad de imponer decisiones',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'La escucha activa implica:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hacer caso omiso a lo que otros dicen',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prestar atención y comprender el mensaje de los demás',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Interrumpir a los demás para expresar tu opinión',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ignorar las emociones de los demás',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'Un líder que da "la milla extra" se caracteriza por:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hacer solo lo mínimo necesario',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comprometerse de manera proactiva a mejorar',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ignorar las necesidades del equipo',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser indiferente a los resultados',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'La retroalimentación constructiva se basa en:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Criticar sin ofrecer soluciones',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proporcionar información para fomentar la mejora',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ignorar el rendimiento de los empleados',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Solo resaltar los errores', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
