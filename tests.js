QUnit.test("rating of zero gives correct picture", function( assert ) {
  assert.ok( getstar(0), "<img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img>" );
});