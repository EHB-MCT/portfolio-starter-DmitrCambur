const express = require("express");
const router = express.Router();
const knexConfig = require("../db/knexfile");
const knex = require("knex")(knexConfig.development);

// POST /replies - Create a new reply
router.post("/replies", async (req, res) => {
  const { content, thread_id, user_id, status } = req.body;

  const validationError = validateReply({
    content,
    thread_id,
    user_id,
    status,
  });
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const [newReply] = await knex("Replies")
      .insert({ content, thread_id, user_id, status })
      .returning(["reply_id", "content", "thread_id", "user_id", "status"]);
    res.status(201).json(newReply);
  } catch (error) {
    res.status(500).json({ error: "Failed to create reply" });
  }
});

function validateReply({ content, thread_id, user_id, status }) {
  if (!content || !thread_id || !user_id || !status) {
    return "Content, thread_id, user_id, and status are required";
  }
  if (content.length > 2000) {
    return "Content cannot be longer than 2000 characters";
  }
  if (content.length < 10) {
    return "Content must be at least 10 characters long";
  }
  return null;
}

// GET /replies/:id - Get a specific reply by ID
router.get("/replies/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const reply = await knex("Replies").where({ reply_id: id }).first();
    if (reply) {
      res.status(200).json(reply);
    } else {
      res.status(404).json({ error: "Reply not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve reply" });
  }
});

// GET /replies - Retrieve all replies
router.get("/replies", async (req, res) => {
  try {
    const replies = await knex("Replies").select("*");
    res.status(200).json(replies);
  } catch (error) {
    console.error("Error retrieving replies:", error);
    res.status(500).json({ error: "Failed to retrieve replies" });
  }
});

// GET /replies/thread/:threadId - Retrieve all replies for a specific thread
router.get("/replies/thread/:threadId", async (req, res) => {
  const { threadId } = req.params;
  try {
    const replies = await knex("Replies").where({ thread_id: threadId });
    res.status(200).json(replies);
  } catch (error) {
    console.error("Error retrieving replies for thread:", error);
    res.status(500).json({ error: "Failed to retrieve replies for thread" });
  }
});

// PUT /replies/:id - Update a specific reply by ID
router.put("/replies/:id", async (req, res) => {
  const { id } = req.params;
  const { content, status } = req.body;

  // Validate required fields
  if (!status) {
    return res.status(400).json({
      error: "Status is required",
    });
  }

  try {
    const reply = await knex("Replies").where({ reply_id: id }).first();
    if (!reply) {
      return res.status(404).json({ error: "Reply not found" });
    }

    await knex("Replies")
      .where({ reply_id: id })
      .update({ content, status, updated_at: new Date() });

    const updatedReply = await knex("Replies").where({ reply_id: id }).first();
    console.log("Updated Reply:", updatedReply);
    res.status(200).json(updatedReply);
  } catch (error) {
    console.error("Error updating reply:", error);
    res.status(500).json({ error: "Failed to update reply" });
  }
});

// DELETE /replies/:id - Delete a specific reply by ID
router.delete("/replies/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRows = await knex("Replies").where({ reply_id: id }).del();
    if (deletedRows) {
      console.log("Deleted Reply ID:", id);
      res.status(200).json({ message: "Reply deleted successfully" });
    } else {
      res.status(404).json({ error: "Reply not found" });
    }
  } catch (error) {
    console.error("Error deleting reply:", error);
    res.status(500).json({ error: "Failed to delete reply" });
  }
});

module.exports = router;
