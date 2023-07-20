const express = require('express')
const knex = require('knex')



app.get('/', (res, req) => {
    db.select('*').from('users').then(response => {
        res.json(response)
    })

})




app.post('/register', (req, res) => {
    const { email, name, password } = req.body
    db('users').returning('*').insert({
        email: email,
        name: name,
        joined: new Date()
    }).then(response => {
        if (response.length) {
            res.json(response[0])
        } else {
            res.status(400).json("You couldn't register")
        }
    })
        .catch(err => { res.status(400).json('invalid user') })
})

app.get('/profile:id', (req, res) => {
    const { id } = req.params
    db.select('*')
        .from('users').
        where({ id })
        .then(user => {
            if (user.length) {
                res.json(user[0])
            } else {
                res.status(400).json('invalid user')
            }
        })
        .catch(err => { res.status(400).json('invalid user') })
})
app.put('/entries:id', (req, res) => {
    const { id } = req.params
    db('users')
        .where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0])
        })
        .catch(err => { res.status(400).json('invalid id') })
})

app.post('/sign in',(req,res)={

})
