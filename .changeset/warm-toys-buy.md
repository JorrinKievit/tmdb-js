---
"tmdb-js-core": patch
---
Summary: 
Large number of result and response data types had fields like poster_path and backdrop_path changed from a "null" data type to "null | string" data type. To 
accurately reflect the data type the api can return

What: 
Modified a large number of the api result interfaces to change fields that were  typed as null  to fields with their correct type. This is frequently null | string  
Why: 
The api can return a null value for those specific fileds, but it can also return a string value as well, so this update reflects the current state of tmdb api 

