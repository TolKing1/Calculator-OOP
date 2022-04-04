class Calculator{
    display
    number
    clean
    return
    plus
    minus
    divide
    multiply
    equal
    constructor (elDisplay,elNumber,elClean,elreturn,elPlus,elMinus,elDivide,elMultiply,elEqual){
        this.display = elDisplay;
        this.number = elNumber;
        this.clean = elClean;
        this.return = elreturn;
        this.plus = elPlus;
        this.minus = elMinus;
        this.divide = elDivide;
        this.multiply = elMultiply;
        this.equal = elEqual;
    }
}
let calc = new Calculator(
    display = document.querySelector('.text'),
    
    

);
num = document.querySelectorAll(".num");
for (let i = 0; i < num.length; i++) {
    num[i].addEventListener('click',function(){
        let active = this.textContent
        return active
    })
}
console.log(active);








