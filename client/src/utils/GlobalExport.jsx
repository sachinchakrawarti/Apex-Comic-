import React from "react";

//NavPages
export const Apex_Home = React.lazy(
  () => import("../pages/apex_home/Apex_Home"),
);

export const Characters = React.lazy(
  () => import("../pages/navpages/apex_characters/Characters"),
);
export const CharactersDetails = React.lazy(
  () => import("../pages/navpages/apex_characters/CharactersDetails"),
);
