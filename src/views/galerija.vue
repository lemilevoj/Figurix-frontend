
  
<template>
    <div>
    <section id="header" class="pozadina text-center">
     <h1 class="display-3">GALERIJA</h1>
     <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
     
</section>

<div class="objavabtn">
    <input type="text" class="objava" placeholder="Dodaj objavu..." id="galerija"  data-toggle="modal" data-target="#ModalLoginForm" >
    <button type="button" class="objaviGumb btn-lg" data-toggle="modal" data-target="#ModalLoginForm" > Objavi</button>
</div>


<div id="ModalLoginForm" class="modal fade">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title">Galerija</h1>
            </div>
            <div class="modal-body">
                <form role="form" method="novaoObjava()" action="">
                    <input type="hidden" name="_token" value="">
                  
                    <div class="form-group">
                        <label for="galerija" class="control-label">Dodaj objavu</label>
                        <br>
                        
                    </div>
					<div class="form-group">
						<span class="fw-500">Naslov</span>
                            <input v-model="naslov" type="text" class="form-control input-lg" name="naslovSlike" id="naslovSlike" value="">
                    </div>
					<div class="form-group">
						<span class="fw-500">Opis slike</span>
                            <input v-model="noviOpisSlike" type="text" class="form-control input-lg" name="opisSlike" id="opisSlike" value="">
                    </div>
                    <div class="dodavanje-slike">
                        <croppa :width="400" :height="400" placeholder="Učitaj sliku"></croppa>
						 
                    </div>
                    <p id="poruka" v-if="store.prazno">Popunite sva polja!</p>
                    <div>
                        <button type="submit" class="btn" @click.prevent="dodajObjavu();">Objavi</button>
						
                    </div>
					
					
                </form>
            </div>
        </div>
    </div>
</div>
  

<section id="gallery" >
  <div class="container">
    <div class="row" >
		
			
		
    <div class="col-lg-4 mb-4">
    <div class="card" v-for="drugeobjave in drugeobjave" :key="drugeobjave.id">
      <!--<img src="assets/test3.jpg" alt="" class="card-img-top" width="200" height="230">-->
      <div class="card-body">
	<div class="posts">
			<h5 class="card-title">{{drugeobjave.naslov}}</h5>
			<p class="card-text">{{drugeobjave.noviOpisSlike}}</p>
			<p class="card-text">{{drugeobjave.email}}</p>
			
	<!--<a href="#" class="style-3">Read More</a>-->
	</div>
  </div>
</div>
	</div>
	</div>
	</div>
</section>
        </div>
 
</template> 

<script> 
import store from '@/store.js';
import {Objave} from '@/services';
export default{
	
	props:['id'],
	
	data() {
        return {
            noviOpisSlike:"",
			naslov:"",
			slikaReference: null,
			user: {},
			email:"",
			objave: [],
			drugeobjave: [{}],
			objavgalerija: {},
			url:"",
			store
        };
    },
	methods: {
		getImageBlob() {
      return (resolve, reject) => {
        this.slikaReference.generateBlob(blobData => {
          if (blobData != null) {
            resolve(blobData);
          } else {
            resolve(blobData);
          }
        });
      };
	 
	},
	 async dodajObjavu(){
	    if(this.noviOpisSlike=="" || this.naslov==""){
			store.prazno=true;
		}
		else{
		/*let blobData = await this.getImageBlob();
		let imageName = this.email+"/"+Date.now() + ".png";
		debugger;
		let result = await storage.ref(imageName).put(blobData);
		let url = await result.ref.getDownloadURL();*/
        let galerija = {
			email: store.email,
			posted_at: Date.now(),
			naslov: this.naslov,
			noviOpisSlike: this.noviOpisSlike,
			
			
        }
		let novaObjava =  Objave.dodaj_objavu(galerija);
		console.log(galerija)
		console.log("galerija?"+galerija);
		
		}
	},
	 
	
	},
	async created(){

		console.log("uso sam u dohvati objavu")
		this.objave = await Objave.dohvati_objavu();
		this.drugeobjave = JSON.parse(localStorage.getItem('galerija'));
		console.log(JSON.parse(localStorage.getItem('galerija')));

	}
};
</script>




<style>
.korisnikEmail{
    margin-top:15px;
    margin:auto;
	color:white;
}
.odjava{
	border:none;
	color:white;
	font-family: 'Varela Round', sans-serif;
    background-color:transparent;
    font-size:15px;
}
.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg%27%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
.custom-toggler.navbar-toggler {
  border-color: white;
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
	top:0px;
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
		margin-top:40px;
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
.objavabtn {
  margin-top: 10px;
	text-align: center;
  margin-bottom:20px;
}
.objaviGumb{
  background-color:rgb(231, 231, 29);
  color:white;
  border:none;
  margin-left:10px;
  border-radius: 4px;
  padding:3px;
}
</style>
