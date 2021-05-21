<template>
	<div class="pocetna">
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
										<input type="text" v-model="email" class="form-control" id="exampleInputEmail" placeholder="email" required="required">
									</div>
									<div class="form-group">
										<input type="password" v-model="lozinka" class="form-control" id="exampleInputLozinka" placeholder="lozinka" required="required">
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
		</div>
		<ul class="cb-slideshow">
            <li><span>Image 01</span><div class="pozicija"><h4 class="font1">Za sve <h1 class="font2">kolekcionare </h1>društvenih i kartaških igara</h4></div></li>
            <li><span>Image 02</span><div class="pozicija"><h4 class="font1">Izradite svoje <h1 class="font2">figurice!</h1></h4></div></li>
            <li><span>Image 03</span><div class="pozicija"><h4 class="font1">Informirajte se o svim najboljim <h1 class="font2">događajima</h1> u svijetu društvenih igara!</h4></div></li>
            <li><span>Image 04</span><div class="pozicija"><h4 class="font1">Podijelite <h1 class="font2">iskustva</h1> u igranju svojih igara</h4></div></li>
        </ul>
        <div class="container">
            <!-- Codrops top bar -->
            <div class="codrops-top">
                
                <div class="clr"></div>
            </div>
        </div>
  	</div>
</template>

<script>
import {Auth} from '@/services';

export default {
   data() {
    return {
      email: '',
      lozinka:'',
    };
  },
   methods: {
      async login(){
        let success = await Auth.login(this.email, this.lozinka);
        console.log('Rezultat prijave', success);
        if(success == true){
          this.$router.push({path: '/'})
        }
      }
    },
}

</script>


<style>

