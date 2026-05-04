import prisma from '../lib/services/prismaClient.js';

export default class Livros {
    constructor({
        id = null,
        titulo,
        autor,
        genero,
        ano,
        movimento,
        descricao_pt,
        descricao_en,
        enredo_pt,
        enredo_en,
        contexto_historico_pt = null,
        contexto_historico_en = null,
        capaURL = null,
        videoURL = null,
        detalhes_autor_pt,
        detalhes_autor_en,
        estilo_escrita_pt,
        estilo_escrita_en,
        verossimilhanca_pt,
        verossimilhanca_en,
        caracteristicas_literarias_pt,
        caracteristicas_literarias_en,
        conclusao_pt,
        conclusao_en,

    } = {}) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.ano = ano;
        this.movimento = movimento;
        this.descricao_pt = descricao_pt;
        this.descricao_en = descricao_en;
        this.enredo_pt = enredo_pt;
        this.enredo_en = enredo_en;
        this.contexto_historico_pt = contexto_historico_pt;
        this.contexto_historico_en = contexto_historico_en;
        this.detalhes_autor_pt = detalhes_autor_pt;
        this.detalhes_autor_en = detalhes_autor_en;
        this.estilo_escrita_pt = estilo_escrita_pt;
        this.estilo_escrita_en = estilo_escrita_en;
        this.verossimilhanca_pt = verossimilhanca_pt;
        this.verossimilhanca_en = verossimilhanca_en;
        this.caracteristicas_literarias_pt = caracteristicas_literarias_pt;
        this.caracteristicas_literarias_en = caracteristicas_literarias_en;
        this.conclusao_pt = conclusao_pt;
        this.conclusao_en = conclusao_en;
        this.capaURL = capaURL;
        this.videoURL = videoURL;
    }

    async criar() {
        return prisma.exemplo.create({
            data: {
                titulo: this.titulo,
                autor: this.autor,
                genero: this.genero,
                ano: this.ano,
                movimento: this.movimento,
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
