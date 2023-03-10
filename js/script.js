{
    const calculateResult = (amount, currency) => {

        const EUR = 4.68;
        const GBP = 5.35;
        const USD = 4.40;

        switch (currency) {
            case "EUR":
                return amount / EUR;
            case "GBP":
                return amount / GBP;
            case "USD":
                return amount / USD;
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const inputElement = document.querySelector(".js-input");
        const currencyElement = document.querySelector(".js-currency");


        const amount = +inputElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);
        
        const resultElement = document.querySelector(".js-result");

        resultElement.value = `${result.toFixed(2)} ${currency}`;

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}