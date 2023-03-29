<template>
  <div id="app">
   <Welcome/>
  <main>
    <router-view/>
  </main>
  </div>
</template>

<script>
import Welcome from './components/Welcome'
export default {
  name: 'App',
  components:{
  Welcome
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}
body{
	background-color: #dedede;
	background-image:
	 linear-gradient(#ecebeb 50%, transparent 50%, transparent);
	background-size: 10px 10px;
}
</style>
