const mongoose=require('mongoose')
const Article=require('../models/Article')

export const Article =mongoose.model("Article",ArticleSchema)

export const addArticle = (req,res)=>{
	const newArticle = new Article();
	newArticle.save((err,trainer)=>{
		
	})
}