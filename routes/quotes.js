const express = require('express');
const {
  getQuotes,
  getRandomQuote,
  getQuoteByTheme,
  getQuotesByPlay,
  getQuoteById,
} = require('../controllers/quotes');

const router = express.Router();

// Quotes routes
router.route('/').get(getQuotes);
router.route('/single').get(getRandomQuote);
// By themes
router.route('/by-theme').get(getQuoteByTheme);
router.route('/by-theme/:theme').get(getQuoteByTheme);
// By plays
router.route('/by-play').get(getQuotesByPlay);
router.route('/by-play/:title').get(getQuotesByPlay);
router.route('/:id').get(getQuoteById);

module.exports = router;
