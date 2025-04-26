import { Request, Response } from 'express';
import { User, IUser } from '../models/user';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    }
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
  } catch (error: any) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
};