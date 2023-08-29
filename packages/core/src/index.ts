import { MoviesAppendToResponse, PeopleAppendToResponse, TVAppendToResponse, TVEpisodesAppendToResponse, TVSeasonsAppendToResponse } from "./types/append-to-response";
import {
  AccountGetDetailsParams,
  AccountGetDetailsResponse,
  AccountGetCreatedListsParams,
  AccountGetCreatedListsResponse,
  AccountGetFavoriteMoviesParams,
  AccountGetFavoriteMoviesResponse,
  AccountGetFavoriteTVShowsParams,
  AccountGetFavoriteTVShowsResponse,
  AccountMarkAsFavoriteParams,
  AccountMarkAsFavoriteBody,
  AccountMarkAsFavoriteResponse,
  AccountGetRatedMoviesParams,
  AccountGetRatedMoviesResponse,
  AccountGetRatedTVShowsParams,
  AccountGetRatedTVShowsResponse,
  AccountGetRatedTVEpisodesParams,
  AccountGetRatedTVEpisodesResponse,
  AccountGetMovieWatchlistParams,
  AccountGetMovieWatchlistResponse,
  AccountGetTVShowWatchlistParams,
  AccountGetTVShowWatchlistResponse,
  AccountAddToWatchlistParams,
  AccountAddToWatchlistBody,
  AccountAddToWatchlistResponse,
  AuthenticationCreateGuestSessionResponse,
  AuthenticationCreateRequestTokenResponse,
  AuthenticationCreateSessionBody,
  AuthenticationCreateSessionResponse,
  AuthenticationCreateSessionWithLoginBody,
  AuthenticationCreateSessionWithLoginResponse,
  AuthenticationCreateSessionFromV4AccessTokenBody,
  AuthenticationCreateSessionFromV4AccessTokenResponse,
  AuthenticationDeleteSessionBody,
  AuthenticationDeleteSessionResponse,
  CertificationsGetMovieCertificationResponse,
  CertificationsGetTVCertificationResponse,
  ChangesGetMovieChangeListParams,
  ChangesGetMovieChangeListResponse,
  ChangesGetTVChangeListParams,
  ChangesGetTVChangeListResponse,
  ChangesGetPersonChangeListParams,
  ChangesGetPersonChangeListResponse,
  CollectionsGetDetailsParams,
  CollectionsGetDetailsResponse,
  CollectionsGetImagesParams,
  CollectionsGetImagesResponse,
  CollectionsGetTranslationsParams,
  CollectionsGetTranslationsResponse,
  CompaniesGetDetailsResponse,
  CompaniesGetAlternativeNamesResponse,
  CompaniesGetImagesResponse,
  ConfigurationGetApiConfigurationResponse,
  ConfigurationGetCountriesResponse,
  ConfigurationGetJobsResponse,
  ConfigurationGetLanguagesResponse,
  ConfigurationGetPrimaryTranslationsResponse,
  ConfigurationGetTimezonesResponse,
  CreditsGetDetailsResponse,
  DiscoverMovieDiscoverParams,
  DiscoverMovieDiscoverResponse,
  DiscoverTVDiscoverParams,
  DiscoverTVDiscoverResponse,
  FindFindByIdParams,
  FindFindByIdResponse,
  GenresGetMovieListParams,
  GenresGetMovieListResponse,
  GenresGetTVListParams,
  GenresGetTVListResponse,
  GuestSessionsGetRatedMoviesParams,
  GuestSessionsGetRatedMoviesResponse,
  GuestSessionsGetRatedTVShowsParams,
  GuestSessionsGetRatedTVShowsResponse,
  GuestSessionsGetRatedTVEpisodesParams,
  GuestSessionsGetRatedTVEpisodesResponse,
  KeywordsGetDetailsResponse,
  KeywordsGetMoviesParams,
  KeywordsGetMoviesResponse,
  ListsGetDetailsParams,
  ListsGetDetailsResponse,
  ListsCheckItemStatusParams,
  ListsCheckItemStatusResponse,
  ListsCreateListBody,
  ListsCreateListParams,
  ListsCreateListResponse,
  ListsAddMovieBody,
  ListsAddMovieParams,
  ListsAddMovieResponse,
  ListsRemoveMovieBody,
  ListsRemoveMovieParams,
  ListsRemoveMovieResponse,
  ListsClearListParams,
  ListsClearListResponse,
  ListsDeleteListParams,
  ListsDeleteListResponse,
  MoviesGetDetailsParams,
  MoviesGetDetailsResponse,
  MoviesGetAccountStatesParams,
  MoviesGetAccountStatesResponse,
  MoviesGetAlternativeTitlesParams,
  MoviesGetAlternativeTitlesResponse,
  MoviesGetChangesParams,
  MoviesGetChangesResponse,
  MoviesGetCreditsParams,
  MoviesGetCreditsResponse,
  MoviesGetExternalIdsResponse,
  MoviesGetImagesParams,
  MoviesGetImagesResponse,
  MoviesGetKeywordsResponse,
  MoviesGetListsParams,
  MoviesGetListsResponse,
  MoviesGetRecommendationsParams,
  MoviesGetRecommendationsResponse,
  MoviesGetReleaseDatesResponse,
  MoviesGetReviewsParams,
  MoviesGetReviewsResponse,
  MoviesGetSimilarMoviesParams,
  MoviesGetSimilarMoviesResponse,
  MoviesGetTranslationsResponse,
  MoviesGetVideosParams,
  MoviesGetVideosResponse,
  MoviesGetWatchProvidersResponse,
  MoviesRateMovieBody,
  MoviesRateMovieParams,
  MoviesRateMovieResponse,
  MoviesDeleteRatingParams,
  MoviesDeleteRatingResponse,
  MoviesGetLatestResponse,
  MoviesGetNowPlayingParams,
  MoviesGetNowPlayingResponse,
  MoviesGetPopularParams,
  MoviesGetPopularResponse,
  MoviesGetTopRatedParams,
  MoviesGetTopRatedResponse,
  MoviesGetUpcomingParams,
  MoviesGetUpcomingResponse,
  NetworksGetDetailsResponse,
  NetworksGetAlternativeNamesResponse,
  NetworksGetImagesResponse,
  TrendingGetTrendingResponse,
  PeopleGetDetailsParams,
  PeopleGetDetailsResponse,
  PeopleGetChangesParams,
  PeopleGetChangesResponse,
  PeopleGetMovieCreditsParams,
  PeopleGetMovieCreditsResponse,
  PeopleGetTvCreditsParams,
  PeopleGetTvCreditsResponse,
  PeopleGetCombinedCreditsParams,
  PeopleGetCombinedCreditsResponse,
  PeopleGetExternalIdsResponse,
  PeopleGetImagesResponse,
  PeopleGetTaggedImagesParams,
  PeopleGetTaggedImagesResponse,
  PeopleGetTranslationsParams,
  PeopleGetTranslationsResponse,
  PeopleGetLatestParams,
  PeopleGetLatestResponse,
  PeopleGetPopularParams,
  PeopleGetPopularResponse,
  ReviewsGetDetailsResponse,
  SearchCompaniesParams,
  SearchCompaniesResponse,
  SearchCollectionsParams,
  SearchCollectionsResponse,
  SearchKeywordsParams,
  SearchKeywordsResponse,
  SearchMoviesParams,
  SearchMoviesResponse,
  SearchMultiSearchParams,
  SearchMultiSearchResponse,
  SearchPeopleParams,
  SearchPeopleResponse,
  SearchTVShowsParams,
  SearchTVShowsResponse,
  TVGetDetailsParams,
  TVGetDetailsResponse,
  TVGetAccountStatesParams,
  TVGetAccountStatesResponse,
  TVGetAggregateCreditsParams,
  TVGetAggregateCreditsResponse,
  TVGetAlternativeTitlesParams,
  TVGetAlternativeTitlesResponse,
  TVGetChangesParams,
  TVGetChangesResponse,
  TVGetContentRatingsParams,
  TVGetContentRatingsResponse,
  TVGetCreditsParams,
  TVGetCreditsResponse,
  TVGetEpisodeGroupsParams,
  TVGetEpisodeGroupsResponse,
  TVGetExternalIdsParams,
  TVGetExternalIdsResponse,
  TVGetImagesParams,
  TVGetImagesResponse,
  TVGetKeywordsResponse,
  TVGetRecommendationsParams,
  TVGetRecommendationsResponse,
  TVGetReviewsParams,
  TVGetReviewsResponse,
  TVGetScreenedTheatricallyParams,
  TVGetScreenedTheatricallyResponse,
  TVGetSimilarTVShowsParams,
  TVGetSimilarTVShowsResponse,
  TVGetTranslationsResponse,
  TVGetVideosParams,
  TVGetVideosResponse,
  TVGetWatchProvidersResponse,
  TVRateTVShowsBody,
  TVRateTVShowsParams,
  TVRateTVShowsResponse,
  TVDeleteRatingParams,
  TVEpisodesDeleteRatingResponse,
  TVGetLatestParams,
  TVGetLatestResponse,
  TVGetTVAiringTodayParams,
  TVGetTVAiringTodayResponse,
  TVGetTVOnTheAirParams,
  TVGetTVOnTheAirResponse,
  TVGetPopularParams,
  TVGetPopularResponse,
  TVGetTopRatedParams,
  TVGetTopRatedResponse,
  TVSeasonsGetDetailsParams,
  TVSeasonsGetDetailsResponse,
  TVSeasonsGetAccountStatesParams,
  TVSeasonsGetAccountStatesResponse,
  TVSeasonsGetAggregateCreditsParams,
  TVSeasonsGetAggregateCreditsResponse,
  TVSeasonsGetChangesParams,
  TVSeasonsGetChangesResponse,
  TVSeasonsGetCreditsParams,
  TVSeasonsGetCreditsResponse,
  TVSeasonsGetExternalIDsParams,
  TVSeasonsGetExternalIDsResponse,
  TVSeasonsGetImagesParams,
  TVSeasonsGetImagesResponse,
  TVSeasonsGetTranslationsResponse,
  TVSeasonsGetVideosParams,
  TVSeasonsGetVideosResponse,
  TVEpisodesGetDetailsParams,
  TVEpisodesGetDetailsResponse,
  TVEpisodesGetAccountStatesParams,
  TVEpisodesGetAccountStatesResponse,
  TVEpisodesGetChangesParams,
  TVEpisodesGetChangesResponse,
  TVEpisodesGetCreditsParams,
  TVEpisodesGetCreditsResponse,
  TVEpisodesGetExternalIDsResponse,
  TVEpisodesGetImagesResponse,
  TVEpisodesGetTranslationsResponse,
  TVEpisodesRateTVEpisodeBody,
  TVEpisodesRateTVEpisodeParams,
  TVEpisodesRateTVEpisodeResponse,
  TVEpisodesDeleteRatingParams,
  TVEpisodesGetVideosParams,
  TVEpisodesGetVideosResponse,
  TVEpisodeGroupsGetDetailsParams,
  TVEpisodeGroupsGetDetailsResponse,
  WatchProvidersGetAvailableRegionsParams,
  WatchProvidersGetAvailableRegionsResponse,
  WatchProvidersGetMovieProvidersParams,
  WatchProvidersGetMovieProvidersResponse,
  WatchProvidersGetTVProvidersParams,
  WatchProvidersGetTVProvidersResponse,
  TrendingGetTrendingParams,
} from "./types/v3";
import {
  V4AccountGetListsParams,
  V4AccountGetListsResponse,
  V4AccountGetFavoriteMoviesParams,
  V4AccountGetFavoriteMoviesResponse,
  V4AccountGetFavoriteTVShowsParams,
  V4AccountGetFavoriteTVShowsResponse,
  V4AccountGetMovieRecommendationsParams,
  V4AccountGetMovieRecommendationsResponse,
  V4AccountGetTVShowRecommendationsParams,
  V4AccountGetTVShowRecommendationsResponse,
  V4AccountGetMovieWatchlistParams,
  V4AccountGetMovieWatchlistResponse,
  V4AccountGetTVShowWatchlistParams,
  V4AccountGetTVShowWatchlistResponse,
  V4AccountGetRatedMoviesParams,
  V4AccountGetRatedMoviesResponse,
  V4AccountGetRatedTVShowsParams,
  V4AccountGetRatedTVShowsResponse,
  V4AuthCreateRequestTokenBody,
  V4AuthCreateRequestTokenResponse,
  V4AuthCreateAccessTokenBody,
  V4AuthCreateAccessTokenResponse,
  V4AuthDeleteAccessTokenBody,
  V4AuthDeleteAccessTokenResponse,
  V4ListGetListParams,
  V4ListGetListResponse,
  V4ListCreateListBody,
  V4ListCreateListResponse,
  V4ListUpdateListBody,
  V4ListUpdateListResponse,
  V4ListClearListResponse,
  V4ListDeleteListResponse,
  V4ListAddItemsBody,
  V4ListAddItemsResponse,
  V4ListUpdateItemsBody,
  V4ListUpdateItemsResponse,
  V4ListRemoveItemsBody,
  V4ListRemoveItemsResponse,
  V4ListCheckItemStatusParams,
  V4ListCheckItemStatusResponse,
} from "./types/v4";
import { createV3AccountMethods } from "./v3/account";
import { createV3AuthenticationMethods } from "./v3/authentication";
import { createV3CertificationsMethods } from "./v3/certifications";
import { createV3ChangesMethods } from "./v3/changes";
import { createV3CollectionsMethods } from "./v3/collections";
import { createV3CompaniesMethods } from "./v3/companies";
import { createV3ConfigurationMethods } from "./v3/configuration";
import { createV3CreditsMethods } from "./v3/credits";
import { createV3DiscoverMethods } from "./v3/discover";
import { createV3FindMethods } from "./v3/find";
import { createV3GenresMethods } from "./v3/genres";
import { createV3GuestSessionsMethods } from "./v3/guest-sessions";
import { createV3KeywordsMethods } from "./v3/keywords";
import { createV3ListsMethods } from "./v3/lists";
import { createV3MoviesMethods } from "./v3/movies";
import { createV3NetworksMethods } from "./v3/networks";
import { createV3PeopleMethods } from "./v3/people";
import { createV3ReviewsMethods } from "./v3/reviews";
import { createV3SearchMethods } from "./v3/search";
import { createV3TrendingMethods } from "./v3/trending";
import { createV3TvMethods } from "./v3/tv";
import { createV3TVEpisodeGroupsMethods } from "./v3/tv-episode-groups";
import { createV3TVEpisodesMethods } from "./v3/tv-episodes";
import { createV3TVSeasonsMethods } from "./v3/tv-seasons";
import { createV3WatchProvidersMethods } from "./v3/watch-providers";
import { createV4AccountMethods } from "./v4/account";
import { createV4AuthMethods } from "./v4/auth";
import { createV4ListMethods } from "./v4/list";

