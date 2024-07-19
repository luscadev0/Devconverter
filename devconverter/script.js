const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');

let valueConverted = 0;

function handleSubmit(e) {
    e.preventDefault();

    if(!inputValue.value || inputValue.value < 0 ) {
        alert('informe um valor correto');
    return;
    } else if (!selectedCurrency.value) {
        alert('Escolha uma moeda');
    return;
    }


    converter();
};

function converter() {
if(selectedCurrency.value === 'Eur') {
    valueConverted = inputValue.value / 5.57 ;
    result.innerHTML = valueFormatter('pt-br', 'EUR'); 

} else if(selectedCurrency.value === 'Dólar') {
        valueConverted = inputValue.value / 5.04 ;
        result.innerHTML = valueFormatter('en-us', "USD");
    }
inputValue.value = "";
selectedCurrency.value = '';

};

function valueFormatter (Locale, currency)  {
    const value = valueConverted.toLocaleString(`${Locale}`, {style: "currency", currency: `${currency}`})
    return `<span>🤑</span>${value}<span>🤑</span>`


}

function animateResult (){
    return result.animate([
        {transfrm:"translateY(-125px"},
        {transfrm:"translateX(25px"},
    ], {duration:500});
}