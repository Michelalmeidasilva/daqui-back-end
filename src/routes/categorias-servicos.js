import Router from 'koa-router'

const router = new Router()
import CategoriaServicoController from 'controllers/categoria-servico-controller'

router.get('/categorias-servicos', CategoriaServicoController.index)
router.get('/categorias-servicos/:id', CategoriaServicoController.show)

export default router.routes()
