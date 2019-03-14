import React, { Component } from "react"
import "./campaign.css"
import { Link } from "react-router-dom"


export default class CampaignCard extends Component {
    render() {
        return (
            <div key={this.props.campaign.id} className="campaignCard">
                <div className="campaignCardBody">
                    Campaign Name:<Link
                    onClick={() => {
                        this.props.history.CampaignManager.get(`/campaigns/${this.props.campaign.id}/edit`);
                    }}
                    className="campaignLink"
                    to="/campaigns/:campaignsId(\d+)/selectedCampaigns"> {this.props.campaign.name} </Link> <br />
                    Campaign Story:
                    <div id="campaignPageStory">
                        {this.props.campaign.story}
                    </div>
                </div>
                <div className="buttonFlex">
                    <button
                        type="button"
                        className="btn "
                        onClick={() => {
                            this.props.history.push(`/campaigns/${this.props.campaign.id}/edit`);
                        }}
                    >
                        Edit
            </button>
                    <button
                        onClick={() => this.props.deleteCampaign(this.props.campaign.id)}
                        className="btn ">
                        Delete
                </button>
                </div>
            </div>

        )
    }
}