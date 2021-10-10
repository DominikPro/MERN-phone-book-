import experess from 'express';
const router = experess.Router();
import { addContact, getContacts } from "../controllers/contacts.js"

//http://localhost:5000/contacts
router.get('/', getContacts);
router.post("/", addContact);



export default router;