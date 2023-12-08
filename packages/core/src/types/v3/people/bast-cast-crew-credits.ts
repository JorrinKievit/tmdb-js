export interface PeopleEndpointPersonCredit {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    credit_id: string;

}
 interface PeopleEndpointCastAndCrewGetCombinedGetTvCredit extends PeopleEndpointPersonCredit {
    original_title: string;
    release_date: string;
    title: string;
    video: boolean;
}
 type PeopleCastCreditSpecificFields = { character: string; }
 type PeopleCrewCreditSpecificFields = { job: string; department: string; }

export interface PeopleEndpointBaseCastGetMovieGetCombinedCredit extends PeopleEndpointCastAndCrewGetCombinedGetTvCredit, PeopleEndpointPersonCredit, PeopleCastCreditSpecificFields {
    order: number;
}

export type PeopleEndpointBaseCrewGetMovieGetCombinedCredit = PeopleEndpointCastAndCrewGetCombinedGetTvCredit & PeopleEndpointPersonCredit & PeopleCrewCreditSpecificFields;
//export type PeopleBaseCastGetTvCredit = PeopleEndpointPersonCredit & PeopleCastCreditSpecificFields;
export type PeopleBaseCastGetTvCredit = PeopleEndpointPersonCredit &  {character: string;};
export type PeopleBaseCrewGetTvCredit = PeopleEndpointPersonCredit & PeopleCrewCreditSpecificFields;