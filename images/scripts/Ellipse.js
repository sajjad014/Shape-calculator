function CalculateEllipseArea() {
    const EllipseAreaAInput = document.getElementById('Ellipse-A')
    const EllipseAreaAText = EllipseAreaAInput.value;
    const A = parseFloat(EllipseAreaAText)
    console.log(A)
        // B
    const EllipseAreaBInput = document.getElementById('Ellipse-B')
    const EllipseAreaBText = EllipseAreaAInput.value
    const B = parseFloat(EllipseAreaAText)
    console.log(B)
        // Area
    const Area = 3.1416 * A * B;
    console.log('EllipseArea is ', Area)
    const EllipseArea = document.getElementById('Ellipse-area')
    EllipseArea.innerText = Area;
}