import Router from 'koa-router'
import EstabelecimentoController from '../controllers/estabelecimento-controller'
const router = new Router()

router.get('/estabelecimentos', EstabelecimentoController.index)
router.get('/estabelecimentos/:uuid', EstabelecimentoController.show)

export default router.routes()
