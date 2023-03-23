<template>
<div>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="125" height="125" />
    <div class="wrapper">
      <Me/>
    </div>
  </header>
      <nav> 
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/career">Career</RouterLink>
      <RouterLink to="/hobby">Hobby</RouterLink>
    </nav>
    </div>
</template>

<script>
import Me from './Me'
export default {
  components:{
  Me
  }
}
</script>

<style scoped>
header {
  display:block;
  text-align: center;
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  text-align: center;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin: 1 auto 0;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}  
header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
