/**
 * @swagger
 * tags:
 *   name: User
 *   description: This is the Users API
 * /auth/signup:
 *   post:
 *     summary: SignUp user 
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               Fullname:
 *                 type: string
 *               age:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               fullname: "Mirindi Saidi"
 *               age: "23"
 *               email: "mirindisaidi@mail.com"
 *               password: "Password@1"
 *     responses:
 *       200:
 *         description: SignUp Successfull.
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
 * /auth/login:
 *   post:
 *     summary: Login a user 
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: "mirindisaidi@mail.com"
 *               password: "Password@1"
 *     responses:
 *       200:
 *         description: Login Successfull.
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
 * /auth:
 *   get:
 *     summary: Get all signup 
 *     tags: [User]
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
 */

const router=require("express").Router();
const authController=require("../controllers/authController");
const validation=require("../middlewares/validation");
const isAdmin=require("../middlewares/isAdmin");
const verifyToken =require("../middlewares/verifyToken");
router.post("/signup",validation,authController.creatAccount);
router.post("/login",authController.Login);
router.put("/:id",authController.update);
router.get("/",verifyToken,isAdmin,authController.DisplaySignup);
module.exports =router;