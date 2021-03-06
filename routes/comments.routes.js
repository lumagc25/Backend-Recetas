//Importamos express y guardamos la funcion express.Router() en una variable
const router = require('express').Router();

//Importamos las funciones del controlador de comment
const { getAllComments, getComment, postComment, deleteComment, updateComment, getCommentsByRecipe} = require("../controllers/comments.controller");

//Definimos el metodo, la ruta de entrada y la función del controlador que se encargará de efectuar la lógica
router.get("/", getAllComments);
router.get("/:id", getComment)
router.get("/recipes/:id", getCommentsByRecipe)
router.post('/create', postComment)


//el patch busca y modifica
router.put('/:id', updateComment)
router.delete('/:id', deleteComment)

module.exports = router;