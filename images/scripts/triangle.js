function CalculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base')
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log(base)
        // get height
    const triangleHeightInput = document.getElementById('triangle-height')
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    console.log(height)
        // triangle area
    const Area = 0.5 * base * height;
    console.log("Display of the triangle is:", Area)
    console.log(Area)
        // 
    const triangleAreaSpan = document.getElementById('triangle-area')
    triangleAreaSpan.innerText = Area;
}