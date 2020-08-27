import Router from 'koa-router'
import ServicoController from '../controllers/servico-controller'
const router = new Router()

router.get('/servicos', ServicoController.index)
router.get('/servicos/:uuid', ServicoController.show)

export default router.routes()
