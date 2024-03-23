---
"tmdb-js-core": major
---

What: Removed "original_title" from person combined credits type response type, added it back as optional, and added fields found in person tv credits as optional fields to the combined credits
response type. This change was made for both the cast and crew credit types. Additionally added missing "adult" field in TvGetDetailsBaseResponse

Why: TMDB api doc website is wrong and it shows the person endpoint combined credits response structure as having only the fields that are found in the person endpoint movie credits response structure, but
the data that actually gets returned has a structure that lines up with its media type so either the movie type or the tv type. To capture this I had to add movie or tv specific fields as optional fields
on the combined credits response type. TvGetDetailsBaseResponse was missing the "adult" field

Result: "original_title" is now an optional field so anywhere you use the combined credits type, or made a call to people get combined credits you will now need to confirm original_title is not undefined
before working with it. Combined credits now can return addtional optional fields. This change applies to both the cast and crew credits for the people endpoint. TvGetDetailsBaseResponse now returns
an addtional "adult" field that has a boolean value.
