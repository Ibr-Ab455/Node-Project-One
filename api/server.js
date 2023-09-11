// Initialize express app
import express from 'express'
import bodyParser from 'body-parser';
import { find, findById, insert, update, remove } from './users/model.js';


const app = express();
app.use(bodyParser.json());

// GET ALL USERS
app.get('/api/initializeUsers', async (req, res) => {
    const allUsers = await find();
    res.json(allUsers)
});

// GET USER BY ID
app.get('/api/initializeUsers/:id', async(req, res) => {
    const user = await findById(req.params.id);
    if(user){
     res.json(user);
    }else{
        res.status(404).json({message: "waxba ma helin wali"})
    }
});


// CREATE A NEW USER
app.post('/api/initializeUsers', async(req, res) => {
  const newUser = await insert(req.body);

  if(newUser){
    res.json(newUser)
  }else{
    res.status(404).json({ status: 400, message: "lama sameyn arday cusub"});
  }
});


// UPDATE A USER
app.put('/api/initializeUsers/upadte/:id', async (req, res) => {
    const updatedUser = await update(req.params.id, req.body);
    if(updatedUser){
     res.json(updatedUser);
    }else{
        res.status(404).json({ status: 404, message: "user was not update"});
    }
});


// DELETE A USER
app.delete('/api/initializeUsers/remove/:id', async (req, res) => {
    const deletUser = await remove(req.params.id);
    if(deletUser){
     res.json({ status: 200, message: `waa la tirtiray id ${req.params.id} userkas`});
    }else {
        res.json(400).json({ status: 400, message: "wali waa taganyahy"});
    }
})

app.listen(9000, () => console.log('waan bilabay barnajimka'));

// export default app
export default app;
