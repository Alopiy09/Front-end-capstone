import Settings from "./Settings";

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/campaigns/${id}`)
      .then(e => e.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/campaigns`)
      .then(e => e.json())
  },
  addNewCampaign(newCampaign) {
    return fetch(`${Settings.remoteURL}/campaigns`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCampaign)
    }).then(data => data.json())
  },
  updateCampaign(editedCampaign) {
    return fetch(`${Settings.remoteURL}/campaigns/${editedCampaign.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedCampaign)
    }).then(data => data.json());
  },
}
