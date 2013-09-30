var Tokenizer = require('../../ch7/tokenizer');

describe('Tokenizer', function(){
  var tokenizer;

  beforeEach(function(){
    tokenizer = new Tokenizer();
  });

  it('should return an empty set when given null', function(){
    var words = tokenizer.getWords(null);
    words.length.should.equal(0);
  });

  it('should tokenize a single word', function(){
    var words = tokenizer.getWords('oneword');
    words.has('oneword').should.be.ok;
  });

  it('should tokenize multiple words', function(){
    var words = tokenizer.getWords('two words');
    words.has('two').should.be.ok;
    words.has('words').should.be.ok;
  });

  it('should not duplicate words', function(){
    var words = tokenizer.getWords('two words two words');
    words.length.should.equal(2);
  });
});
