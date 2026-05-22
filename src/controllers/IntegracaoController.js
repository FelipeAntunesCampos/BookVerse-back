export const obterBibliotecaCompleta = async (req, res) => {
    try {
        console.log('--- INICIANDO BUSCA DA BIBLIOTECA ---');
        console.log('Chave 1 existe?:', !!process.env.KEY_LIVRO_CAPITAES_DA_AREIA);
        console.log('Chave 2 existe?:', !!process.env.KEY_LIVRO_O_GUARANI);

        const endpointsLivros = [
            {
                nomeLivro: 'Capitães da Areia',
                urlCompleta: 'https://readflow-m8o6.onrender.com/api/livros',
                apiKey: process.env.KEY_LIVRO_CAPITAES_DA_AREIA,
            },
            {
                nomeLivro: 'O Guarani',
                urlCompleta: 'https://bookpedia-backend-4ab3.onrender.com/livros',
                apiKey: process.env.KEY_LIVRO_O_GUARANI,
            },
        ];

        console.log(`Total de livros cadastrados no array: ${endpointsLivros.length}`);

        const promessas = endpointsLivros.map(async (livro, index) => {
            console.log(`[Índice ${index}] Iniciando processo para: ${livro.nomeLivro}`);

            try {
                if (!livro.urlCompleta || !livro.apiKey) {
                    console.log(`[Índice ${index}] Erro: URL ou Key faltando para ${livro.nomeLivro}`);
                    return {
                        livro: livro.nomeLivro,
                        statusApi: 'Configuração Ausente',
                        conteudo: []
                    };
                }

                console.log(`[Índice ${index}] Disparando Fetch para: ${livro.urlCompleta}`);

                const resposta = await fetch(livro.urlCompleta, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': livro.apiKey,
                    },
                });

                console.log(`[Índice ${index}] Resposta recebida de ${livro.nomeLivro}. Status: ${resposta.status}`);

                if (!resposta.ok) {
                    return {
                        livro: livro.nomeLivro,
                        statusApi: `Erro HTTP ${resposta.status}`,
                        conteudo: []
                    };
                }

                const dadosBrutos = await resposta.json();
                console.log(`[Índice ${index}] JSON convertido com sucesso para ${livro.nomeLivro}`);

                // Garante que é um array para não quebrar o .map interno
                const listaDeLivros = Array.isArray(dadosBrutos) ? dadosBrutos : [];

                const dadosFormatados = listaDeLivros.map((item) => ({
                    titulo:
                        item.titulo || item.title || item.tituloDoLivro || 'Título não informado',
                    autor: item.autor || item.author || item.autores|| 'Autor não informado',
                    capa_url: item.capa || item.image || item.capaURL|| null,
                    ano: item.ano || item.year || 'N/A',
                    genero_pt: item.genero_pt || item.genero || 'Gênero não informado',
                    genero_en: item.genero_en || item.genre || 'Genre not informed',
                    enredo_pt: item.enredo_pt || item.resumo || 'Enredo não informado',
                    enredo_en: item.enredo_en || item.description || 'Description not informed',
                }));

                return {
                    livro: livro.nomeLivro,
                    statusApi: 'Online',
                    conteudo: dadosFormatados,
                };

            } catch (erroLivro) {
                console.error(`🚨 [Erro interno no mapa do livro ${livro.nomeLivro}]:`, erroLivro.message);
                return {
                    livro: livro.nomeLivro,
                    statusApi: 'Erro Interno na Requisição',
                    conteudo: [],
                };
            }
        });

        // Aguarda todas resolverem
        const bibliotecaCompleta = await Promise.all(promessas);
        console.log('--- PROCESSO CONCLUÍDO COM SUCESSO ---');

        return res.status(200).json(bibliotecaCompleta);

    } catch (error) {
        console.error('💥 ERRO CRÍTICO NO CATCH PRINCIPAL:', error.message);
        return res.status(500).json({ erro: 'Erro crítico no servidor.', detalhe: error.message });
    }
};