interface IAccount {
  getDetails: (params: AccountGetDetailsParams) => Promise<AccountGetDetailsResponse>;
  getCreatedLists: (params: AccountGetCreatedListsParams, accountId?: number) => Promise<AccountGetCreatedListsResponse>;
  getFavoriteMovies: (params: AccountGetFavoriteMoviesParams, accountId?: number) => Promise<AccountGetFavoriteMoviesResponse>;
  getFavoriteTVShows: (params: AccountGetFavoriteTVShowsParams, accountId?: number) => Promise<AccountGetFavoriteTVShowsResponse>;
  markAsFavorite: (params: AccountMarkAsFavoriteParams, body: AccountMarkAsFavoriteBody, accountId?: number) => Promise<AccountMarkAsFavoriteResponse>;
  getRatedMovies: (params: AccountGetRatedMoviesParams, accountId?: number) => Promise<AccountGetRatedMoviesResponse>;
  getRatedTVShows: (params: AccountGetRatedTVShowsParams, accountId?: number) => Promise<AccountGetRatedTVShowsResponse>;
  getRatedTVEpisodes: (params: AccountGetRatedTVEpisodesParams, accountId?: number) => Promise<AccountGetRatedTVEpisodesResponse>;
  getMovieWatchlist: (params: AccountGetMovieWatchlistParams, accountId?: number) => Promise<AccountGetMovieWatchlistResponse>;
  getTVShowWatchlist: (params: AccountGetTVShowWatchlistParams, accountId?: number) => Promise<AccountGetTVShowWatchlistResponse>;
  addToWatchlist: (params: AccountAddToWatchlistParams, body: AccountAddToWatchlistBody, accountId?: number) => Promise<AccountAddToWatchlistResponse>;
}

