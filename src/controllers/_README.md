# Controller

- **Purpose**: Handles incoming HTTP requests and outgoing HTTP responses. It's the entry point for a specific route or endpoint in your application.
- **Role**: Acts as the middleman between the client and your business logic or service layer.
- **Focus**:
   - Parsing and validating request data.
   - Sending responses (success, error, etc.).
   - Delegating heavy business logic or data processing to the service layer.

```javascript
// controllers/userController.js
const userService = require('../services/userService');

exports.getUser = async (req, res) => {
  try {
    const user = await userService.findUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
```