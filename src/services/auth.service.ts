import { authKey } from "@/constants/storageKey";
import { decodeToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authLocalStorageData = getFromLocalStorage(authKey);
  console.log(
    "🚀 ~ file: auth.service.ts:10 ~ getUserInfo ~ authLocalStorageData:",
    authLocalStorageData
  );
  if (authLocalStorageData) {
    const decodedData = decodeToken(authLocalStorageData);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};
export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};
