import React, { Component } from "react"
import CampaignManager from "../../modules/CampaignManager";
import "./campaign.css"

export default class SelectedCampaign extends Component {

    componentDidMount() {
        CampaignManager.get(this.props.match.params.campaignsId)
            .then(campaign => {
                this.setState({
                    name: campaign.name,
                    story: campaign.story,
                    userId: campaign.userId,
                    id: campaign.id
                });
            });
        }

        render() {
            return (
                <React.Fragment>
                <div key={this.props.campaign.id}>
                    <div id="campaignName" value={this.props.campaign.name}></div>
                    <div id="campaignStory">{this.props.campaign.story}</div>
                    <div id="campaignEncounters"></div>
                    <div id="campaignLoot"></div>
                </div>
                </React.Fragment>
            )
        }
    }