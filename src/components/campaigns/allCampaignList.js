import React, { Component } from "react"
import AllCampaignCard from "./allCampaigns";
import "./campaign.css"


export default class AllCampaignList extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>All Campaigns</h1>
                <section id="allCampaigns">
                    {
                        this.props.campaigns.map(campaign =>
                            <AllCampaignCard key={campaign.id}
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