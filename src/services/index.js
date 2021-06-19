
  
import axios from 'axios';
import $router from '@/router';


let Service = axios.create({     
    baseURL: 'http://localhost:3000/',  
    timeout: 1000,
});

Service.interceptors.request.use((request) => {
   try{
       request.headers['Authorization'] = 'Bearer ' + Auth.getToken();
   }
   catch(e){
       console.error(e);
   }
   return request;
});

Service.interceptors.response.use(
    (response) => {
        console.log('Interceptor', response);
        return response;
    },
    (error) => {
        if(error.response.status == 401){
            Auth.logout();
            $router.go();
            
        }
        //console.error('Interceptor', error.response)
    }
);


let Objave = {
    async dohvati_objavu() {   
        
        let response = await Service.get(`/galerija`);
        console.log(response);
        let data = response.data;
        localStorage.setItem("galerija", JSON.stringify(data));
        console.log(data); 
        console.log("Current posts in services: "+data)
        data=data.map((doc)=>{
        return {
                id: doc._id,
                email: doc.email,
                naslov: doc.naslov,
                noviOpisSlike: doc.noviOpisSlike,
                slika: doc.slikaReference,
                url:doc.url,
                posted_at:doc.posted_at,
        }      
        });
        
        return data;
    },
    dodaj_objavu(galerija) {
        console.log("evo mene opet")
        return Service.post('/galerija', galerija);
    },
    
    
    
};
let Dogadaji = {
    /* 7 wonders */
    dodaj_dogadaj1(dogadaji) {
        return Service.post('/7wonders', dogadaji);
    },
    async dohvati7wonders(){
        let response = await Service.get(`/7wonders`);
        console.log(response);
        let data = response.data;
        
        console.log("Current posts in services: "+data)
        data=data.map((doc)=>{
        return {
            id: doc._id,
            email: doc.email,
            grad: doc.grad,
            vrijeme: doc.vrijeme,
            adresa: doc.adresa,
            ponijetiOpremu: doc.ponijetiOpremu,
        }    
        });
        return data;
    },
    /* Arkham horror */
    async dohvatiArkhamHorror(){
        let response = await Service.get(`/arkhamhorror`);
        console.log(response);
        let data = response.data;
        
        console.log("Current posts in services: "+data)
        data=data.map((doc)=>{
        return {
            id: doc._id,
            email: doc.email,
            grad: doc.grad,
            vrijeme: doc.vrijeme,
            adresa: doc.adresa,
            ponijetiOpremu: doc.ponijetiOpremu,
        }    
        });
        return data;
    },
    dodaj_dogadaj2(dogadaji) {
        return Service.post('/arkhamhorror', dogadaji);
    },
    /* Blood rage */
    async dohvatiBloodRage(){
        let response = await Service.get(`/bloodrage`);
        console.log(response);
        let data = response.data;
        
        console.log("Current posts in services: "+data)
        data=data.map((doc)=>{
        return {
            id: doc._id,
            email: doc.email,
            grad: doc.grad,
            vrijeme: doc.vrijeme,
            adresa: doc.adresa,
            ponijetiOpremu: doc.ponijetiOpremu,
        }    
        });
        return data;
    },
    dodaj_dogadaj3(dogadaji) {
        return Service.post('/bloodrage', dogadaji);
    },
    /* Catan */
    async dohvatiCatan(){
        let response = await Service.get(`/catan`);
        console.log(response);
        let data = response.data;
        
        console.log("Current posts in services: "+data)
        data=data.map((doc)=>{
        return {
            id: doc._id,
            email: doc.email,
            grad: doc.grad,
            vrijeme: doc.vrijeme,
            adresa: doc.adresa,
            ponijetiOpremu: doc.ponijetiOpremu,
        }    
        });
        return data;
    },
    dodaj_dogadaj4(dogadaji) {
        return Service.post('/catan', dogadaji);
    },
    /* D&D */
    async dohvatiDnd(){
        let response = await Service.get(`/dnd`);
        console.log(response);
        let data = response.data;
        
        console.log("Current posts in services: "+data)
        data=data.map((doc)=>{
        return {
            id: doc._id,
            email: doc.email,
            grad: doc.grad,
            vrijeme: doc.vrijeme,
            adresa: doc.adresa,
            ponijetiOpremu: doc.ponijetiOpremu,
        }    
        });
        return data;
    },
    dodaj_dogadaj5(dogadaji) {
        return Service.post('/dnd', dogadaji);
    },

    /* Lost Cities */

    async dohvatiLostCities(){
        let response = await Service.get(`/lostcities`);
        console.log(response);
        let data = response.data;
        
        console.log("Current posts in services: "+data)
        data=data.map((doc)=>{
        return {
            id: doc._id,
            email: doc.email,
            grad: doc.grad,
            vrijeme: doc.vrijeme,
            adresa: doc.adresa,
            ponijetiOpremu: doc.ponijetiOpremu,
        }    
        });
        return data;
    },
    dodaj_dogadaj6(dogadaji) {
        return Service.post('/lostcities', dogadaji);
    },

    /* MTG */

    async dohvatimtg(){
        let response = await Service.get(`/mtg`);
        console.log(response);
        let data = response.data;
        
        console.log("Current posts in services: "+data)
        data=data.map((doc)=>{
        return {
            id: doc._id,
            email: doc.email,
            grad: doc.grad,
            vrijeme: doc.vrijeme,
            adresa: doc.adresa,
            ponijetiOpremu: doc.ponijetiOpremu,
        }    
        });
        return data;
    },
    dodaj_dogadaj7(dogadaji) {
        return Service.post('/mtg', dogadaji);
    },

    /* Pokemon */

    async dohvatiPokemon(){
        let response = await Service.get(`/pokemon`);
        console.log(response);
        let data = response.data;
        
        console.log("Current posts in services: "+data)
        data=data.map((doc)=>{
        return {
            id: doc._id,
            email: doc.email,
            grad: doc.grad,
            vrijeme: doc.vrijeme,
            adresa: doc.adresa,
            ponijetiOpremu: doc.ponijetiOpremu,
        }    
        });
        return data;
    },
    dodaj_dogadaj8(dogadaji) {
        return Service.post('/pokemon', dogadaji);
    },

    /* Risk */

    async dohvatiRisk(){
        let response = await Service.get(`/risk`);
        console.log(response);
        let data = response.data;
        
        console.log("Current posts in services: "+data)
        data=data.map((doc)=>{
        return {
            id: doc._id,
            email: doc.email,
            grad: doc.grad,
            vrijeme: doc.vrijeme,
            adresa: doc.adresa,
            ponijetiOpremu: doc.ponijetiOpremu,
        }    
        });
        return data;
    },
    dodaj_dogadaj9(dogadaji) {
        return Service.post('/risk', dogadaji);
    },

     /* Splendor */

     async dohvatiSplendor(){
        let response = await Service.get(`/splendor`);
        console.log(response);
        let data = response.data;
        
        console.log("Current posts in services: "+data)
        data=data.map((doc)=>{
        return {
            id: doc._id,
            email: doc.email,
            grad: doc.grad,
            vrijeme: doc.vrijeme,
            adresa: doc.adresa,
            ponijetiOpremu: doc.ponijetiOpremu,
        }    
        });
        return data;
    },
    dodaj_dogadaj10(dogadaji) {
        return Service.post('/splendor', dogadaji);
    },

    /* Uno */

    async dohvatiUno(){
        let response = await Service.get(`/uno`);
        console.log(response);
        let data = response.data;
        
        console.log("Current posts in services: "+data)
        data=data.map((doc)=>{
        return {
            id: doc._id,
            email: doc.email,
            grad: doc.grad,
            vrijeme: doc.vrijeme,
            adresa: doc.adresa,
            ponijetiOpremu: doc.ponijetiOpremu,
        }    
        });
        return data;
    },
    dodaj_dogadaj11(dogadaji) {
        return Service.post('/uno', dogadaji);
    },

     /* Yugioh */

     async dohvatiYugioh(){
        let response = await Service.get(`/yugioh`);
        console.log(response);
        let data = response.data;
        
        console.log("Current posts in services: "+data)
        data=data.map((doc)=>{
        return {
            id: doc._id,
            email: doc.email,
            grad: doc.grad,
            vrijeme: doc.vrijeme,
            adresa: doc.adresa,
            ponijetiOpremu: doc.ponijetiOpremu,
        }    
        });
        return data;
    },
    dodaj_dogadaj12(dogadaji) {
        return Service.post('/yugioh', dogadaji);
    },
}

