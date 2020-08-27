import CategoriaServico from 'models/CategoriaServico'
import { NotFound } from '../helpers'

export const index = () => new CategoriaServico().fetchAll()

export const show = ctx => new CategoriaServico({ id: ctx.params.id }).fetch()

export default {
  index,
  show
}
