import React, { Component } from "react"
import "./campaign.css"
import { Link } from "react-router-dom"
import CampaignManager from "../../modules/CampaignManager";


export default class AllCampaignCard extends Component {

    updateExistingCampaign = evt => {
        evt.preventDefault()
    }


    componentDidMount() {
        CampaignManager.get(this.props.match.params.campaignsId)
            .then(campaign => {
                this.setState({
                    name: campaign.name,
                    story: campaign.story,
                    encounter: campaign.encounter,
                    loot: campaign.loot,
                    userId: campaign.userId,
                    id: campaign.id
                });
            });
    }

    render() {
        return (
            <div key={this.props.campaign.id} className="allCampaignCards">
                <div className="campaignCardBody">
                    Campaign Name:<Link
                        id="campaignLink"
                        onClick={() => {
                            this.props.history.CampaignManager.get(this.id)
                        }}
                        className="campaignLink"
                        to={`/campaigns/${this.props.campaign.id}/selectedCampaign`}> {this.props.campaign.name} </Link>  <br />
                </div>
            </div>

        )
    }
}