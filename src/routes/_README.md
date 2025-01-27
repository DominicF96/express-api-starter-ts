# Routes
- **Purpose**: Define the HTTP method (e.g., GET, POST, PUT, DELETE) and the corresponding URL paths for your application.
- **Role**:
   - Assigns specific HTTP requests to the appropriate controller function.
   - Organizes the application by grouping related routes (e.g., all /users routes in one file).
- Focus:
   - Routing logic, not business or data-processing logic.
   - Cleanly delegating requests to the corresponding controller.

```javascript
// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes and map them to controller functions
router.get('/:id', userController.getUser);       // GET /users/:id
router.post('/', userController.createUser);      // POST /users
router.put('/:id', userController.updateUser);    // PUT /users/:id
router.delete('/:id', userController.deleteUser); // DELETE /users/:id

module.exports = router;
```