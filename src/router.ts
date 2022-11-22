import path from 'node:path';

import {Router} from 'express';

import multer from 'multer';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});

// LIST CATEGORIES
router.get('/categories', listCategories);

// CREATE CATEGORY
router.post('/categories', createCategory);

// LIST PRODUCTS
router.get('/products', listProducts);

// CREATE PRODUCT
router.post('/products', upload.single('image'), createProduct);

// GET PRODUCTS BY CATEGORY
router.get('/categories/:categoryId/products', listProductsByCategory);

// LIST ORDERS
router.get('/orders', listOrders);

// CREATE ORDER
router.post('/orders', createOrder);

// CHANGE ORDER STATUS
router.patch('/orders/:orderId', changeOrderStatus);

// DELETE/CANCEL ORDER
router.delete('/orders/:orderId', cancelOrder);
