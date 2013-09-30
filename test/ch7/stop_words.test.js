StopWords   = require('../../ch7/stop_words');

describe('StopWords', function(){
  var stopWords;

  beforeEach(function(){
    stopWords = new StopWords();
  });

  it('should handle a null input', function(){
    var result = stopWords.removeStopWords(null);
    result.length.should.equal(0)
  });

  it('should handle an empty input', function(){
    var result = stopWords.removeStopWords([]);
    result.length.should.equal(0);
  });

  it('should handle no stop words', function(){
    var result = stopWords.removeStopWords(['meaningful', 'words', 'remain']);
    result.length.should.equal(3);
  });

  it('should handle all stop words', function(){
    var result = stopWords.removeStopWords(['able', 'my', 'your']);
    result.length.should.equal(0);
  });

  it('should handle a mix of stop words and meaningful words', function(){
    var result = stopWords.removeStopWords(['meaningful', 'able', 'words', 'my', 'your']);
    result.length.should.equal(2);
  });
});
