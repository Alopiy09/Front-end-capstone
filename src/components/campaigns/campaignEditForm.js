import React, { Component } from "react"
import CampaignManager from "../../modules/CampaignManager";
import "./campaignEditForm.css"
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
            name: this.state.name,
            story: this.state.story,
            encounter: this.state.encounter,
            loot: this.state.loot,
            userId: parseInt(sessionStorage.getItem("credentials"))
        };
        this.props.updateEditedCampaign(editedCampaign)
            .then(() => this.props.history.push("/campaigns"))
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
            <React.Fragment>
                <form className="eventForm">
                    <div className="formGroup" id="editCampaignName">
                        <label htmlFor="name">Campaign Name:</label>
                        <input
                            type="text"
                            required
                            className="formControl"
                            onChange={this.handleFieldChange}
                            id="name"
                            value={this.state.name}
                        />
                    </div>
                    <div id="rowOfBoxes">
                    <div className="formGroup" id="editCampaignStory">
                        <label htmlFor="story">Story:</label>
                        <textarea
                            cols="45"
                            rows="10"
                            type="text"
                            required
                            className="formControl"
                            onChange={this.handleFieldChange}
                            id="story"
                            value={this.state.story}
                        />
                    </div>
                    <div className="formGroup" id="editCampaignEncounter">
                        <label htmlFor="encounter">Encounters:</label>
                        <textarea
                            type="text"
                            cols="30"
                            rows="10"
                            required
                            className="formControl"
                            onChange={this.handleFieldChange}
                            id="encounter"
                            value={this.state.encounter}
                        />
                    </div>
                    <div className="formGroup" id="editCampaignLoot">
                        <label htmlFor="loot">Loot:</label>
                        <textarea
                            type="text"
                            cols="30"
                            rows="10"
                            required
                            className="formControl"
                            onChange={this.handleFieldChange}
                            id="loot"
                            value={this.state.loot}
                        />
                    </div>
                    </div>
                    <div id="editButtonBox">
                    <button
                        type="submit"
                        onClick={this.updateExistingCampaign}
                        className="btn btn-primary"
                        id="editCampaignButton"
                    >
                        Edit Campaign
                    </button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}