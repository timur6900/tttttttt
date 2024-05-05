let buyf=false;
function buy(){
    if (!buyf){
    //console.log(document.getElementById("btn").style)
    document.getElementById("btn").style.background="red"
    document.getElementById("btn").innerHTML="в корзине"
    buyf=true;
    }
    else{
        document.getElementById("btn").style.background="grey"
        document.getElementById("btn").innerHTML="купить"
        buyf=false;
    }
}
