var assert    = require('assert');
var Tokenizer = require('../tokenizer');

describe('Tokenizer', function(){
  var tokenizer;

  beforeEach(function(){
    tokenizer = new Tokenizer();
  });

  it('should return an empty set when given null', function(){
    var words = tokenizer.getWords(null);
    assert.equal(words.length, 0);
  });

  it('should tokenize a single word', function(){
    var words = tokenizer.getWords('oneword');
    assert.ok(words.has('oneword'));
  });

  it('should tokenize multiple words', function(){
    var words = tokenizer.getWords('two words');
    assert.ok(words.has('two'));
    assert.ok(words.has('words'));
  });

  it('should not duplicate words', function(){
    var words = tokenizer.getWords('two words two words');
    assert.equal(words.length, 2);
  });

  it('should filter out stop words', function(){
    var words = tokenizer.getWords('across the universe');
    assert.equal(words.length, 1);
  });
});