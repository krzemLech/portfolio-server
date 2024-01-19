const { z } = require("zod");

const validateMsg = (req, res, next) => {
  const schema = z.object({
    name: z.string().min(3).max(50),
    email: z.string().email(),
    subject: z.string().min(3).max(50),
    message: z.string().min(3).max(500),
  });

  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};

module.exports = { validateMsg };
