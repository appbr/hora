
function carregar(){

let msg = document.querySelector('#msg');
let img = document.querySelector('#img');

let time = new Date();
let hora = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();

if(hora < 10) hora = "0" + hora;
if(min < 10) min = "0" + min;
if(sec < 10) sec = "0" + sec;

let temp = hora + ":" + min // + ":" + sec;

if(hora >= 0 && hora < 12){
    img.src = 'images/manha.png'
    document.body.style.background = '#fde782';
} else if (hora >= 12 && hora < 18){
    img.src = 'images/tarde.png'
    document.body.style.background = '#c57c4f';
} else {
    img.src = 'images/noite.png';
    document.body.style.background = '#011f41';
}




msg.innerHTML = temp;

 //let timer = setInterval(carregar, 1000);


}
