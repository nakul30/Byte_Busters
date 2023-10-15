// module.exports.index = function( req , res ){ 
//     res.render('user_signin' , {
//         title:"Doc Converter"
//     })
// }
// indexcontroller.js

module.exports.index = function(req, res) {
    return res.render('converterpage',{
        title:"Covert It"
    });
};
