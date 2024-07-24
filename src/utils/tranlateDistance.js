export const translateDistance = (distance) => {
  if (isNaN(distance)) {
    return "거리 표시 불가";
  } else if (distance < 1000) {
    return `${distance.toFixed(0)}m`;
  }
  const km = distance / 1000;
  return `${km.toFixed(1)}km`;
};
