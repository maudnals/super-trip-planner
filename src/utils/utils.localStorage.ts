export function getTrips() {
  const trips = localStorage.getItem('trips');
  return trips ? JSON.parse(trips) : {};
}

export function setTrips(trips: string) {
  localStorage.setItem('trips', trips);
}
