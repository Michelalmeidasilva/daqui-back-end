import Router from 'koa-router'
import users from './users-router'
import me from './me-router'
import pessoasFisicas from './pessoas-fisicas-router'
import categoriasProdutos from './categorias-produtos'
import categoriasServicos from './categorias-servicos'
import categoriasEstabelecimentos from './categorias-estabelecimentos'

const router = new Router()
const api = new Router()

api.use(categoriasEstabelecimentos)
api.use(categoriasServicos)
api.use(categoriasProdutos)
api.use(pessoasFisicas)
api.use(users)
api.use(me)

router.use('/v1', api.routes())

export default router