interface IAuthentication {
  createGuestSession: () => Promise<AuthenticationCreateGuestSessionResponse>;
  createRequestToken: () => Promise<AuthenticationCreateRequestTokenResponse>;
  createSession: (body: AuthenticationCreateSessionBody) => Promise<AuthenticationCreateSessionResponse>;
  createSessionWithLogin: (body: AuthenticationCreateSessionWithLoginBody) => Promise<AuthenticationCreateSessionWithLoginResponse>;
  createSessionFromV4AccessToken: (body: AuthenticationCreateSessionFromV4AccessTokenBody) => Promise<AuthenticationCreateSessionFromV4AccessTokenResponse>;
  deleteSession: (body: AuthenticationDeleteSessionBody) => Promise<AuthenticationDeleteSessionResponse>;
}

interface ICertifications {
  getMovieCertifications: () => Promise<CertificationsGetMovieCertificationResponse>;
  getTVShowCertifications: () => Promise<CertificationsGetTVCertificationResponse>;
}

interface IChanges {
  getMovieChangeList: (params?: ChangesGetMovieChangeListParams) => Promise<ChangesGetMovieChangeListResponse>;
  getTVChangeList: (params?: ChangesGetTVChangeListParams) => Promise<ChangesGetTVChangeListResponse>;
  getPersonChangeList: (params?: ChangesGetPersonChangeListParams) => Promise<ChangesGetPersonChangeListResponse>;
}

