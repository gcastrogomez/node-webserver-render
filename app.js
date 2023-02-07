import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from 'express';
import * as url from 'url';
import hbs from 'hbs';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();
const port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// Usar carpeta de contenido estático
app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Gonzalo Castro',
    titulo: 'Web server'
  });
});

app.get('/home', (req, res) => {
  res.render('home', {
    nombre: 'Gonzalo Castro',
    titulo: 'Web server'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Gonzalo Castro',
    titulo: 'Web server'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Gonzalo Castro',
    titulo: 'Web server'
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname+'/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
