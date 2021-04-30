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

        <section id="header" class="pozadina text-center">
     <h1 class="display-3">GALERIJA</h1>
     <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
     
</section>
  
<section id="gallery">
  <div class="container">
    <div class="row">
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="assets/test3.jpg" alt="" class="card-img-top" width="200" height="230">
      <div class="card-body">
	<div class="posts">
 <h5 class="card-title">SPOILS OF WAR</h5>
 <p class="card-text">Igra za 3 do 5 igrača koji poput vikinga trebaju podijeliti blago. Igra ze bazira na principu "Liars dice" gdje se igrači klade na broj kockica s određenim brojem u odnosu na ukupan broj kockica u igri. Svaki igrač ima svoj zaslon i plastičnu posudicu za bacanje i skrivanje kockica. Uz igru dolazi tematski dizajnirani drveni insert što ulazi u cijenu. </p>
  <a href="#" class="style-3">Read More</a>
</div>
      </div>
     </div>
    </div>
  <div class="col-lg-4 mb-4">
  <div class="card">
      <img src="assets/test2.jpg" alt="" class="card-img-top">
      <div class="card-body">
		  <div class="posts">
 <h5 class="card-title">Mancrusher Gargants</h5>
 <p class="card-text">Stigao novi mancrusher gargants, uređen i obojan</p>
  <a href="#" class="style-3">Read More</a>
</div>
      </div>
      </div>
    </div>
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="assets/test1.jpg" alt="" class="card-img-top">
      <div class="card-body">
		  
<div class="posts">
 <h5 class="card-title">Dark Overlord</h5>
 <p class="card-text">lagana party roleplaying društvena igra za 4-7 igrača. Jedan igrač, u ulozi Mračnog gospodara smrti: Rigora Mortisa, smišlja priču/zadatak koji njegove sluge goblini nisu uspješno obavili (npr. natjerali George R. R. Martina da dovrši ASOIAF franšizu) te želi saznati tko je od njih kriv za neuspjeh. </p>
  <a href="#" class="style-3">Read More</a>
</div>
</div>
     </div>
    </div>
  </div>
</div>
</section>
        </div>

</template>

<style>
.navbar {
	background-color: black;
	padding-left: 16px;
	padding-right: 16px;
	
	border-radius: 0;
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
    .pozadina{
        background-image: url(/assets/pozadina.jpg);
        position:relative;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .lead{
        text-indent: -9999px;
    }
    .display-3{
        text-indent: -9999px;
        font-size:180px;
    }

	
.style-3 {
  background:rgb(238, 235, 235);
  border:1px solid #dfdfdf;
  color:rgb(19, 17, 17);
  font: italic 17px Playfair Display ;
  padding:11px;
  font-weight:400;
  max-width:250px;
  display:block;
  text-align:center;  
  margin:10px auto;
  position:relative;
  border-radius:25px;
}
.style-3:hover {
  -webkit-box-shadow:inset 0 0 10px 25px #cfff99;
  box-shadow:inset 0 0 10px 25px  #cfff99;
  border-color: #cfff99;
  color:black;
  text-decoration: none;
}

</style>