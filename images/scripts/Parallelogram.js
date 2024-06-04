function CalculateParallelogramArea() {
    // base
    const ParallelogramBaseInput = document.getElementById('Parallelogram-base')
    const ParallelogramBaseText = ParallelogramBaseInput.value;
    const base = parseFloat(ParallelogramBaseText)
    console.log(base)
        // height
    const ParallelogramHeightInput = document.getElementById('Parallelogram-height')
    const ParallelogramHeightText = ParallelogramHeightInput.value;
    const height = parseFloat(ParallelogramHeightText)
    console.log(height)
        // Area 
    const Area = base * height;
    console.log("Parallelogram-area is ", Area)
        // Parallelogram-area
    const ParallelogramAreaSpan = document.getElementById('Parallelogram-area')
    ParallelogramAreaSpan.innerText = Area;
}