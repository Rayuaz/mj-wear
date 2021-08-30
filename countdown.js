const countdown = () => {
    const countDate = new Date('September 4, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour.toString().padStart(2, '0');
    document.querySelector('.minute').innerText = textMinute.toString().padStart(2, '0');
    document.querySelector('.second').innerText = textSecond.toString().padStart(2, '0');
}

countdown();

setInterval(() => {
    countdown();
}, 1000);