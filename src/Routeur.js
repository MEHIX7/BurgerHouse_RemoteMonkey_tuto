import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'

export default function Routeur() {
  return (
        <BrowserRouter>
          <Switch>
              <Route exact path="/">
                  <HomePage />
              </Route>
          </Switch>
        </BrowserRouter>
  )
}
