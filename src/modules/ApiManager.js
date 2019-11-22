const remoteURL = 'http://localhost:5002';

export default {
	get(id, endpoint) {
		return fetch(`${remoteURL}/${endpoint}/${id}`).then((result) => result.json());
	},
	getAll(endpoint) {
		return fetch(`${remoteURL}/${endpoint}`).then((result) => result.json());
	},
	delete(id, endpoint) {
		return fetch(`http://localhost:5002/${endpoint}/${id}`, {
			method: 'DELETE'
		}).then((result) => result.json());
    },
    post(newObject, endpoint) {
        return fetch(`${remoteURL}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObject)
        }).then(data => data.json())
    },
    update(editedAnimal, endpoint) {
        return fetch(`${remoteURL}/${endpoint}/${editedAnimal.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedAnimal)
        }).then(data => data.json());
      }
};
