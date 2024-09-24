const express = require('express');
const morgan = require('morgan')
const { success } = require('./helper.js')
let livres = require('./mock-livre')


const app = express();
const port = 4000;

app.use(morgan('dev'))

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello again, express!');
});

app.get('/api/hello/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const livre = livres.find(livre => livre.id === id)
  const message = 'Un livre à été bien trouvez.'
  res.json(success(message, livre))
})

// Affichage tous les listes des livres en format JSON 
app.get('/api/hello', (req,res) => {
  const message = 'La liste des livres été bien récupérer.'
  res.json(success(message, livres))
})

// La nouveau point de terminaison (ENDPOINT) , affichant les nombres totals des livres 
{/*app.get('/api/hello' , (req, res) => {
  res.send(`Il y a ${livres.length} livres dans notre stock des livres.`)
})*/}

app.listen(port, () => {
  console.log(`Serveur à l'écoute sur http://localhost:${port}`);
});
