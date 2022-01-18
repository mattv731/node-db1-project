const router = require('express').Router()
const Accounts = require('./accounts-model')
const {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId
} = require('./accounts-middleware')

router.get('/', async(req, res, next) => {
  try {
    const data = await Accounts.getAll()
    res.json(data)
    }
  catch (err) {
    next()
  }
  
})

router.get('/:id', checkAccountId, async(req, res, next) => {
  try {
    const data =  await Accounts.getById(req.params.id)
    res.json(data)
  }
  catch (err) {
    next()
  }
})

router.post('/', checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  try {
    const data = await Accounts.create(req.body)
    res.json(data)
    console.log(data)
  }
  catch (err) {
    console.log('error')
    next(err)
  }
})

router.put('/:id', checkAccountId, checkAccountPayload, async (req, res, next) => {
  try {
    const data = await Accounts.updateById(req.params.id, req.body)
    res.json(data)
  }
  catch (err) {
    next()
  }
});

router.delete('/:id', checkAccountId, async (req, res, next) => {
  try {
    const data = await Accounts.deleteById(req.params.id)
    res.json(data)
  }
  catch(err) {
    next()
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
