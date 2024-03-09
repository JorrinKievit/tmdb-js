---
"tmdb-js-core": patch
---

Summary:
Large number of result and response data types had fields like poster_path and backdrop_path changed from a "null" data type to "null | string" data type. To
accurately reflect the data type the API can return.

What:
Modified a large number of the API result interfaces to change fields that were typed as null to fields with their correct type. This is frequently null | string
I don't think there was another data type other than null | string needed, but if there was I had checked it against the API documentation so it should be correct
Why:
The API can return a null value for those specific fields, but it can also return a string value as well, so this update reflects the current state of tmdb API (according to current documentation)
