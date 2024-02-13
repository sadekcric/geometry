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
  document.getElementById("triangleArea").innerText = area;
});

document.getElementById("rectangleBtn").addEventListener("click", function () {
  const area = multiplicationCalculate("width", "length");
  document.getElementById("rectangleArea").innerText = area;
});

document.getElementById("parallelogram_btn").addEventListener("click", function () {
  const area = multiplicationCalculate("parallelogram_base", "parallelogram_height");
  document.getElementById("parallelogram_aria").innerText = area;
});

document.getElementById("rhombus-btn").addEventListener("click", function () {
  const area =0.5* multiplicationCalculate("rhombus-d1", "rhombus-d2");
  document.getElementById("rhombus-aria").innerText = area;
});

document.getElementById("pentagon_btn").addEventListener("click", function () {
  const area =0.5* multiplicationCalculate("pentagon_p", "pentagon_b");
  document.getElementById("pentagon_aria").innerText = area;
});

document.getElementById("ellipse_btn").addEventListener("click", function () {
  const area = 0.1416 * multiplicationCalculate("ellipse_a", "ellipse_b");
  document.getElementById("ellipse_aria").innerText = area;
});


