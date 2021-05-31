<template>
  <div id="app">
    <!--<button @click="funkcija()"></button>-->
    <router-view />
    
  </div>
</template>

<script>
import {Auth} from "@/services";
import store from '@/store.js';
export default {
  data(){
    return{
      auth: Auth.state,   //dovlaci iz jednog objekta u drugi objekt neke kljuceve, varijable...
      user: {},
      store,
    };
    
  },
  
  methods:{
    
    logout(){
      Auth.logout();
      this.$router.go(); //za osvjezavanje
    },
    funkcija(){
      console.log(store.authenticated)
      console.log(store.email)
      console.log(store.korisnickoIme)
    },
    
  },

  
};


</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-size: cover;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

