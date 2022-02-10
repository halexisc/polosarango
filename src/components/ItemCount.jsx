import React, { useState } from "react";
import { ButtonGroup, Badge, Button } from "@mui/material";
import {
  ShoppingCart,
  Add,
  Remove,
} from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ItemCount() {
  const [itemCount, setItemCount] = React.useState(1);

  return (
    <div style={{ display: "block", padding: 30 }}>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCart />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <Remove fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1, 5);
            }}
          >
            {" "}
            <Add fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default ItemCount;
