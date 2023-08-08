
async function CreateUser() {
    var url = 'https://localhost:7203/api/User';
    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var birthdate = document.getElementById('bdate').value;
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;
    var confirm = document.getElementById('con').value;
    if (confirm == password) {
        var optionsPost = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName: username,
                password: password,
                firstName: firstname,
                lastName: lastname,
                birthDate: birthdate,
            }),
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // default, *no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // *no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }



        console.log(firstname);
        await fetch(url, optionsPost)
        await response.json();

    }

    else {
        window.alert("Password and confirm password are not the same !!");
    }
}
    
