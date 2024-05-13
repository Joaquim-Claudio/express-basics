import { getTodos } from '../controllers/filmeController.js';

import {Router} from 'express';
const router = Router();

router.get('/', getTodos);

router.get('/:id', function(req, res) {
    const id = req.params.id;
    res.send(`Retorna o filme com id=${id}`);
});

router.get('/titulo/:titulo', function(req, res) {
    const titulo = req.params.titulo;
    res.send(`Retorna o filme com título=${titulo}`);
});

router.post('/', function(req, res) {
    const {titulo, descricao, duracao} = req.body;
    res.send('Insere na base de dados.');
});

export default router;