import { useCallback } from "react";

export const fecthApi = async () => {
  const res = await fetch("190.60.237.163/articulos/?buscar=001&size=20")
  const data = res.json();
   if (data === 200) {
    console.log("peticion correcta")
   } else {
    console.log("peticion denegada")
   }
  return data
}