const Itinerary = require('../models/Itinerary')


const commentController={
    addComment:(req,res) =>{
        const comment = req.body.value
        const id = req.body.id
        const user = req.user
        Itinerary.findOneAndUpdate({_id:id},{$push:{comments:{comment:comment,userName:user.userName,urlPic:user.urlPic}}},{new: true})
        .then(comment =>{
            return res.json({success:true, respuesta: comment})
        })
        .catch(err =>{
            return res.json({success: false, error: err})
        }) 
    },
    modifComment:(req, res) =>{
        const idComment = req.body.idComment
        const value = req.body.value
        
        Itinerary.findOneAndUpdate({_id:idComment},{comments:{coment:value}},{new:true})
        .then(comment =>{
            return res.json({success:true, respuesta: comment})
        })
        .catch(err =>{
            return res.json({success: false, error: err})
        }) 
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


 