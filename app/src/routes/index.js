import React from 'react';
import { Redirect } from "react-router-dom";
import Home from '../page/Home';
import Recommend from '../page/Recommend';
import Singers from '../page/Singers';
import Rank from '../page/Rank';
import Album from '../page/Album'
export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/recommend"}/>
        )
      },
      {
        path: "/recommend/",
        component: Recommend,
        routes: [
          {
            path: "/recommend/:id",
            component: Album
          }
        ]
      },
      {
        path: "/singers",
        component: Singers
      },
      {
        path: "/rank",
        component: Rank,
        key: "rank", // 详情统一页面 添加标志
        routes: [
          {
            path: "/rank/:id",
            component: Album
          }
        ]
      }
    ]
  }
]