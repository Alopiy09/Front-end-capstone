import React, { Component } from "react"
import "./DmCampaignPage.css"

export default class SelectedCampaign extends Component {

        render() {
            const campaign = this.props.campaign.find(a =>
                a.id ===parseInt(this.props.match.params.campaignsId))
            return (
                <React.Fragment>
                <div key={this.props.campaign.id}>
                    <div id="DMpageCampaignName">{this.props.campaign.name}</div>
                    <div id="DMpageCampaignStory">{this.props.campaign.story}</div>
                    <div id="DMpageCampaignEncounters"></div>
                    <div id="DMpageCampaignLoot"></div>
                </div>
                </React.Fragment>
            )
        }
    }