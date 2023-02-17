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
 * tags:
 *   name: Blogs
 *   description: This is the blogs APiI
 * /blog:
 *   get:
 *     summary: Get all Blogs 
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: Blogs Have been Fetched.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *       500:
 *         description: Some server error
 *   post:
 *     summary: Add BLogsr 
 *     tags: [Blogs]
 *     parameters:
 *       - name: token
 *         in: header
 *         description: THis is the token to login
 *         type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content: 
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - image
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Blog Created Successfully.
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
 * /blog/{id}:
 *   delete:
 *     summary: delete blog
 *     parameters :
 *       - name: token
 *         in: header
 *         description: token to log in
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description : object id of blog
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: Blog deleted
 *         content:
 *           application/json:
 *             schema:
 *               type:  object
 *             properties:
 *               status:
 *                 type: integer
 *               message:
 *                 type: string
 *               data:
 *                 type: object
 *       404:
 *         description: Blog Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type:  object
 *   put:
 *     summary: Update a blog 
 *     tags: [Blogs]
 *     parameters :
 *       - name: token
 *         in: header
 *         description: token to log in
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description : id of blog
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blog Created 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *       406:
 *         description: A field is Empty
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *   get:
 *     summary: single blog
 *     parameters :
 *       - name: token
 *         in: header
 *         description: token to log in
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description : id of blog
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: Single Blog Retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Single Blog Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
const router=require("express").Router();
const BlogController=require("../controllers/BlogController");
const verifyToken =require("../middlewares/verifyToken");
const isAdmin=require("../middlewares/isAdmin");
const upload=require("../utils/multer")
router.post("/",verifyToken,isAdmin,upload.single("image"),BlogController.AddBlog);
router.delete("/:id",verifyToken,isAdmin,BlogController.deletBlog);
router.get("/",BlogController.findData);
router.put("/:id",verifyToken,isAdmin,upload.single("image"),BlogController.updateBlog);
router.get("/:id",verifyToken,isAdmin,BlogController.FindById);
module.exports =router;