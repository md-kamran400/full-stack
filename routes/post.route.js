const {Router} = require("express")
const {PostModel} = require("../models/post.model");
const PostRouter = Router();

PostRouter.post("/add", async(req, res)=>{
    try {
        let Post = await new PostModel(req.body)
        Post.save();
        res.status(200).json({msg: "Post added", addPost: Post})
    } catch (err) {
         res.status(400).json({error: err.message })
    }
});


PostRouter.get("/", async (req, res) => {
    try {
      const { category, sortBy } = req.query;
  
      const query = {};
      if (category) {
        query.category = category;
      }
  
      const sortOptions = {};
      if (sortBy) {
        sortOptions[sortBy] = 1; 
      }
  
      const Posts = await PostModel.find(query).sort(sortOptions).exec();
      res.status(200).json(Posts);
    } catch (err) {
      res.status(400).json({error: err.message });
    }
  });


  
  
  PostRouter.get("/getOneData/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const Post = await PostModel.findOne({ _id: id });
      res.status(200).json(Post);
    } catch (err) {
      res.status(400).json({ error: err.message  });
    }
  });



PostRouter.patch("/update/:id", async(req, res)=>{
    const {id} = req.params;
    try {
        let Post = await PostModel.findByIdAndUpdate({_id: id}, req.body);
        res.status(200).json({msg: "Post updated"})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
})


PostRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
      let Post = await PostModel.findByIdAndDelete(id);
      res.status(200).json({ msg: "Post deleted" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  module.exports = PostRouter