interface ICollections {
  getDetails: (collectionId: number, params?: CollectionsGetDetailsParams) => Promise<CollectionsGetDetailsResponse>;
  getImages: (collectionId: number, params?: CollectionsGetImagesParams) => Promise<CollectionsGetImagesResponse>;
  getTranslations: (collectionId: number, params?: CollectionsGetTranslationsParams) => Promise<CollectionsGetTranslationsResponse>;
}

interface ICompanies {
  getDetails: (companyId: number) => Promise<CompaniesGetDetailsResponse>;
  getAlternativeNames: (companyId: number) => Promise<CompaniesGetAlternativeNamesResponse>;
  getImages: (companyId: number) => Promise<CompaniesGetImagesResponse>;
}

interface IConfiguration {
  getAPIConfiguration: () => Promise<ConfigurationGetApiConfigurationResponse>;
  getCountries: () => Promise<ConfigurationGetCountriesResponse>;
  getJobs: () => Promise<ConfigurationGetJobsResponse>;
  getLanguages: () => Promise<ConfigurationGetLanguagesResponse>;
  getPrimaryTranslations: () => Promise<ConfigurationGetPrimaryTranslationsResponse>;
  getTimezones: () => Promise<ConfigurationGetTimezonesResponse>;
}

interface ICredits {
  getDetails: (creditId: string) => Promise<CreditsGetDetailsResponse>;
}

interface IDiscover {
  movieDiscover: (params?: DiscoverMovieDiscoverParams) => Promise<DiscoverMovieDiscoverResponse>;
  tvDiscover: (params?: DiscoverTVDiscoverParams) => Promise<DiscoverTVDiscoverResponse>;
}

interface IFind {
  findById: (externalId: string, params: FindFindByIdParams) => Promise<FindFindByIdResponse>;
}

interface IGenres {
  getMovieList: (params?: GenresGetMovieListParams) => Promise<GenresGetMovieListResponse>;
  getTVList: (params?: GenresGetTVListParams) => Promise<GenresGetTVListResponse>;
}

interface IGuestSessions {
  getRatedMovies: (guestSessionId: string, params?: GuestSessionsGetRatedMoviesParams) => Promise<GuestSessionsGetRatedMoviesResponse>;
  getRatedTVShows: (guestSessionId: string, params?: GuestSessionsGetRatedTVShowsParams) => Promise<GuestSessionsGetRatedTVShowsResponse>;
  getRatedTVEpisodes: (guestSessionId: string, params?: GuestSessionsGetRatedTVEpisodesParams) => Promise<GuestSessionsGetRatedTVEpisodesResponse>;
}

interface IKeywords {
  getDetails: (keywordId: number) => Promise<KeywordsGetDetailsResponse>;
  getMovies: (keywordId: number, params?: KeywordsGetMoviesParams) => Promise<KeywordsGetMoviesResponse>;
}

