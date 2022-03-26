const { response } = require("express");

const buscar=(req,res=response)=>{
  const {collection,termino}=req.params;

  return res.status(200).json({collection,termino})
}

module.exports ={buscar}