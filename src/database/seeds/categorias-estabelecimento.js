export const seed = async (knex, Promise) => {
  await knex('categorias_estabelecimento').del()
  await knex('categorias_estabelecimento').insert([
    { id: 1, nome: 'lancheria' },
    { id: 2, nome: 'farmacia' },
    { id: 3, nome: 'agropecuaria' },
    { id: 4, nome: 'farmacia' }
  ])
}
