import React from "react";
import { NavigationPanel } from "./NavigationPanel";
import { NavigationPanelHeader } from "./NavigationPanel/NavigationPanelHeader";
import { NavigationPanelSections } from "./NavigationPanel/NavigationPanelSections";
import { SingleSection } from "./NavigationPanel/NavigationPanelSections/SingleSection";
import { Screen } from "./Screen";
import { NavigationBar } from "./Screen/NavigationBar";
import { MainContentPart } from "./Screen/MainContentPart";
import { ProfilePage } from "./Screen/MainContentPart/pages/ProfilePage";
// Reset Standard Styles
import "./reset.css";
import "./fonts.css";
import "./index.css";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




export class App extends React.Component {
  render() {
    return (
      <div className="full-app">
        <Router>
          <NavigationPanel>
            <NavigationPanelHeader></NavigationPanelHeader>
            <NavigationPanelSections>

              <Link to="/">
                <SingleSection classForIcon="fa fa-home fa-lg" title="Main" iconColor="silver-icon" />
              </Link>

              <Link to="/profile">
                <SingleSection classForIcon="fa fa-user" title="Profile" iconColor="silver-icon" />
              </Link>

              <Link to="/blog">
                <SingleSection classForIcon="fa fa-newspaper-o" title="My Blog" iconColor="silver-icon" />
              </Link>

              <Link to="/settings">
                <SingleSection classForIcon="fa fa-cog" title="Settings" iconColor="silver-icon" />
              </Link>

              <Link to="/faq">
                <SingleSection classForIcon="fa fa-question-circle" title="FAQ" iconColor="silver-icon" />
              </Link>

            </NavigationPanelSections>
          </NavigationPanel>

          <Screen>
            <NavigationBar></NavigationBar>
            <MainContentPart>
              <Switch>
                <Route path="/profile">
                  <ProfilePage />
                </Route>
                <Route path="/blog">
                  <div>blog</div>
                </Route>
                <Route path="/settings">
                  <div>settings</div>
                </Route>
                <Route path="/faq">
                  <div>faq</div>
                </Route>
                <Route path="/">
                  <div>main</div>
                </Route>
              </Switch>
            </MainContentPart>
          </Screen>
        </Router>
      </div>
    );
  };
}
