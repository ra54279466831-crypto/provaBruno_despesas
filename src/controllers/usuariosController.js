import { Router } from "express";
import * as service from '../services/usuariosService.js'
const endpoints = Router()

endpoints.post('/usuarios', async (req, res) => {
    try {
        const dados = req.body

        const resultado = await service.criarConta(dados)

        res.status(201).json({
            mensagem: "Sucesso ao criar a conta!",
            resultado
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            mensagem: "Erro ao criar conta"
        })
    }
})

endpoints.get('/usuarios/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        
        const resultado = service.buscarUsuarioPorId(id)

        res.status(200).json(resultado)
    } catch (error) {
        console.log(error.message)
        res.status(404).json({
            mensagem: "Usuario não encontrado"
        })
    }
})

endpoints.get('/usuarios', async (req, res) => {
    try {
        const resultado = service.buscarUsuarios()

        res.status(200).json(resultado)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            mensagem: "Erro ao buscar usuarios"
        })
    }
})

endpoints.put('/usuarios/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const dados = req.body

        const resultado = await service.atualizarConta(dados, id)

        res.status(201).json({
            mensagem: "Sucesso ao atualizar a conta!",
            resultado
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            mensagem: "Erro ao atualizar conta"
        })
    }
})

endpoints.delete('/usuarios/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        
        const resultado = service.deletarUsuario(id)

        res.status(200).json(resultado)
    } catch (error) {
        console.log(error.message)
        res.status(404).json({
            mensagem: "Usuario não encontrado"
        })
    }
})

export default endpoints