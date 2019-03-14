import React, { Component } from "react"
import "./campaignCard.css"


export default class CampaignCard extends Component {
    render() {
        return (
            <div key={this.props.campaign.id} className="campaignCard">
                <div className="campaignCardBody">
                    Campaign Name: {this.props.campaign.name}  <br />
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