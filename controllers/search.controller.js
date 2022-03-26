const { response } = require("express");
const { User } = require("../models");
const {ObjectId}=require("mongoose").Types
const collectionsAvailable=[
  'categorias',
  'productos',
  'roles',
  'users',
]


const buscarUsuarios = async(termino="", res=response) => {
  const esMongoId=ObjectId.isValid(termino)// retorna verdadero si es un mondo id

  if(esMongoId){
    const user = await User.findById(termino)

    return res.status(200).json({
      results: (user)?[user] :[]
    })
  }
}


const buscar=async(req,res=response)=>{
  const {collection,termino}=req.params;

  if(!collectionsAvailable.includes(collection)){
    return res.status(401).json({ msg: `La conecciones permitidas son ${collectionsAvailable}`})
  }

  switch (collection) {
    case 'categorias':

      break;

    case 'productos':

      break;

    case 'users':
      buscarUsuarios(termino,res)
      break;
    default:
        res.status(404).json({msg: `Esta busqueda no esta permitida`})
      break;
  }

}

module.exports ={buscar}