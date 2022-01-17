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

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
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
