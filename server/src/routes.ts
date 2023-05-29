import express from 'express';
import { BookController } from './controller/book.controller';
import { UserController } from './controller/user.controller';
import { CategoryController } from './controller/category.controller';

export function getRoutes() {
    const router = express.Router();

    const bookController = new BookController();
    router.get('/books', bookController.getAll);
    router.get('/books/:id', bookController.getOne);
    router.post('/books', bookController.create);
    router.put('/books', bookController.update);
    router.delete('/books/:id', bookController.delete);
   // router.getAvailableBooks('/books/available', bookController.getAvailableBooks);
   // router.borrowBook('/books/borrow', bookController.borrowBook);
    // router.returnBook('/books/return', bookController.returnBook);

    const userController = new UserController();
    router.get('/users', userController.getAll);
    router.get('/users/:id', userController.getOne);
    router.post('/users', userController.create);
    router.put('/users', userController.update);
    router.delete('/users/:id', userController.delete);

    const categoryController = new CategoryController();
    router.get('/categories', categoryController.getAll);
    router.get('/categories/:id', categoryController.getOne);
    router.post('/categories', categoryController.create);
    router.put('/categories', categoryController.update);
    router.delete('/categories/:id', categoryController.delete);

    return router;
}
