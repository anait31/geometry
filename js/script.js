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