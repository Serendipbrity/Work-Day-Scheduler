

// var today = new Date();

// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var current = document.querySelector("#currentDay");

let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
let currentHour = date.getHours();
console.log(currentHour);

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

var hours = [nine,ten,eleven,twelve,one,two,three,four,five];

   var nine = document.querySelector('#nine .description').value = localStorage.getItem('nine');
   var ten = document.querySelector('#ten .description').value = localStorage.getItem('ten');
   var eleven = document.querySelector('#eleven .description').value = localStorage.getItem('eleven');
   var twelve =document.querySelector('#twelve .description').value = localStorage.getItem('twelve');
   var one = document.querySelector('#one .description').value = localStorage.getItem('one');
   var two = document.querySelector('#two .description').value = localStorage.getItem('two');
   var three = document.querySelector('#three .description').value = localStorage.getItem('three');
   var four = document.querySelector('#four .description').value = localStorage.getItem('four');
   var five =document.querySelector('#five .description').value = localStorage.getItem('five');

nine = 9;
ten = 10;
eleven = 11;
twelve = 12;
one = 13;
two = 14;
three = 15;
four = 16;
five = 17;


function getHour(){
    for(i = 0; i < hours.length; i++){
 if (currentHour = hours[i])
        hours[i].add.className("present");
 if (currentHour < hours[i])
        hours[i].add.classList("future");
 if (currentHour > hours[i])
        hours[i].add.classList("past");     
}
};