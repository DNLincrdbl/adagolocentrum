import data from "./scraped.json";

export type Album = {
  id: string;
  title: string;
  images: string[];
};

export const albums = data.albums as Album[];
export const tractorPhotos = data.tractor as string[];
