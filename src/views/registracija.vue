<template>
<div class="">  <!--
  <div class="navigacija">
			
			<nav class="navbar navbar-expand-lg ">
				 <a  href="/" > <img src="assets/logo2.png" class="logo">  </a>
				<button type="button" class="navbar-toggler custom-toggler" data-toggle="collapse" data-target="#navbarCollapse">
					<span class="navbar-toggler-icon custom-toggler"></span>
				</button>
				<div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
					<div class="navbar-nav">
						<a href="/" class="nav-item nav-link">Početna</a>
						<a href="/dogadaji" class="nav-item nav-link">Događaji</a>			
						<a href="/figurice" class="nav-item nav-link active">Figurice</a>
						<a href="/galerija" class="nav-item nav-link">Galerija</a>
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
					<div class="navbar-nav ml-auto action-buttons">
						<div class="nav-item dropdown">
							<a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle mr-4">Prijava</a>
							<div class="dropdown-menu action-form"> <p class="prijava"> Prijava </p>
								<form action="/examples/actions/confirmation.php" method="post">	
									<div class="form-group">
										<input type="text"  class="form-control"  placeholder="email" required="required">
									</div>
									<div class="form-group">
										<input type="password"  class="form-control"  placeholder="lozinka" required="required">
									</div>
									<input type="submit" class="btn btn-primary btn-block" value="Prijava">
									<div class="text-center mt-2">
										<a style="color:black" href="#">Niste registrirani?</a>
									</div>
								</form>
							</div>
						</div>
							<a href="/registracija"  class="btn btn-primary ">Registracija</a>
					</div>
				</div>
			</nav>
		</div> -->
<div class="login-box">
  <h2 class="naslov">Registracija</h2>
  <form>
    <div class="user-box">
      <input 
            v-model="korisnickoIme" 
            type="text" 
            name="" 
            required="" 
            oninvalid="this.setCustomValidity('Ime je obavezno.')" 
            onchange="this.setCustomValidity('')"
            id="KorisnickoIme"
      />

      <label>Korisničko ime</label>
    </div>
    <div class="user-box">
      <input
            v-model="email" 
            type="text" 
            name="" 
            required="" 
            id="Email"
            oninvalid="this.setCustomValidity('Ime je obavezno.')" 
            onchange="this.setCustomValidity('')"
      />
      <label>Email</label>
    </div>
    <div class="user-box">
      <input 
            v-model="lozinka" 
            type="password" 
            name="" 
            required=""
            id="Lozinka"
      />
      <label>Lozinka</label>
    </div>
    
    <div class="user-box">
      <input 
            v-model="lozinka2" 
            type="password" 
            name="" 
            required=""
            id="Lozinka2"
      />
      <label>Ponovi lozinku</label>
      <p id="porukaPassword"></p>
      <p id="podudaranjePassword"></p>
    </div>
    <p id="poruka2"></p>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button class="animacijaGumba" @click.prevent="registracija(korisnickoIme,email,lozinka,lozinka2)">  Registriraj se </button>
    </a>
  </form>
</div>
</div>
</template>

<script>
import {Auth} from '@/services';

export default{
  name: 'registracija',
  data(){
    return {
      korisnickoIme: "",
      email: "",
      lozinka: "",
      lozinka2: "",
      Auth,
    };
  },
   methods: {
     
    /*async signup(){
        let success = await Auth.signup(this.email, this.lozinka);
        console.log('Rezultat prijave', success);
        if(success == true){
          this.$router.push({path: '/'})
         if (
        this.lozinka !== this.lozinka2 ||
        this.lozinka2 !== this.lozinka
      ) {
        alert("Lozinke se ne podudaraju!");
        console.log(error);
      }
      let user = {
          korisnickoIme: this.korisnickoIme,
          email: this.email,
          lozinka: this.lozinka,
          lozinka2: this.lozinka2,
      };
       let newuser = await Auth.registracija(user);
        console.log('Registriran je korisnik', newuser.data);
        }
    },*/

    async registracija(korisnickoIme,email,lozinka,lozinka2) {

        
        if (korisnickoIme=='' || email=='' || lozinka=='' || lozinka2==''){
          document.getElementById('poruka2').innerHTML = "Polja su prazna!";
        }
        let pass = document.getElementById("Lozinka")
        let pass2 = document.getElementById("Lozinka2")
        if (lozinka !== lozinka2 || lozinka2 !== lozinka) {
          document.getElementById('podudaranjePassword').innerHTML ="Lozinke se ne podudaraju!";
          console.log(error);
        }
        else if(pass.value.length <=5 || pass2.value.length <=5){
          document.getElementById('porukaPassword').innerHTML = "Unesite 6 ili više znakova!";
        }
      else{
        let podaci = {
            korisnickoIme:korisnickoIme,
            email:email, 
            lozinka:lozinka,
            lozinka2:lozinka2,
        }
        
        console.log(podaci)
        await Auth.signup(podaci).then(() => {
            this.$router.push({ path: '/' });
        });
        }
      }
      /*
      Auth.registracijaBackend(podaci);
      */
      
    
     
  },
}


