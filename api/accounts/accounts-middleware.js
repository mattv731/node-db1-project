const Accounts = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body
  const text = name.trim()
  const num = parseInt(budget)
  if(!name || !budget) {
    res.status(400).json({
      message: "name and budget are required"
    })
  } else if (text < 3 || text > 100) {
    res.status(400).json({ message: "name of account must be between 3 and 100" })
  } else if (!num) {
    res.status(400).json({ message: "budget of account must be a number" })
  } else if (num > 1000000 || num < 0) {
    res.status(400).json({ message: "budget of account is too large or too small" })
  } else {
    req.body.name = text
    req.body.budget = num
    next()
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
 next()
}

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Accounts.getById(req.params.id)
    if(!account) {
      res.status(404).json({ message: "account not found" })
    }
    else {next()}
  } catch(err) {
    res.status(500).json({message: "account not found"})
  }
}
