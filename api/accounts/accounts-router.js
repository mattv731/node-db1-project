const router = require('express').Router()
const Accounts = require('./accounts-model')

router.get('/', async(req, res, next) => {
  try {
    const data = await Accounts.getAll()
    res.json(data)
    }
  catch (err) {
    console.log(err)
  }
  
})

router.get('/:id', async(req, res, next) => {
  try{
    const data = await Accounts.getById(req.params.id)
    res.json(data)
  }
  catch (err) {
    console.log(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const data = await Accounts.create(req.body)
    res.json(data)
  }
  catch (err) {
    console.log(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const data = await Accounts.updateById(req.params.id, req.body)
    res.json(data)
  }
  catch (err) {
    console.log(err)
  }
});

router.delete('/:id', (req, res, next) => {
  try {
    const data = Accounts.deleteById(req.params.id)
    res.json(data)
  }
  catch(err) {
    console.log(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
