import { Request, Response } from 'express';

import Order from '../../models/Order';

export async function cancelOrder(req: Request, res: Response) {
    const {orderId} = req.params;

    try {
        await Order.findByIdAndDelete(orderId);

        return res.status(201).json('Pedido cancelado com sucesso!');
    } catch (error) {
        console.log(error);
        res.status(500).json('Erro ao cancelar pedido');
    }
}
