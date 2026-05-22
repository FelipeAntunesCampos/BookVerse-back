import pg from 'pg';
import 'dotenv/config';
import pkg from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const { PrismaClient, Categoria, Categoria_en } = pkg;
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Resetando tabelas...');

    // Ordem de exclusão para evitar erros de foreign key
    await prisma.curiosidade.deleteMany();
    await prisma.simulado.deleteMany();
    await prisma.personagem.deleteMany();
    await prisma.livro.deleteMany();
    await prisma.usuario.deleteMany();
    await prisma.equipe.deleteMany();

    console.log('Iniciando seed de usuários...');
    const user1 = await prisma.usuario.create({
        data: {
            nome: 'Admin',
            email: 'admin@email.com',
            senha_hash: 'senha123',
        },
    });

    const user2 = await prisma.usuario.create({
        data: {
            nome: 'Estudante Teste',
            email: 'aluno@email.com',
            senha_hash: 'aluno123',
        },
    });

    console.log('Iniciando seed da equipe...');
   const membroEquipe1 = await prisma.equipe.create({
       data: {
           nome: 'Breno Belmonte',
           objetivo:
               'Responsabilidade sobre dados do livro, extrair informações para conter no site.',
           curso: 'Eletroeletrônica',
           fotoURL: 'https://i.ibb.co/prJ4ZYD1/breno.png',
       },
   });

   const membroEquipe2 = await prisma.equipe.create({
       data: {
           nome: 'Felipe Campos',
           objetivo: 'Desenvolvedor back end, api, banco de dados e integração.',
           curso: 'Desenvolvimento de Sistemas',
           fotoURL: 'https://i.ibb.co/q3szrgXf/campos.png',
       },
   });

   const membroEquipe3 = await prisma.equipe.create({
       data: {
           nome: 'Rafael Fahl',
           objetivo:
               'Responsabilidade sobre dados do livro, extrair informações para conter no site.',
           curso: 'Fabricação Mecânica',
           fotoURL: 'https://i.ibb.co/kV9gkmP8/fahl.png',
       },
   });

   const membroEquipe4 = await prisma.equipe.create({
       data: {
           nome: 'Melissa Freitas',
           objetivo: 'Desenvolvedora front-end.',
           curso: 'Desenvolvimento de Sistemas',
           fotoURL: 'https://i.ibb.co/Q7SsfWWN/melissa.png',
       },
   });

   const membroEquipe5 = await prisma.equipe.create({
       data: {
           nome: 'Felipe Jardim',
           objetivo:
               'Responsabilidade sobre dados do livro, extrair informações para conter no site.',
           curso: 'Eletroeletrônica',
           fotoURL: 'https://i.ibb.co/G3fkn9Hm/jardim.png',
       },
   });

   const membroEquipe6 = await prisma.equipe.create({
       data: {
           nome: 'Gustavo Alves',
           objetivo: 'Desenvolvedor back end, api, banco de dados e integração.',
           curso: 'Desenvolvimento de Sistemas',
           fotoURL: 'https://i.ibb.co/ynJJ1PKJ/alves.png',
       },
   });

   const membroEquipe7 = await prisma.equipe.create({
       data: {
           nome: 'Victor Barbosa',
           objetivo:
               'Responsabilidade sobre dados do livro, extrair informações para conter no site.',
           curso: 'Fabricação Mecânica',
           fotoURL: 'https://i.ibb.co/jkDr1P8F/victor.png',
       },
   });

   const membroEquipe8 = await prisma.equipe.create({
       data: {
           nome: 'Luana Follegati',
           objetivo: 'Desenvolvedora front-end.',
           curso: 'Desenvolvimento de Sistemas',
           fotoURL: 'https://i.ibb.co/YVCqk9H/luana.png',
       },
   });

   const membroEquipe9 = await prisma.equipe.create({
       data: {
           nome: 'Heloísa Stefanini',
           objetivo:
               'Responsabilidade sobre dados do livro, extrair informações para conter no site.',
           curso: 'Eletroeletrônica',
           fotoURL: 'https://i.ibb.co/GhDz8nk/heloisa.png',
       },
   });

   const membroEquipe10 = await prisma.equipe.create({
       data: {
           nome: 'Isabela Duetes',
           objetivo: 'Desenvolvedora front-end.',
           curso: 'Desenvolvimento de Sistemas',
           fotoURL: 'https://i.ibb.co/5g4G2t0b/duetes.png',
       },
   });

   const membroEquipe11 = await prisma.equipe.create({
       data: {
           nome: 'Maria Luiza',
           objetivo:
               'Responsabilidade sobre dados do livro, extrair informações para conter no site.',
           curso: 'Fabricação Mecânica',
           fotoURL: 'https://i.ibb.co/B2h7DvNY/maria.png',
       },
   });

   const membroEquipe12 = await prisma.equipe.create({
       data: {
           nome: 'Leticia Maria',
           objetivo: 'Desenvolvedora front-end.',
           curso: 'Desenvolvimento de Sistemas',
           fotoURL: 'https://i.ibb.co/yc9WSScY/leticia.png',
       },
   });

   const membroEquipe13 = await prisma.equipe.create({
       data: {
           nome: 'Ana Clara',
           objetivo:
               'Responsabilidade sobre dados do livro, extrair informações para conter no site.',
           curso: 'Fabricação Mecânica',
           fotoURL: 'https://i.ibb.co/WW3hW1Sz/ana.png',
       },
   });

    console.log('Iniciando seed do livro...');
    const livro = await prisma.livro.create({
        data: {
            titulo: 'Vidas Secas',
            autor: 'Graciliano Ramos',
            genero_pt: 'Romance regionalista',
            genero_en: 'Regionalist novel',
            ano: 1938,
            movimento_pt: 'Segunda fase modernista (Regionalismo de 30)',
            movimento_en: 'Second phase of Brazilian Modernism (Regionalism)',
            descricao_pt: 'A obra Vidas Secas, de Graciliano Ramos, retrata a vida difícil de uma família de retirantes nordestinos que sofre com a seca, a fome e a pobreza. Fabiano, Sinhá Vitória, os filhos e a cachorra Baleia vivem em constante luta pela sobrevivência e enfrentam injustiças sociais. A obra critica a desigualdade e os sofrimentos causados pela seca no Nordeste brasileiro.',
            descricao_en: 'The novel Vidas Secas (Barren Lives), by Graciliano Ramos, portrays the difficult life of a family of migrants from the Brazilian Northeast who suffer from drought, hunger, and poverty. Fabiano, Sinhá Vitória, their children, and their dog Baleia live in a constant struggle for survival and face social injustices. The work criticizes the inequality and suffering caused by drought in the Brazilian Northeast.',
            enredo_pt: 'Temas de Redação:\n1° Desigualdade Social\n2° Falta de acesso à Educação e Direitos\n3° Exclusão Social\n4° Exploração do Trabalhador\n5° Seca e Problemas Climáticos',
            enredo_en: 'Essay Topics:\n1. Social Inequality\n2. Lack of Access to Education and Rights\n3. Social Exclusion\n4. Worker Exploitation\n5. Drought and Climate Problems',
            contexto_historico_pt: 'Repertório Coringa:\n- Desafios climáticos / Refugiados climáticos: A seca move a narrativa com a família fugindo da estiagem severa. Paralelo com temporais e enchentes atuais pela vulnerabilidade social dos mais pobres.\n- População infantil em situação de rua: Os filhos sem nome tipificam a raiz histórica da negligência estatal, privação absoluta e desestruturação familiar que empurram jovens para as ruas.',
            contexto_historico_en: 'Dicas Vestibular 2026: 1. Crie um cronograma realista. 2. Leia o edital. 3. Estude em grupo. 4. Explore técnicas de estudo. 5. Consuma livros, filmes e jornais para repertório.',
            detalhes_autor_pt: 'Graciliano Ramos',
            detalhes_autor_en: 'Graciliano Ramos',
            estilo_escrita_pt: 'Espírito de síntese, descrição não minuciosa do espaço, foco na tragédia social e desumanização.',
            estilo_escrita_en: 'Focus on social tragedy, human objectification, and synthesis of descriptions.',
            verossimilhanca_pt: 'Fontes de apoio: cnnbrasil.com.br',
            verossimilhanca_en: 'Sources: cnnbrasil.com.br',
            caracteristicas_literarias_pt: 'Mudez introspectiva, episódios independentes sem ligação cronológica rígida, análise psicológica sintonizada ao comportamento embrutecido.',
            caracteristicas_literarias_en: 'Introspective muteness, semi-independent chapters, and psychological behavior deeply tied to environment.',
            conclusao_pt: '',
            conclusao_en: '',
            video_url: '',
            capa_url: '',
        },
    });

    console.log('Iniciando seed de personagens...');
    await prisma.personagem.create({
        data: {
            livro_id: livro.id,
            nome: 'Fabiano',
            descricao_pt: 'Pai da família, retirante e vaqueiro que se sente inferior e incapaz de se expressar bem.',
            descricao_en: 'The father, a cowboy who feels inferior and unable to express himself well.',
            papel: 'Principal',
            imagem_url: '',
        },
    });

    await prisma.personagem.create({
        data: {
            livro_id: livro.id,
            nome: 'Sinhá Vitória',
            descricao_pt: 'Esposa de Fabiano, tenta melhorar a vida economizando e sonhando com mais conforto e estabilidade.',
            descricao_en: 'Fabiano\'s wife, who tries to improve life by saving money and dreaming of comfort.',
            papel: 'Principal',
            imagem_url: '',
        },
    });

    await prisma.personagem.create({
        data: {
            livro_id: livro.id,
            nome: 'Baleia',
            descricao_pt: 'A cachorra da família. O capítulo dedicado a ela representa o sofrimento e os sentimentos de todos.',
            descricao_en: 'The family dog. Her chapter represents the collective suffering of the family.',
            papel: 'Principal',
            imagem_url: '',
        },
    });

    await prisma.personagem.create({
        data: {
            livro_id: livro.id,
            nome: 'Menino mais velho',
            descricao_pt: 'Filho que cresce em privação absoluta, sem nome, brinquedos ou escola, demonstrando curiosidade fazendo perguntas.',
            descricao_en: 'The older son, nameless, growing up in absolute deprivation, showing curiosity by asking questions.',
            papel: 'Secundário',
            imagem_url: '',
        },
    });

    await prisma.personagem.create({
        data: {
            livro_id: livro.id,
            nome: 'Menino mais novo',
            descricao_pt: 'Filho mais novo, também sem nome, que compartilha da mesma rotina de invisibilidade e privação.',
            descricao_en: 'The younger son, nameless, living under the same absolute structural neglect.',
            papel: 'Secundário',
            imagem_url: '',
        },
    });

    console.log('Iniciando seed de curiosidades...');
    await prisma.curiosidade.create({
        data: {
            livro_id: livro.id,
            categoria_pt: Categoria.Curiosidades,
            categoria_en: Categoria_en.Curities,
            titulo_pt: 'Traduções Mundiais',
            titulo_en: 'World Translations',
            conteudo_pt: 'O livro “Vidas Secas” foi traduzido para mais de 20 idiomas diferentes e é considerado um clássico da literatura mundial.',
            conteudo_en: 'The book “Barren Lives” has been translated for more than 20 different languages and is considered a classic of world literature.',
        },
    });

    await prisma.curiosidade.create({
        data: {
            livro_id: livro.id,
            categoria_pt: Categoria.Curiosidades,
            categoria_en: Categoria_en.Curities,
            titulo_pt: 'Inspiração Real',
            titulo_en: 'Real Inspiration',
            conteudo_pt: 'O cachorro Baleia (personagem do livro), foi inspirado em um cachorro real em que Graciliano Ramos teve em sua infância.',
            conteudo_en: 'The character dog Baleia was inspired by a real dog that Graciliano Ramos had during his childhood.',
        },
    });

    console.log('Iniciando seed de simulados (15 questões)...');

    // Questão Inicial Enviada (Exceção)
    await prisma.simulado.create({
        data: {
            livro_id: livro.id,
            pergunta_pt: 'Sobre a obra Vidas Secas, de Graciliano Ramos, todas as alternativas estão corretas, EXCETO:',
            pergunta_en: '',
            opcao_a: 'o romance focaliza uma família de retirantes, que vive numa espécie de mudez introspectiva, em precárias condições físicas e num degradante estado de condição humana',
            opcao_b: 'o relato dos fatos e a análise psicológica dos personagens articulam-se com grande coesão ao longo da obra, colocando o narrador como decifrador dos comportamentos animalescos dos personagens',
            opcao_c: 'o ambiente seco e retorcido da caatinga é como um personagem presente em todos os momentos, agindo de forma contínua sobre os seres vivos',
            opcao_d: 'o narrador preocupa-se exclusivamente com a tragédia natural (a seca) e a descrição do espaço não é minuciosa; pelo contrário, revela o espírito de síntese do autor',
            opcao_a_en: '', opcao_b_en: '', opcao_c_en: '', opcao_d_en: '',
            resposta_correta: 'd', // Mapeado do 'e' original para caber no schema de 4 opções (A, B, C, D)
            explicacao_pt: 'A alternativa está incorreta porque o livro não fala apenas da seca, mas também da miséria e da desumanização sofrida pela família retirante.',
            explicacao_en: '',
        }
    });

    // 15 Questões Sequenciais Novas
    const questoesNovas = [
        {
            p_pt: 'Como Fabiano se sente em relação à própria inteligência?',
            a: 'Muito inteligente e confiante', b: 'Superior às outras pessoas', c: 'Inferior e incapaz de se expressar bem', d: 'Feliz com sua educação',
            rc: 'c', exp: 'Fabiano se enxerga como um bicho, desprovido de vocabulário articulado e incapaz de se defender formalmente por falta de instrução.'
        },
        {
            p_pt: 'De que forma Sinhá Vitória tenta melhorar a vida da família?',
            a: 'Gastando dinheiro com luxo', b: 'Economizando e sonhando com mais conforto', c: 'Mudando para a cidade grande', d: 'Vendendo todos os animais',
            rc: 'b', exp: 'Sinhá Vitória foca suas aspirações em melhorias factíveis, como a cama de fita, buscando poupar o pouco que ganham.'
        },
        {
            p_pt: 'O que o episódio do soldado amarelo revela sobre a sociedade da época?',
            a: 'A igualdade entre as pessoas', b: 'O respeito pelos trabalhadores', c: 'A diversão dos sertanejos', d: 'O abuso de poder e a injustiça social',
            rc: 'd', exp: 'Representa a opressão arbitrária das forças do Estado sobre o trabalhador desarmado e vulnerável.'
        },
        {
            p_pt: 'Como a seca afeta os animais e as pessoas no livro?',
            a: 'Traw fartura e tranquilidade', b: 'Faz todos enriquecerem', c: 'Provoca fome, sofrimento e luta pela sobrevivência', d: 'Não interfere na vida da família',
            rc: 'c', exp: 'A estiagem desidrata o meio e desumaniza os personagens, reduzindo as interações à pura subsistência básica.'
        },
        {
            p_pt: 'Por que Fabiano admira e ao mesmo tempo teme as autoridades?',
            a: 'Porque acredita que elas têm poder sobre sua vida', b: 'Porque quer ser político', c: 'Porque conhece todas as leis', d: 'Porque deseja trabalhar na polícia',
            rc: 'a', exp: 'O medo advém do desconhecimento das leis e da vulnerabilidade social perante os donos do poder e do dinheiro.'
        },
        {
            p_pt: 'Como os meninos demonstram curiosidade sobre o mundo?',
            a: 'Fazendo perguntas e observando tudo ao redor', b: 'Ignorando os acontecimentos', c: 'Brincando apenas com animais', d: 'Fugindo da família',
            rc: 'a', exp: 'Apesar do ambiente hostil, as crianças tentam entender palavras novas (como "inferno") e o sentido das coisas ao redor.'
        },
        {
            p_pt: 'Qual é a importância do capítulo “Baleia” para a história?',
            a: 'Mostrar apenas a vida dos animais', b: 'Representar o sofrimento e os sentimentos da família', d: 'Explicar a economia do sertão', c: 'Contar uma história engraçada',
            rc: 'b', exp: 'Baleia é humanizada no romance, possuindo sonhos e sentimentos que espelham o próprio martírio dos humanos que a cercam.'
        },
        {
            p_pt: 'Como a família reage quando encontra uma fazenda para morar?',
            a: 'Com esperança e alívio', b: 'Com tristeza e medo', c: 'Com indiferença', d: 'Com vontade de ir embora imediatamente',
            rc: 'a', exp: 'A ocupação temporária da fazenda abandonada renova as forças e suspende o ciclo imediato de fuga da morte por fome.'
        },
        {
            p_pt: 'O que o livro mostra sobre a falta de oportunidades no sertão?',
            a: 'Que todos conseguem melhorar de vida facilmente', b: 'Que os pobres enfrentam dificuldades para mudar de condição', c: 'Que há muitas escolas e empregos', d: 'Que o sertão é desenvolvido',
            rc: 'b', exp: 'A obra denuncia o determinismo social e geográfico em que o trabalhador fica preso à exploração sem caminhos de ascensão.'
        },
        {
            p_pt: 'Como o silêncio entre os personagens ajuda a construir o clima da obra?',
            a: 'Mostrando alegria constante', b: 'Criando humor nas cenas', c: 'Demonstrando distância, sofrimento e dificuldade de comunicação', d: 'Indicando festas e diversão',
            rc: 'c', exp: 'A escassez de diálogos mimetiza a terra seca; os personagens se comunicam por grunhidos e gestos devido ao esvaziamento cultural.'
        },
        {
            p_pt: 'Por que Fabiano se sente injustiçado em vários momentos da narrativa?',
            a: 'Porque é rico e perde dinheiro', b: 'Porque sofre abusos e não consegue se defender', c: 'Porque não gosta de trabalhar', d: 'Porque deseja sair do sertão',
            rc: 'b', exp: 'Ele percebe que as contas do patrão estão fraudadas, mas a falta de fala formal o força a aceitar a espoliação sob pena de demissão.'
        },
        {
            p_pt: 'Como a esperança aparece mesmo diante das dificuldades da família?',
            a: 'Nos sonhos de uma vida melhor', b: 'Na vontade de abandonar tudo', c: 'No desejo de viver sozinho', d: 'Na riqueza da fazenda',
            rc: 'a', exp: 'Apesar de andarem em círculos, o final projeta a saída definitiva para o Sul, alimentando a busca utópica por dignidade.'
        },
        {
            p_pt: 'De que maneira a linguagem simples do livro combina com a realidade dos personagens?',
            a: 'Reflete a vida humilde e sofrida do sertão', b: 'Mostra personagens muito cultos', c: 'Torna a história confusa', d: 'Não tem relação com os personagens',
            rc: 'a', exp: 'A escrita seca, crua e desprovida de adornos de Graciliano emula perfeitamente a escassez material do ambiente da Caatinga.'
        },
        {
            p_pt: 'Como o ambiente do sertão interfere nas decisões da família?',
            a: 'Obriga a família a migrar em busca de sobrevivência', b: 'Faz a família viajar por diversão', c: 'Incentiva estudos e lazer', d: 'Não influencia suas escolhas',
            rc: 'a', exp: 'O clima árido dita o início e o fim da narrativa, agindo como força motriz implacável que expulsa os viventes de sua terra.'
        },
        {
            p_pt: 'O que diferencia os sonhos de Fabiano e de Sinhá Vitória?',
            a: 'Fabiano quer luxo e Sinhá Vitória quer pobreza', b: 'Fabiano pensa apenas no presente, enquanto Sinhá Vitória sonha com conforto e estabilidade', c: 'Os dois têm exatamente os mesmos objetivos', d: 'Sinhá Vitória não possui sonhos',
            rc: 'b', exp: 'Fabiano foca na lida diária e no temor das intempéries inmediatas; Vitória consegue planejar à frente e almejar bens materiais tangíveis.'
        }
    ];

    for (const q of questoesNovas) {
        await prisma.simulado.create({
            data: {
                livro_id: livro.id,
                pergunta_pt: q.p_pt,
                pergunta_en: '',
                opcao_a: q.a,
                opcao_b: q.b,
                opcao_c: q.c,
                opcao_d: q.d,
                opcao_a_en: '', opcao_b_en: '', opcao_c_en: '', opcao_d_en: '',
                resposta_correta: q.rc,
                explicacao_pt: q.exp,
                explicacao_en: '',
            }
        });
    }

    console.log('✅ Seed finalizado com sucesso!');
    console.log(`Usuários: ${user1.email}, ${user2.email}`);
    console.log(`Membros da equipe criados: 13`);
    console.log(`Livro: ${livro.titulo} (ID: ${livro.id})`);
    console.log(`Curiosidades criadas: 2`);
    console.log(`Questões criadas para este livro: 16`);
}

main()
    .catch((error) => {
        console.error('❌ Erro no seed:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
