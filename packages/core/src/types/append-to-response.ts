import {
  MoviesGetAccountStatesResponse,
  MoviesGetAlternativeTitlesResponse,
  MoviesGetChangesResponse,
  MoviesGetCreditsResponse,
  MoviesGetExternalIdsResponse,
  MoviesGetImagesResponse,
  MoviesGetKeywordsResponse,
  MoviesGetLatestResponse,
  MoviesGetListsResponse,
  MoviesGetRecommendationsResponse,
  MoviesGetReleaseDatesResponse,
  MoviesGetReviewsResponse,
  MoviesGetSimilarMoviesResponse,
  MoviesGetTranslationsResponse,
  MoviesGetVideosResponse,
  MoviesGetWatchProvidersResponse,
  PeopleGetChangesResponse,
  PeopleGetCombinedCreditsResponse,
  PeopleGetExternalIdsResponse,
  PeopleGetImagesResponse,
  PeopleGetLatestResponse,
  PeopleGetMovieCreditsResponse,
  PeopleGetTranslationsResponse,
  TVGetAccountStatesResponse,
  TVGetAggregateCreditsResponse,
  TVGetAlternativeTitlesResponse,
  TVGetChangesResponse,
  TVGetContentRatingsResponse,
  TVGetCreditsResponse,
  TVGetEpisodeGroupsResponse,
  TVGetExternalIdsResponse,
  TVGetImagesResponse,
  TVGetKeywordsResponse,
  TVGetLatestResponse,
  TVGetRecommendationsResponse,
  TVGetReviewsResponse,
  TVGetScreenedTheatricallyResponse,
  TVGetSimilarTVShowsResponse,
  TVGetTranslationsResponse,
  TVGetVideosResponse,
  TVGetWatchProvidersResponse,
  TVSeasonsGetAccountStatesResponse,
  TVSeasonsGetAggregateCreditsResponse,
  TVSeasonsGetChangesResponse,
  TVSeasonsGetCreditsResponse,
  TVSeasonsGetImagesResponse,
  TVSeasonsGetTranslationsResponse,
  TVSeasonsGetVideosResponse,
  TVEpisodesGetAccountStatesResponse,
  TVEpisodesGetChangesResponse,
  TVEpisodesGetCreditsResponse,
  TVEpisodesGetImagesResponse,
  TVEpisodesGetTranslationsResponse,
  TVEpisodesGetVideosResponse,
} from "./v3";

export type MoviesAppendToResponse =
  | "account_states"
  | "alternative_titles"
  | "changes"
  | "credits"
  | "external_ids"
  | "images"
  | "keywords"
  | "latest"
  | "lists"
  | "recommendations"
  | "release_dates"
  | "reviews"
  | "similar"
  | "translations"
  | "videos"
  | "watch_providers";
export interface MoviesAppendToResponseTypes {
  account_states: MoviesGetAccountStatesResponse;
  alternative_titles: MoviesGetAlternativeTitlesResponse;
  changes: MoviesGetChangesResponse;
  credits: MoviesGetCreditsResponse;
  external_ids: MoviesGetExternalIdsResponse;
  images: MoviesGetImagesResponse;
  keywords: MoviesGetKeywordsResponse;
  latest: MoviesGetLatestResponse;
  lists: MoviesGetListsResponse;
  recommendations: MoviesGetRecommendationsResponse;
  release_dates: MoviesGetReleaseDatesResponse;
  reviews: MoviesGetReviewsResponse;
  similar: MoviesGetSimilarMoviesResponse;
  translations: MoviesGetTranslationsResponse;
  videos: MoviesGetVideosResponse;
  watch_providers: MoviesGetWatchProvidersResponse;
}

export type PeopleAppendToResponse = "changes" | "combined_credits" | "external_ids" | "images" | "latest" | "movie_credits" | "tv_credits" | "translations";
export interface PeopleAppendToResponseTypes {
  changes: PeopleGetChangesResponse;
  combined_credits: PeopleGetCombinedCreditsResponse;
  external_ids: PeopleGetExternalIdsResponse;
  images: PeopleGetImagesResponse;
  latest: PeopleGetLatestResponse;
  movie_credits: PeopleGetMovieCreditsResponse;
  tv_credits: TVGetCreditsResponse;
  translations: PeopleGetTranslationsResponse;
}

