<script>
    let clientes =
    JSON.parse(localStorage.getItem("clientes")) || [];

    function cadastrar(){
      let inputNome = document.getElementById("nome")

      let inputCidade = document.getElementById("cidade")

      let inputTelefone = document.getElementById("telefone")


      let nome = inputNome.value;
      let cidade = inputCidade.value;
      let telefone = inputTelefone.value;

      if(nome === "" || cidade === "" || telefone === ""){
        alert("campo vazio")
        return;
      }

      clientes.push({
        nome: nome,
        cidade: cidade,
        telefone: Number(telefone)
      })

      inputNome.value = "";
      inputCidade.value = "";
      inputTelefone.value = "";

      mostrar(clientes)
      salvar()

     }
     function mostrar(usuario){
      let conteiner = document.getElementById("usuario")

      conteiner.innerHTML = "";

      usuario.forEach((item, index)=>{
        let dev = document.createElement("div");

        dev.className = "cliente";

        if(item.favorito){
          dev.classList.add("favorito");
        }

        
        dev.innerHTML = `
        <h2>${item.nome}</h2>

        <p>${item.cidade}</p>

        <p>${item.telefone}</p>

        <button onclick="favoritar(${index})">🤑</button>

        <button onclick="remover(${index})">❌</button>
        `
        conteiner.appendChild(dev)

      })
     }

     function remover(index){
      clientes.splice(index, 1)
      mostrar(clientes)
      salvar()
     }

     function favoritar(index){
      clientes[index].favorito = !clientes[index].favorito;

      salvar()
      mostrar(clientes)
     }


     function bucarCliente(){
      let texto = 
      document.getElementById("buscar")
      .value
      .toLowerCase();

      let filtrado = clientes.filter((item)=>{
        return item.nome

        .toLowerCase()

        .includes(texto);
      });

      mostrar(filtrado)
     
    }



     function salvar(){

      localStorage.setItem(
        "clientes",
        JSON.stringify(clientes)
      );

    }



    mostrar(clientes);
