//   /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;

    // MongoClient.connect('mongodb+srv://12345:12345@cluster0.dclqwcf.mongodb.net/?retryWrites=true&w=majority');
    const client = await MongoClient.connect('mongodb+srv://12345:12345@cluster0.dclqwcf.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    // meetupsCollection.insertOne({ title, image, address, description });
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message: 'Meetup inserted!'});
  }
};

export default handler;

// API Routes. 
  // npm install mongodb


// Sending Http Requests To Our API Routes