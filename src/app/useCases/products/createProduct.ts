import { Request, Response } from 'express';

import Product from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
    const {name, description, price, category, ingredients } = req.body;
    const imagePath = req.file?.filename;

    try {
        await Product.create({
            name,
            description,
            price: Number(price),
            imagePath,
            category,
            ingredients: ingredients ? JSON.parse(ingredients) : [],
        });

        return res.status(201).json('Produto criado com sucesso!');
    } catch (error) {
        console.log(error);
        res.status(500).json('Erro ao criar produto');
    }
}
