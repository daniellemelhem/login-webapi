

document.addEventListener("DOMContentLoaded", loadFunction);

async function loadFunction() {
    let options = {
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // default, *no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // *no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    };
    const url = "https://localhost:7203/api/User";
    var tableBody = document.getElementById('tUsers');
    
    const response = await fetch(url, options);
    const jsonData = await response.json();
    var row;
    var cellText;
    var rowElememt;
    var cellElement;
 
    for (var i = 0; i < jsonData.length; i++) {
        row = jsonData[i];
        rowElement = document.createElement("tr");
        for (var j = 0; j < Object.keys(row).length; j++) {
            cellText = Object.values(row)[j];
            cellElement = document.createElement("td")
            cellElement.textContent = cellText;
            rowElement.appendChild(cellElement);
          
        }
        tableBody.appendChild(rowElement);
       
    }
}







