import { db } from "../database/connection.js";

export async function criarConta(dados) {
    const [resultado] = await db.query(`
        INSERT INTO usuarios(nome, email, senha)
        VALUES (?, ?, ?)
    `, [
        dados.nome,
        dados.email,
        dados.senha
    ])

    return resultado.insertId
}

export async function buscarUsuarioPorId(id) {
    const [resultado] = await db.query(`
        SELECT * FROM usuarios
        WHERE id = ?
    `, [id])

    return resultado[0]
}

export async function buscarUsuarios() {
    const [resultado] = await db.query(`
        SELECT * FROM usuarios            
    `)

    return resultado
}

export async function atualizarConta(dados, id) {
    const [resultado] = await db.query(`
        UPDATE usuarios
        SET nome = ?
            email = ?
            senha = ?
        WHERE id = ?
    `, [
        dados.nome,
        dados.email,
        dados.senha,
        id
    ])

    return resultado.affectedRows
}

export async function deletarUsuario(id) {
    const [resultado] = await db.query(`
        DELETE FROM usuarios
        WHERE id = ?
    `, [id])

    return resultado.affectedRows
}