import React, { Component } from "react";
import EncounterSearch from "./encounterSearch";


export default class CampaignForm extends Component {
    state = {
        campaignName: "",
        campaignStory: "",
        campaignEncounter: "",
        campaignLoot: "",
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
            story: this.state.campaignStory,
            encounter: this.state.campaignEncounter,
            userId: parseInt(sessionStorage.getItem("credentials")),
            loot: this.state.campaignLoot
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
                            <label htmlFor="campaignName" id="addCampaignPageName">Campaign Name:</label>
                            <input
                                type="text"
                                required
                                className="campaignFormControl"
                                onChange={this.handleFieldChange}
                                id="campaignName"
                                placeholder="Campaign Name"
                            />
                        </div>
                        <div className="campaignFormGroup" id="storyTable">
                            <label htmlFor="campaignStory"></label>
                            <textarea
                                type="text"
                                required
                                className="campaignFormControl"
                                onChange={this.handleFieldChange}
                                id="campaignStory"
                                placeholder="Campaign Story"
                            />
                            <div>
                            <select id="mapSelector">
                            <option value="map1">map1</option>
                            <option value="map2">map2</option>
                            <option value="map3">map3</option>
                            <option value="map4">map4</option>
                        </select>
                        <div id="mapTableBox">
                            <div id="mapTable"></div>
                        </div>
                        </div>
                            <div id="encounterTableSearch">
                            <div className="campaignFormGroup" id="encounterTables">
                                <label htmlFor="campaignEncounter">Encounters:</label>
                                <textarea
                                    cols="30"
                                    type="text"
                                    required
                                    className="campaignFormControl"
                                    onChange={this.handleFieldChange}
                                    id="campaignEncounter"
                                    placeholder="Encounters"
                                    rows="11"
                                />
                            </div>
                            {/* encounter search */}
                            <EncounterSearch  />
                            <textarea
                                    cols="30"
                                    type="text"
                                    required
                                    className="campaignFormControl"
                                    onChange={this.handleFieldChange}
                                    id="campaignEncounter"
                                    placeholder="Encounters"
                                    rows="11"
                                />
                            </div>
                            <div id="lootTableSearch">
                            <div className="campaignFormGroup" id="lootTable">
                                <label htmlFor="campaignLoot">Loot Table:</label>
                                <textarea
                                    cols="30"
                                    type="text"
                                    required
                                    className="campaignFormControl"
                                    onChange={this.handleFieldChange}
                                    id="campaignLoot"
                                    placeholder="Loot"
                                    rows="11"
                                />
                            </div>
                            <div className="campaignFormGroup" id="lootTable">
                                <input
                                    cols="30"
                                    type="text"
                                    required
                                    className="campaignFormControl"
                                    onChange={this.handleFieldChange}
                                    id="campaignLootSearch"
                                    placeholder="Loot"
                                    rows="11"
                                />
                            </div>
                            <button className="btn" id="lootSearchButton">Search</button>
                            <textarea
                                    cols="30"
                                    type="text"
                                    required
                                    className="campaignFormControl"
                                    onChange={this.handleFieldChange}
                                    id="campaignLoot"
                                    placeholder="Loot"
                                    rows="11"
                                />
                            </div>
                        </div>
                        <div id="addCampaignButtonBox">
                            <button
                                id="newCampaignSubmit"
                                className="btn"
                                type="submit"
                                onClick={this.constructNewCampaign}
                            >Submit</button>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}