
function calculateBMI() {
  var weightInput = document.getElementById("weight");
  var heightInput = document.getElementById("height");
  var resultDiv = document.getElementById("result");

  var weight = parseFloat(weightInput.value);
  var height = parseFloat(heightInput.value) / 100; 

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultDiv.textContent = "Please enter valid weight and height.";
  } else {
    var bmi = weight / (height * height);
    resultDiv.textContent = "Your BMI is: " + bmi.toFixed(2);
  }
}
