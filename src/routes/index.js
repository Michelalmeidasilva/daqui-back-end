import Router from 'koa-router'
import users from './users-router'
import me from './me-router'
import pessoasfisicas from './pessoas-fisicas-router'

const router = new Router()
const api = new Router()

api.use(pessoasfisicas)
api.use(users)
api.use(me)

router.use('/v1', api.routes())

export default router
