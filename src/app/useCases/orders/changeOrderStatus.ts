import { Request, Response } from 'express';

import Order from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
    const { orderId } = req.params;
    const { status } = req.body;

    try {
        if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
            return res.status(400).json('Status inválido, o status deve ser algum desses 3: WAITING, IN_PRODUCTION, DONE');
        }

        await Order.findByIdAndUpdate(orderId, {status});

        return res.status(201).json('Status atualizado com sucesso!');
    } catch (error) {
        console.log(error);
        res.status(500).json('Erro ao alterar status do pedido');
    }
}
