let bill = document.getElementById("bill_input")
let people = document.getElementById("people_input")
let percent = document.querySelectorAll(".buttons")
let reset_button = document.getElementsByClassName("reset")
let custom = document.getElementById("custom")
let theme = document.getElementById("theme_btn")
let darkMode = false
let body = document.body.style
let container = document.querySelector(".container").style

const tipSplit = (billAmount, amtPeople, percentage) => {

    billAmount = parseInt(bill.value)
    amtPeople = parseInt(people.value)
   

    if (billAmount && amtPeople && percentage) {
        let tipPerPerson = (billAmount * percentage) / amtPeople;
        let totalPerPerson = tipPerPerson + (billAmount/amtPeople);

        document.getElementById("tip-per-person").innerText = `$${tipPerPerson.toFixed(2)}`;
        document.getElementById("total-per-person").innerText = `$${totalPerPerson.toFixed(2)}`;
       
    }
}

bill.addEventListener("change", tipSplit) 

people.addEventListener("change", tipSplit)


custom.addEventListener("change", function() {
    let cust = parseInt(custom.value)/100
    tipSplit(bill, people, cust)
})


percent.forEach((btn) => {

    btn.addEventListener("click", function() {
        let activeButton = document.querySelectorAll('.active')
        activeButton.forEach((button) => {
            button.classList.remove('active')
        })
        btn.classList.add('active')
        // console.log(activeButton)
        let btns = parseInt(btn.innerText)/100
        tipSplit(bill, people, btns)

    })
})

reset_button[0].addEventListener('click', function() {
    document.getElementById("bill_input").value = "";
    document.getElementById("people_input").value = "";
    document.getElementById("tip-per-person").innerText = `$0.00`;
    document.getElementById("total-per-person").innerText = `$0.00`;
    document.getElementById("custom").value = "";
})

theme.addEventListener("click", function() {

    if(darkMode == false) {
        darkModeProps()
        darkMode = true
    } else {
        lightModeProps()
        darkMode = false
    }
})

function lightModeProps() {
    body.background = '#c4e0e9'
    theme.src = "./images/icon-moon.svg"
    container.filter = "none"
}

function darkModeProps() {
    body.background = 'rgb(20,29,47)'
    theme.src = "./images/icon-sun.svg"
    container.filter = "invert(0.9) hue-rotate(90deg)"
}
