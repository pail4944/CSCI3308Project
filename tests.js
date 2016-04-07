QUnit.test("getstar should return correct sequence of images", function( assert ) {
    assert.equal( getstar(0), "<img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img>", "gave correct sequence of images for rating of 0");
    assert.equal( getstar(0.5), "<img src=assets/20x20_1-5.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img>", "gave correct sequence of images for rating of 0.5");
    assert.equal( getstar(1), "<img src=assets/20x20_1.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img>", "gave correct sequence of images for rating of 1");
    assert.equal( getstar(1.5), "<img src=assets/20x20_1.png></img><img src=assets/20x20_1-5.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img>", "gave correct sequence of images for rating of 1.5");
    assert.equal( getstar(2), "<img src=assets/20x20_2.png></img><img src=assets/20x20_2.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img>", "gave correct sequence of images for rating of 2");
    assert.equal( getstar(2.5), "<img src=assets/20x20_2.png></img><img src=assets/20x20_2.png></img><img src=assets/20x20_2-5.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img>", "gave correct sequence of images for rating of 2.5");
    assert.equal( getstar(3), "<img src=assets/20x20_3.png></img><img src=assets/20x20_3.png></img><img src=assets/20x20_3.png></img><img src=assets/20x20_0.png></img><img src=assets/20x20_0.png></img>", "gave correct sequence of images for rating of 3");
    assert.equal( getstar(3.5), "<img src=assets/20x20_3.png></img><img src=assets/20x20_3.png></img><img src=assets/20x20_3.png></img><img src=assets/20x20_3-5.png></img><img src=assets/20x20_0.png></img>", "gave correct sequence of images for rating of 3.5");
    assert.equal( getstar(4), "<img src=assets/20x20_4.png></img><img src=assets/20x20_4.png></img><img src=assets/20x20_4.png></img><img src=assets/20x20_4.png></img><img src=assets/20x20_0.png></img>", "gave correct sequence of images for rating of 4");
    assert.equal( getstar(4.5), "<img src=assets/20x20_4.png></img><img src=assets/20x20_4.png></img><img src=assets/20x20_4.png></img><img src=assets/20x20_4.png></img><img src=assets/20x20_4-5.png></img>", "gave correct sequence of images for rating of 4.5");
    assert.equal( getstar(5), "<img src=assets/20x20_5.png></img><img src=assets/20x20_5.png></img><img src=assets/20x20_5.png></img><img src=assets/20x20_5.png></img><img src=assets/20x20_5.png></img>", "gave correct sequence of images for rating of 5");
});
 
QUnit.test("getstar should return None for bad ratings", function( assert ) {
  	assert.equal( getstar(-1), "None", "Negative rating gave None");
  	assert.equal( getstar(6), "None" , "Positive out of bounds number gave None");
    assert.equal( getstar(4.5000000001), "None", "Floating point in range but not exactly one of the 11 possible ratings gave None");
});

getkeys("denver", "food", true)
window.setTimeout( function(){
    QUnit.test("getkeys should get an object with all 4 authentication keys", function( assert ) {
        assert.equal(new RegExp('^UoGB').test($("#keys").data().key.ConsKey), true, "got consumer key");
        assert.equal(new RegExp('^Dokj').test($("#keys").data().key.ConsSecret), true, "got consumer secret key");
        assert.equal(new RegExp('^S0Ow').test($("#keys").data().key.AccessToken), true, "got access token");
        assert.equal(new RegExp('^a1BE').test($("#keys").data().key.AccessSecret), true, "got secret access token");
    });
}, 5000)
