const plays = [
  'Henry VI',
  'Henry IV',
  'Much Ado About Nothing',
  "All's Well That Ends Well",
  'As You Like It',
  'Coriolanus',
  'The Comedy of Errors',
  'Henry V',
  'Henry VIII',
  'Hamlet',
  'Julius Caesar',
  "Love's Labor's Lost",
  'Macbeth',
  'Measure For Measure',
  "A Midsummer Night's Dream",
  'The Merchant of Venice',
  'Othello',
  'Pericles',
  'Richard III',
  'Romeo and Juliet',
  'The Two Gentlemen of Verona',
  'Titus Andronicus',
  'The Tempest',
  'Twelfth Night',
  'The Two Noble Kinsmen',
  'Troilus and Cressida',
  'The Merry Wives of Windsor',
  'Antony and Cleopatra',
  'Cymbeline',
  'King John',
  'King Lear',
  'Richard II',
  'The Taming of the Shrew',
  'Timon of Athens',
  "The Winter's Tale",
];

class PlayObject {
  constructor(id, theme, key) {
    this.key = id;
    this.value = id;
    this.name = theme;
    this.slug = theme.toLowerCase().split(' ').join('-');
  }
}

plays.sort();
store = [];

for (let i = 0; i < plays.length; i++) {
  let playObj = new PlayObject(i, plays[i], 'play');
  store.push(playObj);
}

console.log(store);
