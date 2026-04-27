import pg from 'pg';
import 'dotenv/config';
import pkg from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const { PrismaClient } = pkg;
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Resetando tabela exemplo...');

    await prisma.curiosity.deleteMany();
    await prisma.quiz.deleteMany();
    await prisma.character.deleteMany();
    await prisma.books.deleteMany();
    await prisma.user.deleteMany();

    console.log('Iniciando seed de usuários...');
    // Seed de Usuários
    const user1 = await prisma.user.create({
        data: {
            name: 'xxxxx',
            email: 'xxxx@email.com',
            passwordHash: 'senha123', // DEVE SER SECRETA
        },
    });

    const user2 = await prisma.user.create({
        data: {
            name: 'Estudante Teste',
            email: 'aluno@email.com',
            passwordHash: 'aluno123',
        },
    });

    console.log('Iniciando seed da obra principal...');
    // Seed de Vidas Secas
    const vidasSecas = await prisma.books.create({
        data: {
            title: 'Vidas Secas',
            author: 'Graciliano Ramos',
            genre: '',
            year: '',
            moviment: '',
            description_pt: '',
            description_en: '',
            plot_pt: '',
            plot_en: '',
            era_pt: '',
            era_en: '',
            video_url: '',
            image_url: '',

            // personagens
            characters: {
                create: [
                    {
                        name: 'xxx',
                        description_pt: '',
                        description_en: '',
                        role: '',
                        image_url: '',
                    },
                ],
            },

            // quiz
            quizzes: {
                create: [
                    {
                        question_pt: '',
                        question_en: '',
                        optionA: '',
                        optionB: '',
                        optionC: '',
                        optionD: '',
                        optionA_en: '',
                        optionB_en: '',
                        optionC_en: '',
                        optionD_en: '',
                        correct_answer: '', // Ex: 'a'
                        explanation_pt: '',
                        explanation_en: '',
                    },
                ],
            },

            // Curiosidades
            curiosities: {
                create: [
                    {
                        category_pt: '',
                        category_en: '',
                        title_pt: '',
                        title_en: '',
                        content_pt: '',
                        content_en: '',
                    },
                ],
            },
        },
    });

    console.log('Seed finalizado com sucesso!');
    console.log(`Usuários criados: ${user1.email}, ${user2.email}`);
}

main()
    .catch((e) => {
        console.error('❌ Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
