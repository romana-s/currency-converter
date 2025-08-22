const convertButton = document.querySelector(".convert-button")
const currencySelected = document.querySelector(".currency-selected")

function convertValue() {
    const inputCurrencyValue = document.querySelector("#digitarValor").value
    const currencyValueToConvert = document.querySelector(".value-applied")
    const currencyValueToConverted = document.querySelector(".value-to-convert")

    const dolarToday = 5.47
    const euroToday = 6.35
    const bitcoinToday = 616384.16
    const libraToday = 7.33

    if (currencySelected.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }


    if (currencySelected.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelected.value == "bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelected.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency(){
    const currencyName = document.getElementById("currency2")
    const currencyImg = document.querySelector(".currency-img2")

    if(currencySelected.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.svg"
    }
    if(currencySelected.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.svg"
    }
    if(currencySelected.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.svg"
    }
    if(currencySelected.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.svg"
    }
    if(currencySelected.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.svg"
    }


    convertValue()
}

currencySelected.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)
