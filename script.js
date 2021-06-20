const container = document.querySelector('.gridcontainer');

for (let i = 1; i <= 16; i++){
    const square = document.createElement('div');
    square.classList.add(`square`)
    container.appendChild(square);
};

const pixels = document.querySelectorAll('.square');
for(const pixel of pixels){
    pixel.addEventListener("mouseenter", function(e){
        e.currentTarget.style.backgroundColor = "black";
    });
}
