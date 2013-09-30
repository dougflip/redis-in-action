var Q                 = require('q');
var redis             = require('redis');
var defaultStopWords  = require('./stop_words');
var defaultTokenizer  = require('./tokenizer');

/**
 * Provides the ability to index a document
 * @constructor
 */
function Indexer(db, stopWords, tokenizer){
  this.db = db || redis.createClient();
  this.stopWords = stopWords || new defaultStopWords();
  this.tokenizer = tokenizer || new defaultTokenizer();
}

/**
 * Indexes the provided text against the provided ID2
 */
Indexer.prototype.index = function(docId, text){
  var words = this.tokenizer.getWords(text);
  words = this.stopWords.removeStopWords(words);

  var result = [];
  var sadd = Q.nbind(this.db.sadd, this.db);
  words.forEach(function(word){
    result.push(sadd('idx:' + docId, word));
  });

  return Q.all(result);
};

module.exports = Indexer;
