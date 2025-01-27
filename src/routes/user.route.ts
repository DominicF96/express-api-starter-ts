import { Router } from 'express';
import UserController from '../controllers/user.controller';
import isAuthenticatedUser from '../middlewares/auth-user';

const router = Router();

// Route for self-registration
router.post('/register', isAuthenticatedUser, UserController.createUser);

// Admin routes
// router.post('/users', isAdmin, UserController.createUser);
// router.get('/users/:id', isAdmin, UserController.getUserById);
// router.get('/users', isAdmin, UserController.getAllUsers);
// router.put('/users/:id', isAdmin, UserController.updateUser);
// router.delete('/users/:id', isAdmin, UserController.deleteUser);

export default router;
