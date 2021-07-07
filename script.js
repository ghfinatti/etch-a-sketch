const container = document.querySelector('.gridcontainer');
const slider = document.querySelector('#myRange');
const resetButton = document.getElementById('resetbtn');
const blackButton = document.getElementById('blackColor');
const rainbowButton = document.getElementById('rainbow');
const eraserButton = document.getElementById('eraser');
let pixels = document.querySelector('.square');
const buttons = document.querySelectorAll('.buttons');

function gridSize(sideSize){
    container.style.gridTemplateColumns = `repeat(${sideSize}, 1fr)`
    container.style.gridTemplateRows = `repeat(${sideSize}, 1fr)`
    for (let i = 1; i <= sideSize**2; i++){
        const square = document.createElement('div');
        square.classList.add(`square`)
        container.appendChild(square);
    };
    pixels = document.querySelectorAll('.square');
    pixels.forEach(pixel => pixel.addEventListener('mouseout', colorGrid));
};

gridSize(30); //initial grid


function colorGrid(e){
    if(container.dataset.color == "black"){
        e.target.style.backgroundColor = "black";
    }
    else if(container.dataset.color == "rainbow"){
        let randomColor = randomRGB();
        e.target.style.backgroundColor = `${randomColor}`;
    }
    else if(container.dataset.color == "eraser"){
        e.target.style.backgroundColor = "white";
    }
};

function randomRGB(){
    let randomRed = Math.floor(Math.random() * 256);
    let randomGreen = Math.floor(Math.random() * 256);
    let randomBlue = Math.floor(Math.random() * 256);
    return (`RGB(${randomRed}, ${randomGreen}, ${randomBlue})`);
}


function resetGrid(){
    pixels = document.querySelectorAll('.square');
    for (pixel of pixels){
        pixel.style.backgroundColor = "white";
    };
};

function pixelSize(){
    let pixels = container.querySelectorAll('.square');
    pixels.forEach(pixel => pixel.remove());
    gridSize(slider.value);
};


resetButton.addEventListener('click', resetGrid);
blackButton.addEventListener('click', function(){
    container.dataset.color = "black";
});
rainbowButton.addEventListener('click', function(){
    container.dataset.color = "rainbow";
});
eraserButton.addEventListener('click', function(){
    container.dataset.color = "eraser";
});
slider.addEventListener('mouseup', pixelSize);
