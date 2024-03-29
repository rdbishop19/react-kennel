const remoteURL = 'http://localhost:5002';

export default {
	get(id, endpoint, params="") {
		return fetch(`${remoteURL}/${endpoint}/${id}${params}`).then((result) => result.json());
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
    update(editedObj, endpoint) {
        return fetch(`${remoteURL}/${endpoint}/${editedObj.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedObj)
        }).then(data => data.json());
      }
};
