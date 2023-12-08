---
"tmdb-js-core": major
---
In movie and tv endpoint get-credits result types has an added a "crew" field that contains an array of the corresponding crew type was added, and an "id" field

In people endpoint  get-combined-credits, get-movie-credits, get-tv-credits "crew" and "id" fields were added to result type. "crew" is a new crew data type

Added new base person type and used it to build cast/crew types for movie/get-credits & tv/get-credits
added new base cast/crew credits specifically for people endpoints.
Used these to build types for  people/get-combined-credits people/get-movie-credits  people/get-tv-credits 