let Auth = {
    async signup(korisnickoIme,email,lozinka,lozinka2) {
        let post=await Service.post('/registracija', korisnickoIme,email,lozinka,lozinka2);
        return post
    },
    async login(email, lozinka){
        
        let response = await Service.post("/auth",{
           email: email,
           lozinka: lozinka
        });
        let user = response.data;
        localStorage.setItem("user", JSON.stringify(user)); 

        return true;
    },
    logout(){
      localStorage.removeItem("user");
    },
    getUser(){
      return JSON.parse(localStorage.getItem("user"))  
    },
    getToken(){
        let user = Auth.getUser();
        if(user && user.token){
            return user.token
        }
        else{
            return false;
        }
    },
    authenticated(){
        let user = Auth.getUser()
        if(user && user.token){
           return true 
        }
        else{
            return false
        }
    },
    
    profil(){
        let user = Auth.getUser()
        if(user){
            return user
        }
    },
    state: {
        get authenticated (){ //pomocu get ovaj atribut authenticated pretvaramo u funkciju
           return Auth.authenticated(); //pozivamo ju kao funckiju ali kad ju citamo ne moramo ju pozvat kao funkciju nego kao atribut 
        },
    }
};

export { Service, Auth, Objave, Dogadaji } // exportamo Service za ručne pozive ili Posts za metode.




