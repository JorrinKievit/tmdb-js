---
"tmdb-js-core": patch
---

Summary:
AppendToResponseType used Record<string, never> as a possible returned type and this lead to situations where if this type ended up distributed over others(like if using Omit<> on MoviesGetDetailsReponse)
"never" would be substituted for all value types . I changed it to use object type instead of Record<string, never>

What:
Changed AppendToResponseType in append-to-response.ts to remove Record<string,never> from the true branch of the conditional and added the object type in its place
Why:
When trying to use types that use AppendToResponseType and passing undefined in, MoviesGetDetailsREsponse<undefined>, and then using some like Omit<> with the resulting type it appeared to
possibly treat the record like an index signature since the intersected record does not come with an associated named field, MoviesGetDetailsBaseResponse & Record<string, never> is the type, and this would
cause Omit to distribute the "never" type as the type of the data in the field.
