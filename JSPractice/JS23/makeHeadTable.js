export default function makeHeadTable(el) {
  const mainHeadTable = document
    .getElementById("root")
    .appendChild(document.createElement("div"));

  const mainTable = mainHeadTable.appendChild(document.createElement("table"));
  mainTable.setAttribute("id", "headTable");
  const mainTr = mainTable.appendChild(document.createElement("tr"));
  mainTr.setAttribute("id", "trHead");

  for (const key in el) {
    const mainTh = mainTr.appendChild(document.createElement("th"));
    mainTh.append(key);
  }
}
