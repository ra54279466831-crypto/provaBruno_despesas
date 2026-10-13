import usuarios from './controllers/usuariosController.js'

export default function Rotas(app){
    app.use(usuarios)
}