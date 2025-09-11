function selectRating(rating) {
           
            const buttons = document.querySelectorAll('.rating-btn');
            buttons.forEach(btn => btn.classList.remove('selected'));
            
            event.target.classList.add('selected');
            
            
            document.getElementById('feedback').style.display = 'block';
            
            
            document.getElementById('texto').innerHTML = "Avaliação: " + "★".repeat(rating) + "☆".repeat(5-rating);
        }
        
        
        function submitFeedback() {
            const feedbackText = document.getElementById('feedbackText').value;
            document.getElementById('texto').innerHTML = "Muito obrigado pelo seu feedback! Iremos usar seus comentários para melhorar nossos serviços. 😊";
            
            
            document.getElementById('feedbackSection').style.display = 'none';
            
            
            console.log("Avaliação enviada:", feedbackText);
        }
        
        
        function modoEscuro() {
            const body = document.body;
            body.classList.toggle("escuro");
            
            const btn = document.getElementById("bt1");
            if (body.classList.contains("escuro")) {
                btn.textContent = "Modo Claro";
            } else {
                btn.textContent = "Modo Escuro";
            }
        }
    








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
