const { Router } = require("express");
const db = require('./db')
const jwt = require('./token')

const router = Router()

router.post('/sign-up', async (req, res) => {
  const { fname, lname, password, email } = req.body
  const {rows } = await db.query(`
    INSERT INTO users (email, fname, lname, password) VALUES ('${email}', '${fname}', '${lname}', '${password}') RETURNING *
  `)
  res.send({
    token: jwt.sign(rows[0].id)
  })
})

router.post('/sign-in', async (req, res) => {
  const { rows } = await db.query(`
    SELECT id, email, password
    FROM users
    WHERE email = '${req.body.email}'
  `)
  if(!rows.length) return res.sendStatus(404)

  if(rows[0].password === req.body.password) {
    res.send({
      token: jwt.sign(rows[0].id)
    })
  }
})

router.get('/me', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]
  const payload = jwt.validate(token)
  const {rows} = await db.query(`
    SELECT fname, lname
    FROM users
    WHERE id = ${payload}
  `)
  res.send(
    ...rows
  )
})

module.exports = router