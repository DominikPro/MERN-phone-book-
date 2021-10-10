import mongoose from 'mongoose';


const contactSchema = mongoose.Schema({
    firstName: String,
    surname: String,
    phoneNumber: Number,
    note: String
});

const Contact = mongoose.model("ContactSchema", contactSchema);

export default Contact;