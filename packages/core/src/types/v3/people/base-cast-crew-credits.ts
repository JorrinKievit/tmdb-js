export interface PeoplePersonCredit {
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
 interface PeopleCastAndCrewGetCombinedGetTvCredit extends PeoplePersonCredit {
    original_title: string;
    release_date: string;
    title: string;
    video: boolean;
}
interface PeopleCastCreditSpecificFields{
    character: string;
}
 type PeopleCrewCreditSpecificFields = { job: string; department: string; }

export interface PeopleBaseCastGetMovieGetCombinedCredit extends PeopleCastAndCrewGetCombinedGetTvCredit, PeoplePersonCredit, PeopleCastCreditSpecificFields {
    order: number;
}

export type PeopleBaseCrewGetMovieGetCombinedCredit = PeopleCastAndCrewGetCombinedGetTvCredit & PeoplePersonCredit & PeopleCrewCreditSpecificFields;

export type PeopleBaseCastGetTvCredit = PeoplePersonCredit &  {character: string;};
export type PeopleBaseCrewGetTvCredit = PeoplePersonCredit & PeopleCrewCreditSpecificFields;