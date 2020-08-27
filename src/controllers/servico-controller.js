import Servico from 'models/Servico'
import { NotFound } from '../helpers'

export const index = () => new Servico().fetchAll()

export const show = ctx => new Servico({ uuid: ctx.params.uuid }).fetch()

export default {
  index,
  show
}
