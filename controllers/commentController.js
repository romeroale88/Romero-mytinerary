const Itinerary = require('../models/Itinerary')


const commentController={
    addComment:(req,res) =>{
        const comment = req.body.value
        const id = req.body.id
        const username = req.body.username
        const url = req.body.url
        Itinerary.findOneAndUpdate({_id:id},{$push:{comments:{comment:comment,userName:username,urlPic:url}}},{new: true})
        .then(comment =>{
            return res.json({success:true, respuesta: comment})
        })
        .catch(err =>{
            return res.json({success: false, error: err})
        }) 
    },
    modifComment:(req, res) =>{
        // const idComment = req.body.idComment
        // const id = req.body.id
        
        // Itinerary.findOneAndUpdate({_id:id},{comments:{_id:idComment}},{new:true})
        // .then(comment =>{
        //     return res.json({success:true, respuesta: comment})
        // })
        // .catch(err =>{
        //     return res.json({success: false, error: err})
        // }) 
    },
    deleteComment:(req, res) =>{
        const idcomment = req.body.idComment
        const id = req.body.id
        
        Itinerary.findOneAndUpdate({_id:id},{$pull:{comments:{_id:idcomment}}},{new: true})
        .then(comment =>{
            return res.json({success:true, respuesta: comment})
        })
        .catch(err =>{
            return res.json({success: false, error: err})
        })
    }
}

module.exports = commentController


 