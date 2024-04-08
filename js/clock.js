const clock = document.querySelector('#clock');

function getClock(){
    const date = new Date();
    
    const h = date.getHours().toString().padStart(2, "0");
    const m = date.getMinutes().toString().padStart(2, "0");
    const s = date.getSeconds().toString().padStart(2, "0");
    clock.innerHTML = `${h}:${m}:${s}`;
    //console.log(`${h}:${m}:${s}`);
}
getClock(); // 시작하자마자 실행
setInterval(getClock, 1000);