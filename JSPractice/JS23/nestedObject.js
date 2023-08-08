export default function nestedObject(obj) {
  let text = "";
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] !== "object") {
      text += " " + obj[key];
    } else {
      Object.keys(obj[key]).forEach((nestedKey) => {
        if (typeof obj[key][nestedKey] !== "object") {
          text += " " + obj[key][nestedKey];
        }
      });
    }
  });

  return text;
}
