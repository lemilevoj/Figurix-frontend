<template>
<div>
  <div id="app">
    <!--<button @click="funkcija()"></button>-->
	<div class="navigacija">
			<nav class="navbar navbar-expand-lg "> 
				 <a  href="/" > <img src="assets/logo2.png" class="logo">  </a>	
				<button type="button" class="navbar-toggler custom-toggler" data-toggle="collapse" data-target="#navbarCollapse">
					<span class="navbar-toggler-icon custom-toggler"></span>
				</button>
				<div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
					<div class="navbar-nav">
						<router-link to="/" class="nav-item nav-link">Početna</router-link>
						<router-link to="/dogadaji" class="nav-item nav-link">Događaji</router-link>			
						<router-link to="/figurice" class="nav-item nav-link active">Figurice</router-link>
						<router-link to="/galerija" class="nav-item nav-link">Galerija</router-link>
					</div>
					<form class="navbar-form form-inline">
						<div class="input-group search-box">								
							<input type="text" id="search" class="form-control" placeholder="Pretraži ...">
							<div class="input-group-append">
								<span class="input-group-text">
									<i class="material-icons">&#xE8B6;</i>
								</span>
							</div>
						</div>
					</form>
                    
					<div class="navbar-nav ml-auto action-buttons" v-if="!store.authenticated">
						<div class="nav-item dropdown">
							<a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle mr-4">Prijava</a>
							<div class="dropdown-menu action-form"> <p class="prijava"> Prijava </p>

								<form action="/examples/actions/confirmation.php" method="post" id="formaPrijave">	
									<div class="form-group">
										<input type="text" v-model="email" class="form-control" id="exampleInputEmail" placeholder="email" required="required">
									</div>
									<div class="form-group">
										<input type="password" v-model="lozinka" class="form-control" id="exampleInputLozinka" placeholder="lozinka" required="required">
									</div>
                                    <p id="poruka" v-if="store.prazno">Polja su prazna!</p>
									<input type="submit" class="btn btn-primary btn-block" value="Prijava" @click.prevent="login()">
									<div class="text-center mt-2">
										<a style="color:black" href="#">Niste registrirani?</a>
									</div>
								</form>
							</div>
						</div>
							<a href="/registracija"  class="btn btn-primary ">Registracija</a>
					</div>
					<p class="korisnikEmail" v-if="store.authenticated">{{store.email}}</p>
					<div v-if="store.authenticated"><button class="odjava" @click.prevent="logout()">Odjava</button></div>
				</div>
			</nav>
      </div>
    <router-view />
  </div>
      
      
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
      store ,
      email: '',
      lozinka: '',
      Auth
    }; 
  },
  methods:{
	
    async login(){
		
        console.log("pokusaj prijave")
		let success=false;
		
		if(success==false && (this.email=='' || this.lozinka=='')){
			
		 	store.prazno=true;
        	
		}
		success = await Auth.login(this.email, this.lozinka);
		
        if(success == true){
            store.authenticated = true;
            store.email=this.email;
            
            
            console.log('Rezultat prijave', success);
            
				console.log(success);
                console.log(this.email,this.lozinka)
				
				console.log("evo me")
        }
        console.log(store.authenticated)
      },
    
    logout(){
      Auth.logout();
      this.$router.go(); //za osvjezavanje
    },
  }
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

.prijava {
height: 30px;
color:black;
margin-left: 78px;
font-family: 'Varela Round', sans-serif;
font-size:25px;
}
#poruka{
    color:red;
}
body {
	font-family: 'Varela Round', sans-serif;
}
.form-control {
	box-shadow: none;		
	font-weight: normal;
	font-size: 13px;
}
.navbar {
	background-color: black;
	padding-left: 16px;
	padding-right: 16px;
	
	border-radius: 0;
}
.navigacija{
	position:fixed;
	z-index:99;
	width:100%;
}
.nav-link img {
	border-radius: 50%;
	width: 36px;
	height: 36px;
	margin: -8px 0;
	float: left;
	margin-right: 10px;
}

.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg%27%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.custom-toggler.navbar-toggler {
  border-color: white;
}
.logo {
	padding-left: 0;
	font-size: 20px;
	padding-right: 50px;
	height: 35px;
	width: 190px;
}
.navbar .form-inline {
	display: inline-block;
}
.navbar a {
	color: white;
	font-size: 15px;
}
.search-box {
	position: relative;
}	
.search-box input {
	padding-right: 35px;
	border-color: #dfe3e8;
	border-radius: 4px !important;
	box-shadow: none
}
.search-box .input-group-text {
	min-width: 35px;
	border: none;
	background: transparent;
	position: absolute;
	right: 0;
	z-index: 9;
	padding: 7px;
	height: 100%;
}
.search-box i {
	color: #a0a5b1;
	font-size: 19px;
}
.navbar .sign-up-btn {
	min-width: 110px;
	max-height: 36px;
}
.navbar .dropdown-menu {
	color: white;
	font-weight: normal;
	border-radius: 1px;
	border-color: #e5e5e5;
	box-shadow: 0 2px 8px rgba(0,0,0,.05);
}
.navbar a, .navbar a:active {
	color: white;
	padding: 8px 20px;
	background: transparent;
	line-height: normal;
}
.navbar .navbar-form {
	border: none;
}
.navbar .action-form {
	width: 280px;
	padding: 20px;
	left: auto;
	right: 0;
	font-size: 14px;
}
.navbar .action-form a {		
	color: rgb(231, 231, 29);	
	padding: 0 !important;
	font-size: 14px;
}
.navbar .action-form .hint-text {
    text-align: center;
    margin-bottom: 15px;
    font-size: 13px;
}
.navbar .btn-primary, .navbar .btn-primary:active {
	color: #fff;
	background:  rgb(231, 231, 29)	 !important;
	border: none;
}	
.navbar .btn-primary:hover, .navbar .btn-primary:focus {		
	color: #fff;
	background: rgb(231, 231, 29)	 !important;
}


.navbar .action-buttons .dropdown-toggle::after {
	display: none;
}
.form-check-label input {
	position: relative;
	top: 1px;
}

@media (min-width: 1200px){
	.form-inline .input-group {
		width: 300px;
		margin-left: 30px;
	}
}
@media (max-width: 768px){
	.navbar .dropdown-menu.action-form {
		width: 100%;
		padding: 10px 15px;
		background: transparent;
		border: none;
	
	}
	.navbar .form-inline {
		display: block;
	}
	.navbar .input-group {
		width: 100%;
	}
}

