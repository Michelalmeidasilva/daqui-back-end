import PessoaFisica from 'models/PessoaFisica'
import { NotFound } from '../helpers'

export const index = () => new PessoaFisica().fetchAll()

export const show = ctx => new PessoaFisica({ uuid: ctx.params.uuid }).fetch()

export default {
  index,
  show
}
