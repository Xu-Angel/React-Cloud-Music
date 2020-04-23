import React from 'react';
import { Redirect } from "react-router-dom";
import Recommend from '../page/Recommend';
import Singers from '../page/Singers';
import Rank from '../page/Rank';
import Home from '../page/Home';
import Album from '../page/Album';
import Singer from '../page/Singer';

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
        component: Singers,
        routes: [
          {
            path: '/singers/:id',
            component: Singer
          }
        ]
      },
      {
        path: "/rank/",
        component: Rank,
        key: "rank",
        routes: [
          {
            path: "/rank/:id",
            component: Album
          }
        ]
      },
    ]
  }
]