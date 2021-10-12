import { useContext } from "react";
import { SocialContext } from "../context/SocialContext";

export default function useSocial() {
  return useContext(SocialContext);
}
