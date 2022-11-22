import { Request, Response } from 'express';

import Category from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
    const {icon, name} = req.body;

    try {
        const category = await Category.create({icon, name});

        return res.status(201).json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json('Erro ao criar categoria');
    }
}
