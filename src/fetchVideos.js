import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import app from "./firebaseConfig.js";

const storage = getStorage(app);

export const getVideos = async () => {
  try {
    const vidRefList = (await listAll(ref(storage, "videos"))).items;
    const videos = await convertToURL(vidRefList);
    return videos;
  } catch (err) {}
};

const convertToURL = async (vidRefs) => {
  try {
    const vidPromises = vidRefs.map(async (vidRef) => {
      const url = await getDownloadURL(vidRef);
      return url;
    });
    const resolvedUrls = await Promise.all(vidPromises);
    return resolvedUrls;
  } catch (err) {}
};