interface ILists {
  getDetails: (listId: string, params?: ListsGetDetailsParams) => Promise<ListsGetDetailsResponse>;
  checkItemStatus: (listId: string, params: ListsCheckItemStatusParams) => Promise<ListsCheckItemStatusResponse>;
  createList: (body: ListsCreateListBody, params: ListsCreateListParams) => Promise<ListsCreateListResponse>;
  addMovie: (listId: string, body: ListsAddMovieBody, params: ListsAddMovieParams) => Promise<ListsAddMovieResponse>;
  removeMovie: (listId: string, body: ListsRemoveMovieBody, params: ListsRemoveMovieParams) => Promise<ListsRemoveMovieResponse>;
  clearList: (listId: string, params: ListsClearListParams) => Promise<ListsClearListResponse>;
  deleteList: (listId: string, params: ListsDeleteListParams) => Promise<ListsDeleteListResponse>;
}

interface IMovies {
  getDetails: <T extends MoviesAppendToResponse[]>(movieId: number, params?: MoviesGetDetailsParams<T>) => Promise<MoviesGetDetailsResponse<T>>;
  getAccountStates: (movieId: number, params: MoviesGetAccountStatesParams) => Promise<MoviesGetAccountStatesResponse>;
  getAlternativeTitles: (movieId: number, params?: MoviesGetAlternativeTitlesParams) => Promise<MoviesGetAlternativeTitlesResponse>;
  getChanges: (movieId: number, params?: MoviesGetChangesParams) => Promise<MoviesGetChangesResponse>;
  getCredits: (movieId: number, params?: MoviesGetCreditsParams) => Promise<MoviesGetCreditsResponse>;
  getExternalIds: (movieId: number) => Promise<MoviesGetExternalIdsResponse>;
  getImages: (movieId: number, params?: MoviesGetImagesParams) => Promise<MoviesGetImagesResponse>;
  getKeywords: (movieId: number) => Promise<MoviesGetKeywordsResponse>;
  getLists: (movieId: number, params?: MoviesGetListsParams) => Promise<MoviesGetListsResponse>;
  getRecommendations: (movieId: number, params?: MoviesGetRecommendationsParams) => Promise<MoviesGetRecommendationsResponse>;
  getReleaseDates: (movieId: number) => Promise<MoviesGetReleaseDatesResponse>;
  getReviews: (movieId: number, params?: MoviesGetReviewsParams) => Promise<MoviesGetReviewsResponse>;
  getSimilarMovies: (movieId: number, params?: MoviesGetSimilarMoviesParams) => Promise<MoviesGetSimilarMoviesResponse>;
  getTranslations: (movieId: number) => Promise<MoviesGetTranslationsResponse>;
  getVideos: (movieId: number, params?: MoviesGetVideosParams) => Promise<MoviesGetVideosResponse>;
  getWatchProviders: (movieId: number) => Promise<MoviesGetWatchProvidersResponse>;
  rateMovie: (movieId: number, body: MoviesRateMovieBody, params?: MoviesRateMovieParams) => Promise<MoviesRateMovieResponse>;
  deleteRating: (movieId: number, params?: MoviesDeleteRatingParams) => Promise<MoviesDeleteRatingResponse>;
  getLatest: () => Promise<MoviesGetLatestResponse>;
  getNowPlaying: (params?: MoviesGetNowPlayingParams) => Promise<MoviesGetNowPlayingResponse>;
  getPopular: (params?: MoviesGetPopularParams) => Promise<MoviesGetPopularResponse>;
  getTopRated: (params?: MoviesGetTopRatedParams) => Promise<MoviesGetTopRatedResponse>;
  getUpcoming: (params?: MoviesGetUpcomingParams) => Promise<MoviesGetUpcomingResponse>;
}

interface INetworks {
  getDetails: (networkId: number) => Promise<NetworksGetDetailsResponse>;
  getAlternativeNames: (networkId: number) => Promise<NetworksGetAlternativeNamesResponse>;
  getImages: (networkId: number) => Promise<NetworksGetImagesResponse>;
}

interface ITrending {
  getTrending: (mediaType: TrendingGetTrendingParams["media_type"], timeWindow: TrendingGetTrendingParams["time_window"]) => Promise<TrendingGetTrendingResponse>;
}

interface IPeople {
  getDetails: <T extends PeopleAppendToResponse[]>(personId: number, params?: PeopleGetDetailsParams<T>) => Promise<PeopleGetDetailsResponse<T>>;
  getChanges: (personId: number, params?: PeopleGetChangesParams) => Promise<PeopleGetChangesResponse>;
  getMovieCredits: (personId: number, params?: PeopleGetMovieCreditsParams) => Promise<PeopleGetMovieCreditsResponse>;
  getTVCredits: (personId: number, params?: PeopleGetTvCreditsParams) => Promise<PeopleGetTvCreditsResponse>;
  getCombinedCredits: (personId: number, params?: PeopleGetCombinedCreditsParams) => Promise<PeopleGetCombinedCreditsResponse>;
  getExternalIds: (personId: number) => Promise<PeopleGetExternalIdsResponse>;
  getImages: (personId: number) => Promise<PeopleGetImagesResponse>;
  getTaggedImages: (personId: number, params?: PeopleGetTaggedImagesParams) => Promise<PeopleGetTaggedImagesResponse>;
  getTranslations: (personId: number, params?: PeopleGetTranslationsParams) => Promise<PeopleGetTranslationsResponse>;
  getLatest: (params?: PeopleGetLatestParams) => Promise<PeopleGetLatestResponse>;
  getPopular: (params?: PeopleGetPopularParams) => Promise<PeopleGetPopularResponse>;
}

