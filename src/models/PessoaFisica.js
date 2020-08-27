import bookshelf, { Model } from 'models'

const pessoaFisica = Model({
  tableName: 'pessoas_fisicas',
  uuid: true,
  toJSON: function () {
    const { ...pessoaFisica } = bookshelf.Model.prototype.toJSON.apply(
      this,
      arguments
    )
    return pessoaFisica
  }
})

export default pessoaFisica
