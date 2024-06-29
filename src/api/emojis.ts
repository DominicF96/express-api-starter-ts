import express from 'express';
const pool = require('../../db');

const router = express.Router();

type EmojiResponse = string[];

router.get('/', async (req, res) => {
  const test = await pool.query('SELECT * FROM test;');
  res.send({ test: test.rows });
});

export default router;
