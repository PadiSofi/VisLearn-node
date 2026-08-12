import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'VisLearn' }))
router.get('/iniciosesion', (req, res) => res.render('iniciosesion', { title: 'Inicio Sesión|VisLearn' }))
router.get('/registro', (req, res) => res.render('registro', { title: 'Registro|VisLearn' }))
router.get('/contacto', (req, res) => res.render('contacto', { title: 'Contacto|VisLearn' }))
router.get('/nosotros', (req, res) => res.render('nosotros', { title: 'Nosotros|VisLearn' }))
router.get('/perfil', (req, res) => res.render('perfil', { title: 'Perfil|VisLearn' }))
router.get('/documentos', (req, res) => res.render('documentos', { title: 'Documento|VisLearn' }))

export default router