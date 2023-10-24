


//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact = (req, res)=>{
    res.status(200).json({message: "Get all contacts"});
}


//@desc Create a contact
//@route POST /api/contacts
//@access public
const createContact = (req, res)=>{
    console.log("The request body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    res.status(201).json({message: "Created contact"});
}



//@desc Delete a contact
//@route DELETE /api/contacts
//@access public
const deleteContact = (req, res)=>{
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
}

//@desc Get a contact
//@route GET /api/contacts/:id
//@access public
const getAContact = (req, res)=>{
    res.status(200).json({message:`Get a contact for ${req.params.id}`});
}

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res)=>{
    res.status(200).json({message: `Update contact for ${req.params.id}`});
}


module.exports = {getContact, createContact, getAContact, deleteContact, updateContact};