// Triangle Calculate
function calculateTriangleArea() {
    // Get Triangle Base Value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseInputText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseInputText);
    // console.log (base);

    // Get Triangle Height Value

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log (height);

    // Calculate Triangle Area
    const area = 0.5 * base * height;
    console.log ('Area of the triangle is: ', area);

    // Display Triangle Area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}

// Rectangle Calculate
function calculaterectangleArea() {
    const actionButton = document.getElementById('action-button');

    const takeLength = document.getElementById('take-length');
    const takeLengthFromInput = takeLength.value;
    const length = parseFloat(takeLengthFromInput);
    // console.log (length);

    const takeWidth = document.getElementById('take-width');
    const takeWidthFromInput = takeWidth.value;
    const width = parseFloat(takeWidthFromInput);
    // console.log (width);

    const area = length * width;
    // console.log('Here is your Rectange area: ', area);

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}

// // Parallelogram Calculate
function calculateParalellogramArea() {
    const parallelogramButton = document.getElementById('parallelogram-button');

    const takeBase = document.getElementById('take-base')
    const takeAction = takeBase.value;
    const floatValue = parseFloat(takeAction);
    // console.log (floatValue);

    const takeHeight = document.getElementById('take-height');
    const takeAction1 = takeHeight.value;
    const floatValue1 = parseFloat(takeAction1);
    // console.log (floatValue1);

    const area = floatValue * floatValue1;
    // console.log (area);

    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;
}

// // Rhombus Calculate
function calculateRhombusArea() {
    const rhombusButton = document.getElementById('rhombus-button');
    
    const takeBase = document.getElementById('take-bh1');
    const inputValue = takeBase.value;
    const parseValue = parseFloat(inputValue);
    // console.log (parseValue);


    const takeHeight = document.getElementById('take-bh2');
    const inputValue1 = takeHeight.value;
    const parseValue1 = parseFloat (inputValue1);
    // console.log (parseValue1)

    const area = 0.5 * parseValue * parseValue1;

    const rhombusArea = document.getElementById('rhombus-area');
    rhombusArea.innerText = area;

}

// // Pentagon Calculate
function calculatePentagonArea() {
    const base = getInputBy('take-pentagon');
    // console.log (base);
    const height = getInputBy('take-pentagon1')
    // console.log (height);

    const area = 0.5 * base * height;
    // console.log (area);

    setInnerTextById('pentagon-area', area)
}

function getInputBy(inputField1) {
    const takeInput = document.getElementById(inputField1);
    const inputValueText = takeInput.value;
    const inputValue = parseFloat(inputValueText);
    // console.log (77);
    return inputValue;
}

function setInnerTextById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// // Ellipse Calculate
function newAndLast() {
    const new2 = ellipseCalculate('take-bh1');
    const new3 = ellipseCalculate('take-bh2');

    const resultFinal = 3.14 * new2 * new3;
    // console.log (resultFinal)

    showOutput('area23', resultFinal);
}

function ellipseCalculate(inputValueEllipse) {
    const clickFunction = document.getElementById(inputValueEllipse);
    const takeValue = clickFunction.value;
    const finalValue = parseFloat(takeValue);
    return finalValue;
}

function showOutput(elementGetId, number) {
    const elementGetResult = document.getElementById(elementGetId);
    elementGetResult.innerText = number;
}