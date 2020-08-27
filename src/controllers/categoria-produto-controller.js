import CategoriaProduto from 'models/CategoriaProduto'
import { NotFound } from '../helpers'

export const index = () => new CategoriaProduto().fetchAll()

export const show = ctx => new CategoriaProduto({ id: ctx.params.id }).fetch()

export default {
  index,
  show
}
