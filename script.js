const currentTimeEl = document.querySelector('.Current-time');
const dayEls = document.querySelectorAll(" .days p");
const currentDay = new Date().getDay();
let showTwelveHourTime = true;


const twelveHourBtn = document.querySelector(".twelve-hour");

twelveHourBtn.addEventListener("click", () =>{
    showTwelveHourTime = true;
    document.querySelector(".active").classList.remove('active');
    twelveHourBtn.classLi.add("active");
});



const twentyFourHourBtn = document.querySelector(".twentyfour-hour");

twentyFourHourBtn.addEventListener("click", () => {
    showTwelveHourTime = false;
    document.querySelector('.active').classList.remove("active");
    twentyFourHourBtn.classList.add("active");
});


dayEls[currentDay].classList.add("active-day");

console.log(currentDay);

const replaceTime = () => {
    let today = new Date(),
      h = today.getHours(),
      m = today.getMinutes(),
      s = today.getSeconds();

    if(showTwelveHourTime && (h > 12)) {
        h = h - 12;
    }

    if( s < 10) {
        s = "0" + s

    }

    if( m < 10) {
        m = "0" + m
        
    }

    if( h < 10) {
        h = "0" + h
        
    }

    currentTimeEl.innerText = h + ":" + m + ":" + s;
    console.log("running")
};

setInterval(replaceTime, 1000);
replaceTime();
