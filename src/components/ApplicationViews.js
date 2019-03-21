import React, { Component } from "react"
import { Route } from "react-router-dom"
import CampaignManager from "../modules/CampaignManager";
import CampaignList from "./campaigns/campaignList";
import CampaignForm from "./campaigns/campaignForm";
import CampaignEditForm from "./campaigns/campaignEditForm";
import HomePage from "./homePage/homePage";
import SelectedCampaign from "./campaigns/selectedCampaign";
import AllCampaignList from "./campaigns/allCampaignList";

class ApplicationViews extends Component {
  state = {
    campaigns: [],
    encounters: [],
  }

  componentDidMount() {

    CampaignManager.getAll().then(allCampaigns => {
      this.setState({
        campaigns: allCampaigns
      })
    })
  }



  deleteCampaign = id => {
    return fetch(`http://localhost:8000/campaigns/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:8000/campaigns`))
      .then(e => e.json())
      .then(campaigns => this.setState({
        campaigns: campaigns
      })
      )
  };

  editCampaign = (campaign) => {
    return CampaignManager.updateCampaign(campaign).then(() => {
      return CampaignManager.getAll()
    }
    ).then(campaigns => this.setState(
      {
        campaigns: campaigns
      }
    ))
  };

  addCampaign = campaign =>
    CampaignManager.addNewCampaign(campaign)
      .then(() => CampaignManager.getAll())
      .then(campaigns =>
        this.setState({
          campaigns: campaigns
        })
      );

  updateEditedCampaign = (editedCampaignObject) => {
    return CampaignManager.updateCampaign(editedCampaignObject)
      .then(() => CampaignManager.getAll())
      .then(campaigns => {
        this.setState({
          campaigns: campaigns
        })
      });
  };

  render() {
    console.log(this.props.activeUser)
    return <React.Fragment>
      <Route exact path="/campaigns" render={(props) => {
        return <CampaignList
          activeUser={this.activeUser}
          getCampaign={this.get}
          deleteCampaign={this.deleteCampaign}
          campaigns={this.state.campaigns}
          {...props}
        />
      }}
      />
      <Route exact path="/allCampaigns" render={(props) => {
        return <AllCampaignList
          activeUser={this.activeUser}
          getCampaign={this.get}
          campaigns={this.state.campaigns}
          {...props}
        />
      }}
      />
      <Route exact path="/campaigns/new" render={(props) => {
        return <CampaignForm {...props}
          addCampaign={this.addCampaign}
          getCampaign={this.get}
        />
      }} />
      <Route exact path="/campaigns/:campaignsId(\d+)/edit" render={(props) => {
        return <CampaignEditForm {...props}
          updateEditedCampaign={this.updateEditedCampaign}
          getCampaign={this.get}
          editCampaign={this.editCampaign}
          campaigns={this.state.campaigns} />
      }} />
      <Route exact path="/" render={(props) => {
        return <HomePage {...props}
        />
      }} />
      <Route exact path="/campaigns/:campaignsId(\d+)/selectedCampaign" render={(props) => {
        return <SelectedCampaign
          getCampaign={this.get}
          campaign={this.state.campaigns}
          {...props}
        />
      }} />
    </React.Fragment>
  }
}

export default ApplicationViews
