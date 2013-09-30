var redis     = require('redis');
var Indexer   = require('../../ch7/indexer');

describe('Indexer', function(){

  var db = redis.createClient();
  var docId = 'lotr';
  var indexer;

  beforeEach(function(){
    indexer = new Indexer()
  });

  afterEach(function(){
    deleteSet();
  });

  it("should index only meaningful words", function(done){
    indexer.index(docId, 'lord of the rings').then(function(values){
        values.length.should.equal(2);
        done();
      }).catch(function(reason){
        done(reason);
      });
  });

  function deleteSet(){
    db.del('idx:' + docId);
  }

});
