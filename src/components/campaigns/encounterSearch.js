import React, { Component } from "react"
import CreatureManager from "../../modules/CreatureManager";
import "./campaign.css"


class EncounterSearch extends Component {

    state = {
        encounter: "",
    }

    handleFieldChange = () => {
        this.setState({
            encounter: this.search.value
        }
        )
    }

    getEncounterInfo = () => {
        CreatureManager.get(`https://api-beta.open5e.com/monsters/?name=${this.name}`)
            .then(response => response.json())
            .then(({ encounter }) => {
                this.setState({
                    encounter: encounter.encounter
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className="campaignFormGroup" id="encounterTables">
                    <input
                        cols="30"
                        type="text"
                        ref={input => this.search = input}
                        className="campaignFormControl"
                        onChange={this.handleFieldChange}
                        id="campaignEncounterSearch"
                        placeholder="Encounters"
                        rows="11"
                    />
                    <button className="btn" id="encounterSearchButton"
                        onClick={this.getEncounterInfo}
                    >Search</button>
                </div>
            </React.Fragment>
        )
    }
}

export default EncounterSearch