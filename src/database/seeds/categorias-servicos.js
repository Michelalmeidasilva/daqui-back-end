export const seed = async (knex, Promise) => {
  await knex('categorias_servicos').del()
  await knex('categorias_servicos').insert([
    { id: 1, nome: 'Arquiteto' },
    { id: 2, nome: 'DJ' },
    { id: 3, nome: 'Designer' },
    { id: 4, nome: 'Desenvolvedor' },
    { id: 5, nome: 'Eletricista' }
  ])
}
