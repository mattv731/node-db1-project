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

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
