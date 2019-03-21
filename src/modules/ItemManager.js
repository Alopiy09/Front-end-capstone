export default {
    get(name) {
      return fetch(`https://api-beta.open5e.com/magicitems/${name}`)
        .then(e => e.json())
    },
    getAll() {
      return fetch(`https://api-beta.open5e.com/magicitems/`)
        .then(e => e.json())
    },
}