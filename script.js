
//Create a button to add each square and label 'Add Square'
let addSquareBtn = document.createElement('button');
let squareBtnText = document.createTextNode('Add Square');
addSquareBtn.append(squareBtnText);

//Add DOM Loaded function to nest eveything, lest nothin gonna work!
document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(addSquareBtn);
})
//--Add event listener to btn that calls the function that adds each square
addSquareBtn.addEventListener('click', addSquare);
let id = 0;
//---Create function that adds new black square div----//
function addSquare () {
    id++;
//--Create new square div ----------------//
    let squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
//--Give each created square an id equiv to the total number of squares added to that point
    squareDiv.id = id;
    squareDiv.style.textAlign = 'center';
//---Make p elem to contain and display id number---- //
    let squareTxtPara = document.createElement('p');
    let squareTxt = document.createTextNode(id);
    squareTxtPara.appendChild(squareTxt);
    squareDiv.appendChild(squareTxtPara);
    //---JS styling- blech!----//
    squareDiv.style.color = "white";
    squareDiv.style.backgroundColor = 'black';
    squareTxtPara.style.opacity = "0";

    document.body.appendChild(squareDiv);

    squareDiv.addEventListener(
        'mouseover', () => {
           squareTxtPara.style.opacity = "1";
        }
    )
    squareDiv.addEventListener(
        'mouseout', () => {
           squareTxtPara.style.opacity = "0";
        }
    )
    //---Take a spin on the color wheel!! ----------//
    function randomBG() {
        let r = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);

        let bgColor = "rgb(" + r + "," + b + "," + g + ")";

        squareDiv.style.background = bgColor;
    }
    //----Event listener for background color change on single click ---//
    squareDiv.addEventListener('click', randomBG);
    //--- Create function that when dblclicked checks for even or odd, then removes square before or after
    function onDoubleClick() {
        if (squareDiv.id % 2 === 0) {
            let squareId = parseInt(squareDiv.id) + 1;
            let square = document.getElementById(squareId);
            //---If no square after----//
            if (square === null) {
                alert("There's no square after this one!");
            }
            else {
                square.parentElement.removeChild(square);
            }
        }
        else {
            let squareId = parseInt(squareDiv.id) - 1;
            let square = document.getElementById(squareId);
            //---If no square before-----//
            if (square === null) {
                alert("There's no square before this one!");
            }
            else {
                square.parentElement.removeChild(square);
            }
        }
    } 
    squareDiv.addEventListener('dblclick', onDoubleClick); 
}

