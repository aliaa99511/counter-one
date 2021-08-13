

var head=document.getElementById("head");
var count = 56;

function repetition (){
    head.innerHTML = count;
    count++;

    var set=setTimeout(repetition,30);

    if(count > 1000){
        clearTimeout(set);
    }
    
}
repetition ();

/********************************************** */
