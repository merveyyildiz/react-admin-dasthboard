import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]} lineHeight="inherit">
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  const handleCheckboxSelected = (selectionRows) => {
    console.log("selected Row:", selectionRows);
    setRowSelectionModel(selectionRows);
  };

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoices Balances" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-container--top [role=row]": {
            backgroundColor: colors.primary[400],
          },
          "& .name-column-cell": {
            color: colors.greenAccent[300],
          },
          "&. MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            handleCheckboxSelected(newRowSelectionModel);
          }}
          rowSelectionModel={rowSelectionModel}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
