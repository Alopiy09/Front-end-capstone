import React, { Component } from "react"
import CampaignCard from "./campaign";
import "./campaign.css"


export default class CampaignList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="addCampaignButton">
                    <button type="button"
                        onClick={() => this.props.history.push("/campaigns/new")}
                        className="campaignButton btn">
                        Create New Campaign
                </button>
                </div>
                <h1>Campaigns</h1>
                <section id="allCampaigns">
                    {
                        this.props.campaigns.filter(currentCampaign => currentCampaign.userId === parseInt(sessionStorage.getItem("credentials")))
                            .map(campaign =>
                                <CampaignCard key={campaign.id}
                                    campaign={campaign}
                                    user={this.props.users}
                                    {...this.props} />
                            )
                    }
                </section>
            </React.Fragment>
        )
    }
}