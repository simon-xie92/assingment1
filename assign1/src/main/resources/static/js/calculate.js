const results = [];
const histogram = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "F"];

//enter key to run button
var input = document.getElementById("newGrade");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

function calculate(){
  //check bounds
  for(y=1; y<=histogram.length -1; y++){
    if(document.getElementById(y).value < document.getElementById(y+1).value){
      console.log("bound error",y, y+1);
      alert("Bounds Error");
    }
  }
  //check valid input
  console.log(document.getElementById("11").value);
  if((+document.getElementById("newGrade").value >= +document.getElementById("0").value 
    || +document.getElementById("newGrade").value < +document.getElementById("11").value)
    && document.getElementById("newGrade").value != ''){
    alert("Invalid Input");
    return;
  }
  results.push(document.getElementById("newGrade").value);
  console.log(results);

  //clear previous histogram and recalculate in case bounds change
  clear();
  //calculate and create histogram
  for(let x of results){
    console.log("loop");
    console.log(x);
    console.log(document.getElementById("0").value);
    if(+x < document.getElementById("0").value && +x >document.getElementById("11").value){
      console.log("less than max");
      for(y=1; y<=11; y++){
        console.log(+x, document.getElementById(y).value);
        if(+x >= document.getElementById(y).value){
          document.getElementById(histogram[y-1]).innerHTML = document.getElementById(histogram[y-1]).innerHTML + "O";
          console.log(histogram[y-1]);
          break;
        }
      }
    }
    else{
      
    }
  }
  x=0;
}
function clear(){
  for(i=0; i<histogram.length; i++){
    
    document.getElementById(histogram[i]).innerHTML = ' ';
  }
}
