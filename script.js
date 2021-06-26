const container = document.querySelector('.gridcontainer');



function resetGrid(){
    let pixels = document.querySelectorAll('.square');
    for (const pixel of pixels){
        pixel.style.backgroundColor = "white";
    }
};

function gridSize(sideSize){
    const container = document.querySelector('.gridcontainer');
    container.style.gridTemplateColumns = `repeat(${sideSize}, 1fr)`
    container.style.gridTemplateRows = `repeat(${sideSize}, 1fr)`
    for (let i = 1; i <= sideSize**2; i++){
        const square = document.createElement('div');
        square.classList.add(`square`)
        container.appendChild(square);
    };
};


const slider = document.querySelector('#myRange');
slider.addEventListener('mouseup', function(){
    resetGrid();
    gridSize(slider.value);
});


gridSize(slider.value);

let pixels = document.querySelectorAll('.square');
for(const pixel of pixels){
    pixel.addEventListener("mouseover", function(e){
        e.currentTarget.style.backgroundColor = "black";
    });
};

const resetButton = document.getElementById('resetbtn')
resetButton.addEventListener("click", function(){
    resetGrid()
});
