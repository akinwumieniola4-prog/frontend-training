const principal = document.querySelector(".principal")
const rate = document.querySelector(".rate")
const time = document.querySelector(".time")
const calculate = document.querySelector(".calculate")

const simplePrincipal = document.querySelector(".simplePrincipal")
const compoundPrincipal = document.querySelector(".compoundPrincipal")
const simpleInterest = document.querySelector(".simpleInterest")
const compoundInterest = document.querySelector(".compoundInterest")
const simpleTotal = document.querySelector(".simpleTotal")
const compoundTotal = document.querySelector(".compoundTotal")

calculate.addEventListener("click", function() {

    let p = Number(principal.value)
    let r = Number(rate.value)
    let t = Number(time.value)

    
    let simpleInterestValue = p * r * t / 100
    let simpleTotalValue = p + simpleInterestValue

    let compoundTotalValue = p * Math.pow(1 + r / 100, t)
    let compoundInterestValue = compoundTotalValue - p

    
    simplePrincipal.textContent =  p.toFixed(2)
    compoundPrincipal.textContent =  p.toFixed(2)
    simpleInterest.textContent = simpleInterestValue.toFixed(2)
    compoundInterest.textContent = compoundInterestValue.toFixed(2)
    simpleTotal.textContent = simpleTotalValue.toFixed(2)
    compoundTotal.textContent = compoundTotalValue.toFixed(2)

    for (let y = 1; y <= 10; y++) {
        
        let simpleYearly = p * r * y / 100
        let compoundYearly = p * Math.pow(1 + r / 100, y)


        let simpleCell = document.querySelector(".year-simple-" + y)
        let compoundCell = document.querySelector(".year-compound-" + y)

        
        if (simpleCell) {
            simpleCell.textContent = simpleYearly.toFixed(2)
        }
        if (compoundCell) {
            compoundCell.textContent = compoundYearly.toFixed(2)
        }
    }
});