.prijava {
height: 30px;
color:black;
margin-left: 78px;
font-family: 'Varela Round', sans-serif;
font-size:25px;


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
/* SLIDESHOW */
.font1{
	font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	margin:0px;
	font-size:50px;
	display:inline;
	-webkit-text-stroke: 1.5px black;
}
.font2{
	font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	margin:0px;
	font-size:50px;
	display:inline;
	-webkit-text-stroke: 1.5px black;
	color:rgb(231, 231, 29);
}


@media (max-width: 768px){
    .font1{
        font-size:25px;
        -webkit-text-stroke: 1px black;
    }
}
@media (max-width: 768px){
    .font2{
        font-size:25px;
        -webkit-text-stroke: 1px black;
    }
}
.pozicija{
	margin-bottom:120px;
}
.cb-slideshow,
.cb-slideshow:after { 
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: -99; 
	list-style-type: none;
}
.cb-slideshow:after { 
    content: '';
    background-color:black;
}
.cb-slideshow li span { 
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    color: transparent;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: none;
    opacity: 0;
    z-index: 0;
	-webkit-backface-visibility: hidden;
    -webkit-animation: imageAnimation 24s linear infinite 0s;
    -moz-animation: imageAnimation 24s linear infinite 0s;
    -o-animation: imageAnimation 24s linear infinite 0s;
    -ms-animation: imageAnimation 24s linear infinite 0s;
    animation: imageAnimation 24s linear infinite 0s; 
}
.cb-slideshow li div { 
    z-index: 1000;
    position: absolute;
    bottom: 30px;
    left: 0px;
    width: 100%;
    text-align: center;
    opacity: 0;
    color: #fff;
    -webkit-animation: titleAnimation 24s linear infinite 0s;
    -moz-animation: titleAnimation 24s linear infinite 0s;
    -o-animation: titleAnimation 24s linear infinite 0s;
    -ms-animation: titleAnimation 24s linear infinite 0s;
    animation: titleAnimation 24s linear infinite 0s; 
}
.cb-slideshow li div h3 { 
    font-family: 'BebasNeueRegular', 'Arial Narrow', Arial, sans-serif;
    font-size: 240px;
    padding: 0;
    line-height: 200px; 
}
.cb-slideshow li:nth-child(1) span { 
    background-image: url(/assets/nicol_bolas.png) 
}
.cb-slideshow li:nth-child(2) span { 
    background-image: url(/assets/catan.jpg);
    -webkit-animation-delay: 6s;
    -moz-animation-delay: 6s;
    -o-animation-delay: 6s;
    -ms-animation-delay: 6s;
    animation-delay: 6s; 
}
.cb-slideshow li:nth-child(3) span { 
    background-image: url(/assets/kingdom.png);
    -webkit-animation-delay: 12s;
    -moz-animation-delay: 12s;
    -o-animation-delay: 12s;
    -ms-animation-delay: 12s;
    animation-delay: 12s; 
}
.cb-slideshow li:nth-child(4) span { 
    background-image: url(/assets/7wonders.jpg);
    -webkit-animation-delay: 18s;
    -moz-animation-delay: 18s;
    -o-animation-delay: 18s;
    -ms-animation-delay: 18s;
    animation-delay: 18s; 
}
.cb-slideshow li:nth-child(2) div { 
    -webkit-animation-delay: 6s;
    -moz-animation-delay: 6s;
    -o-animation-delay: 6s;
    -ms-animation-delay: 6s;
    animation-delay: 6s; 
}
.cb-slideshow li:nth-child(3) div { 
    -webkit-animation-delay: 12s;
    -moz-animation-delay: 12s;
    -o-animation-delay: 12s;
    -ms-animation-delay: 12s;
    animation-delay: 12s; 
}
.cb-slideshow li:nth-child(4) div { 
    -webkit-animation-delay: 18s;
    -moz-animation-delay: 18s;
    -o-animation-delay: 18s;
    -ms-animation-delay: 18s;
    animation-delay: 18s; 
}
/* Animation for the slideshow images */
@-webkit-keyframes imageAnimation { 
    0% { opacity: 0;
    -webkit-animation-timing-function: ease-in; }
    8% { opacity: 1;
         -webkit-animation-timing-function: ease-out; }
    17% { opacity: 1 }
    25% { opacity: 0 }
    100% { opacity: 0 }
}
@-moz-keyframes imageAnimation { 
    0% { opacity: 0;
    -moz-animation-timing-function: ease-in; }
    8% { opacity: 1;
         -moz-animation-timing-function: ease-out; }
    17% { opacity: 1 }
    25% { opacity: 0 }
    100% { opacity: 0 }
}
@-o-keyframes imageAnimation { 
    0% { opacity: 0;
    -o-animation-timing-function: ease-in; }
    8% { opacity: 1;
         -o-animation-timing-function: ease-out; }
    17% { opacity: 1 }
    25% { opacity: 0 }
    100% { opacity: 0 }
}
@-ms-keyframes imageAnimation { 
    0% { opacity: 0;
    -ms-animation-timing-function: ease-in; }
    8% { opacity: 1;
         -ms-animation-timing-function: ease-out; }
    17% { opacity: 1 }
    25% { opacity: 0 }
    100% { opacity: 0 }
}
@keyframes imageAnimation { 
    0% { opacity: 0;
    animation-timing-function: ease-in; }
    8% { opacity: 1;
         animation-timing-function: ease-out; }
    17% { opacity: 1 }
    25% { opacity: 0 }
    100% { opacity: 0 }
}
/* Animation for the title */
@-webkit-keyframes titleAnimation { 
    0% { opacity: 0 }
    8% { opacity: 1 }
    17% { opacity: 1 }
    19% { opacity: 0 }
    100% { opacity: 0 }
}
@-moz-keyframes titleAnimation { 
    0% { opacity: 0 }
    8% { opacity: 1 }
    17% { opacity: 1 }
    19% { opacity: 0 }
    100% { opacity: 0 }
}
@-o-keyframes titleAnimation { 
    0% { opacity: 0 }
    8% { opacity: 1 }
    17% { opacity: 1 }
    19% { opacity: 0 }
    100% { opacity: 0 }
}
@-ms-keyframes titleAnimation { 
    0% { opacity: 0 }
    8% { opacity: 1 }
    17% { opacity: 1 }
    19% { opacity: 0 }
    100% { opacity: 0 }
}
@keyframes titleAnimation { 
    0% { opacity: 0 }
    8% { opacity: 1 }
    17% { opacity: 1 }
    19% { opacity: 0 }
    100% { opacity: 0 }
}
/* Show at least something when animations not supported */
.no-cssanimations .cb-slideshow li span{
	opacity: 1;
}
@media screen and (max-width: 1140px) { 
    .cb-slideshow li div h3 { font-size: 140px }
}
@media screen and (max-width: 600px) { 
    .cb-slideshow li div h3 { font-size: 80px }
}
</style>