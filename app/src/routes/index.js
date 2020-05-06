import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import BlankLayout from "../layouts/BlankLayout";

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const RecommendComponent = lazy(() => import("../page/Recommend/"));
const SingersComponent = lazy(() => import("../page/Singers/"));
const RankComponent = lazy(() => import("../page/Rank/"));
const AlbumComponent = lazy(() => import("../page/Album/"));
const SingerComponent = lazy(() => import("./../page/Singer/"));
const SearchComponent = lazy(() => import("./../page/Search/"));
const LoginComponent = lazy(() => import("./../page/User/Login"));

export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: "/",
        component: HomeLayout,
        routes: [
          {
            path: "/",
            exact: true,
            render: () => <Redirect to={"/recommend"} />
          },
          {
            path: "/login",
            component: SuspenseComponent(LoginComponent)
          },
          {
            path: "/recommend",
            component: SuspenseComponent(RecommendComponent),
            routes: [
              {
                path: "/recommend/:id",
                component: SuspenseComponent(AlbumComponent)
              }
            ]
          },
          {
            path: "/singers",
            component: SuspenseComponent(SingersComponent),
            key: "singers",
            routes: [
              {
                path: "/singers/:id",
                component: SuspenseComponent(SingerComponent)
              }
            ]
          },
          {
            path: "/rank/",
            component: SuspenseComponent(RankComponent),
            key: "rank",
            routes: [
              {
                path: "/rank/:id",
                component: SuspenseComponent(AlbumComponent)
              }
            ]
          },
          {
            path: "/album/:id",
            exact: true,
            key: "album",
            component: SuspenseComponent(AlbumComponent)
          },
          {
            path: "/search",
            exact: true,
            key: "search",
            component: SuspenseComponent(SearchComponent)
          }
        ]
      }
    ]
  }
];
