const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  removeReaction,
  addReaction,
} = require("../../controllers/thought-controller");

router.route("/")
.get(getAllThoughts);

router
.route("/:id")
.put(updateThought)
.get(getThoughtById);

router
.route("/:userId")
.post(addThought);

router
.route("/:userId/:thoughtId")
.delete(removeThought);

router
.route("/:thoughtId/reactions")
.post(addReaction);

router
.route("/:thoughtId/reactions/:reactionId")
.delete(removeReaction);


module.exports = router;
