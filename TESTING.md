<<<<<<< HEAD
-###Names: Parker Illig, Daniel Maxson, Andrew Rutherfeld, Byron Bearden, Griffith Neumark
 -
 -###Title: Your Yelp
 -
 -###Vision: "Helping you go where you wanna go"
 -
 -##Automated Tests: 
 -
 -We mainly test two of our javascript functions - getstars and getkeys.
 -
 -We test getstars in two ways - we make sure the functions returns:
 -* The correct possible image combinations correct image string for 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5
 -* None if it is not one of the previous numbers
 -
 -We test getkey by making sure the keys are getting returned from the firebase database. This is given a 5 second runtime. If this test fails, it's likely caused by the connection to firebase taking more than 5 seconds. 
 -
 -All the code for the tests can be found inside tests.js on our GitHub and the tests can be run by visiting http://pail4944.github.io/CSCI3308Project/testing.html
 -
 -
 -##User Acceptence Tests:
 -
 -|                   |   |
 -|-------------------|---|
 -| Use Case ID:      | YY-1 |
 -| Use Case Name:    | Perform Search |
 -| Description:      | Perform a Yelp API request using forms and buttons |
 -| Users:            | Users of the site |
 -| Preconditions:    | Connected to the internet, city actually has to exist |
 -| Postconditions:   | Website is updated with text results and map results |
 -| Frequency of Use: | Daily by users |
 -| Flow of Events:   |   1. Type in a city name into the City form |
 -|                   |   2. Type in a term to search for businesses in that city into the term form  |
 -|                   |   3. Press the search button //Should say searching|
 -|                   |   4. View results below |
 -| Test Pass?        |   |
 -| Notes and Issues: |   |
 -
 -----------------------------------------------------------
 -
 -|                   |   |
 -|-------------------|---|
 -| Use Case ID:      | YY-2 |
 -| Use Case Name:    | View Markers on Map |
 -| Description:      | Explore the markers on a graph after searching for a term |
 -| Users:            | Users of the site |
 -| Preconditions:    | Connected to the internet, API must return results, map must be loaded |
 -| Postconditions:   | Users can see picture, address, and rating of business on popup of marker|
 -| Frequency of Use: | Daily by users |
 -| Flow of Events:   |   1. Perform a search (see YY-1) // Map has appeared on page|
 -|                   |   2. Scroll down to the map in the results field |
 -|                   |   3. Find a marker on the graph |
 -|                   |   4. Left click on the marker  //Popup of name, address, and picture should appear|
 -| Test Pass?        |   |
 -| Notes and Issues: |   |
 -
 -----------------------------------------------------------
 -
 -|                   |   |
 -|-------------------|---|
 -| Use Case ID:      | YY-3 |
 -| Use Case Name:    | Navigate Map  |
 -| Description:      | Move through the map |
 -| Users:            | Users of the site |
 -| Preconditions:    | Connected to the internet, API must return results, map must be loaded |
 -| Postconditions:   | Map view has changed in some way |
 -| Frequency of Use: | Daily by users |
 -| Flow of Events:   |   1. Perform a search (see YY-1) //Map has appeared on page|
 -|                   |   2. Scroll down to the map in the results field |
 -|                   |   3. Left click and hold down left mouse button on map |
 -|                   |   4. Move mouse in a direction to move map in opposite direction //Map should move|
 -| Test Pass?        |   |
 -| Notes and Issues: |   |
 -
 -----------------------------------------------------------
 -
 -|                   |   |
 -|-------------------|---|
 -| Use Case ID:      | YY-4 |
 -| Use Case Name:    | Refresh Search  |
 -| Description:      | Complete a search after a succesful search |
 -| Users:            | Users of the site |
 -| Preconditions:    | Connected to the internet, API must return results, map must be loaded |
 -| Postconditions:   | Map shows correct relocation and results |
 -| Frequency of Use: | Daily by users |
 -| Flow of Events:   |   1. Perform a search (see YY-1) //Map should appear|
 -|                   |   2. Type in a different city or location in search bar |
 -|                   |   3. Click search again //Map and results should refresh with new terms|
 -|                   |   |
 -| Test Pass?        |   |
 -| Notes and Issues: |   |
