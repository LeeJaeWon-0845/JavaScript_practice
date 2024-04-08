const clock = document.querySelector('#clock');

function getClock(){
    const date = new Date();
    
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    clock.innerHTML = `${h}:${m}:${s}`;
    //console.log(`${h}:${m}:${s}`);
}
getClock(); // 시작하자마자 실행
setInterval(getClock, 1000);