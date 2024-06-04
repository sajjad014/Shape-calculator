function CalculatePentagonArea() {
    const PentagonHeightInput = document.getElementById('Pentagon-height')
    const PentagonHeightText = PentagonHeightInput.value;
    const Height = parseFloat(PentagonHeightText)
    console.log(Height)
        // Base
    const PentagonBaseInput = document.getElementById('Pentagon-base')
    const PentagonBaseText = PentagonBaseInput.value;
    const base = parseFloat(PentagonBaseText)
    console.log(base)
        // Area
    const Area = 0.5 * base * Height
    console.log("Pentagon Area is", Area)
    const PentagonArea = document.getElementById("Pentagon-area")
    PentagonArea.innerText = Area;
}