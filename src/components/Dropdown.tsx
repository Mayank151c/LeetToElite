import { useState } from "react";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function Dropdown(props: { title: string, children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <List sx={{ maxWidth: "100%", bgcolor: "#000", color: "white", borderRadius: "8px", p: 1, mb: 1 }}>
      <ListItemButton disableRipple onClick={() => setOpen(!open)}>
        <ListItemText primary={props.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse sx={{ mt:1, pl: 2, backgroundColor: "#1a1a1a" }} in={open} timeout={100} unmountOnExit>
        {props.children}
      </Collapse>
    </List>
  );
}
