

// var today = new Date();

// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var current = document.querySelector("#currentDay");

let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
let hour = date.getHours();

let fullDate = `${month}.${day}.${year}`;
console.log(fullDate);


current.innerHTML = "Date: " + fullDate;



var allTimes = document.querySelector(".container");
allTimes.addEventListener("click", function(event) {
    // capture save button clicked
   var saveBtn = event.target;
   console.log(saveBtn);

   // capture which parent clicked and extract time
   var parent = event.target.parentElement
   var timeId = parent.getAttribute("id");
   console.log(timeId);
   
   // capture user's text entry   
   var textBox = parent.children[1].value;
   console.log(textBox);

   localStorage.setItem(timeId, textBox);
}  
)

document.querySelector('#nine .description').value = localStorage.getItem('nine');
document.querySelector('#ten .description').value = localStorage.getItem('ten');
document.querySelector('#eleven .description').value = localStorage.getItem('eleven');
document.querySelector('#twelve .description').value = localStorage.getItem('twelve');
document.querySelector('#one .description').value = localStorage.getItem('one');
document.querySelector('#two .description').value = localStorage.getItem('two');
document.querySelector('#three .description').value = localStorage.getItem('three');
document.querySelector('#four .description').value = localStorage.getItem('four');
document.querySelector('#five .description').value = localStorage.getItem('five');

