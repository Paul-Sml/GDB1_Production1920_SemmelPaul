var moins = document.getElementById("moins");
var plus = document.getElementById("plus");
var chaleur=0 ;
var aliment=0;
moins.onclick = function(){
    if(chaleur>0 && aliment==0){chaleur=chaleur-1;}
    document.getElementById("chaleur").innerHTML=chaleur;
};
plus.onclick = function(){
    if(chaleur<3 && aliment==0){chaleur=chaleur+1;}
    document.getElementById("chaleur").innerHTML=chaleur;
};

document.getElementById("aliment").onclick = function(){
    if(chaleur==3 && aliment==0){
        aliment=1;
    }else{aliment=-1;//défaite
    }
}

document.getElementById("temps").onclick = function(){
    if(aliment==1){
        aliment=2;//victoire
    }else{aliment=-1;//défaite
        }
}