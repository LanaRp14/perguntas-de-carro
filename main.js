function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    
    
    cartao.innerHTML = `
    <div class="cartao_conteudo">
    <h3> ${categoria} </h3>
    <div class="cartao_pergunta"> 
         <p> ${pergunta} </p>
    </div>
        <div class="cartao_resposta">
            <p> ${resposta} </p>
         </div>
    </div>
    `
    let respotaEstaVisivel = false
    function viraCartao(){
        respotaEstaVisivel = !respotaEstaVisivel
        cartao.classList.toggle('active', respotaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)
    container.appendChild(cartao)

    }