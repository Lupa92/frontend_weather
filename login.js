// Insert your code here

document.querySelector("#register").addEventListener('click', function(){

    let name = document.querySelector("#registerName").value;
    let email = document.querySelector("#registerEmail").value;
    let password = document.querySelector("#registerPassword").value;


    fetch('https://backend-weather-ylsr.vercel.app/users/signup',{
        method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
            name : name,
            email: email,
            password: password,
        }),
    })
        .then(response => response.json())
        .then((data)=>{
            if(data.result === true){
                return window.location.assign("https://frontend-weather-tan.vercel.app/")
            }
        })
})

document.querySelector("#connection").addEventListener('click', function(){

    let email = document.querySelector("#connectionEmail").value;
    let password = document.querySelector("#connectionPassword").value;


    fetch('https://backend-weather-ylsr.vercel.app/users/signin',{
        method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
        .then(response => response.json())
        .then((data)=>{
            if(data.result === true||data.result==="true"){
                console.log("true")
                return window.location.assign("https://frontend-weather-tan.vercel.app/")
            } else {console.log("false" + " "+ email +" "+ password + " "+ data.result + email.typeOf())}
        })
})