import bookshelf, { Model } from 'models'
import categoriaEstabelecimento from './CategoriaEstabelecimento'
import pessoaFisica from './PessoaFisica'

const estabelecimento = Model({
  tableName: 'estabelecimentos',
  uuid: true,
  toJSON: function () {
    const { ...estabelecimento } = bookshelf.Model.prototype.toJSON.apply(
      this,
      arguments
    )
    return estabelecimento
  },
  categoria_estabelecimento_id: function () {
    return this.belongsTo(
      categoriaEstabelecimento,
      'categoria_estabelecimento_id'
    )
  },
  pessoa_fisica_uuid: function () {
    return this.belongsTo(pessoaFisica, 'pessoa_fisica_uuid')
  }
})

export default estabelecimento
