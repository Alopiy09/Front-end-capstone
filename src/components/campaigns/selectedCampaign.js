import React, { Component } from "react"
import "./DmCampaignPage.css"

export default class SelectedCampaign extends Component {

    render() {
        console.log(this.props.activeUser)
        const campaign = this.props.campaign.find(a =>
            a.id === parseInt(this.props.match.params.campaignsId))
            || { id: 404, name: "404", story: "Campaign not found" }
        return (
            <React.Fragment>
                <div key={campaign.id}>
                    <div id="DMpageCampaignName">{campaign.name}</div>
                    <div id="DMcampaignPage">
                        <div id="DMpageCampaignStory">{campaign.story}</div>
                        <div id="DMpageCampaignEncounters">{campaign.encounter}</div>
                        <div id="DMpageCampaignLoot">{campaign.loot}</div>
                        <div id="initiativeTracker"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}