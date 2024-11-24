export interface Movie {
  params: {
    include_adult: string;
    include_video: string;
    language: string;
    page: string;
    sort_by: string;
  };
  headers: {
    accept: string;
  };
}
