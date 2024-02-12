function multiplicationCalculate(cm1, cm2) {
  const input1 = document.getElementById(cm1).value;
  const input1Value = parseFloat(input1);

  const input2 = document.getElementById(cm2).value;
  const input2Value = parseFloat(input2);

  const area = input1Value * input2Value;
  return area;
}

document.getElementById("triangleBtn").addEventListener("click", function () {
  const area = 0.5 * multiplicationCalculate(`base`, "height");
  document.getElementById('triangleArea').innerText = area;
});

document.getElementById('rectangleBtn').addEventListener('click', function(){
  
  const area=multiplicationCalculate('width', 'length');
  document.getElementById('rectangleArea').innerText=area;
})
