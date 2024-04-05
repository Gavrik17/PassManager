import React from "react";
import { useDispatch } from "react-redux";
import { sort } from "entites/group";

export const Sort = ({ children }) => {

  const dispatch = useDispatch()
  const sorting = () => {dispatch(sort())}
// Не работает именно onclick
  return (
    <span onClick={sorting}>
      {children}
    </span>
  )
}