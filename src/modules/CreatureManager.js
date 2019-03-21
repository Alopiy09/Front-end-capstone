export default {
  get(name) {
    return fetch(`https://api-beta.open5e.com/monsters/?name=${name}`)
      .then(e => e.json())
  },
  getAll() {
    return fetch(`"https://api-beta.open5e.com/monsters/"`)
      .then(e => e.json())
  },
}