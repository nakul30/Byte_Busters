module.exports.index = function( req , res ){
    // console.log(req.cookies) ; 
    res.render('index' , {
        title : "doc_converter"
    })
}
