const Recipe = require('../Models/recipe');

module.exports.fetch = (req,res,next)=>{
    // console.log("fetch");
    Recipe.find().then((recipes)=>{
        console.log("fetched",recipes);
        res.status(200).json({
            message:"successfully",
            recipes: recipes
        })
    }).catch(error=>{
        res.json({
            error:error
        })
    })
    
} 
module.exports.delete = (req,res,next)=>{
    console.log("inside delete controller");
    Recipe.deleteOne({_id:req.params.id}).then((response)=>{
        res.status(200).json({
            message:"successfully Delete"
        })
    }).catch(error=>{
        res.json({
            error:error
        })
    })
}
module.exports.edit = (req,res,next) =>{
    const recipe = new Recipe({
        title:req.body.title,
        description: req.body.description,
        imageUrl:req.body.imageUrl
    })
    Recipe.updateOne({_id:req.params.id},recipe).then(recipe=>{
        res.json({
            massage:"successfully update"
        })
    })
}
module.exports.save = (req,res,next)=>{
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.body.imageUrl);
    const recipe = new Recipe({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    })
    recipe.save().then((response)=>{
        res.status(200).json({
            message: "successfully save"
        })
    }).catch((error)=>{
        res.json({
            error:error
        })
    })
}

