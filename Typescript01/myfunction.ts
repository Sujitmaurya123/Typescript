function addTwo(num:number){
    return num+2
}

addTwo(5)


function addAcc(name:number,email:string,val:boolean){

}
addAcc(123,"Sujir@gmail",true)

let loginUser=(name:string,email:string)=>{

}

loginUser("suj","suj@gmail.com")



const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});

export{}