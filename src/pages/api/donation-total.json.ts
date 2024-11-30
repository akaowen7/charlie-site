export const prerender = false;

import type { APIRoute } from "astro";

import { client_email, private_key } from "../../../gsheets-creds.json";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const jwt = new JWT({
  email: client_email,
  key: private_key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(
  "1NaKdCb1YOgu5dp2zuIAbvjmrZzh_mHq8UwAXKroD3O4",
  jwt
);
await doc.loadInfo();
const sheet = doc.sheetsByTitle["RaisedTotal"];

export const GET: APIRoute = async () => {
  await sheet.loadCells("A1:A2");
  const a1 = sheet.getCell(0, 0).value;

  return new Response(
    JSON.stringify({
      total: a1,
    })
  );
};
