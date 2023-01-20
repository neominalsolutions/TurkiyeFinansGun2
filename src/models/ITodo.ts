import React from "react";

export interface TodoState {
  id: number;
  title: string;
  completed?: boolean;
}
