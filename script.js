const input = document.getElementById('input');
const label = document.getElementById('label');

input.addEventListener('keydown',oddOrEven);

function oddOrEven(input){
    
    if(input.target.value % 2 === 0){
        console.log("The number is EVEN");
        label.innerHTML = input.target.value + " is EVEN "
    }else if(input.target.value % 2 === 1){
        console.log("The number is ODD");
        label.innerHTML = input.target.value + " is ODD "
    }else if(!Number.isInteger(input.target.value) === true){
        console.log("Input Invalid...")
        label.innerHTML = input.target.value + " is Invalid"
    }
    
    //(input.target.value % 2 === 0) ? console.log("The number is EVEN") : console.log("The number is ODD");
}

