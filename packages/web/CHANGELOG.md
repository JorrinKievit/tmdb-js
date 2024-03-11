# tmdb-js-web

## 1.1.10

### Patch Changes

- a7d1476: Fix backdrop_path typings

## 1.1.9

### Patch Changes

- 722f537: Fix AppendToResponse never type

## 1.1.8

### Patch Changes

- 1d10583: Fix wrong return type when supplying an append_to_response array for some functions, thanks @newmoneybigbucks!

## 1.1.7

### Patch Changes

- 9d113b5: In movie and tv endpoint get-credits result types has an added a "crew" field that contains an array of the corresponding crew type was added, and an "id" field

  In people endpoint get-combined-credits, get-movie-credits, get-tv-credits "crew" and "id" fields were added to result type. "crew" is a new crew data type

  In tv endpoint added a new "crew" field on the aggregrated-credit response type

  Added new base person type and used it to build cast/crew types for movie/get-credits & tv/get-credits
  added new base cast/crew credits specifically for people endpoints.
  Used these to build types for people/get-combined-credits people/get-movie-credits people/get-tv-credits

  New "crew" field in aggretated-credit tv endppoint uses builds off a base type used by the new tv and movie endpoint credit reponse type but adds some new fields needed for that endpoint. The result type for aggregrated-credit also now builds off 5those types

  Thanks @newmoneybigbucks for the contribution!

## 1.1.6

### Patch Changes

- 45b7a5e: Updated v3 search endpoints

## 1.1.5

### Patch Changes

- 185523b: - #13: Updated types for TV Seasons endpoint
  - #16: Replaced all Date types with string

## 1.1.4

### Patch Changes

- 9e82c6f: Updated TV Episodes get details endpoint

## 1.1.3

### Patch Changes

- aea9e9d: #9 Added typings to belongs_to_collection
  #10 Added language param to the trending endpoint

## 1.1.2

### Patch Changes

- ce01160: #6 Added type-safety to all getDetails endpoints

## 1.1.0

### Minor Changes

- 530d708: Typesafe append_to_response

## 1.0.3

### Patch Changes

- Fixed #1 V2

## 1.0.2

### Patch Changes

- Fixed issue #1
