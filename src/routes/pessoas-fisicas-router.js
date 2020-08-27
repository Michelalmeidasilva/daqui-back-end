import Router from 'koa-router'
import PessoaFisicaController from 'controllers/pessoa-fisica-controler'

const router = new Router()

router.get('/pessoas-fisicas', PessoaFisicaController.index)
router.get('/pessoas-fisicas/:uuid', PessoaFisicaController.show)

export default router.routes()
