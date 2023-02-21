/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         finished:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 */
/**
 * @swagger
 * /contat:
 *   get:
 *     summary: Get all Contact 
 *     tags: [Contacts]
 *     parameters:
 *       - name: token
 *         in: header
 *         description: THis is the token to login
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Contact Have been Fetched.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 status:
 *                  type: integer
 *                 message:
 *                  type: string
 *                 data:
 *                  type: object
 *       500:
 *         description: Some server error
 *   post:
 *     summary: Send Message 
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - address
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               address:
 *                 type: string
 *               message:
 *                 type: string
 *           example:
 *               name: "mirindi saidi"
 *               email: "mirindisaidi19@gmail.com"
 *               address: "rubavu"
 *               message: "Do you know java?"
 *     responses:
 *       201:
 *         description: Message Send Successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 status:
 *                  type: integer
 *                 message:
 *                  type: string
 *                 data:
 *                  type: object
 *       500:
 *         description: Some server error
 */
const router=require("express").Router();
const verifyToken =require("../middlewares/verifyToken");
const isAdmin=require("../middlewares/isAdmin");
const Contactvalidation=require("../middlewares/contactValidation");
const contactController =require("../controllers/ContactController");
router.post("/",Contactvalidation,contactController.SendMessage);
router.get("/",verifyToken,isAdmin,contactController.DisplayContact);
module.exports=router;