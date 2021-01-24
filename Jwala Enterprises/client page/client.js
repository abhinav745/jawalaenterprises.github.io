
var row = 1;
var entry = document.getElementById("entry");
entry.addEventListener("click",displayDetails);
function displayDetails(){
    var Date = document.getElementById("today").value;
    var Empname = document.getElementById("name").value;
    var Clientname = document.getElementById("client_name").value;
    var Clientnumber = document.getElementById("number").value;
    var Companyname = document.getElementById("cname").value;

    if(!Date || !Empname || !Clientname || !Clientnumber || !Companyname) {
        var newText = document.getElementById("text1");
        newText.innerHTML = "Please fill the all details!"
        return false;
    }
    var display = document.getElementById("display");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = Date;
    cell2.innerHTML = Empname;
    cell3.innerHTML = Clientname;
    cell4.innerHTML = Clientnumber;
    cell5.innerHTML = Companyname;

    row++;
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyA6HkRinNjfJTZeaCZ27UMy0M2b59_Yy4bDR9WnJ-wZVJ7jYywb93O/exec'
const form = document.forms['google-sheet']
              
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response =>  alert("Successfully Submited!.."))
            .catch(error => console.error('Error!', error.message))
        })

function noFault(){
    alert("Successfully logged out..!");
    window.location.replace("/Index Page/index.html",'_self');
}