

var current = document.querySelector("#currentDay");

let date = new Date()
let day = date.getDate();
let month = date.getMonth()  + 1;
let year = date.getFullYear();
let currentHour = date.getHours();
console.log(currentHour);

let fullDate = `${month}.${day}.${year}`;
console.log("full date: " + fullDate);


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
// var nine = 9;
// var ten = 10;
// var eleven = 11;
// var twelve = 12;
// var one = 13;
// var two = 14;
// var three = 15;
// var four = 16;
// var five = 17;



  var nine = document.querySelector('#nine .description').value = localStorage.getItem('nine');
   var ten = document.querySelector('#ten .description').value = localStorage.getItem('ten');
   var eleven = document.querySelector('#eleven .description').value = localStorage.getItem('eleven');
   var twelve =document.querySelector('#twelve .description').value = localStorage.getItem('twelve');
   var one = document.querySelector('#one .description').value = localStorage.getItem('one');
   var two = document.querySelector('#two .description').value = localStorage.getItem('two');
   var three = document.querySelector('#three .description').value = localStorage.getItem('three');
   var four = document.querySelector('#four .description').value = localStorage.getItem('four');
   var five =document.querySelector('#five .description').value = localStorage.getItem('five');

   var hours = [nine,ten,eleven,twelve,one,two,three,four,five];
   console.log(hours);

//    9 = document.getElementById("nine");

function getHour(){
    for(i = 0; i < hours.length; i++){
 if (currentHour = hours[i])
        hours[i].classList.add("present");
 if (currentHour < hours[i])
        hours[i].classList.add("future");
 if (currentHour > hours[i])
        hours[i].classList.add("past");     
}
};