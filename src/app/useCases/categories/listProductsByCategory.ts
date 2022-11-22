import { Request, Response } from 'express';

import Product from '../../models/Product';

export async function listProductsByCategory(req: Request, res: Response) {
    const {categoryId} = req.params;

    try {
        const products = await Product.find().where('category').equals(categoryId);

        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json('Erro ao retornar os produtos');
    }
}
