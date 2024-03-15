const express = require("express");
const router = express.Router();
const Story = require("../models/Story");
const User = require("../models/User");
const { ensureAuthenticated } = require("../middleware/auth");

// Stories Index
router.get("/", async (req, res) => {
  try {
    const stories = await Story.find({ status: "public" })
      .populate("user")
      .sort({ createdAt: "desc" })
      .lean();

    res.status(200).json({
      data: stories,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
});

// Show Single Story
router.get("/show/:id", async (req, res) => {
  try {
    const story = await Story.findOne({
      _id: req.params.id,
    })
      .populate("user")
      .populate("comments.commentUser");
    res.status(200).json({
      success: true,
      data: story,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
});

// List stories from a user
router.get("/user/:googleID", ensureAuthenticated, async (req, res) => {
  try {
    // Find User
    const user = await User.find({
      googleID: req.params.googleID,
    });

    const stories = await Story.find({
      user: user[0]._id,
  
      status: "public",
    })
      .populate("user")
      .lean();

    res.status(200).json({
      data: stories,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

// Logged in users stories
router.get("/my/:id", ensureAuthenticated, async (req, res) => {
  try {
    const stories = await Story.find({ user: req.params.id })
      .populate("user")
      .lean();
    res.status(200).json({
      success: true,
      data: stories,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

// Create Story
router.post("/:googleID", ensureAuthenticated, async (req, res) => {
  
  try {
    const { allowComments, title, body, status } = req.body;
    // Find User
    const user = await User.find({
      googleID: req.params.googleID,
    });

    const newStory = {
      title,
      body,
      status,
      allowComments: allowComments ? true : false,
      user: user[0]._id,
    };

    const story = await Story.create(newStory);
    res.status(200).json({ success: true, data: story });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

// Update story
router.put("/:id", async (req, res) => {
  
  const { allowComments, title, body, status } = req.body;

  try {
    let story = await Story.findById(req.params.id).lean();

    story = await Story.findByIdAndUpdate(
      req.params.id,
      
      {
        title: title,
        body: body,
        status: status,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    // console.log(story)
    const user = await User.findOne({
      _id: story.user,
    });
    
    res.status(200).json({
      success: true,
      user: user,
    });
    
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

// Delete Story
router.delete("/:id", ensureAuthenticated, async (req, res) => {
  try {
    let story = await Story.findById(req.params.id).lean();

    await Story.remove({ _id: req.params.id });
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

// Add Comment
router.post("/comment/:id", ensureAuthenticated,  async (req, res) => {
  try {
    const story = await Story.findOne({ _id: req.params.id })
      .populate("user")
      .populate("comments.commentUser");

      const commenter = await User.find({
        googleID: req.body.commenterId
      });


    const newComment = {
      commentBody: req.body.commentBody,
      commentUser: commenter[0]._id,// change
    };

    // Add to comment at the start
    story.comments.unshift(newComment);

    await story.save();
    res.status(200).json({
      success: true,
      data: story,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
