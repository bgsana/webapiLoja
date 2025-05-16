async function carregarProdutos() {
    try {
        const resposta = await fetch('http://localhost:3000/api/produtos');
        const produtos = await resposta.json();

        const container = document.getElementById('produtosContainer');
        produtos.forEach(produto => {
            const card = document.createElement('div');
            card.className = 'card';

            const imagem = document.createElement('img');
            imagem.src = `img/${produto.produto_id}.png`;
            imagem.alt = produto.produto_nome;

            const titulo = document.createElement('h2');
            titulo.textContent = produto.produto_nome;

            const preco = document.createElement('p');
            preco.textContent = `Preço: R$ ${Number(produto.produto_preco).toFixed(2).replace('.', ',')}`;

            card.appendChild(imagem);
            card.appendChild(titulo);
            card.appendChild(preco);

            container.appendChild(card);
        });
    } catch (erro) {
        console.error('Erro ao carregar produtos:', erro);
    }
}

carregarProdutos();
