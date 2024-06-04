function CalculateRectangleArea() {
    const rectangleWidthInput = document.getElementById('rectangle-Width')
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText)
    console.log(width)


    // length
    const rectangleLengthInput = document.getElementById("rectangle-length")
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText)
    console.log(length)


    // Area 
    const area = width * length;
    console.log("Area Of the Rectangle is ", area)
        // rectangle-area
    const rectangleArea = document.getElementById('rectangle-area ')
    rectangleArea.innerText = area;
}