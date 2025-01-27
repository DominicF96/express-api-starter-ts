import { Request, Response } from "express";
import { z } from "zod";
import UserService from "../services/user.service";

// Define the schema for user creation
const createUserSchema = z.object({
  roleId: z.string().nonempty("Role ID is required"),
});

class UserController {
  async createUser(req: Request, res: Response) {
    // Validate the request body
    const validation = createUserSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.errors });
    }

    const { roleId } = validation.data;
    const auth0Id = req.user.sub; // Use authenticated user's auth0Id
    try {
      const user = await UserService.createUser(auth0Id, roleId);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An error occurred" });
      }
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await UserService.getUserById(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An error occurred" });
      }
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An error occurred" });
      }
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const updates = req.body;
    try {
      const user = await UserService.updateUser(id, updates);
      res.json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An error occurred" });
      }
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await UserService.deleteUser(id);
      res.status(204).send();
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An error occurred" });
      }
    }
  }
}

export default new UserController();
