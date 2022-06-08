<template>
  <section class="src-components-index-formulario">
    <div class="jumbotron">
      <vue-form :state="formState" @submit.prevent="enviar()">
        <h1>Notas</h1>
        <hr><hr>
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
          type="text" 
          id="nombre" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.nombre" 
          required
          name="nombre"
          :minlength="minNomLength"
          :maxlength="maxNomLength"
          no-espacios
          />

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              El campo tiene como mínimo {{minNomLength}} y como máximo {{maxNomLength}} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              El campo no permite espacios intermedios.
            </div>     
          </field-messages> 
        </validate>        

        <validate tag="div">
          <label for="apellido">Apellido</label>
          <input 
          type="text" 
          id="apellido" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.apellido" 
          required
          name="apellido"
          :minlength="minNomLength"
          :maxlength="maxNomLength"
          no-espacios
          />

          <field-messages name="apellido" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              El campo tiene como mínimo {{minNomLength}} y como máximo {{maxNomLength}} caracteres.
            </div>     
            <div slot="no-espacios" class="alert alert-danger mt-1">
              El campo no permite espacios intermedios.
            </div>             
          </field-messages> 
        </validate>

        <validate tag="div">
          <label for="nota">Nota</label>
          <input 
          type="number" 
          id="nota" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.nota" 
          required
          name="nota"
          :min="notaMin"
          :max="notaMax"
          />

          <field-messages name="nota" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La nota minimia permitida es {{notaMin}}
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La nota máxima permitida es {{notaMax}}
            </div>
          </field-messages> 
        </validate>

       <button class="btn btn-success my-4" :disabled="formState.$invalid" @click="agregar()">Enviar</button>
      </vue-form>

      <table v-if="this.alumnos.length" class="table-responsive">
        <h2>Historial Notas</h2>
        <hr><hr>
        <table class="table table-dark">
          <tr>
            <th>Nombre y Apellido</th>
            <th>Nota</th>
          </tr>
          <tr v-for="(alumno, i) in alumnos" :key="i">
            <td>{{ alumno.nombre }} {{ alumno.apellido}}</td>
            <td :style="{color: analizarNota(alumno.nota).color}">{{ alumno.nota}}</td>
            
          </tr>
          <tr>
            <td class="promedioTot">Promedio total:</td>
            <td :style="{color: analizarNota(promedioTotal()).color}">{{promedioTotal()}}</td>
          </tr>
        </table>
      </table>
      <h6 v-else class="alert alert-danger text-center">No hay usuarios cargados</h6>
     </div>


  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-index-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getInicialData(),
        minNomLength: 3,
        maxNomLength: 15, 
        notaMin: 0,
        notaMax: 10,
        alumnos: []
      }
    },
    methods: {
      getInicialData(){
        return{
          nombre:'',
          edad:'',
          nota: null,
        }
      },
      enviar(){
        this.formData = this.getInicialData();
        this.formState._reset();
      },
      agregar(){
        this.alumnos.push({ 
          nombre : this.formData.nombre, 
          apellido : this.formData.apellido, 
          nota: this.formData.nota
        })
      },
      analizarNota(nota){
        let color = ""
        if (nota >= 0 && nota < 4) {
          color = "red"
        }
        if (nota >= 4 && nota < 7) {
          color = "yellow"
        }
        if (nota >=7 && nota <= 10 ) {
          color = "green"
        }
        return {
          color
        }
      },
      promedioTotal(){
        let alumnosTot = this.alumnos.length
        let notaTot= 0
        this.alumnos.forEach(a => {
          notaTot += parseInt(a.nota, 10)
        });
        return notaTot / alumnosTot
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-index-formulario {

  }
  h1{
    text-align: center;
    font-weight: bold;
  }
  h2{
    text-align: center;
    font-weight: bold;
    color: rgb(159, 9, 157);
  }
  h6{
    font-size: 25px;
    font-weight: bold;
  }
  label{
    font-weight: bold;
  }
</style>
