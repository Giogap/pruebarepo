// importar modelo
import BlogModel from "../models/BlogModel.js";

// metodos crud

// mostrar registros
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll()
    res.json(blogs)
  } catch (error) {
    res.json( {message: error.message} )
  }
}

// mostrar un registro

