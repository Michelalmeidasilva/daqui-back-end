import CategoriaEstabelecimento from 'models/CategoriaEstabelecimento'
import { NotFound } from '../helpers'

export const index = () => new CategoriaEstabelecimento().fetchAll()

export const show = ctx =>
  new CategoriaEstabelecimento({ id: ctx.params.id }).fetch()

export default {
  index,
  show
}
