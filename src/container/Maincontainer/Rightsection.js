import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AlertContainer from "./AlertContainer/AlertContainer";
import ButtonContainer from "./ButtonContainer/ButtonContainer";
import CardContainer from "./CardContainer/CardContainer";
import ShadowContainer from "./ShadowContainer/ShadowContainer";
import TextfieldContainer from "./TextfieldContainer/TextfieldContainer";
import ProgressContainer from "./ProgressContainer/ProgressContainer";
import DropdownContainer from "./DropdownContainer/DropdownContainer";
import AvatarContainer from "./AvatarContainer/AvatarContainer";
import NavbarContainer from "./NavbarContainer/NavbarContainer";
import NavTabContainer from "./NavTabContainer/NavTabContainer";
import PageNotFound from "../../PageNotFound";

const Rightsection = () => {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <div>
      <Switch>
        <Route path="/component" exact component={AlertContainer} />
        <Route path="/component/button" exact component={ButtonContainer} />

        <Route path="/component/card" exact component={CardContainer} />
        <Route path="/component/alert" exact component={AlertContainer} />
        <Route
          path="/component/textfield"
          exact
          component={TextfieldContainer}
        />
        <Route path="/component/shadows" exact component={ShadowContainer} />
        <Route path="/component/progress" exact component={ProgressContainer} />
        <Route
          path="/component/dropdowns"
          exact
          component={DropdownContainer}
        />
        <Route path="/component/avatar" exact component={AvatarContainer} />
        <Route path="/component/navbar" exact component={NavbarContainer} />
        <Route path="/component/navs|tabs" exact component={NavTabContainer} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default Rightsection;
