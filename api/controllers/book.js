import Book from "../models/Book.js";

export const createBook = async(req, res, next)=>{
    const newBook = new Book(req.body)

    try{
        const savedBook = await newBook.save()
        res.status(200).json(savedBook)

    } catch(err){  
        next(err);
    }
}