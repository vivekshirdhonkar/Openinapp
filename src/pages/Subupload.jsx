import React, { useState } from "react";
import MultiSelectDropdown from "./MultiSelectDropdown.jsx";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";
import TagChip from "./TagChip";
const Subupload = ({ data }) => {
  const columns = [
    { id: "siNo", label: "SI No.", minWidth: 100 },
    { id: "link", label: "Links", minWidth: 100 },
    { id: "prefix", label: "Prefix", minWidth: 100 },
    { id: "addtags", label: "Add Tags", minWidth: 100 },
    { id: "tags", label: "Selected Tags", minWidth: 100 },
  ];

  const allTags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"];

  const [rowTags, setRowTags] = useState(data.map((item) => []));

  const handleSelect = (index, selectedTags) => {
    const newRowTags = [...rowTags];
    newRowTags[index] = selectedTags;
    setRowTags(newRowTags);
  };
  const handleDelete = (index, tagToRemove) => {
    const newRowTags = [...rowTags];
    const tagsToKeep = newRowTags[index].filter((tag) => tag !== tagToRemove);
    newRowTags[index] = tagsToKeep;
    setRowTags(newRowTags);
  };

  return (
    <Box className="bg- p-4 rounded-md">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell className="border-b border-gray-200 p-2 text-left">
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={row.siNo}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  className="border-b border-gray-200 p-2"
                >
                  {row.siNo}
                </TableCell>
                <TableCell className="border-b border-gray-200 p-2">
                  <a href={row.link} target="_blank" rel="noreferrer">
                    {row.link}
                  </a>
                </TableCell>
                <TableCell className="border-b border-gray-200 p-2">
                  {row.prefix}
                </TableCell>
                <TableCell className="border-b border-gray-200 p-2">
                  <MultiSelectDropdown
                    tags={allTags}
                    onSelect={(selectedTags) =>
                      handleSelect(index, selectedTags)
                    }
                    selectedTags={rowTags[index]}
                  />
                </TableCell>
                <TableCell className="flex border-b border-gray-200 p-1">
                  {rowTags[index].map((tag, index) => (
                    <TagChip
                      key={tag}
                      label={tag}
                      onRemove={() => handleDelete(index, tag)}
                    />
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Subupload;
