import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRouts from "./routs/contacts.js"


//koniec na 23:00 https://www.youtube.com/watch?v=ngc9gnGgUdA&list=RDCMUCmXmlB4-HJytD7wek0Uo97A&index=1


const app = express();
app.use(cors());
app.use('/contacts', contactRouts) //http://localhost:5000/contacts
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))


const CONNECTION_URL = 'mongodb+srv://phonebook:phonebook1234@cluster0.nxw40.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
