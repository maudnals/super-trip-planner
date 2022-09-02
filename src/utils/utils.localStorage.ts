export function getTrips() {
  const trips = localStorage.getItem('trips');
  return trips ? JSON.parse(trips) : {};
}
