function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
 async function login() {
     var url = 'https://localhost:7203/api/User/login';

    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    
    
    var optionsIsExist = {
        method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify({
            userName: user,
            password: pass,
                
            }),
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // default, *no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // *no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }

    
    
      let response= await fetch(url, optionsIsExist)
     let isExist = await response.json();
     console.log(isExist);
     if (isExist== true) {

        window.location.href = "page2.html";
     }
     else {
       window.alert("wrong username or password try again!!");


     }
    }

 
  



