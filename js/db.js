let dbPromised = idb.open("bola-kita", 1, function(upgradeDB) {
    const teamStore = upgradeDB.createObjectStore('favTeam', {
        keyPath: 'id'
    });
    teamStore.createIndex('id', 'id', {
        unique: true
    });
});

// Save
const saveTeam = data => {
    dbPromised
    .then((db) => {
        const tx = db.transaction('favTeam', 'readwrite');
        const store = tx.objectStore("favTeam");
        console.log(data);
        store.put(data);
        return tx.complete;
    })
    .then(() => {
        console.log("Team Favorit telah disimpan");
    }); 
}

// Ambil data
const checkTeam = () => {
    return new Promise((resolve, reject) => {
        dbPromised
            .then((db) => {
                const tx = db.transaction("favTeam", "readonly");
                const store = tx.objectStore("favTeam");
                return store.getAll();
            })
            .then((team) => {
                resolve(team);
            })
    })
}

// Check
const isTeamById = (id) => {
    return new Promise((resolve, reject) => {
        dbPromised
            .then((db) => {
                const tx = db.transaction('favTeam', 'readonly');
                const store = tx.objectStore('favTeam');
                const id2 = parseInt(id)
                return store.get(id2);
            })
            .then((team) => {
                resolve(team);
            })
    });
}

// Delete
const deleteTeam = id => {
    dbPromised
        .then((db) => {
            const tx = db.transaction('favTeam', 'readwrite');
            const store = tx.objectStore('favTeam');
            store.delete(id);
            return tx.complete;
        })
}