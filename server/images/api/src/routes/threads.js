const express = require("express");
const router = express.Router();
const knexConfig = require("../db/knexfile");
const knex = require("knex")(knexConfig.development);

// POST /threads - Create a new thread
router.post("/threads", async (req, res) => {
  const { title, content, user_id, status } = req.body;

  const validationError = validateThread({ title, content, user_id, status });
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const [newThread] = await knex("Threads")
      .insert({ title, content, user_id, status })
      .returning(["thread_id", "title", "content", "user_id", "status"]);
    res.status(201).json(newThread);
  } catch (error) {
    res.status(500).json({ error: "Failed to create thread" });
  }
});

function validateThread({ title, content, user_id, status }) {
  if (!title || !content || !user_id || !status) {
    return "Title, content, user_id, and status are required";
  }
  if (title.length > 100) {
    return "Title cannot be longer than 100 characters";
  }
  if (title.length < 10) {
    return "Title must be at least 10 characters long";
  }
  if (content.length > 2000) {
    return "Content cannot be longer than 2000 characters";
  }
  if (content.length < 20) {
    return "Content must be at least 20 characters long";
  }
  return null;
}

// GET /threads/:id - Get a specific thread by ID
router.get("/threads/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const thread = await knex("Threads").where({ thread_id: id }).first();
    if (thread) {
      res.status(200).json(thread);
    } else {
      res.status(404).json({ error: "Thread not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve thread" });
  }
});

// PUT /threads/:id - Update a specific thread by ID
router.put("/threads/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content, status } = req.body;

  // Validate required fields
  if (!title || !content || !status) {
    return res.status(400).json({
      error: "Title, content, and status are required",
    });
  }

  try {
    const thread = await knex("Threads").where({ thread_id: id }).first();
    if (!thread) {
      return res.status(404).json({ error: "Thread not found" });
    }

    await knex("Threads")
      .where({ thread_id: id })
      .update({ title, content, status, updated_at: new Date() });

    const updatedThread = await knex("Threads")
      .where({ thread_id: id })
      .first();
    console.log("Updated Thread:", updatedThread);
    res.status(200).json(updatedThread);
  } catch (error) {
    console.error("Error updating thread:", error);
    res.status(500).json({ error: "Failed to update thread" });
  }
});

// DELETE /threads/:id - Delete a specific thread by ID
router.delete("/threads/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRows = await knex("Threads").where({ thread_id: id }).del();
    if (deletedRows) {
      console.log("Deleted Thread ID:", id);
      res.status(200).json({ message: "Thread deleted successfully" });
    } else {
      res.status(404).json({ error: "Thread not found" });
    }
  } catch (error) {
    console.error("Error deleting thread:", error);
    res.status(500).json({ error: "Failed to delete thread" });
  }
});

module.exports = router;
