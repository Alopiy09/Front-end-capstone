import React, { Component } from "react";



export default class CampaignForm extends Component {
    state = {
        campaignName: "",
        campaignStory: "",
    };
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewCampaign = evt => {
        evt.preventDefault();
        const campaign = {
            name: this.state.campaignName,
            story: this.state.campaignStory
        };
        this.props
            .addCampaign(campaign)
            .then(() => this.props.history.push("/campaigns"))
    };
    render() {
        return (
            <React.Fragment>
                <form className="campaignForm">
                <div id="addCampaignForm">
                    <div className="campaignFormGroup">
                        <label htmlFor="campaignName">Campaign Name:</label>
                        <input
                            type="text"
                            required
                            className="campaignFormControl"
                            onChange={this.handleFieldChange}
                            id="campaignName"
                            placeholder="Campaign Name"
                        />
                    </div>
                    <div className="campaignFormGroup">
                        <label htmlFor="campaignStory">Campaign Story:</label>
                        <input
                            type="text"
                            required
                            className="campaignFormControl"
                            onChange={this.handleFieldChange}
                            id="campaignStory"
                            placeholder="Campaign Story"
                        />
                    </div>
                    <div className="campaignFormGroup">
                        <label htmlFor="encounters">Encounters:</label>
                        <input
                            type="text"
                            required
                            className="campaignFormControl"
                            onChange={this.handleFieldChange}
                            id="encounters"
                            placeholder="Encounters"
                        />
                    </div>
                    <div className="campaignFormGroup" id="lootTable">
                        <label htmlFor="items">Loot Table:</label>
                        <textarea
                            type="text"
                            required
                            className="campaignFormControl"
                            onChange={this.handleFieldChange}
                            id="loot"
                            placeholder="Loot"
                        />
                    </div>
                    </div>
                    <button
                       className="btn"
                        type="submit"
                        onClick={this.constructNewCampaign}
                    >Submit</button>
                </form>
            </React.Fragment>
        )
    }
}