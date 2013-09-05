var Set       = require('collections/set');
var StopWords = require('./stop_words');

var rgxWords = /[a-z']{2,}/g;

/***
 * Provides the ability to tokenize a block of text into
 *  non repeated meaningful words.
 * @constructor
 */
function Tokenizer(stopWords){
  if(stopWords == null){
    stopWords = new StopWords();
  }
  this.stopWords = stopWords;
}

/***
 * Returns a collection of words
 * Duplicates are removed
 * "Stop Words" are removed to leave only meaningful search words in the collection
 */
Tokenizer.prototype.getWords = function(content){
  if(!content || content.length == 0){
    return new Set();
  }

  var words = splitWords(content);
  return this.stopWords.removeStopWords(words);
};

function splitWords(content){
  var result = new Set();
  var matches;
  while ((matches = rgxWords.exec(content)) !== null){
    result.add(matches[0]);
  }
  return result;
}

module.exports = Tokenizer;
