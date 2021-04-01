/* eslint-disable */
const errorCallback = (error) => {
  return {
    error: `Error (${error.code}): ${error.message}`,
  };
};

const getCurrentPositionPromise = ({
  enableHighAccuracy = false,
  timeout = 5000,
  maximumAge = 10000,
} = {}) => {
  const options = {
    enableHighAccuracy,
    timeout,
    maximumAge,
  };
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject({ error: "Your browser doesn't support geolocation" });
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (!position) {
          return reject({
            error: `Position could not be fetched`,
          });
        }
        return resolve(position);
      },
      (error) => {
        return reject(errorCallback(error));
      },
      options,
    );
  });
};

module.exports = { getCurrentPositionPromise };