interface IReviews {
  getDetails: (reviewId: string) => Promise<ReviewsGetDetailsResponse>;
}

interface ISearch {
  searchCompanies: (params: SearchCompaniesParams) => Promise<SearchCompaniesResponse>;
  searchCollections: (params: SearchCollectionsParams) => Promise<SearchCollectionsResponse>;
  searchKeywords: (params: SearchKeywordsParams) => Promise<SearchKeywordsResponse>;
  searchMovies: (params: SearchMoviesParams) => Promise<SearchMoviesResponse>;
  searchMulti: (params: SearchMultiSearchParams) => Promise<SearchMultiSearchResponse>;
  searchPeople: (params: SearchPeopleParams) => Promise<SearchPeopleResponse>;
  searchTV: (params: SearchTVShowsParams) => Promise<SearchTVShowsResponse>;
}

interface ITV {
  getDetails: <T extends TVAppendToResponse[]>(tvId: number, params?: TVGetDetailsParams<T>) => Promise<TVGetDetailsResponse<T>>;
  getAccountStates: (tvId: number, params?: TVGetAccountStatesParams) => Promise<TVGetAccountStatesResponse>;
  getAggregateCredits: (tvId: number, params?: TVGetAggregateCreditsParams) => Promise<TVGetAggregateCreditsResponse>;
  getAlternativeTitles: (tvId: number, params?: TVGetAlternativeTitlesParams) => Promise<TVGetAlternativeTitlesResponse>;
  getChanges: (tvId: number, params?: TVGetChangesParams) => Promise<TVGetChangesResponse>;
  getContentRatings: (tvId: number, params?: TVGetContentRatingsParams) => Promise<TVGetContentRatingsResponse>;
  getCredits: (tvId: number, params?: TVGetCreditsParams) => Promise<TVGetCreditsResponse>;
  getEpisodeGroups: (tvId: number, params?: TVGetEpisodeGroupsParams) => Promise<TVGetEpisodeGroupsResponse>;
  getExternalIds: (tvId: number, params?: TVGetExternalIdsParams) => Promise<TVGetExternalIdsResponse>;
  getImages: (tvId: number, params?: TVGetImagesParams) => Promise<TVGetImagesResponse>;
  getKeywords: (tvId: number) => Promise<TVGetKeywordsResponse>;
  getRecommendations: (tvId: number, params?: TVGetRecommendationsParams) => Promise<TVGetRecommendationsResponse>;
  getReviews: (tvId: number, params?: TVGetReviewsParams) => Promise<TVGetReviewsResponse>;
  getScreenedTheatrically: (tvId: number, params?: TVGetScreenedTheatricallyParams) => Promise<TVGetScreenedTheatricallyResponse>;
  getSimilarTVShows: (tvId: number, params?: TVGetSimilarTVShowsParams) => Promise<TVGetSimilarTVShowsResponse>;
  getTranslations: (tvId: number) => Promise<TVGetTranslationsResponse>;
  getVideos: (tvId: number, params?: TVGetVideosParams) => Promise<TVGetVideosResponse>;
  getWatchProviders: (tvId: number) => Promise<TVGetWatchProvidersResponse>;
  rateTVShow: (tvId: number, body: TVRateTVShowsBody, params?: TVRateTVShowsParams) => Promise<TVRateTVShowsResponse>;
  deleteRating: (tvId: number, params?: TVDeleteRatingParams) => Promise<TVEpisodesDeleteRatingResponse>;
  getLatest: (params?: TVGetLatestParams) => Promise<TVGetLatestResponse>;
  getTVAiringToday: (params?: TVGetTVAiringTodayParams) => Promise<TVGetTVAiringTodayResponse>;
  getTVOnTheAir: (params?: TVGetTVOnTheAirParams) => Promise<TVGetTVOnTheAirResponse>;
  getPopular: (params?: TVGetPopularParams) => Promise<TVGetPopularResponse>;
  getTopRated: (params?: TVGetTopRatedParams) => Promise<TVGetTopRatedResponse>;
}

interface ITVSeasons {
  getDetails: <T extends TVSeasonsAppendToResponse[]>(tvId: number, seasonNumber: number, params?: TVSeasonsGetDetailsParams<T>) => Promise<TVSeasonsGetDetailsResponse<T>>;
  getAccountStates: (tvId: number, seasonNumber: number, params?: TVSeasonsGetAccountStatesParams) => Promise<TVSeasonsGetAccountStatesResponse>;
  getAggregateCredits: (tvId: number, seasonNumber: number, params?: TVSeasonsGetAggregateCreditsParams) => Promise<TVSeasonsGetAggregateCreditsResponse>;
  getChanges: (tvId: number, seasonNumber: number, params?: TVSeasonsGetChangesParams) => Promise<TVSeasonsGetChangesResponse>;
  getCredits: (tvId: number, seasonNumber: number, params?: TVSeasonsGetCreditsParams) => Promise<TVSeasonsGetCreditsResponse>;
  getExternalIds: (tvId: number, seasonNumber: number, params?: TVSeasonsGetExternalIDsParams) => Promise<TVSeasonsGetExternalIDsResponse>;
  getImages: (tvId: number, seasonNumber: number, params?: TVSeasonsGetImagesParams) => Promise<TVSeasonsGetImagesResponse>;
  getTranslations: (tvId: number, seasonNumber: number) => Promise<TVSeasonsGetTranslationsResponse>;
  getVideos: (tvId: number, seasonNumber: number, params?: TVSeasonsGetVideosParams) => Promise<TVSeasonsGetVideosResponse>;
}

