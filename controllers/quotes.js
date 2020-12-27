// There are a lot of repetitions in this first implementation.
// Consider to use middleware

const path = require('path');
const fs = require('fs');
const plays = path.join(__dirname, '../_data/plays.json');
const quotes = path.join(__dirname, '../_data/quotes.json');
const themes = path.join(__dirname, '../_data/themes.json');

// @desc        Get number of available quotes in database
// @route       GET /api/v1/quotes
// @access      Public
exports.getQuotes = (req, res) => {
  try {
    // Get quotes
    const rawData = fs.readFileSync(quotes);
    const allQuotes = JSON.parse(rawData);
    // Get number of quotes in DB
    const query = allQuotes.length;

    res.status(200).json({ success: true, quote: query });
  } catch (err) {
    console.error(err);
  }
};

// @desc        Get a quote by id
// @route       GET /api/v1/quotes/:id
// @access      Public
exports.getQuoteById = (req, res) => {
  try {
    // Get quotes
    const rawData = fs.readFileSync(quotes);
    const allQuotes = JSON.parse(rawData);

    let query;
    allQuotes.forEach((quote) => {
      if (quote.id === req.params.id) {
        query = quote;
      }
    });

    if (query) {
      res.status(200).json({ success: true, quote: query });
    } else {
      res.status(404).json({
        success: false,
        mesg: `This quote is not found`,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

// @desc        Get a random single quote
// @route       GET /api/v1/quotes/single
// @access      Public
exports.getRandomQuote = async (req, res) => {
  try {
    // Get quotes
    const rawData = await fs.readFileSync(quotes);
    const allQuotes = JSON.parse(rawData);
    // Generate random number
    const randomQuoteNumber = Math.floor(Math.random() * allQuotes.length);
    // Get random quote
    const query = allQuotes[randomQuoteNumber];

    res.status(200).json({ success: true, quote: query });
  } catch (err) {
    console.error(err);
  }
};

// @desc        Get a random single quote by theme
// @route       GET /api/v1/quotes/by-theme/:theme
// @access      Public
exports.getQuoteByTheme = (req, res) => {
  try {
    // Get quotes
    const rawQuotes = fs.readFileSync(quotes);
    const allQuotes = JSON.parse(rawQuotes);
    // Get themes
    const rawThemes = fs.readFileSync(themes);
    const allThemes = JSON.parse(rawThemes);
    if (Object.keys(allThemes).includes(req.params.theme)) {
      // Find theme quotes
      let themeQuotes;
      for (themeObj in allThemes) {
        if (themeObj === req.params.theme) {
          themeQuotes = allThemes[themeObj];
        }
      }
      // Generate random number
      const randomQuoteNumber = Math.floor(Math.random() * themeQuotes.length);
      // Get random quote id
      const idQuery = themeQuotes[randomQuoteNumber];
      // Fetch quote using id
      let query;
      allQuotes.forEach((quote) => {
        if (quote.id === idQuery) {
          query = quote;
        }
      });
      res.status(200).json({ success: true, quote: query });
    } else {
      res.status(404).json({
        success: false,
        mesg: `The theme ${req.params.theme} is not found`,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

// @desc        Get random quote by play
// @route       GET /api/v1/quotes/by-play/:title
// @access      Public
exports.getQuotesByPlay = (req, res) => {
  try {
    // Get quotes
    const rawQuotes = fs.readFileSync(quotes);
    const allQuotes = JSON.parse(rawQuotes);
    // Get plays
    const rawPlays = fs.readFileSync(plays);
    const allPlays = JSON.parse(rawPlays);
    if (Object.keys(allPlays).includes(req.params.title)) {
      // Find play quotes
      let playQuotes;
      for (playObj in allPlays) {
        if (playObj === req.params.title) {
          playQuotes = allPlays[playObj];
        }
      }
      // Generate random number
      const randomQuoteNumber = Math.floor(Math.random() * playQuotes.length);
      // Get random quote id
      const idQuery = playQuotes[randomQuoteNumber];
      // Fetch quote using id
      let query;
      allQuotes.forEach((quote) => {
        if (quote.id === idQuery) {
          query = quote;
        }
      });
      res.status(200).json({ success: true, quote: query });
    } else {
      res.status(404).json({
        success: false,
        mesg: `The play with title ${req.params.title} is not found`,
      });
    }
  } catch (err) {
    console.error(err);
  }
};
