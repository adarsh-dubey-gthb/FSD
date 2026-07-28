function register(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("register here")
        resolve()
       },10000)
    })
       
        
    }
    function login(){
        return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        console.log("login here")
         reject("failed to login")
       },5000)
        })
       
        
    }
    function getData(){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
    console.log("Fetch data from DB")
          resolve(); 
        },3000)
        })
        
        
    }
    function displayData(){
        return new Promise((resolve,reject)=>{
    setTimeout(()=>{
         console.log("display Data")
         resolve();
        },6000)
        })
        
        
    }
    
    // register()
    //      .then(login)
    //      .then(getData)
    //      .then(displayData)
    //      .catch((err)=>{
    //       console.log("Error",err)
    //      })
    
    async function test(){
     try{
       await register();
       await login();
       await getData();
       await displayData();
     }
     catch(err){
        console.log("Error:",err)
     }
    }
     test(); 
    console.log("call Another Application")