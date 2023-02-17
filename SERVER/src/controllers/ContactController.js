const contact =require("../models/Contacts");

class ContactCtroller{
    static async SendMessage(req,res){
        const send = new contact({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            message: req.body.message,
        })
        await send.save()
        res.send(
            res.status(201).json({
            status:201,
            message:"Successfull Send",
            data:send
        }) )
    }

    static async DisplayContact(req,res){
        const ContactList = await contact.find()
        res.send(
            res.status(200).json({
               status:200,
                message:"List of Contact",
                data:ContactList
            })  
        )
    }
    }

module.exports=ContactCtroller;