const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express')

const app = express()
const port=process.env.PORT || 5000
const cors=require('cors')

//midelware
app.use(cors());
app.use(express.json());



app.get('/', (req, res) =>{
  res.send('IM ASWIN')
})


//mern-book-store

//mangodb


// const uri = "mongodb+srv://mern-book-store:hellowworld@cluster0.hexveoy.mongodb.net/?retryWrites=true&w=majority&ssl=true";


const uri = "mongodb+srv://mern-book-store:123@cluster0.hexveoy.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection of documents
    const bookCollections=client.db("BookInventory").collection("Books");

    //insert books into the db : post method

    app.post("/upload-book", async(req,res)=>{
      const data = req.body;
      const result = await bookCollections.insertOne(data)
      res.send(result)
     })
    
    //get the books from the db : get method

  //  app.get("/get-books", async(req,res)=>{
  //   const books= bookCollections.find();
  //   const result = await books.toArray();
  //   res.send(result);

  //  })

    //update books in the db : Patch method

    app.patch("/books/:id", async(req,res)=>{
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = {_id : new ObjectId(id)};
      const updateDoc = {
        $set: {
          ...updateBookData
          },
      }
      const options = {upsert :true};
      //update
      const result = await bookCollections.updateOne(filter, updateDoc, options);
      res.send(result);
      

    })

    //delete books in the db : Delete method

    app.delete("/books/:id",async(req,res)=> {
      const id = req.params.id;
      const filter = {_id : new ObjectId(id)};
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    })


    //Find By Category in the db  : get method

    app.get("/get-books", async(req,res)=>{
     let query = {};
     if(req.query?.categories){
      query={categories:req.query.categories}
     }
     const result = await bookCollections.find(query).toArray();
     res.send(result)
    })

    //to get a single book : get method

    app.get("/book/:id",async(req,res)=>{
      const id =req.params.id;
      const filter = {_id:new ObjectId(id)};
      const result= await bookCollections.findOne(filter);
      res.send(result);

    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);




app.listen(port, ()=>{
    console.log(`Example app listenting on port ${port}`)
})