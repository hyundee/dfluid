import axios, { isAxiosError } from "axios";

const ACCESS_KEY = "RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM";

export const getBackgroundData = async () => {
  try {
    const res = await axios.get(
      `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
    );
    const imageUrl = res.data.urls.regular;
    return imageUrl;
  } catch (error: any) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
  }
};
