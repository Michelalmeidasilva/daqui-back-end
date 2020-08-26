export const seed = async (knex, Promise) => {
  await knex('categorias_produto').del()
  await knex('categorias_produto').insert([
    { id: 1, nome: 'lanche' },
    { id: 2, nome: 'pizza' },
    { id: 3, nome: 'roupa' },
    { id: 4, nome: 'farmaco' },
    { id: 5, nome: 'bebida' }
  ])
}
