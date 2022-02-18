document.getElementById("first").onclick=abc;
function abc(){
    document.getElementById("produce").classList.add("car");
    document.getElementById("produce").classList.remove("bus");
    document.getElementById("produce").classList.remove("man");
    document.getElementById("produce").classList.remove("suv");
}
document.getElementById("second").onclick=cde;
function cde(){
    document.getElementById("produce").classList.add("bus");
    document.getElementById("produce").classList.remove("car");
    document.getElementById("produce").classList.remove("suv");
    document.getElementById("produce").classList.remove("man");
}

document.getElementById("third").onclick=efg;
function efg(){
    document.getElementById("produce").classList.add("suv");
    document.getElementById("produce").classList.remove("car");
    document.getElementById("produce").classList.remove("bus");
    document.getElementById("produce").classList.remove("man");
}

document.getElementById("fourth").onclick=xyzqq;
function xyzqq(){
    document.getElementById("produce").classList.remove("suv");
    document.getElementById("produce").classList.remove("car");
    document.getElementById("produce").classList.remove("bus");
    document.getElementById("produce").classList.add("man");
    
}

// -------------------------------------------------





// document.getElementById("btn").onclick=abc;

// function abc(){
//     var target=document.getElementById("one");
//     var textp="<h4>Unless you are walking or biking, your commute probably produces greenhouse gas emissions. Luckily, trees are natural carbon sinks - in other words, they remove carbon dioxide (CO2) from the atmosphere and use it to grow. A carbon offset lets you help plant exactly enough trees to absorb all that CO2 you are putting into the atmosphere.</h4>";
   
//    target.insertAdjacentHTML("beforeend",textp);
// }


document.getElementById("btn").onclick=xyz;
function xyz(){
    
    // document.getElementById("one").classList.remove("box");
    document.getElementById("one").classList.toggle("box2");
   
}
document.getElementById("btnn").onclick=pqr;
function pqr(){
    
    // document.getElementById("one").classList.remove("box");
    document.getElementById("one2").classList.toggle("boxn2");
   
}


document.getElementById("btn3").onclick=pqr3;
function pqr3(){
    
    // document.getElementById("one").classList.remove("box");
    document.getElementById("one3").classList.toggle("box23");
   
}


document.getElementById("btn0").onclick=pqr0;
function pqr0(){
    
    // document.getElementById("one").classList.remove("box");
    document.getElementById("one0").classList.toggle("box01");
   
}