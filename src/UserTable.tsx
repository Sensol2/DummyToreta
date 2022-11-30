import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: id, headerName: "SID", width: 70 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  {
    field: age,
    headerName: age,
    type: "number",
    width: 90,
  },
  {
    field: phoneNumber,
    headerName: "P.H",
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    name: "紬",
    age: 22,
    visit: 0,
    phoneNumber: "010-1111-1234",
  },
  {
    id: 2,
    name: "結菜",
    age: 24,
    visit: 0,
    phoneNumber: "010-1111-1235",
  },
  {
    id: 3,
    name: "莉子",
    age: 23,
    visit: 0,
    phoneNumber: "010-1111-1236",
  },
  {
    id: 4,
    name: "凛",
    age: 25,
    visit: 0,
    phoneNumber: "010-1111-1237",
  },
  {
    id: 5,
    name: "葵",
    age: 24,
    visit: 0,
    phoneNumber: "010-1111-1238",
  },
  {
    id: 6,
    name: "芽依",
    age: 22,
    visit: 0,
    phoneNumber: "010-1111-1239",
  },
  {
    id: 7,
    name: "陽葵",
    age: 21,
    visit: 0,
    phoneNumber: "010-1111-1240",
  },
  {
    id: 8,
    name: "澪",
    age: 20,
    visit: 0,
    phoneNumber: "010-1111-1241",
  },
  {
    id: 9,
    name: "凜",
    age: 24,
    visit: 0,
    phoneNumber: "010-1111-1242",
  },
  {
    id: 10,
    name: "蓮",
    age: 23,
    visit: 0,
    phoneNumber: "010-1111-1243",
  },
  {
    id: 11,
    name: "朝陽",
    age: 25,
    visit: 0,
    phoneNumber: "010-1111-1244",
  },
  {
    id: 12,
    name: "樹",
    age: 27,
    visit: 0,
    phoneNumber: "010-1111-1245",
  },
  {
    id: 13,
    name: "律",
    age: 26,
    visit: 0,
    phoneNumber: "010-1111-1246",
  },
  {
    id: 14,
    name: "陽翔",
    age: 30,
    visit: 0,
    phoneNumber: "010-1111-1247",
  },
  {
    id: 15,
    name: "湊",
    age: 44,
    visit: 0,
    phoneNumber: "010-1111-1248",
  },
  {
    id: 16,
    name: "結翔",
    age: 35,
    visit: 0,
    phoneNumber: "010-1111-1249",
  },
  {
    id: 17,
    name: "大翔",
    age: 36,
    visit: 0,
    phoneNumber: "010-1111-1250",
  },
  {
    id: 18,
    name: "大和",
    age: 37,
    visit: 0,
    phoneNumber: "010-1111-1251",
  },
  {
    id: 19,
    name: "蒼",
    age: 38,
    visit: 0,
    phoneNumber: "010-1111-1252",
  },
  {
    id: 20,
    name: "颯",
    age: 39,
    visit: 0,
    phoneNumber: "010-1111-1253",
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
