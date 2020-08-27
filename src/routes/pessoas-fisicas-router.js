import Router from 'koa-router'

const router = new Router()
import PessoaFisicaController from 'controllers/pessoa-fisica-controler'

router.get('/pessoas-fisicas', PessoaFisicaController.index)
router.get('/pessoas-fisicas/:uuid', PessoaFisicaController.show)

export default router.routes()
