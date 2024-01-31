const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// In-memory "database"
let items = [
  { id: 1, Abdi: 'coding' },
  { id: 2, Hassan: 'Web App' },
  { id: 3, Nurdin: 'Mobile App' },
  { id: 4, Ahmed: 'Android' },
  { id: 5, Hunein: 'Ethical Hacker' }


];

app.use(bodyParser.json());

// Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Get a specific item by ID
app.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find(item => item.id === itemId);

  if (!item) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }

  res.json(item);
});

// Create a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  newItem.id = items.length + 1;
  items.push(newItem);

  res.status(201).json(newItem);
});

// Update an item by ID
app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;

  const index = items.findIndex(item => item.id === itemId);

  if (index === -1) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }

  items[index] = { ...items[index], ...updatedItem };

  res.json(items[index]);
});

// Delete an item by ID
app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  items = items.filter(item => item.id !== itemId);

  res.json({ message: 'Item deleted successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


//CREATE AN ITEM 
// curl -X POST -H "Content-Type: application/json" -d '{"name": "New Item"}'
//  http://localhost:3000/items


// GET ALL ITEMS curl 
// http://localhost:3000/items

// UPDATE item
// curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Item"}' http://localhost:3000/items/1


// DELETE AN item
// curl -X DELETE http://localhost:3000/items/1


// Have Used an in-built Memory to perform the crude operation and Postman to test my APIs 
