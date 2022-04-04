// class Calculator{
//     display
//     number
//     clean
//     return
//     plus
//     minus
//     divide
//     multiply
//     equal
//     constructor (elDisplay,elNumber,elClean,elreturn,elPlus,elMinus,elDivide,elMultiply,elEqual){
//         this.display = elDisplay;
//         this.number = elNumber;
//         this.clean = elClean;
//         this.return = elreturn;
//         this.plus = elPlus;
//         this.minus = elMinus;
//         this.divide = elDivide;
//         this.multiply = elMultiply;
//         this.equal = elEqual;
//     }
//     numDisplay(){

//     }
// }
// let calc = new Calculator(
//     display = document.querySelector('.text'),
    
    

// );
// num = document.querySelectorAll(".num");
// for (let i = 0; i < num.length; i++) {
//     num[i].addEventListener('click',function(){
//         let active = this.textContent
//         return active
//     })
// }
// console.log(active);



let numbers = document.querySelectorAll('.num')




class Calculator {
    display 
    setDisplay(value) {

    }
    
    numbers = () => {



        setDisplay(num)
    }

    dot(){
        setDisplay('.')
    }

    signs(){
        setDisplay()
    }

    calculate(){

    }
    clear(){
        display.value = null;
    }
    remove(){

    }

}

let calculate = new Calculator();

for(let number of numbers){
    number.onclick = (event) => {
        calculate.numbers(event)
    }
}









