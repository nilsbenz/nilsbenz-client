export interface Genre {
  genre: string;
  videos: Video[];
}

export interface Video {
  displayName: string;
  link: string;
}

export interface VideoCollection {
  lifestyle: Video[];
  weddings: Video[];
}
