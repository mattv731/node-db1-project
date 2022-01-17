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
    console.log(err)
  }
  
})

router.get('/:id', checkAccountId,  async(req, res, next) => {
  console.log(req.params.id)
  try{
    const data =  await Accounts.getById(req.params.id)
    res.json(data)
  }
  catch (err) {
    console.log(err)
  }
})

router.post('/', checkAccountPayload, async (req, res, next) => {
  try {
    const data = await Accounts.create(req.body)
    res.status(201).json(data)
  }
  catch (err) {
    next()
  }
})

router.put('/:id', checkAccountPayload, async (req, res, next) => {
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
