import { GraphNode } from "@urbit/api/dist/graph/types";
import React from "react";

export type setStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export type Fact = any;

export interface GraphUpdateAddNodes {
  resource: {
    name: string;
    ship: string
  };
  nodes: { [rid: string]: GraphNode }
}
