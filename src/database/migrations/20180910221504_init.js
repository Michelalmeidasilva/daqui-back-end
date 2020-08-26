export const up = knex =>
  knex.schema
    .createTable('roles', table => {
      table.increments('id').primary()
      table.string('role').notNullable()
    })
    .createTable('users', table => {
      table.uuid('id').primary()
      table.string('name').notNullable()
      table.string('email').unique().notNullable()
      table.string('password').notNullable()
      table.string('password_reset_token').unique()
      table.integer('role_id').unsigned()
      table
        .foreign('role_id')
        .references('id')
        .inTable('roles')
        .onDelete('CASCADE')
      table.timestamps(true, true)
    })
    .createTable('categorias_estabelecimentos', table => {
      table.increments('id').primary()
      table.string('nome').notNullable()
    })
    .createTable('categorias_produtos', table => {
      table.increments('id').primary()
      table.string('nome').notNullable()
    })
    .createTable('categorias_servicos', table => {
      table.increments('id').primary()
      table.string('nome').notNullable()
    })
    .createTable('pessoas_fisicas', table => {
      table.uuid('uuid').primary()
      table.string('nome').notNullable()
      table.string('apelido')
      table.string('email').unique()
    })
    .createTable('estabelecimentos', table => {
      table.uuid('uuid').primary()
      table.string('nome').notNullable().unique()
      table.string('endereco').notNullable()
      table.string('telefone').notNullable()
      table.string('horario').notNullable()
      table.string('cidade').notNullable()
      table.string('coordenadas')
      table.string('descricao')
      table.uuid('pessoa_fisica_uuid')
      table
        .foreign('pessoa_fisica_uuid')
        .references('uuid')
        .inTable('pessoas_fisicas')
        .onDelete('CASCADE')
      table.integer('categoria_estabelecimento_id').unsigned
      table
        .foreign('categoria_estabelecimento_id')
        .references('id')
        .inTable('categorias_estabelecimentos')
        .onDelete('CASCADE')
    })
    .createTable('items', table => {
      table.uuid('estabelecimento_uuid')
      table
        .foreign('estabelecimento_uuid')
        .references('uuid')
        .inTable('estabelecimentos')
        .onDelete('CASCADE')
      table.integer('categoria_produto_id').unsigned
      table
        .foreign('categoria_produto_id')
        .references('id')
        .inTable('categorias_produtos')
        .onDelete('CASCADE')
      table
        .specificType('coordinates', 'POINT')
        .defaultTo(knex.raw('POINT (0.0, 0.0)'))
      table.string('nome').notNullable()
      table.float('preco').notNullable()
      table.string('descricao').notNullable()
    })

    .createTable('servicos', table => {
      table.uuid('uuid').primary()
      table.string('telefone')
      table.string('nome').notNullable()
      table.string('horario_atendimento')
      table.string('descricao')
      table.integer('categoria_servico_id')
      table
        .foreign('categoria_servico_id')
        .references('id')
        .inTable('categorias_servicos')
        .onDelete('CASCADE')
      table.uuid('pessoa_fisica_uuid')
      table
        .foreign('pessoa_fisica_uuid')
        .references('uuid')
        .inTable('pessoas_fisicas')
        .onDelete('CASCADE')
    })

export const down = knex =>
  knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('roles')
    .dropTableIfExists('items')
    .dropTableIfExists('estabelecimentos')
    .dropTableIfExists('servicos')
    .dropTableIfExists('pessoas_fisicas')
    .dropTableIfExists('categorias_estabelecimentos')
    .dropTableIfExists('categorias_produtos')
    .dropTableIfExists('categorias_servicos')
