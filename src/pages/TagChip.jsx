import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./TagChip.css";

const TagChip = ({ label, onRemove }) => {
  return (
    <div className="tag-chip justify-between">
      <span className="text-xs font-medium mr-1">{label}</span>
      {/* <IconButton size="small" onClick={onRemove} className="delete-button"> */}
      <DeleteIcon onClick={onRemove} fontSize="small" />
      {/* </IconButton> */}
    </div>
  );
};

export default TagChip;
