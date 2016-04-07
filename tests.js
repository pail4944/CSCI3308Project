QUnit.test("rating of zero gives correct picture", function( assert ) {
  assert.equal( getstar(0), "<img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img>" );
});
QUnit.test("rating of 0.5 gives correct picture", function( assert ) {
  assert.equal( getstar(0.5), "<img src=assets/20x20_1-5.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img>" );
});
QUnit.test("rating of 1 gives correct picture", function( assert ) {
  assert.equal( getstar(1), "<img src=assets/20x20_1.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img>" );
});
QUnit.test("rating of 1.5 gives correct picture", function( assert ) {
  assert.equal( getstar(1.5), "<img src=assets/20x20_1.png></img><img src=assets/20x20_1-5.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img>" );
});
QUnit.test("rating of 2 gives correct picture", function( assert ) {
  assert.equal( getstar(2), "<img src=assets/20x20_2.png></img><img src=assets/20x20_2.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img>" );
});
QUnit.test("rating of 2.5 gives correct picture", function( assert ) {
  assert.equal( getstar(2.5), "<img src=assets/20x20_2.png></img><img src=assets/20x20_2.png></img><img src=assets/20x20_2-5.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img>" );
});
QUnit.test("rating of 3 gives correct picture", function( assert ) {
  assert.equal( getstar(3), "<img src=assets/20x20_3.png></img><img src=assets/20x20_3.png></img><img src=assets/20x20_3.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img>" );
});
QUnit.test("rating of 3.5 gives correct picture", function( assert ) {
  assert.equal( getstar(3.5), "<img src=assets/20x20_3.png></img><img src=assets/20x20_3.png></img><img src=assets/20x20_3.png></img><img src=assets/20x20_3-5.png></img><img src=assets/20x20_0.png></img>" );
});
QUnit.test("rating of 4 gives correct picture", function( assert ) {
  assert.equal( getstar(4), "<img src=assets/20x20_4.png></img><img src=assets/20x20_4.png></img><img src=assets/20x20_4.png></img><img src=assets/20x20_4.png></img><img src=assets/20x20_0.png></img>" );
});
QUnit.test("rating of 4.5 gives correct picture", function( assert ) {
  assert.equal( getstar(4.5), "<img src=assets/20x20_4.png></img><img src=assets/20x20_4.png></img><img src=assets/20x20_4.png></img><img src=assets/20x20_4.png></img><img src=assets/20x20_4-5.png></img>" );
});
QUnit.test("rating of 5 gives correct picture", function( assert ) {
  assert.equal( getstar(5), "<img src=assets/20x20_5.png></img><img src=assets/20x20_5.png></img><img src=assets/20x20_5.png></img><img src=assets/20x20_5.png></img><img src=assets/20x20_5.png></img>" );
});
QUnit.test("Bad ratings give None", function( assert ) {
  assert.equal( getstar(-1), "None");
  assert.equal( getstar(6), "None" );
});