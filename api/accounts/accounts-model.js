const { get } = require('express/lib/response')
const db = require('../../data/db-config')

const getAll = () => {
  return db('accounts')
}

const getById = id => {
  return db('accounts').where('id', id).first()
}

async function create ({name, budget}) {
  const [id] = await db('accounts').insert({name, budget});
  const body = await getById(id)
  return body
}

const updateById = async (id, {name, budget}) => {
  await db('accounts').where('id', id).update({name, budget})
  const body = await getById(id)
  return body
}

const deleteById = async (id) => {
  const deleted = await getById(id)
  await db('accounts').where('id', id).del()
  return(deleted)
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
