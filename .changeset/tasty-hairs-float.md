---
"tmdb-js-core": patch
---

AppendToResponseType and ResponseTypeFor would add response types for MovieAppendToResponseType to all other ever other type if the key for a particular append to reponse type also existed in MovieAppendToReponse.

Changes were made to those types and to the get details functions that used append to reponse  so that the expected type information would be passed into ResponseTypeFor and the correct type would be retreived
