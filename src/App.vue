<template>
  <div id="app">
    <div class="container-fluid-mt-3">
      <!-- <IndexFormulario/> -->
      <NavBar/>
      <router-view/>
    </div>

  </div>
</template>

<script>

/* import IndexFormulario from "./components/IndexFormulario.vue";
 */import NavBar from "./components/NavBar.vue";

export default {
  name: 'App',
  components: {
/*     IndexFormulario, */
    NavBar
  }
}
</script>

<style>
#app {

}
</style>
