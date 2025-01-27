# Models
- Define the **schema** (or structure) of your data.
- Provide methods for querying, creating, updating, or deleting data.
- Act as the **single source of truth** for your application's data layer.
- Encapsulate database logic, keeping it separate from the controllers and services.

```javascript
// models/userModel.js
const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Add custom methods if needed
userSchema.methods.isValidPassword = function (password) {
  // Compare passwords (this is just an example; use bcrypt or a similar library in practice)
  return password === this.password;
};

// Export the model
module.exports = mongoose.model('User', userSchema);
```