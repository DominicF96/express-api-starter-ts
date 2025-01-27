# Service

- **Purpose**: Encapsulates business logic and interacts with external dependencies like databases, APIs, or other services.
- **Role**: Provides reusable, independent functions that the controller or other parts of the app can use.
- **Focus**:
   - Processing data.
   - Implementing core application logic.
   - Handling interactions with the database or third-party services.

```javascript
// services/userService.js
const User = require('../models/userModel');

exports.findUserById = async (id) => {
  return await User.findById(id); // Database interaction
};

exports.createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

```