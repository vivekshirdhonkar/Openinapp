import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import TagChip from "./TagChip";

const MultiSelectDropdown = ({ tags, onSelect, selectedTags }) => {
  const [tagState, setTagState] = useState(selectedTags);

  const handleChange = (event) => {
    const newTags = event.target.value;
    setTagState(newTags);
    onSelect(newTags);
  };

  return (
    <Select multiple value={tagState} onChange={handleChange}>
      {tags.map((tag) => (
        <MenuItem key={tag} value={tag}>
          {tag}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MultiSelectDropdown;
