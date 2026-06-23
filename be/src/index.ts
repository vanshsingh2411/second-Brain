import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'

const app = express()

import Authrouter from './routes/auth.js';
import brainrouter from './routes/brain.js';
import Contentrouter from './routes/content.js';

app.use(express.json());
app.use(cors());

app.use('/api/v1/auth',    Authrouter ) ;
app.use('/api/v1/content', Contentrouter ) ;
app.use('/api/v1/brain',   brainrouter );


 async function main() {
  
  await  mongoose.connect('mongodb+srv://sarvagyasingh03_db_user:2b9A0cvHNKFUMoUB@cluster0.8tq83a2.mongodb.net/?appName=Cluster0').then( () => { console.log('connected to db') })   

  app.listen(3000)

  console.log('app running on port 3000')

 }

 main()






 // hhe6chrvbb