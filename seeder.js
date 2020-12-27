/* This seeder is used to pull the quotes and themes from the JSON files in the shakespeare-quotes generator
and create themes and quotes with ids for faster indexing within the _data folder.
*/

const path = require('path');
const fs = require('fs');

const readDirPath = path.join(__dirname, 'quotes-generator/data/json');
const writeDirPath = path.join(__dirname, '_data');
const allQuotesFname = 'all_themes_stored_quotes.json';
const playsFname = 'plays.json';
const quotesFname = 'quotes.json';
const themesFname = 'themes.json';

const storeQuoteByThemes = (allQuotes) => {
  const storeQuoteByThemesFname = `${writeDirPath}/${themesFname}`;

  let quotesByThemes = {};

  for (themeObj in allQuotes) {
    if (themeObj.length > 0) {
      theme = allQuotes[themeObj];
      theme.map((quote) => {
        if (!quotesByThemes.hasOwnProperty(themeObj)) {
          quotesByThemes[themeObj] = [quote.id];
        } else {
          quotesByThemes[themeObj].push(quote.id);
        }
      });
    }
  }

  const data = JSON.stringify(quotesByThemes);

  fs.appendFile(storeQuoteByThemesFname, data, (err) => {
    if (err) throw err;
  });
};

const storeQuoteByPlay = (allQuotes) => {
  const storeQuoteByPlayFname = `${writeDirPath}/${playsFname}`;

  let quotesByPlay = {};

  for (themeObj in allQuotes) {
    if (themeObj.length > 0) {
      theme = allQuotes[themeObj];
      theme.map((quote) => {
        // Take only play title
        let quotePlay = quote.play.slice(1, quote.play.indexOf(','));
        // Convert play title to slug
        quotePlay = quotePlay.toLowerCase().split(' ').join('-');
        if (!quotesByPlay.hasOwnProperty(quotePlay)) {
          quotesByPlay[quotePlay] = [quote.id];
        } else {
          quotesByPlay[quotePlay].push(quote.id);
        }
      });
    }
  }

  const data = JSON.stringify(quotesByPlay);

  fs.appendFile(storeQuoteByPlayFname, data, (err) => {
    if (err) throw err;
  });
};

const storeQuotes = (allQuotes) => {
  const storeQuotesFname = `${writeDirPath}/${quotesFname}`;

  let quotes = [];

  for (themeObj in allQuotes) {
    if (themeObj.length > 0) {
      allQuotes[themeObj].forEach((quote) => {
        quotes.push(quote);
      });
    }
  }

  const data = JSON.stringify(quotes);

  // Store all quotes
  fs.appendFile(storeQuotesFname, data, (err) => {
    if (err) throw err;
  });
};

const getData = () => {
  // Get JSON data
  const rawData = fs.readFileSync(`${readDirPath}/${allQuotesFname}`);
  const allQuotes = JSON.parse(rawData);

  // Store quotes
  storeQuotes(allQuotes);

  // Store quote by play
  storeQuoteByPlay(allQuotes);

  // Store quote by themes
  storeQuoteByThemes(allQuotes);
};

getData();

// Log
console.log('Data imported...');
