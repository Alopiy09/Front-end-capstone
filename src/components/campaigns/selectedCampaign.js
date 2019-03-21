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
                        <textarea id="DMpageCampaignStory">{campaign.story}</textarea>
                        <textarea id="DMpageCampaignEncounters">{campaign.encounter}</textarea>
                        <textarea id="DMpageCampaignLoot">{campaign.loot}</textarea>
                        <div id="initiativeTracker"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}