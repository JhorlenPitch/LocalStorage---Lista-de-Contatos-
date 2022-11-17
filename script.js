

window.addEventListener("load", function() {
    let nome = document.getElementById("nome");
    let contato = document.getElementById("contato");
    let salvar = document.getElementById("btnAdd");
    let limpar = document.getElementById("btnLimp");
    let limparitem = document.getElementById("btnLimpitem");
    let conteudo= document.getElementById("conteudo");

    salvar.addEventListener("click", function() {
      let input1=nome.value
      let input2=contato.value
      
      localStorage.setItem(input1,input2);
      alert("Item adicionado.");
        exibir();
    });
  
    limpar.addEventListener("click", function() {
        localStorage.clear();
        alert("Todos os contatos foram apagados.");
        exibir();
    });

    limparitem.addEventListener("click", function() {
      let input1=nome.value
      var test = localStorage.getItem(input1);
      if(test!=null)
      {
        localStorage.removeItem(input1);
        alert("O item foi apagado.");
      } else {
        alert("O Item não existe!");
      }
      exibir();
  });

    window.addEventListener("storage", function(event) {
        let key = event.key;
        let newValue= event.newValue;
        let oldValue = event.oldValue;
        let storageArea= event.storageArea;

        key.innerHTML(key+"\n" +newValue + "\n" + oldValue +"\n" + storageArea);
       exibir();
      });
      
      function exibir() {
        let str = "";
        for ( let i = 0, len = localStorage.length; i < len; i++ ) {
          let key = localStorage.key(i);
          let contato = localStorage.getItem(key);
          str+=`${[i+1]} . ${key} : ${contato}<br>`;
        }
  
    
        contato.value = ""; 
        nome.value = "";
        conteudo.innerHTML = str;
      }
    
      exibir();
   
    });