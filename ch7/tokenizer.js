var Set       = require('collections/set');
var StopWords = require('./stop_words');

var rgxWords = /[a-z']{2,}/g;

/***
 * Provides the ability to tokenize a block of text into non repeated words.
 * @constructor
 */
function Tokenizer(){}

/***
 * Returns a collection of words
 * Duplicates are removed
 */
Tokenizer.prototype.getWords = function(content){
  if(!content || content.length == 0){
    return new Set();
  }

  return splitWords(content);
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
