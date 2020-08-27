import Router from 'koa-router'

const router = new Router()
import CategoriaProdutoController from 'controllers/categoria-produto-controller'

router.get('/categorias-produtos', CategoriaProdutoController.index)
router.get('/categorias-produtos/:id', CategoriaProdutoController.show)

export default router.routes()
