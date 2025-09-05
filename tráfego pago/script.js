var modo=0;
var obj;

function modoEscuro(){
  if(modo==0){
    obj = document.getElementById("alterar");
    obj.classList.remove("claro");
    obj.classList.add("escuro");
    document.getElementById("bt1").innerHTML = "Modo claro";
    modo=1;
  } else {
    obj = document.getElementById("alterar");
    obj.classList.remove("escuro");
    obj.classList.add("claro");
    document.getElementById("bt1").innerHTML = "Modo escuro";
    modo=0;
  }
  
}