import uuidv4 from 'uuid/v4'

export const seed = async knex => {
  await knex('servicos').del()
  await knex('servicos').insert([
    {
      uuid: '352f35d9-15d9-49c5-974a-68a1946070bd',
      telefone: '32551121',
      nome: 'Mourao eletricista',
      horario_atendimento: '10:00 as 20:00',
      descricao: 'melhor eletricista da cidade pode confiar é eletrimourao',
      categoria_servico_id: 5,
      pessoa_fisica_uuid: '152f35d9-15d9-49c5-974a-68a1946070bd'
    }
  ])
}