export type TVAppendToResponse =
  | "account_states"
  | "aggregate_credits"
  | "alternative_titles"
  | "changes"
  | "content_ratings"
  | "credits"
  | "episode_groups"
  | "external_ids"
  | "images"
  | "keywords"
  | "latest"
  | "recommendations"
  | "reviews"
  | "screened_theatrically"
  | "similar"
  | "translations"
  | "videos";
export interface TVAppendToResponseTypes {
  account_states: TVGetAccountStatesResponse;
  aggregate_credits: TVGetAggregateCreditsResponse;
  alternative_titles: TVGetAlternativeTitlesResponse;
  changes: TVGetChangesResponse;
  content_ratings: TVGetContentRatingsResponse;
  credits: TVGetCreditsResponse;
  episode_groups: TVGetEpisodeGroupsResponse;
  external_ids: TVGetExternalIdsResponse;
  images: TVGetImagesResponse;
  keywords: TVGetKeywordsResponse;
  latest: TVGetLatestResponse;
  recommendations: TVGetRecommendationsResponse;
  reviews: TVGetReviewsResponse;
  screened_theatrically: TVGetScreenedTheatricallyResponse;
  similar: TVGetSimilarTVShowsResponse;
  translations: TVGetTranslationsResponse;
  videos: TVGetVideosResponse;
  watch_providers: TVGetWatchProvidersResponse;
}

export type TVSeasonsAppendToResponse = "account_states" | "aggregate_credits" | "changes" | "credits" | "external_ids" | "images" | "translations" | "videos" | "watch_providers";
export interface TVSeasonsAppendToResponseTypes {
  account_states: TVSeasonsGetAccountStatesResponse;
  aggregate_credits: TVSeasonsGetAggregateCreditsResponse;
  changes: TVSeasonsGetChangesResponse;
  credits: TVSeasonsGetCreditsResponse;
  external_ids: TVGetExternalIdsResponse;
  images: TVSeasonsGetImagesResponse;
  translations: TVSeasonsGetTranslationsResponse;
  videos: TVSeasonsGetVideosResponse;
  watch_providers: TVGetWatchProvidersResponse;
}

export type TVEpisodesAppendToResponse = "account_states" | "changes" | "credits" | "external_ids" | "images" | "translations" | "videos";
export interface TVEpisodesAppendToResponseTypes {
  account_states: TVEpisodesGetAccountStatesResponse;
  changes: TVEpisodesGetChangesResponse;
  credits: TVEpisodesGetCreditsResponse;
  external_ids: TVGetExternalIdsResponse;
  images: TVEpisodesGetImagesResponse;
  translations: TVEpisodesGetTranslationsResponse;
  videos: TVEpisodesGetVideosResponse;
}

type ResponseTypes = "movie" | "tv" | "people" | "tv_seasons" | "tv_episodes";
type ResponseTypeFor<T, U> = U extends "movie"
  ? T extends keyof MoviesAppendToResponseTypes
    ? MoviesAppendToResponseTypes[T]
    : never
  : U extends "tv"
    ? T extends keyof TVAppendToResponseTypes
      ? TVAppendToResponseTypes[T]
      : never
    : U extends "people"
      ? T extends keyof PeopleAppendToResponseTypes
        ? PeopleAppendToResponseTypes[T]
        : never
      : U extends "tv_seasons"
        ? T extends keyof TVSeasonsAppendToResponseTypes
          ? TVSeasonsAppendToResponseTypes[T]
          : never
        : U extends "tv_episodes"
          ? T extends keyof TVEpisodesAppendToResponseTypes
            ? TVEpisodesAppendToResponseTypes[T]
            : never
          : never;

type ExtractValidKeys<T> = T extends (infer U)[] ? U : never;

export type AppendToResponseType<
  AppendToResponse extends (MoviesAppendToResponse | TVAppendToResponse | PeopleAppendToResponse | TVSeasonsAppendToResponse | TVEpisodesAppendToResponse)[] | undefined,
  ResponseType extends ResponseTypes,
> = AppendToResponse extends undefined
  ? Record<string, never>
  : {
    [K in ExtractValidKeys<AppendToResponse>]: ResponseTypeFor<K, ResponseType>;
  };
