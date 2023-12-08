---
"tmdb-js-core": major
---
In movie and tv endpoint get-credits result types has an added a "crew" field that contains an array of the corresponding crew type was added, and an "id" field

In people endpoint  get-combined-credits, get-movie-credits, get-tv-credits "crew" and "id" fields were added to result type. "crew" is a new crew data type

In tv endpoint added a new "crew" field on the aggregrated-credit response type

Added new base person type and used it to build cast/crew types for movie/get-credits & tv/get-credits
added new base cast/crew credits specifically for people endpoints.
Used these to build types for  people/get-combined-credits people/get-movie-credits  people/get-tv-credits 

New "crew" field in aggretated-credit tv endppoint uses builds off a base type used by the new tv and movie endpoint credit reponse type but adds some new fields needed for that endpoint. The result type for aggregrated-credit also now builds off 5those types



