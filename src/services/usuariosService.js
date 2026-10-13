import * as db from '../repositories/usuariosRepo.js'

export async function criarConta(dados) {
    if(!dados) throw new Error("Envie os dados corretamente")
    
    const { nome, email, senha } = dados

    if(!nome || !email || !senha) throw new Error("Todos os campos devem ser preenchidos")

    if(nome.length <= 2) throw new Error("O nome de usuario deve ter mais de 2 caracteres")

    if(!email.includes("@")) throw new Error("Não existe email sem @")

    if(senha.length > 6 || senha <=0) throw new Error("A senha deve ter menos que 6 caracteres")

    const resultado = await db.criarConta(dados)

    if(!resultado) throw new Error("Erro ao criar conta")

    return resultado
}

export async function buscarUsuarioPorId(id) {
    if(!Number.isInteger(id) || !id || id <= 0) throw new Error("Envie o id corretamente")

    const resultado = await db.buscarUsuarioPorId(id)

    if(!resultado) throw new Error("Usuario não encontrado")

    return resultado
}

export async function buscarUsuarios() {
    const resultado = await db.buscarUsuarios()

    if(!resultado) throw new Error("Usuar1ios não encontrados")

    return resultado
}

export async function atualizarConta(dados, id) {
    if(!dados) throw new Error("Envie os dados corretamente")

    if(!Number.isInteger(id) || !id || id <= 0) throw new Error("Envie o id corretamente")
    
    const { nome, email, senha } = dados

    if(!nome || !email || !senha) throw new Error("Todos os campos devem ser preenchidos")

    if(nome.length <= 2) throw new Error("O nome de usuario deve ter mais de 2 caracteres")

    if(!email.includes("@")) throw new Error("Não existe email sem @")

    if(senha.length > 6 || senha <=0) throw new Error("A senha deve ter menos que 6 caracteres")

    const resultado = await db.atualizarConta(dados, id)

    if(!resultado) throw new Error("Erro ao atualizar conta")

    return resultado
}

export async function deletarUsuario(id) {
    if(!Number.isInteger(id) || !id || id <= 0) throw new Error("Envie o id corretamente")

    const resultado = await db.deletarUsuario(id)

    if(!resultado) throw new Error("Usuario não encontrado")

    return resultado
}