function CalculateRhombusArea() {
    // Rhombus-distanceOne
    const RhombusdistanceOneInput = document.getElementById('Rhombus-distanceOne')
    const RhombusdistanceOneText = RhombusdistanceOneInput.value;
    const distanceOne = parseFloat(RhombusdistanceOneText)
    console.log(distanceOne)
        // Rhombus-distanceTwo
    const RhombusdistanceTwoInput = document.getElementById('Rhombus-distanceTwo')
    const RhombusdistanceTwoText = RhombusdistanceOneInput.value;
    const distanceTwo = parseFloat(RhombusdistanceOneText)
    console.log(distanceTwo)
        // Area
    const Area = 0.5 * distanceOne * distanceTwo
    console.log("Rhombus Area is ", Area)
    const RhombusArea = document.getElementById('Rhombus-area')
    RhombusArea.innerText = Area;
}