/*
jQuery(document).ready(function($){
            $("#submit").click(function(){
                let email= $("#email").val();
                let lozinka = $("#lozinka").val();
                let korisnickoIme = $("#korisnicko_ime").val();
                let imeObjekta = $("#ime_objekta").val();
                let lokacija = $("#lokacija").val();
                let kontakt = $("#kontakt").val();
                if(email == '' || lozinka == '' || korisnickoIme=='' || imeObjekta=='' || lokacija=='' || kontakt==''){
                    $("#Required").html("Unesite sve podatke!").css("color","red");
                }else{
                     $("#error").html("User Are Not Valid");
                }
                return false;
            });
});
import {firebase} from '@/firebase';
import { db } from '@/firebase';
import store from '@/store';
export default {
  name:'registracija',
  data: function () {
    return {
      store,
      korisnicko_ime:'',
      email: '',
      lozinka: '',
      ime_objekta: '',
      lokacija: '',
      kontakt: '',
    }
  },
  methods: {
  async registracija() {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.lozinka);
      const id = this.email;
      db.collection("user")
        .doc(id)
        .set({
          korisnicko_ime: this.korisnicko_ime,
          email: this.email,
          lokacija: this.lokacija,
          ime_objekta: this.ime_objekta,
          kontakt: this.kontakt,
        });
      
      this.$router.replace({ name: 'pocetna'});
    } 
    catch(error) {
      
      if ((store.currentUser = null)) this.$router.replace({ name: "registracija" });
    }
  }
    
  },
};
  */  
</script> 



<style>
#porukaPassword{
  color:rgb(248, 235, 54);
}
#podudaranjePassword{
  color:rgb(248, 235, 54);
}
#poruka2{
  color:rgb(248, 235, 54);
}
.animacijaGumba{
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: rgb(248, 235, 54);
    font-size: 18px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    letter-spacing: 4px;
   background-color:transparent;
   border: none;
}


.select{
	display:block;
	width:150px;
	margin-bottom:10px;
	color: #000000;
    display: block;
    margin-top: 1.3rem;
	text-align:center;
	padding: 5px 5px 5px;
	text-align-last:center;
	
}

.select-isti-red{
	display:block;
	margin-left:15px;
	margin-right:30px;
	margin-top:70px;
}
.shape{
    width:500px;
    height:500px;
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
.navbar .social-btn .btn, .navbar .social-btn .btn:hover {
	color: #fff;
	margin: 0;
	padding: 0 !important;
	font-size: 13px;
	border: none;
	transition: all 0.4s;
	text-align: center;
	line-height: 34px;
	width: 47%;
	text-decoration: none;
}
.navbar .social-btn .facebook-btn {
	background: yellow;
}
.navbar .social-btn .facebook-btn:hover {
	background: #4676bd;
}
.navbar .social-btn .twitter-btn {
	background: #64ccf1;
}
.navbar .social-btn .twitter-btn:hover {
	background: #4ec7ef;
}
.navbar .social-btn .btn i {
	margin-right: 5px;
	font-size: 16px;
	position: relative;
	top: 2px;
}
.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg%27%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.custom-toggler.navbar-toggler {
  border-color: white;
}
.or-seperator {
	margin-top: 32px;
	text-align: center;
	border-top: 1px solid #e0e0e0;
}
.or-seperator b {
	color: #666;
	padding: 0 8px;
	width: 30px;
	height: 30px;
	font-size: 13px;
	text-align: center;
	line-height: 26px;
	background: #fff;
	display: inline-block;
	border: 1px solid #e0e0e0;
	border-radius: 50%;
	position: relative;
	top: -15px;
	z-index: 1;
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
html {
  height: 100%;
}
body {
  margin:0;
  padding:0;
  font-family: sans-serif;
  background: white;
}
.login-box {
  position: absolute;
  top: 55%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: black;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
  z-index: 1;
}
@media (max-width: 800px){
    body {
    background: black;
    }
}
.navigacija {
  z-index: 99;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: white;
  text-align: center;
  font-size: 45px;
}
.login-box .user-box {
  position: relative;
}
input[type=text] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fff !important;
}


.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 22px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 3px 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}
.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: white;
  font-size: 19px;
}
.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: rgb(248, 235, 54);
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a span {
  position: absolute;
  display: block;
}
.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent,  rgb(248, 235, 54));
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}
.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, rgb(248, 235, 54));
  animation: btn-anim2 1s linear infinite;
  animation-delay: .45s
}
@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}
.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, rgb(248, 235, 54));
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}
@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}
.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent,rgb(248, 235, 54));
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}
@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

</style>