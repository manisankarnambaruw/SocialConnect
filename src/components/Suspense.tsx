import { Suspense } from "react";
import { ExtendedSuspenseProps } from "../interfaces";
import Loader from "./Loader";

export default function SuspenseWrapper({
  children,
  fallback,
}: ExtendedSuspenseProps) {
  return <Suspense fallback={fallback || <Loader />}>{children}</Suspense>;
}