interface ITVEpisodes {
  getDetails: <T extends TVEpisodesAppendToResponse[]>(tvId: number, seasonNumber: number, episodeNumber: number, params?: TVEpisodesGetDetailsParams<T>) => Promise<TVEpisodesGetDetailsResponse<T>>;
  getAccountStates: (tvId: number, seasonNumber: number, episodeNumber: number, params?: TVEpisodesGetAccountStatesParams) => Promise<TVEpisodesGetAccountStatesResponse>;
  getChanges: (tvId: number, seasonNumber: number, episodeNumber: number, params?: TVEpisodesGetChangesParams) => Promise<TVEpisodesGetChangesResponse>;
  getCredits: (tvId: number, seasonNumber: number, episodeNumber: number, params?: TVEpisodesGetCreditsParams) => Promise<TVEpisodesGetCreditsResponse>;
  getExternalIds: (tvId: number, seasonNumber: number, episodeNumber: number) => Promise<TVEpisodesGetExternalIDsResponse>;
  getImages: (tvId: number, seasonNumber: number, episodeNumber: number) => Promise<TVEpisodesGetImagesResponse>;
  getTranslations: (tvId: number, seasonNumber: number, episodeNumber: number) => Promise<TVEpisodesGetTranslationsResponse>;
  rateTVEpisode: (tvId: number, seasonNumber: number, episodeNumber: number, body: TVEpisodesRateTVEpisodeBody, params?: TVEpisodesRateTVEpisodeParams) => Promise<TVEpisodesRateTVEpisodeResponse>;
  deleteRating: (tvId: number, seasonNumber: number, episodeNumber: number, params?: TVEpisodesDeleteRatingParams) => Promise<TVEpisodesDeleteRatingResponse>;
  getVideos: (tvId: number, seasonNumber: number, episodeNumber: number, params?: TVEpisodesGetVideosParams) => Promise<TVEpisodesGetVideosResponse>;
}

interface ITVEpisodeGroups {
  getDetails: (id?: string, params?: TVEpisodeGroupsGetDetailsParams) => Promise<TVEpisodeGroupsGetDetailsResponse>;
}

interface IWatchProviders {
  getAvailableRegions: (params?: WatchProvidersGetAvailableRegionsParams) => Promise<WatchProvidersGetAvailableRegionsResponse>;
  getMovieProviders: (params?: WatchProvidersGetMovieProvidersParams) => Promise<WatchProvidersGetMovieProvidersResponse>;
  getTVProviders: (params?: WatchProvidersGetTVProvidersParams) => Promise<WatchProvidersGetTVProvidersResponse>;
}

export interface V4IAccount {
  getLists: (accountId: string, params?: V4AccountGetListsParams) => Promise<V4AccountGetListsResponse>;
  getFavoriteMovies: (accountId: string, params?: V4AccountGetFavoriteMoviesParams) => Promise<V4AccountGetFavoriteMoviesResponse>;
  getFavoriteTVShows: (accountId: string, params?: V4AccountGetFavoriteTVShowsParams) => Promise<V4AccountGetFavoriteTVShowsResponse>;
  getMovieRecommendations: (accountId: string, params?: V4AccountGetMovieRecommendationsParams) => Promise<V4AccountGetMovieRecommendationsResponse>;
  getTVShowRecommendations: (accountId: string, params?: V4AccountGetTVShowRecommendationsParams) => Promise<V4AccountGetTVShowRecommendationsResponse>;
  getMovieWatchlist: (accountId: string, params?: V4AccountGetMovieWatchlistParams) => Promise<V4AccountGetMovieWatchlistResponse>;
  getTVShowWatchlist: (accountId: string, params?: V4AccountGetTVShowWatchlistParams) => Promise<V4AccountGetTVShowWatchlistResponse>;
  getRatedMovies: (accountId: string, params?: V4AccountGetRatedMoviesParams) => Promise<V4AccountGetRatedMoviesResponse>;
  getRatedTVShows: (accountId: string, params?: V4AccountGetRatedTVShowsParams) => Promise<V4AccountGetRatedTVShowsResponse>;
}

export interface V4IAuth {
  createRequestToken: (body?: V4AuthCreateRequestTokenBody) => Promise<V4AuthCreateRequestTokenResponse>;
  createAccessToken: (body: V4AuthCreateAccessTokenBody) => Promise<V4AuthCreateAccessTokenResponse>;
  deleteAccessToken: (body: V4AuthDeleteAccessTokenBody) => Promise<V4AuthDeleteAccessTokenResponse>;
}

