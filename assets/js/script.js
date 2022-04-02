

// var today = new Date();

// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var current = document.querySelector("#currentDay");

let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let fullDate = `${month}.${day}.${year}`;
console.log(fullDate);


current.innerHTML = "Date: " + fullDate;



var allTimes = document.querySelector(".container");
allTimes.addEventListener("click", function(event) {
    // capture save button clicked
   var saveBtn = event.target;
   console.log(saveBtn);
   // capture which parent clicked
   var parent = event.target.parentElement;
   var TimeId = parent.getAttribute("id");
   console.log(TimeId);
   var textEntered = parent.firstChild.nextSibling.value;
   console.log(textEntered);
    
}
)


