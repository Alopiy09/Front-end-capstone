import React, { Component } from "react"
import CampaignManager from "../../modules/CampaignManager";

export default class CampaignEditForm extends Component {
    state = {
        name: "",
        story: "",
        id: "",
        userId: parseInt(sessionStorage.getItem("credintials"))
    }
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    updateExistingCampaign = evt => {
        evt.preventDefault()

        const editedCampaign = {
            id: this.props.match.params.campaignsId,
            name: this.state.campaignName,
            story: this.state.campaignStory,
            userId: parseInt(sessionStorage.getItem("credentials"))
        };
        this.props.updateCampaign(editedCampaign)
            .then(() => this.props.history.push("/campaigns"))
    }

    componentDidMount() {
        CampaignManager.get(this.props.match.params.campaignsId)
            .then(campaign => {
                this.setState({
                    name: campaign.name,
                    story: campaign.story,
                    userId: campaign.userId,
                    campaignId: campaign.id
                });
            });
    }
    render() {
        return (
            <React.Fragment>
                <form className="eventForm">
                    <div className="formGroup">
                        <label htmlFor="name">Campaign Name</label>
                        <input
                            type="text"
                            required
                            className="formControl"
                            onChange={this.handleFieldChange}
                            id="name"
                            value={this.state.name}
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="story">Campaign Story</label>
                        <input
                            type="text"
                            required
                            className="formControl"
                            onChange={this.handleFieldChange}
                            id="story"
                            value={this.state.story}
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={this.updateExistingCampaign}
                        className="btn btn-primary"
                    >
                        Save Campaign
                    </button>
                </form>
            </React.Fragment>
        )
    }
}