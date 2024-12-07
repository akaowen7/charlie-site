export const prerender = false;

import type { APIRoute } from "astro";

import {
  GoogleSpreadsheet,
  GoogleSpreadsheetWorksheet,
} from "google-spreadsheet";
import { JWT } from "google-auth-library";

let doc: GoogleSpreadsheet;
let sheet: GoogleSpreadsheetWorksheet;

try {
  const jwt = new JWT({
    email: import.meta.env.CLIENT_EMAIL,
    key: import.meta.env.PRIVATE_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  doc = new GoogleSpreadsheet(
    "1NaKdCb1YOgu5dp2zuIAbvjmrZzh_mHq8UwAXKroD3O4",
    jwt
  );
  await doc.loadInfo();
  sheet = doc.sheetsByTitle["RaisedTotal"];
} catch (e) {
  console.error(e);
}

export const GET: APIRoute = async () => {
  let a1: number | undefined;

  try {
    await sheet.loadCells("A1:A2");
    a1 = sheet.getCell(0, 0).numberValue;
  } catch (e) {
    a1 = 72.64;
    console.error(e);
  }

  return new Response(
    JSON.stringify({
      total: a1,
    })
  );
};
