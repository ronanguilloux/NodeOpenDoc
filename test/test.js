test("basic test", function() {      
  expect(1);      
  equal( true, true, "passing test" );
});

log(new Context({}), {'foo' : 'bar'});
log(new Context({}), ['foo', 'baz']);
