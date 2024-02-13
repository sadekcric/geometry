// function
function multiplicationCalculate(cm1, cm2) {
  const input1 = document.getElementById(cm1).value;
  const input1Value = parseFloat(input1);

  const input2 = document.getElementById(cm2).value;
  const input2Value = parseFloat(input2);

  const area = input1Value * input2Value;
  return area;
}
function backgroundColorMouseOver(id, color) {
  return document.getElementById(id).addEventListener("mouseover", function () {
    this.style.background = color;
  });
}
function backgroundColorMouseOut(id, color) {
  return document.getElementById(id).addEventListener("mouseout", function () {
    this.style.background = color;
  });
}

function AriaCalculationChild(title, ariaOutput){
  const childDiv=document.createElement('div');
  const childTitle=document.createElement('h4');
  const childInfo=document.createElement('h4');
  const childBtn=document.createElement('button');

  childDiv.appendChild(childTitle);
  childDiv.appendChild(childInfo);
  childDiv.appendChild(childBtn);

  childTitle.innerText=title;
  childInfo.innerHTML=`${ariaOutput} cm<sup>2</sup>`;
  childBtn.innerHTML='convert to m<sup>2</sup>';

  childDiv.classList=['flex justify-around items-center mt-3'];
  childTitle.classList=['text-lg font-semibold'];
  childInfo.classList=['text-lg font-semibold'];
  childBtn.classList=['px-5 py-3 bg-blue-700 rounded-lg text-white'];

  return document.getElementById('aria_calculation').appendChild(childDiv)

}

// For Triangle
document.getElementById("triangleBtn").addEventListener("click", function () {
  const area = 0.5 * multiplicationCalculate(`base`, "height");
  document.getElementById("triangleArea").innerText = area;

  // Aria Calculation sector
  AriaCalculationChild('Triangle', area);
});
backgroundColorMouseOver("triangle_div", "#76D7C4");
backgroundColorMouseOut("triangle_div", "");

// For rectAngle
document.getElementById("rectangleBtn").addEventListener("click", function () {
  const area = multiplicationCalculate("width", "length");
  document.getElementById("rectangleArea").innerText = area;

  // Aria Calculation sector
  AriaCalculationChild('Rectangle', area);
});
backgroundColorMouseOver("rectangle_div", "#7AC17E");
backgroundColorMouseOut("rectangle_div", "");

// Parallelogram
document.getElementById("parallelogram_btn").addEventListener("click", function () {
  const area = multiplicationCalculate("parallelogram_base", "parallelogram_height");
  document.getElementById("parallelogram_aria").innerText = area;

  // Aria Calculation sector
  AriaCalculationChild('Parallelogram', area);
});
backgroundColorMouseOver("parallelogram_div", "#C1A77A");
backgroundColorMouseOut("parallelogram_div", "");

// Rhombus
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const area = 0.5 * multiplicationCalculate("rhombus-d1", "rhombus-d2");
  document.getElementById("rhombus-aria").innerText = area;

  // Aria Calculation sector
  AriaCalculationChild('Rhombus', area);
});
backgroundColorMouseOver("rhombus_div", "#7AC0C1");
backgroundColorMouseOut("rhombus_div", "");

// Pentagon
document.getElementById("pentagon_btn").addEventListener("click", function () {
  const area = 0.5 * multiplicationCalculate("pentagon_p", "pentagon_b");
  document.getElementById("pentagon_aria").innerText = area;
  // Aria Calculation sector
  AriaCalculationChild('Pentagon', area);
});
backgroundColorMouseOver("pentagon_div", "#A27AC1");
backgroundColorMouseOut("pentagon_div", "");

// ellipse
document.getElementById("ellipse_btn").addEventListener("click", function () {
  const area = 0.1416 * multiplicationCalculate("ellipse_a", "ellipse_b");
  document.getElementById("ellipse_aria").innerText = area;

  // Aria Calculation sector
  AriaCalculationChild('Ellipse', area);
});

