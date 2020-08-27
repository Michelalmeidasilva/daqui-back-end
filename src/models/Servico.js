import bookshelf, { Model } from 'models'
import categoriaServico from 'models/CategoriaServico'
import pessoaFisica from 'models/PessoaFisica'

const servico = Model({
  tableName: 'servicos',
  uuid: true,
  toJSON: function () {
    const { ...servico } = bookshelf.Model.prototype.toJSON.apply(
      this,
      arguments
    )
    return servico
  },
  categoria_servico_id: function () {
    return this.belongsTo(categoriaServico, 'categoria_servico_id')
  },
  pessoa_fisica_uuid: function () {
    return this.belongsTo(pessoaFisica, 'pessoa_fisica_uuid')
  }
})

export default servico
