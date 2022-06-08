<template>

  <section class="src-components-respuestas">
    <table class="table-responsive">
      <table class="table table-dark">
          <tr>
            <th>Pregunta</th>
            <th>Respuesta</th>
          </tr>
          <tr v-for="(preg, i) in preguntas" :key="i">
            <td>{{ preg.numero }}</td>
            <td>{{ preg.respuestas}}</td>
          </tr>
      </table>
    </table>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas:[
          {numero:1, respuestas:['c']},
          {numero:2, respuestas:['c']},
          {numero:3, respuestas:['b']}
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-respuestas {

  }
  th{
    background-color: blue;
  }
  td{
    background-color: grey;
    color: black;
  }

</style>
