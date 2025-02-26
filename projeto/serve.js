const express = require ('express');
const app = express();
const port = 3000;

app.use(express.json());
// Rota teste
app.get('/', (req,res) => {
    res.send({ message: 'API Funcionando'});
});

// Rota para listar itens
let itens = ["Item 1", "Item 2", "Item 3"];
app.get('/itens', (req, res) => {
    res.json(itens);
});
// Rota para adicionar no item
app.post('/itens', (req,res) => {
    const { nome } = req.body;
    if(!nome){
        return res.status(400).json({ error: 'Nome é obrigatório' });
    }
    itens.push(nome);
    return res.status(201).json({message: 'Item Adicionado com sucesso!', itens });
} );
// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});