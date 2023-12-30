let boxInput = document.getElementById('textInput')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(action =>{
    action.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
            string = String(eval(string))
            boxInput.value = string;
        }
        else if(b.target.innerText == 'AC'){
            string = ''
            boxInput.value = string
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0, string.length-1)
            boxInput.value = string
        }
        else if(b.target.id == 'plusMinus'){
            string = String(-eval(string))
            boxInput.value = string
        }
        else{
            string += b.target.innerText
            boxInput.value = string
        }
    })
})