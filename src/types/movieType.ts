export interface Root {
    data: Data;
    status: number;
    statusText: string;
    headers: Headers;
    config: Config;
    request: Request;
}

export interface Data {
    name?: string;
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: BelongsToCollection;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    mediaType?: string;
}

export interface BelongsToCollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface Headers {
    "access-control-allow-origin": string;
    "access-control-expose-headers": string;
    "alt-svc": string;
    "cache-control": string;
    "content-encoding": string;
    "content-type": string;
    date: string;
    etag: string;
    server: string;
    vary: string;
    via: string;
    "x-amz-cf-id": string;
    "x-amz-cf-pop": string;
    "x-cache": string;
    "x-memc": string;
    "x-memc-age": string;
    "x-memc-expires": string;
    "x-memc-key": string;
}

export interface Config {
    transitional: Transitional;
    adapter: string[];
    transformRequest: any[];
    transformResponse: any[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: Env;
    headers: Headers2;
    method: string;
    url: string;
}

export interface Transitional {
    silentJSONParsing: boolean;
    forcedJSONParsing: boolean;
    clarifyTimeoutError: boolean;
}

export interface Env {}

export interface Headers2 {
    Accept: string;
}

export interface Request {}
