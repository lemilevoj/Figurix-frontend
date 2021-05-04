<template>
<div>
<div class="navigacija">
			<nav class="navbar navbar-expand-lg ">
				 <img src="assets/logo2.png"  class="logo">	
				<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
					<span class="navbar-toggler-icon"></span>
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
							<div class="dropdown-menu action-form">
								<form action="/examples/actions/confirmation.php" method="post">
									<p class="hint-text">Sign in with your social media account</p>
									<div class="form-group social-btn clearfix">
										<a href="#" class="btn btn-secondary facebook-btn float-left"><i class="fa fa-facebook"></i> Facebook</a>
										<a href="#" class="btn btn-secondary twitter-btn float-right"><i class="fa fa-twitter"></i> Twitter</a>
									</div>
									<div class="or-seperator"><b>or</b></div>
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Username" required="required">
									</div>
									<div class="form-group">
										<input type="password" class="form-control" placeholder="Password" required="required">
									</div>
									<input type="submit" class="btn btn-primary btn-block" value="Login">
									<div class="text-center mt-2">
										<a href="#">Forgot Your password?</a>
									</div>
								</form>
							</div>
						</div>
							<a href="/registracija"  class="btn btn-primary ">Registracija</a>
					</div>
				</div>
			</nav>
		</div>

    <div class="l-container">
        <div class="b-game-card">
            <a href="/humanoid_frog"><div class="b-game-card__cover" style="background-image: url(/assets/humanoid_frog.jpg);"><h1 class="ime_igre">Humanoid Frog</h1></div></a>
        </div>
        <div class="b-game-card">
            <a href="/elf_ranger"><div class="b-game-card__cover" style="background-image: url(/assets/elf_ranger.jpg);"><h1 class="ime_igre">Elf Ranger</h1></div></a>
        </div>
        <div class="b-game-card">
            <a href="/wendy_adams"><div class="b-game-card__cover" style="background-image: url(/assets/wendy_adams.jpg);"><h1 class="ime_igre">Wendy Adams</h1></div></a>
        </div>
        <div class="b-game-card">
            <a href="/pokemon"><div class="b-game-card__cover" style="background-image: url(/assets/pokemon.jpg);"><h1 class="ime_igre">Pokémon</h1></div></a>
        </div>
        <div class="b-game-card">
            <a href="/catan"><div class="b-game-card__cover" style="background-image: url(/assets/catan1.jpg);"><h1 class="ime_igre">Catan</h1></div></a>
        </div>
        <div class="b-game-card">
            <a href="/arkhamhorror"><div class="b-game-card__cover" style="background-image: url(/assets/arkhamhorror.jpg);"><h1 class="ime_igre">Arkham Horror</h1></div></a>
        </div>
        <div class="b-game-card">
            <a href="/7wonders"><div class="b-game-card__cover" style="background-image: url(/assets/nova.jpg);"><h1 class="ime_igre">7 Wonders</h1></div></a>
        </div>
        <div class="b-game-card">
            <a href="/uno"><div class="b-game-card__cover" style="background-image: url(/assets/uno.PNG);"><h1 class="ime_igre">Uno</h1></div></a>
        </div>
		<div class="b-game-card">
            <a href="/lostcities"><div class="b-game-card__cover" style="background-image: url(/assets/lostcities.PNG);"><h1 class="ime_igre">Lost Cities</h1></div></a>
        </div>
		<div class="b-game-card">
            <a href="/bloodrage"><div class="b-game-card__cover" style="background-image: url(/assets/bloodrage.jpg);"><h1 class="ime_igre">Blood Rage</h1></div></a>
        </div>
		<div class="b-game-card">
            <a href="/risk"><div class="b-game-card__cover" style="background-image: url(/assets/risk.jpg);"><h1 class="ime_igre">Risk</h1></div></a>
        </div>
		<div class="b-game-card">
            <a href="/splender"><div class="b-game-card__cover" style="background-image: url(/assets/splendor.jpg);"><h1 class="ime_igre">Splendor</h1></div></a>
        </div>
    </div>

</div>
</template>

<style>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.l-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  width: 100%;
  max-width: 1500px;
  padding: 30px;
  margin:auto;
  
}
@media screen and (max-width: 760px) {
  .l-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

.b-game-card {
  position: relative;
  z-index: 1;
  width: 100%;
  padding-bottom: 150%;
  perspective: 1000px;
}
.b-game-card__cover {
  position: absolute;
  z-index: 1;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  background-size: cover;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  transform-origin: top center;
  will-change: transform;
  transform: skewX(0.001deg);
  transition: transform 0.35s ease-in-out;
}
.b-game-card__cover::after {
  display: block;
  content: "";
  z-index: 100;
  top: 80px;
  left: 0;
  width: 100%;
  height: 120%;
  background: linear-gradient(226deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 35%, rgba(255, 255, 255, 0.2) 42%, rgba(255, 255, 255, 0) 60%);
  transform: translateY(-20%);
  will-change: transform;
  transition: transform 0.65s cubic-bezier(0.18, 0.9, 0.58, 1);
}
.b-game-card:hover .b-game-card__cover {
  transform: rotateX(7deg) translateY(-6px);
}
.b-game-card:hover .b-game-card__cover::after {
  transform: translateY(0%);
}
.b-game-card::before {
  display: block;
  content: "";
  position: absolute;
  top: 80px;
  left: 5%;
  width: 90%;
  height: 90%;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 6px 12px 12px rgba(0, 0, 0, 0.4);
  will-change: opacity;
  transform-origin: top center;
  transform: skewX(0.001deg);
  transition: transform 0.35s ease-in-out, opacity 0.5s ease-in-out;
}
.b-game-card:hover::before {
  opacity: 0.6;
  transform: rotateX(7deg) translateY(-6px) scale(1.05);
}
.ime_igre{
    color:white;
    position:absolute;
    bottom:0px;
    margin-left:10px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	-webkit-text-stroke: 1.2px black;
	font-size: 27px;
}
</style>