export interface V4IList {
  getList: (params?: V4ListGetListParams, listId?: string) => Promise<V4ListGetListResponse>;
  createList: (body: V4ListCreateListBody) => Promise<V4ListCreateListResponse>;
  updateList: (body: V4ListUpdateListBody, listId?: string) => Promise<V4ListUpdateListResponse>;
  clearList: (listId?: string) => Promise<V4ListClearListResponse>;
  deleteList: (listId?: string) => Promise<V4ListDeleteListResponse>;
  addItems: (body: V4ListAddItemsBody, listId?: string) => Promise<V4ListAddItemsResponse>;
  updateItems: (body: V4ListUpdateItemsBody, listId?: string) => Promise<V4ListUpdateItemsResponse>;
  removeItems: (body: V4ListRemoveItemsBody, listId?: string) => Promise<V4ListRemoveItemsResponse>;
  checkItemStatus: (params: V4ListCheckItemStatusParams, listId?: string) => Promise<V4ListCheckItemStatusResponse>;
}

export interface ITMDBAPI {
  v3: {
    account: IAccount;
    authentication: IAuthentication;
    certifications: ICertifications;
    changes: IChanges;
    collections: ICollections;
    companies: ICompanies;
    configuration: IConfiguration;
    credits: ICredits;
    discover: IDiscover;
    find: IFind;
    genres: IGenres;
    guestSessions: IGuestSessions;
    keywords: IKeywords;
    lists: ILists;
    movies: IMovies;
    networks: INetworks;
    trending: ITrending;
    people: IPeople;
    reviews: IReviews;
    search: ISearch;
    tv: ITV;
    tvSeasons: ITVSeasons;
    tvEpisodes: ITVEpisodes;
    tvEpisodeGroups: ITVEpisodeGroups;
    watchProviders: IWatchProviders;
  };
  v4: {
    account: V4IAccount;
    auth: V4IAuth;
    list: V4IList;
  };
}

export interface Http {
  get<TResponse>(url: string, accessToken?: string): Promise<TResponse>;
  post<TResponse, TBody = undefined>(url: string, body?: TBody, accessToken?: string): Promise<TResponse>;
  put<TResponse, TBody>(url: string, body: TBody, accessToken?: string): Promise<TResponse>;
  delete<TResponse, TBody = undefined>(url: string, body?: TBody, accessToken?: string): Promise<TResponse>;
}

const createV3Methods = (client: Http, apiKey: string, v3Url: string) => {
  return {
    account: createV3AccountMethods(client, apiKey, v3Url),
    authentication: createV3AuthenticationMethods(client, apiKey, v3Url),
    certifications: createV3CertificationsMethods(client, apiKey, v3Url),
    changes: createV3ChangesMethods(client, apiKey, v3Url),
    collections: createV3CollectionsMethods(client, apiKey, v3Url),
    companies: createV3CompaniesMethods(client, apiKey, v3Url),
    configuration: createV3ConfigurationMethods(client, apiKey, v3Url),
    credits: createV3CreditsMethods(client, apiKey, v3Url),
    discover: createV3DiscoverMethods(client, apiKey, v3Url),
    find: createV3FindMethods(client, apiKey, v3Url),
    genres: createV3GenresMethods(client, apiKey, v3Url),
    guestSessions: createV3GuestSessionsMethods(client, apiKey, v3Url),
    keywords: createV3KeywordsMethods(client, apiKey, v3Url),
    lists: createV3ListsMethods(client, apiKey, v3Url),
    movies: createV3MoviesMethods(client, apiKey, v3Url),
    networks: createV3NetworksMethods(client, apiKey, v3Url),
    trending: createV3TrendingMethods(client, apiKey, v3Url),
    people: createV3PeopleMethods(client, apiKey, v3Url),
    reviews: createV3ReviewsMethods(client, apiKey, v3Url),
    search: createV3SearchMethods(client, apiKey, v3Url),
    tv: createV3TvMethods(client, apiKey, v3Url),
    tvSeasons: createV3TVSeasonsMethods(client, apiKey, v3Url),
    tvEpisodes: createV3TVEpisodesMethods(client, apiKey, v3Url),
    tvEpisodeGroups: createV3TVEpisodeGroupsMethods(client, apiKey, v3Url),
    watchProviders: createV3WatchProvidersMethods(client, apiKey, v3Url),
  };
};

const createV4Methods = (client: Http, v4Url: string, accessToken?: string) => {
  return {
    account: createV4AccountMethods(client, v4Url, accessToken),
    auth: createV4AuthMethods(client, v4Url, accessToken),
    list: createV4ListMethods(client, v4Url, accessToken),
  };
};

export default class TMDBAPI implements ITMDBAPI {
  private v3Url = "https://api.themoviedb.org/3/";
  private v4Url = "https://api.themoviedb.org/4/";

  v3: ITMDBAPI["v3"];
  v4: ITMDBAPI["v4"];

  private client: Http;
  private apiKey: string;
  private accessToken?: string;

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
    this.v3 = createV3Methods(this.client, this.apiKey, this.v3Url);
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
    this.v4 = createV4Methods(this.client, this.v4Url, this.accessToken);
  }

  constructor(client: Http, apiKey: string, accessToken?: string) {
    this.apiKey = apiKey;
    this.accessToken = accessToken;

    this.client = client;

    this.v3 = createV3Methods(this.client, this.apiKey, this.v3Url);
    this.v4 = createV4Methods(this.client, this.v4Url, this.accessToken);
  }
}

export * from "./types";
