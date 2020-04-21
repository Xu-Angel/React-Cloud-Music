import React from 'react';
import { Redirect } from "react-router-dom";
import Home from '../page/Home/index';
import Recommend from '../page/Recommend';
import Singers from '../page/Singers';
import Rank from '../page/Rank';


export  const routes: any =  [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        component: Recommend
      },
      {
        path: "/recommend",
        component: Recommend
      },
      {
        path: "/singers",
        component: Singers
      },
      {
        path: "/rank",
        component: Rank
      }
    ]
  }
]