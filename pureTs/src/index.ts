// console.log("Typescript here bro");


// class User{
//     email:string 
//     name:string
//     private readonly city:string="Mirzapur"
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }

// const sujit=new User("s@.com","sujit")
// // sujit.city="Mirzapur"


class User{
    
     readonly city:string="Mirzapur"
    constructor(
       public email:string,
       public name:string
       ){
       
    }
}
const sujit=new User("s@.com","sujit")
// sujit.city="Mirzapur"