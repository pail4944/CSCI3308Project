
/**
 * Creates a string of images 
 *@example
 * // returns 5 star image
 * getstar(5)
 *@param {int} rating - Valid inputs: 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 
 *@returns {string} - Returns string of HTML image sources
 */

function getstar(rating){
      switch(rating) {
            case 0:
                  var star = "<img src=assets/20x20_0.png></img>" + "<img src=assets/20x20_0.png></img>" + "<img src=assets/20x20_0.png></img>" + "<img src=assets/20x20_0.png></img>" + "<img src=assets/20x20_0.png></img>" 
                  break;
            case 0.5:
                  var star = "<img src=assets/20x20_1-5.png></img>" + "<img src=assets/20x20_0.png></img>" + "<img src=assets/20x20_0.png></img>" + "<img src=assets/20x20_0.png></img>" + "<img src=assets/20x20_0.png></img>"
                  break;
            case 1:
                  var star = "<img src=assets/20x20_1.png></img>" + "<img src=assets/20x20_0.png></img>" + "<img src=assets/20x20_0.png></img>" + "<img src=assets/20x20_0.png></img>" + "<img src=assets/20x20_0.png></img>"
                  break;
            case 1.5:
                  var star = "<img src=assets/20x20_1.png></img>" + "<img src=assets/20x20_1-5.png></img>" + "<img src=assets/20x20_0.png></img>" + "<img src=assets/20x20_0.png></img>" + "<img src=assets/20x20_0.png></img>"
                  break;
            case 2:
                  var star = "<img src=assets/20x20_2.png></img>" + "<img src=assets/20x20_2.png></img>"+"<img src=assets/20x20_0.png></img>" + "<img src=assets/20x20_0.png></img>" + "<img src=assets/20x20_0.png></img>"
                  break;
            case 2.5:
                  var star = "<img src=assets/20x20_2.png></img>" + "<img src=assets/20x20_2.png></img>"+"<img src=assets/20x20_2-5.png></img>" + "<img src=assets/20x20_0.png></img>" + "<img src=assets/20x20_0.png></img>"
                  break;
            case 3:
                  var star = "<img src=assets/20x20_3.png></img>" + "<img src=assets/20x20_3.png></img>"+"<img src=assets/20x20_3.png></img>"+"<img src=assets/20x20_0.png></img>" + "<img src=assets/20x20_0.png></img>"
                  break;
            case 3.5:
                  var star = "<img src=assets/20x20_3.png></img>" + "<img src=assets/20x20_3.png></img>" + "<img src=assets/20x20_3.png></img>" +"<img src=assets/20x20_3-5.png></img>" +"<img src=assets/20x20_0.png></img>"
                  break;
            case 4:
                  var star = "<img src=assets/20x20_4.png></img>" + "<img src=assets/20x20_4.png></img>" + "<img src=assets/20x20_4.png></img>" +"<img src=assets/20x20_4.png></img>"+ "<img src=assets/20x20_0.png></img>"
                  break;
            case 4.5:
                  var star = "<img src=assets/20x20_4.png></img>" + "<img src=assets/20x20_4.png></img>" + "<img src=assets/20x20_4.png></img>" +"<img src=assets/20x20_4.png></img>"+ "<img src=assets/20x20_4-5.png></img>"  
                  break;
            case 5:
                  var star = "<img src=assets/20x20_5.png></img>" + "<img src=assets/20x20_5.png></img>" + "<img src=assets/20x20_5.png></img>" + "<img src=assets/20x20_5.png></img>" + "<img src=assets/20x20_5.png></img>"
                  break;
            default:
                 var star = "None"

      }
      return star
} 