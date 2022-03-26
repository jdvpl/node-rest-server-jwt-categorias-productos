const { response } = require("express")
const {Categoria}=require("../models")

const createCategory = async(req,res=response)=>{
  const name = req.body.name.toUpperCase();

  const categoriaDb=await Categoria.findOne({name});
  if(categoriaDb){
    return res.status(400).json({msg: `La categoria ${name} ya existe.`})
  }
  // generar la data al guardar
  const data={
    name,
    user: req.user._id
  }
  try {
    const category=new Categoria(data);
    await category.save();
    return  res.status(200).json(category);
  } catch (error) {
    return res.status(500).json(error)
  }
  
}

module.exports = {createCategory}