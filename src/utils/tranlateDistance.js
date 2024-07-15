export const translateDistance = (distance) => {
  if (distance < 1000) {
    return `${distance.toFixed(0)}m`;
  }
  const km = distance / 1000;
  return `${km.toFixed(1)}km`;
};
