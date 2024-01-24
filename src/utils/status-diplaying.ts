export const getStatusColor = (status: string) => {
  switch (status) {
    case "Running":
      return "#68aa6a";
    case "Stopped":
      return "#dddc82";
    case "Error":
      return "#cc5757";
    default:
      return "#e0e0e0";
  }
};
