function fetchData() {

    const advice = document.querySelector("#advice"); // corrected selector
    const number_advice = document.querySelector("#number_advice");

    fetch("https://api.adviceslip.com/advice")

    .then(response => response.json())

    .then(data => {
        
        advice.textContent = data.slip.advice; 
        number_advice.textContent = `ADVICE #${data.slip.id}`;


    })

    }

    