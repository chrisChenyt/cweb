const auth = require('../controllers/user.js');
const koaRouter = require( 'koa-router');
const router = koaRouter();

router.post('/login', auth.userLogin);
router.post('/register', auth.createUser);

module.exports = router;