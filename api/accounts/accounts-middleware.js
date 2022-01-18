const Accounts = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body
  console.log(!!name, !!budget)
  const text = name.trim()
  if (!parseInt(budget)) {
    res.status(400).json({ message: "budget of account must be a number" })
  } else if(!!name === false || !!budget === false) {
    res.status(400).json({ message: "name and budget are required" })
  } else if (text.length < 3 || text.length > 100) {
    res.status(400).json({ message: "name of account must be between 3 and 100" })
  } else if (budget > 1000000 || budget < 0) {
    res.status(400).json({ message: "budget of account is too large or too small" })
  } else {
    req.body.name.trim()
    next()
  }
}

exports.checkAccountNameUnique = async (req, res, next) => {
 const name = req.body.name.trim()
 const get = await Accounts.getAll()
 get.forEach(account => {
   if (account.name.trim() === name){
     return res.status(400).json({ message: "that name is taken" })
   }
   else {next()}
 })
}

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Accounts.getById(req.params.id)
    if(!account) {
      res.status(404).json({ message: "account not found" })
    }
    else {next()}
  } catch {
    next()
  }
}
