import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Add = lazy(() => import("../pages/Add"));
const Relationship = lazy(() => import("../pages/Relationship"));
const VisualRelationship = lazy(
  () => import("../components/VisualRelationsip")
);

export const appRoutes = () => ({
  home: {
    path: "/home",
    exact: true,
    component: Home,
  },
  add: {
    path: "/add/:peopleId",
    exact: true,
    component: Add,
  },
  relationship: {
    path: "/relationship",
    exact: false,
    component: Relationship,
  },
});

export const internalRoutes = () => ({
  visualRelationship: {
    path: "/relationship/:relation",
    exact: true,
    component: VisualRelationship,
  },
});
