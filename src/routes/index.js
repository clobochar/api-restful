const router = require('express').Router()

const ProductController = require ('../controllers/products')

/*Verbos HTTP
GET - obter dados
POST - enviar/receber dados
PUT - atualizar dados
DELETE - remover dados
*/

router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)

module.exports = router