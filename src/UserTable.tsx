import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "SID", width: 70 },
  { field: "name", headerName: "Name", width: 100 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "visit",
    headerName: "Visit",
    type: "number",
    width: 90,
  },
  {
    field: "phoneNumber",
    headerName: "P.H",
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    name: "紬",
    age: 22,
    visit: 1,
    phoneNumber: "+811013241745",
  },
  {
    id: 2,
    name: "結菜",
    age: 24,
    visit: 2,
    phoneNumber: "+811029483710",
  },
  {
    id: 3,
    name: "莉子",
    age: 23,
    visit: 0,
    phoneNumber: "+811039482057",
  },
  {
    id: 4,
    name: "凛",
    age: 25,
    visit: 3,
    phoneNumber: "+811039485739",
  },
  {
    id: 5,
    name: "葵",
    age: 24,
    visit: 5,
    phoneNumber: "+811028472928",
  },
  {
    id: 6,
    name: "芽依",
    age: 22,
    visit: 2,
    phoneNumber: "+811010284729",
  },
  {
    id: 7,
    name: "陽葵",
    age: 21,
    visit: 4,
    phoneNumber: "+811029384639",
  },
  {
    id: 8,
    name: "澪",
    age: 20,
    visit: 1,
    phoneNumber: "+811001928374",
  },
  {
    id: 9,
    name: "凜",
    age: 24,
    visit: 3,
    phoneNumber: "+811020391839",
  },
  {
    id: 10,
    name: "蓮",
    age: 23,
    visit: 2,
    phoneNumber: "+811077227391",
  },
  {
    id: 11,
    name: "朝陽",
    age: 25,
    visit: 5,
    phoneNumber: "+811011839292",
  },
  {
    id: 12,
    name: "樹",
    age: 27,
    visit: 1,
    phoneNumber: "+811029381930",
  },
  {
    id: 13,
    name: "律",
    age: 26,
    visit: 2,
    phoneNumber: "+811020391838",
  },
  {
    id: 14,
    name: "陽翔",
    age: 30,
    visit: 1,
    phoneNumber: "+811039371837",
  },
  {
    id: 15,
    name: "湊",
    age: 44,
    visit: 3,
    phoneNumber: "+811010293928",
  },
  {
    id: 16,
    name: "結翔",
    age: 35,
    visit: 2,
    phoneNumber: "+811010392938",
  },
  {
    id: 17,
    name: "大翔",
    age: 36,
    visit: 2,
    phoneNumber: "+8110110101928",
  },
  {
    id: 18,
    name: "大和",
    age: 37,
    visit: 1,
    phoneNumber: "+811010293918",
  },
  {
    id: 19,
    name: "蒼",
    age: 38,
    visit: 1,
    phoneNumber: "+811010293928",
  },
  {
    id: 20,
    name: "颯",
    age: 39,
    visit: 1,
    phoneNumber: "+811004049494",
  },
];

export default function UserTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
