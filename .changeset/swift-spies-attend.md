---
"tmdb-js-core": major
---


Added new non-optional fields in the interfaces that are the types for data returned from the /search/ api endpoint. These added fields are on thee tmdb developer api website but where not previously in the library. 
Added generic PaginatedResponse interface that contains "page", "total_results", and "total_pages", and "results" ( the generic array). 
Interfaces/types in the /search/ endpoint were modified to extend this interface. 



