const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static (path.join(__dirname, 'public' )));
app.get('/', (req, res) => {
res.render("index");
})
app.get('/read', (req, res) => {
res.render("read");
})
åpp.post('/create', (req, res) => {
})
app.listen(3000);