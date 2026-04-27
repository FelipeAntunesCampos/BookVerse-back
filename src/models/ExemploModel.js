import prisma from '../lib/services/prismaClient.js';

export default class Books {
    constructor({ id = null, title,author,genre, year, moviment,description_pt,description_en,plot_pt,plot_en, era_pt = null, era_en = null, imageURL = null, videoURL = null} = {}) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
        this.moviment = moviment;
        this.description_pt = description_pt;
        this.description_en = description_en;
        this.plot_pt = plot_pt;
        this.plot_en = plot_en;
        this.era_pt = era_pt;
        this.era_en = era_en;
        this.imageURL = imageURL;
        this.videoURL = videoURL;


    }

    async criar() {
        return prisma.exemplo.create({
            data: {
                nome: this.nome,
                estado: this.estado,
                preco: this.preco,
            },
        });
    }

    async atualizar() {
        return prisma.exemplo.update({
            where: { id: this.id },
            data: { nome: this.nome, estado: this.estado, preco: this.preco },
        });
    }

    async deletar() {
        return prisma.exemplo.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.nome) {
            where.nome = { contains: filtros.nome, mode: 'insensitive' };
        }
        if (filtros.estado !== undefined) {
            where.estado = filtros.estado === 'true';
        }
        if (filtros.preco !== undefined) {
            where.preco = parseFloat(filtros.preco);
        }

        return prisma.exemplo.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.exemplo.findUnique({ where: { id } });
        if (!data) {
            return null;
        }
        return new ExemploModel(data);
    }
}
