import express from 'express';
import { BookController } from './controller/book.controller';
import { UserController } from './controller/user.controller';
import { CategoryController } from './controller/category.controller';
import { checkUser } from './protect-routes';

export function getRoutes() {
    const router = express.Router();

    const bookController = new BookController();
    router.get('/books', bookController.getAll);
    router.get('/books/:id', bookController.getOne);
    router.post('/books', checkUser, bookController.create);
    router.put('/books', checkUser, bookController.update);
    router.delete('/books/:id', checkUser, bookController.delete);
    router.get('/books/available', bookController.getAvailableBooks);
    router.post('/books/borrow', bookController.borrowBook);
    router.post('/books/return', bookController.returnBook);

    const userController = new UserController();
    router.get('/users', userController.getAll);
    router.get('/users/:id', userController.getOne);
    router.post('/users', userController.create);
    router.put('/users', checkUser, userController.update);
    router.delete('/users/:id', checkUser, userController.delete);
    router.post('/users/login', userController.login);

    const categoryController = new CategoryController();
    router.get('/categories', categoryController.getAll);
    router.get('/categories/:id', categoryController.getOne);
    router.post('/categories', checkUser, categoryController.create);
    router.put('/categories', checkUser, categoryController.update);
    router.delete('/categories/:id', checkUser, categoryController.delete);

    return router;
}
