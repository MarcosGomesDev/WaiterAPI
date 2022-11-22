import { Request, Response } from 'express';

import Product from '../../models/Product';

export async function listProducts(req: Request, res: Response) {
    try {
        const products = await Product.find();

        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json('Erro ao retornar os produtos');
    }
}
