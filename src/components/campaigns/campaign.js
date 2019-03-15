import React, { Component } from "react"
import "./campaign.css"
import { Link } from "react-router-dom"
import CampaignManager from "../../modules/CampaignManager";


export default class CampaignCard extends Component {

    updateExistingCampaign = evt => {
        evt.preventDefault()
    }


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
            <div key={this.props.campaign.id} className="campaignCard">
                <div className="campaignCardBody">
                    Campaign Name:<Link
                    onClick={() => {
                        this.props.history.CampaignManager.get(this.id)
                    }}
                    className="campaignLink"
                    to={`/campaigns/${this.props.campaign.id}/selectedCampaigns`}> {this.props.campaign.name} </Link>  <br />
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