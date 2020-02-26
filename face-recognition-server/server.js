const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcryptjs');

const root = require('./controller/root')
const register = require('./controller/register');
const signin = require('./controller/signin');
const profile = require('./controller/profile');
const image = require('./controller/image');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '123456',
        database: 'smartbrain'
    }
})


const app = express();


app.use(bodyParser.json());
app.use(cors());


//generate random user id
const generateId = () => {
    return Math.floor(Math.random() * Math.pow(10, 3) + Math.pow(10, 3)).toString().slice(-3);
}


app.get('/', (req, res) => { root.handleRoot(req, res, db) })
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfile(req, res, db) })
app.put('/image', (req, res) => { image.handleImage(req, res, db) });


app.listen(3000, () => {
    console.log('Server is up');
})



/*
/ root 
  signin --> POST = success/fail
  register --> POST = new user
  profile/:userid --> GET = user
  image --> PUT --> user
  rank

*/