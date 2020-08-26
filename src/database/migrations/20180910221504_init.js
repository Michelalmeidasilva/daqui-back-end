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
    .createTable('categorias_estabelecimento', table => {
      table.increments('id').primary()
      table.string('nome').notNullable()
    })
    .createTable('categorias_produto', table => {
      table.increments('id').primary()
      table.string('nome').notNullable()
    })
    .createTable('proprietarios', table => {
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
      table.uuid('proprietario_uuid')
      table
        .foreign('proprietario_uuid')
        .references('uuid')
        .inTable('proprietarios')
        .onDelete('CASCADE')
      table.integer('categoria_estabelecimento_id').unsigned
      table
        .foreign('categoria_estabelecimento_id')
        .references('id')
        .inTable('categorias_estabelecimento')
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
        .inTable('categorias_produto')
        .onDelete('CASCADE')
      table.string('nome').notNullable()
      table.float('preco').notNullable()
      table.string('descricao').notNullable()
    })

export const down = knex =>
  knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('roles')
    .dropTableIfExists('items')
    .dropTableIfExists('estabelecimentos')
    .dropTableIfExists('proprietarios')
    .dropTableIfExists('categorias_estabelecimento')
    .dropTableIfExists('categorias_produto')
