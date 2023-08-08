import nestedObject from "./nestedObject.js";

export default function makeMainTable(el) {
  const mainTable = document.getElementById("headTable");
  const mainTr = mainTable.appendChild(document.createElement("tr"));
  Object.keys(el).forEach((key) => {
    const mainTd = mainTr.appendChild(document.createElement("td"));

    if (typeof el[`${key}`] === "object") {
      mainTd.append(nestedObject(el[`${key}`]));
    } else {
      mainTd.append(el[`${key}`]);
    }
  });
}
