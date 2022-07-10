const router = require("express").Router();
const {
  addThought,
  removeThought,
  removeReaction,
  addReaction,
} = require("../../controllers/thought-controller");

// Set up GET all and POST at /api/users
router.route("/:userId").post(addThought);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route("/:userId/:thoughtId").put(addReaction).delete(removeThought);

router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
