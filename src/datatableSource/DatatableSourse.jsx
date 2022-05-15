export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWidthImg">
          <img src={params.row.img} alt="" className="cellImg" />
          {params.row.username}
        </div>
      );
    },
  },

  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },

  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWidthStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "James",
    status: "active",
    email: "1james@gmail.com",
    age: "30",
  },
  {
    id: 2,
    username: "Virat",
    status: "pending",
    email: "2virat@gmail.com",
    age: "28",
  },
  {
    id: 3,
    username: "Maxwel",
    status: "active",
    email: "3maxwel@gmail.com",
    age: "32",
  },
  {
    id: 4,
    username: "Hasaranga",
    status: "pending",
    email: "4hasaranga@gmail.com",
    age: "25",
  },
  {
    id: 5,
    username: "Karthik",
    status: "active",
    email: "5karthik@gmail.com",
    age: "29",
  },
  {
    id: 6,
    username: "Karthik",
    status: "active",
    email: "5karthik@gmail.com",
    age: "29",
  },
  {
    id: 7,
    username: "Karthik",
    status: "active",
    email: "5karthik@gmail.com",
    age: "29",
  },
  {
    id: 8,
    username: "Karthik",
    status: "active",
    email: "5karthik@gmail.com",
    age: "29",
  },
  {
    id: 9,
    username: "Karthik",
    status: "active",
    email: "5karthik@gmail.com",
    age: "29",
  },
  {
    id: 10,
    username: "Karthik",
    status: "active",
    email: "5karthik@gmail.com",
    age: "29",
  },
];
