type Coordinates = {
  latitude: number;
  longitude: number;
};

// Rio de Janeiro's coordinates as default fallback
const RIO_DE_JANEIRO_COORDS: Coordinates = {
  latitude: -22.9068,
  longitude: -43.1729,
};

export const getUserCoordinates = (): Promise<Coordinates> =>{
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(RIO_DE_JANEIRO_COORDS);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.log("Coordinates not found", error.message);
        resolve(RIO_DE_JANEIRO_COORDS);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  });
}
