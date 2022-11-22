import { Request, Response } from 'express';

import Category from '../../models/Category';

export async function listCategories(req: Request, res: Response) {
    try {
        const categories = await Category.find();

        return res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Erro ao retornar as categorias');
    }
}
