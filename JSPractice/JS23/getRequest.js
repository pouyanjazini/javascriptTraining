import makeMainTable from "./makeMainTable.js";
import makeHeadTable from "./makeHeadTable.js";

export default function getRequest(response) {
  for (const key in response) {
    if (key < 1) {
      if (Object.hasOwnProperty.call(response, key)) {
        const el = response[key];
        makeHeadTable(el);
      }
    }
  }

  for (const key in response) {
    if (Object.hasOwnProperty.call(response, key)) {
      const el = response[key];
      makeMainTable(el);
    }
  }
}
