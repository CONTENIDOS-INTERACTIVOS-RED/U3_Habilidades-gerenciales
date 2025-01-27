<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Administración efectiva del tiempo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 El tiempo, un recurso limitado e irreemplazable, plantea un desafío constante en su gestión. La percepción subjetiva y la naturaleza irreversible del tiempo nos recuerdan la importancia de utilizarlo de manera eficiente, tanto en el ámbito personal como en el laboral. La administración efectiva del tiempo no solo optimiza la productividad, sino que también promueve el bienestar, el equilibrio y la satisfacción general.
    p.mb-4 La filosofía introduce dos conceptos clave para comprender el tiempo:
    .row.mb-4
      .col-8.col-md-6.mx-auto.d-flex.flex-column(data-aos="fade-right")
        .bg-rojo-2.p-4.mb-0.text-center
          p.text-bold.mb-0 Cronos
        .bg-rojo-2-claro.p-4.text-center.h-100
          span.text-center Representa el tiempo cuantitativo, lineal y medible, asociándomelas con la rutina, planificación y organización. Es el tiempo que gestionamos con relojes y calendarios.
      .col-8.col-md-6.mx-auto.d-flex.flex-column(data-aos="fade-right")
        .bg-amarillo.p-4.mb-0.text-center
          p.text-bold.mb-0 Kairos
        .bg-amarillo-claro.p-4.text-center.h-100
          span.text-center Se refiere al tiempo cualitativo y significativo, enfocado en los momentos oportunos que generan impacto y transformación. Este concepto nos invita a aprovechar las oportunidades más allá de la duración temporal.

    p.mb-4 Ambos enfoques son complementarios y útiles en diferentes contextos, desde la planificación de proyectos hasta el desarrollo personal.
    p.text-bold.mb-4(data-aos="fade-up") Retos en la gestión del tiempo
    p.mb-4 Aunque todos disponemos de 24 horas al día, la percepción de "falta de tiempo" es común. Esta sensación puede intensificarse por la proliferación de distractores y hábitos poco efectivos. Entre los principales desafíos que afectan la administración del tiempo se encuentran:
    
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
      
      .col-12.col-xl-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Distractores personales y laborales")
            p Incluyen interrupciones, uso excesivo del celular, procrastinación, reuniones innecesarias y tareas multitarea.
          .div(titulo="Falta de organización")
            p La ausencia de metas claras y priorización dificulta el enfoque y el progreso.
          .div(titulo="Percepción subjetiva del tiempo")
            p La experiencia del tiempo puede variar según el contexto y las emociones, afectando la productividad.

    h2 Multitasking: beneficios y desventajas
    p.mb-4 El multitasking o multitarea, aunque percibido como una habilidad útil, presenta tanto ventajas como limitaciones. Entre los beneficios destacan la flexibilidad y la capacidad de gestionar múltiples demandas. Sin embargo, sus desventajas incluyen:

    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        .bg-amarillo.p-4.ps-xl-5
          div.d-flex.mb-4
            p.mb-0.me-3 • 
            p.mb-0 <b>Reducción de calidad: </b>la fragmentación de la atención puede comprometer los resultados.
          div.d-flex.mb-4
            p.mb-0.me-3 • 
            p.mb-0 <b>Aumento del estrés: </b>gestionar varias actividades simultáneamente incrementa la ansiedad.
          div.d-flex.mb-4
            p.mb-0.me-3 • 
            p.mb-0 <b>Disminución de productividad: </b>cambiar de una tarea a otra requiere tiempo de reconexión, ralentizando el progreso.
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

    p.mb-4 Por ello, es crucial evaluar cuándo el multitasking es adecuado y cuándo concentrarse en una sola tarea es más beneficioso.
    h2 Técnicas para la administración efectiva del tiempo
    p.mb-4 A continuación, se presentan  los elementos clave para el éxito de proyectos sostenibles y responsables.

    .row.mb-4
      .col-8.col-md-6.mx-auto(data-aos="fade-up")
        TarjetaAudio.color-primario.bg-white.mb-3(
            texto="Proceso de descarga de Técnicas para la administración efectiva del tiempo."
            tiempo
            :audio="require('../../assets/componentes/audios/Podcast_contenido_unidad_III_Habilidades gerenciales y pedagógicas.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )

    h2 Distractores más comunes
    p.mb-4 Según Barbosa (2014), las principales fugas de tiempo incluyen:
    .row.mb-4
      .col-6.col-md-4.col-lg-3.mx-auto(data-aos="fade-up")
        .bg-azul-claro.p-4.h-100.d-flex.flex-column.justify-content-center.mb-3.text-center
          p.text-bold.mb-2.text-small Ausentismo y retardos:
          p.mb-0.text-small Falta de compromiso o desmotivación.
      .col-6.col-md-4.col-lg-3.mx-auto(data-aos="fade-up")
        .bg-azul-claro.p-4.h-100.d-flex.flex-column.justify-content-center.mb-3.text-center
          p.text-bold.mb-2.text-small Irresponsabilidad
          p.mb-0.text-small Incumplimiento de plazos y estándares.
      .col-6.col-md-4.col-lg-3.mx-auto(data-aos="fade-up")
        .bg-azul-claro.p-4.h-100.d-flex.flex-column.justify-content-center.mb-3.text-center
          p.text-bold.mb-2.text-small Reuniones innecesarias:
          p.mb-0.text-small Espacios sin objetivos claros.
      .col-6.col-md-4.col-lg-3.mx-auto(data-aos="fade-up")
        .bg-azul-claro.p-4.h-100.d-flex.flex-column.justify-content-center.mb-3.text-center
          p.text-bold.mb-2.text-small Actividades no laborales:
          p.mb-0.text-small Uso excesivo de dispositivos electrónicos y multitarea innecesaria.

    h2 Beneficios de la administración efectiva del tiempo
    p.mb-4 La administración efectiva del tiempo ofrece beneficios significativos tanto a nivel individual como organizacional.
    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Para los individuos", :iconUrl="require('@/assets/curso/unidad/img-34.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-left")
            h4 Para los individuos
            p.text-bold.mb-4
            p.mb-1 <b>●	Mayor motivación y compromiso:</b> Al aprovechar mejor el tiempo, las personas sienten mayor propósito y control sobre sus vidas.
            p.mb-1 <b>●	Desarrollo de habilidades: </b>Enfrentar desafíos fortalece competencias profesionales y personales. 
            p.mb-1 <b>●	Reducción del estrés: </b>Una planificación adecuada disminuye la ansiedad por tareas pendientes.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Para las organizaciones", :iconUrl="require('@/assets/curso/unidad/img-34.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-left")
            h4 Para las organizaciones
            p.text-bold.mb-4
            p.mb-1 <b>●	Productividad incrementada: </b>el enfoque y la eficiencia mejoran los resultados.
            p.mb-1 <b>●	Clima laboral positivo: </b>promueve la colaboración y el compromiso.
            p.mb-1 <b>●	Reducción de rotación: </b>los empleados satisfechos tienen menor intención de buscar otras oportunidades.

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-rojo-2-claro.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-37.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 La administración del tiempo es una habilidad esencial que impacta tanto a nivel individual como organizacional. Implementar estrategias como la planificación, el uso de herramientas efectivas y la eliminación de distractores permite optimizar este recurso limitado, promoviendo un equilibrio entre productividad, bienestar y satisfacción.

    .bg-full-width.border-top-9-azul.mb-5
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/105611") Ramos Ramos, P. (2014). Gestión del tiempo y planificación de tareas. Editorial ICB.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/98193") Biasca, R. E. (2005). Gestión de cambio: el "Modelo Biasca". El Cid Editor.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=bO82KeZvbpU") TIPS DE PAZ. (2020). Los objetivos y la administración del tiempo [Vídeo]
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
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos del Coaching',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué aspecto de la inteligencia emocional es fundamental en el coaching?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Capacidad de acumular conocimientos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reconocer y gestionar emociones',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Habilidad para hacer diagnósticos clínicos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dominio de técnicas de terapia',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'El coaching se basa en:',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La terapia psicodinámica', esCorrecta: false },
            {
              id: 'b',
              texto: 'El desarrollo de habilidades',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El análisis de traumas pasados',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El diagnóstico de trastornos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes afirmaciones es verdadera sobre el rol de un coach?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El coach da respuestas directas a los problemas del coachee',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El coach actúa como un facilitador en el proceso de autodescubrimiento',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El coach es un terapeuta que diagnostica problemas mentales',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El coach es responsable de las decisiones del coachee',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'El coaching solo se aplica en el ámbito deportivo.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'El coaching es un proceso que busca un impacto transformador a nivel humano.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
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

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
