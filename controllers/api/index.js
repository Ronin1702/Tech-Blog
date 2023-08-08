const router = require('express').Router(),
      authRoutes = require('./userRoutes'),
      commentRoutes = require('./commentRoutes'),
      blogRoutes = require('./postRoutes');

router.use('/auth', authRoutes);
router.use('/comment', commentRoutes);
router.use('/blog', blogRoutes);

module.exports = router;