import Router from 'koa-router'

const router = new Router()
import CategoriaEstabelecimentoController from 'controllers/categoria-estabelecimento-controller'

router.get(
  '/categorias-estabelecimentos',
  CategoriaEstabelecimentoController.index
)
router.get(
  '/categorias-estabelecimentos/:id',
  CategoriaEstabelecimentoController.show
)

export default router.routes()
