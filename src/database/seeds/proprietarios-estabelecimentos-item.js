import uuidv4 from 'uuid/v4'

export const seed = async knex => {
  await knex('proprietarios').del()
  await knex('proprietarios').insert([
    {
      uuid: '952f35d9-15d9-49c5-974a-68a1946070bd',
      nome: 'Michel Silva',
      apelido: 'mickey',
      email: 'michelsilva@gmail.com'
    }
  ])
  await knex('estabelecimentos').del()
  await knex('estabelecimentos').insert([
    {
      uuid: '152f35d9-15d9-49c5-974a-68a1946070bc',
      nome: 'alemão',
      endereco: 'assis brasil 6',
      telefone: '99953555',
      horario: '20:30 03:00',
      cidade: 'Pedro Osorio',
      descricao: 'venha comer na melhor lancheria da cidade',
      proprietario_uuid: '952f35d9-15d9-49c5-974a-68a1946070bd',
      categoria_estabelecimento_id: 1
    }
  ])
  await knex('items').del()
  await knex('items').insert([
    {
      estabelecimento_uuid: '152f35d9-15d9-49c5-974a-68a1946070bc',
      categoria_produto_id: 1,
      nome: 'xis salada',
      preco: 10,
      descricao: 'milho, ervilha, bife, maionese, etc..'
    }
  ])
}
