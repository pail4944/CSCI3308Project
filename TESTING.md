Names: Parker Illig, Daniel Maxson, Andrew Rutherfeld, Byron Bearden, Griffith Neumark

Title: Your Yelp

Vision: "Helping you go where you wanna go"

Automated Tests: 


User Acceptence Tests:
----------------------------------------------------------
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
|                   |   2. Type in a term to search for businesses in that city into the term form |
|                   |   3. Press the search button |
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
| Flow of Events:   |   1. Perform a search (see YY-1) |
|                   |   2. Scroll down to the map in the results field |
|                   |   3. Find a marker on the graph |
|                   |   4. Left click on the marker |
| Test Pass?        |   |
| Notes and Issues: |   |

----------------------------------------------------------

|                   |   |
|-------------------|---|
| Use Case ID:      | YY-3 |
| Use Case Name:    | Navigate Map  |
| Description:      | Move through the map |
| Users:            | Users of the site |
| Preconditions:    | CConnected to the internet, API must return results, map must be loaded |
| Postconditions:   | Map view has changed in some way |
| Frequency of Use: | Daily by users |
| Flow of Events:   |   1. Perform a search (see YY-1) |
|                   |   2. Scroll down to the map in the results field |
|                   |   3. Left click and hold down left mouse button on map |
|                   |   4. Move mouse in a direction to move map in opposite direction |
| Test Pass?        |   |
| Notes and Issues: |   |