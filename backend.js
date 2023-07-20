const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');

const app = express();

app.use(bodyParser.json());

let database = {
    users: [
        {
            id: 123,
            name: 'andi',
            email: 'andigashi2005@gmail.com',
            password: 'alienilahet321',
            entries: 0,
            joined: new Date()

        },
        {
            id: 124,
            name: 'labi',
            email: 'labigashi2005@gmail.com',
            password: 'alienilahet321',
            entries: 0,
            joined: new Date()


        }
    ],
    login: [
        {
            id: 337,
            hash: '',
            email: 'andigashi2005@gmail.com'
        }
    ]
}
app.get('/', (req, res) => {
    res.json(database.users);
})

app.post('/signin', (req, res) => {

    bcrypt.compare(apples, hash, function (err, result) {
        console.log('first guess', res)
    });
    bcrypt.compare(cookies, hash, function (err, result) {
        console.log('second guess', res)
    });

    if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
        res.json('success')
    } else {
        res.status(400).json('Account invalid')
    }
})


app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, saltRounds, function (err, hash) {
        console.log(hash)
    });
    database.users.push(
        {
            id: 125,
            name: name,
            email: email,
            passwordd: password,
            entries: 0,
            joined: new Date()
        }

    )
    res.json(database.users[database.users.length() - 1])
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    for (let x of database.users) {
        if (id === x.id) {
            found = true
            res.json(x)
        }

    }
    if (!found) {
        res.json('invalid id')
    }
})
app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false
    for (let x of database.users) {
        if (id = x.id) {
            found = true
            x.entries++
            res.json(x.entries)
        }
        if (!found) {
            res.json('invalid id')
        }
    }
})

// bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
//     // Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
//     // result == true
// });
// bcrypt.compare(someOtherPlaintextPassword, hash, function (err, result) {
//     // result == false
// });

app.listen(3000, () => {
    console.log('I am listening bro')
})

.then(user=>{
    db2=db.select('*')from('users').then(user=>return user)
    found=false
    for(let x of db2){
        if(x===user){
            found=TRUE
            return res.json(x)
        }
    }
    if(!found){
        res.status(400).json('invalid id')
    }

})
update users set entries +=1 where id=id 

db('users').where(id,=,id).update({
    entries: entrires+1
})