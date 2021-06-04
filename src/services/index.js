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




let Auth = {

 
    dohvatBackend() {
        return Service.get ("/galerija")
    },
    async signup(korisnickoIme,email,lozinka,lozinka2) {
        let post=await Service.post('/registracija', korisnickoIme,email,lozinka,lozinka2);
        return post

    },
    async login(email, lozinka){
        let response = await Service.post("/auth",{
           email: email,
           lozinka: lozinka,
        });
        let user = response.data
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

export { Service, Auth } // exportamo Service za ručne pozive ili Posts za metode.