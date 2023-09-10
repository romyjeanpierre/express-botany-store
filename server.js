const express = require('express'); 

const app = express(); 
const PORT = 3000; 

//data
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"];

//*Routes 
app.get('/', (req, res) => {
    res.send('Hello'); 
});

//*return all plants
app.get('/plants', (req, res) => {
    //res.send(plants);
    res.status(200).json(plants); 
}); 

app.get('/awesome', (req, res) => { //this will never be reached
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
  });


//* returns plant by the index
app.get('/:indexOfPlantsArray', (req, res) => {
    //console.log(req.params.indexOfPlantsArray)
    if (plants[req.params.indexOfPlantsArray]) {
        res.send(plants[req.params.indexOfPlantsArray]);    
    } else {
        res.status(404).send('Plant not found in index: ' + req.params.indexOfPlantsArray);
    }

});

//* routes with two params (firstName and lastName)
app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log(req.params);
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});

app.get('/howdy/:firstName', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`hello ${req.query.title}, ${req.params.firstName}`);
}); 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 