=======
###Names: Parker Illig, Daniel Maxson, Andrew Rutherfeld, Byron Bearden, Griffith Neumark

###Title: Your Yelp

###Vision: "Helping you go where you wanna go"

##Automated Tests: 

We mainly test two of our javascript functions - getstars and getkeys.

We test getstars in two ways - we make sure the functions returns:
* The correct possible image combinations correct image string for 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5
* None if it is not one of the previous numbers

We test getkey by making sure the keys are getting returned from the firebase database. This is given a 5 second runtime. If this test fails, it's likely caused by the connection to firebase taking more than 5 seconds. 

All the code for the tests can be found inside tests.js on our GitHub and the tests can be run by visiting http://pail4944.github.io/CSCI3308Project/testing.html


##User Acceptence Tests:

|                   |   |
|-------------------|---|
| Use Case ID:      | YY-1 |
| Use Case Name:    | Perform Search |
| Description:      | Perform a Yelp API request using forms and buttons |
| Users:            | Users of the site |
| Preconditions:    | Connected to the internet, city actually has to exist |
| Postconditions:   | Website is updated with text results and map results |
| Frequency of Use: | Daily by users |
| Flow of Events:   |   1. Type in a city name into the City form |
|                   |   2. Type in a term to search for businesses in that city into the term form  |
|                   |   3. Press the search button //Should say searching|
|                   |   4. View results below |
| Test Pass?        |   |
| Notes and Issues: |   |

----------------------------------------------------------

|                   |   |
|-------------------|---|
| Use Case ID:      | YY-2 |
| Use Case Name:    | View Markers on Map |
| Description:      | Explore the markers on a graph after searching for a term |
| Users:            | Users of the site |
| Preconditions:    | Connected to the internet, API must return results, map must be loaded |
| Postconditions:   | Users can see picture, address, and rating of business on popup of marker|
| Frequency of Use: | Daily by users |
| Flow of Events:   |   1. Perform a search (see YY-1) // Map has appeared on page|
|                   |   2. Scroll down to the map in the results field |
|                   |   3. Find a marker on the graph |
|                   |   4. Left click on the marker  //Popup of name, address, and picture should appear|
| Test Pass?        |   |
| Notes and Issues: |   |

----------------------------------------------------------

|                   |   |
|-------------------|---|
| Use Case ID:      | YY-3 |
| Use Case Name:    | Navigate Map  |
| Description:      | Move through the map |
| Users:            | Users of the site |
| Preconditions:    | Connected to the internet, API must return results, map must be loaded |
| Postconditions:   | Map view has changed in some way |
| Frequency of Use: | Daily by users |
| Flow of Events:   |   1. Perform a search (see YY-1) //Map has appeared on page|
|                   |   2. Scroll down to the map in the results field |
|                   |   3. Left click and hold down left mouse button on map |
|                   |   4. Move mouse in a direction to move map in opposite direction //Map should move|
| Test Pass?        |   |
| Notes and Issues: |   |

----------------------------------------------------------

|                   |   |
|-------------------|---|
| Use Case ID:      | YY-4 |
| Use Case Name:    | Refresh Search  |
| Description:      | Complete a search after a succesful search |
| Users:            | Users of the site |
| Preconditions:    | Connected to the internet, API must return results, map must be loaded |
| Postconditions:   | Map shows correct relocation and results |
| Frequency of Use: | Daily by users |
| Flow of Events:   |   1. Perform a search (see YY-1) //Map should appear|
|                   |   2. Type in a different city or location in search bar |
|                   |   3. Click search again //Map and results should refresh with new terms|
|                   |   |
| Test Pass?        |   |
| Notes and Issues: |   |
>>>>>>> google-oauth
