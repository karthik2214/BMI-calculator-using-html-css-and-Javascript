
function getBmiValue() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  height = height * 12;
  height = height * 0.025;
  
  let newbmivalue = weight / (height * height);
  
  newbmivalue = Math.round(newbmivalue);
  
  document.getElementById("Result").value = newbmivalue;
  
  
}