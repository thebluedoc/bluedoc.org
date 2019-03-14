export const languageSuffix = language => {
  switch (language) {
    case "zh":
      return "-cn";
    default:
      return "";
  }
};
