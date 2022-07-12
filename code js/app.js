//Слайдер

let seconds = document.getElementById('second_zero');
let minutes = document.getElementById('minutes_zero');
let hours = document.getElementById('hour_zero');

let main_container_secundomer = document.querySelector('.container-stopwatch');
main_container_secundomer.style.marginLeft = ('500px');

let displaySecundomer = document.querySelector('.stopwatch-display');
let startButton = document.getElementById('begin');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');


let secondsInDisplay = 0, 
    minutesInDisplay = 0, 
    hoursInDisplay = 0, 
    startTimer;

const processTimer = () => {

    secondsInDisplay++;
    if (secondsInDisplay < 10) {
        seconds.innerText = `0${secondsInDisplay}`;
    } if (secondsInDisplay >= 10) {
        seconds.innerText = secondsInDisplay;
    }


    if (secondsInDisplay === 60) {
        secondsInDisplay = 0;
        seconds.innerText = `0${secondsInDisplay}`;
        minutesInDisplay++;
        if (minutesInDisplay < 10) {
            minutes.innerText = `0${minutesInDisplay}`;
        }  if (minutesInDisplay >= 10) {
            minutes.innerText = minutesInDisplay;
        }
    } 
    
    
    if (minutesInDisplay === 60) {
        minutesInDisplay = 0;
        minutes.innerText = `0${minutesInDisplay}`;
        hoursInDisplay++;
        if (hoursInDisplay < 10) {
            hours.innerText = `0${hoursInDisplay}`;
        }
        if (hoursInDisplay >= 10) {
            hours.innerText = hoursInDisplay;
        }

    }

    if(hoursInDisplay === 60){
        hoursInDisplay = 0;
        hours.innerText = `0${hoursInDisplay}`;
    }
}
            

const buttonsDo = () => {

    startButton.onclick = () => {
        displaySecundomer.style.backgroundColor = null;
        displaySecundomer.style.backgroundColor = 'green';
        seconds.style.color = 'white';
        minutes.style.color = 'yellow';
        hours.style.color = 'blue';


        // displaySecundomer.classList.remove('black');
        // displaySecundomer.classList.add('green');


        clearInterval(startTimer);
        startTimer = setInterval(processTimer, 1000);   
    }


    stopButton.onclick = () => {				
        displaySecundomer.style.backgroundColor = 'red';
        clearInterval(startTimer);    
    }


    resetButton.onclick = () => {				
        displaySecundomer.style.backgroundColor = 'silver';
        clearInterval(startTimer);
        secondsInDisplay = 0;
        minutesInDisplay = 0;
        hoursInDisplay = 0;
        startTimer = 0;
        document.getElementById('hour_zero').textContent = '00';
        document.getElementById('minutes_zero').textContent = '00';
        document.getElementById('second_zero').textContent = '00';
    }

}

buttonsDo();



//Перевiрка телефону

let container_check_number = document.querySelector(".container_check_number");
container_check_number.style.marginTop = ('100px');
container_check_number.style.marginBottom = ('100px');
container_check_number.style.marginLeft = ('50px');

let button = document.createElement("input");
button.setAttribute('type', 'button');
button.setAttribute('value', 'Перевірити');

button.style.width = ('100px');
button.style.height = ('20px');
button.style.marginLeft = ('20px');
button.style.background = ('red');


let error = document.createElement("div");
error.innerText = "Невірно, спробуйте ще раз!"
error.style.marginBottom = ('20px');


let field_input_number = document.createElement("input");
    
field_input_number.setAttribute("type", "text");
field_input_number.placeholder = 'Введіть номер телефону у форматі - 000-000-00-00';
field_input_number.style.width = ('30%');
field_input_number.style.textAlign = ('center');
container_check_number.append(field_input_number);
container_check_number.append(button);

const checkNumberTelefone = () => {
    const pattern = /\d\d\d-\d\d\d-\d\d-\d\d/;
    const number = field_input_number.value;

    pattern.test(number) ? window.location.href = "https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg" : container_check_number.prepend(error);
}

button.onclick = checkNumberTelefone;


// Слайдер

let slideIndex = 1;
showSlides(slideIndex);

let nextSlide = () => {
    showSlides(slideIndex += 1);
}

let afterSlide = () => {
    showSlides(slideIndex -= 1);  
}

let currentSlide = (n) => {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}