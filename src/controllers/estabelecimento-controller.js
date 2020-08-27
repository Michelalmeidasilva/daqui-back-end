import Estabelecimento from 'models/Estabelecimento'
import { NotFound } from '../helpers'

export const index = () => new Estabelecimento().fetchAll()

export const show = ctx =>
  new Estabelecimento({ uuid: ctx.params.uuid }).fetch()

export default {
  index,
  show
}
