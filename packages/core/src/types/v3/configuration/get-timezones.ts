export type ConfigurationGetTimezonesResponse =
  ConfigurationGetTimezonesResult[];

export interface ConfigurationGetTimezonesResult {
  iso_3166_1: string;
  zones: string[];
}
