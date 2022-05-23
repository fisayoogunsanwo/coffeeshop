let auto=document.getElementById("auto");
let once=document.getElementById("once");

function randomColor(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    let backColor= "rgb(" + x + "," + y + "," + z + ")";

    console.log(backColor);

    document.body.style.backgroundColor= backColor;

}


// setInterval(randomColor,1000);
