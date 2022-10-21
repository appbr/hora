function carregar(){

    var msg = document.querySelector('#msg');
    var image = document.querySelector('#image');
    var data = new Date()
    var hora =  data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    if(hora < 10) hora = "0" + hora;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;
    var tempo = hora + ":" + min + ":" + sec;
    msg.innerHTML = tempo;
    
    
    

    if(hora >= 0 && hora < 12){
        //Bom dia
        image.src = 'images/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        //Boa tarde
        image.src = 'images/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        image.src = 'images/noite.png'
        document.body.style.background = '#515154'
    }
    var initTimer = setInterval(carregar, 1000);
    
}

    

