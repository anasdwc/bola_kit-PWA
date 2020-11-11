const API_KEY = "2831c09efa5a4c17bb2a41559d2f1af0";
const base_url = "https://api.football-data.org/v2/";

const Endpoint_Jerman = `${base_url}competitions/2002/standings`;
const Endpoint_Belanda = `${base_url}competitions/2003/standings`;
const Endpoint_Inggris = `${base_url}competitions/2021/standings`;
const Endpoint_SPanyol = `${base_url}competitions/2014/standings`;

const fetchAPI = url => {
    return fetch(url, {
        headers: {
            'X-Auth-Token': API_KEY
        }
    })
        .then((res) => {
            if(res.status !== 200) {
                console.error(`Error: ${res.status}`);
                return Promise.reject(new Error(res.statusText));
            } else {
                return Promise.resolve(res);
            }
        })
        .then((res) => res.json())
        .catch((err) => console.error(err))
}

// Blok kode untuk melakukan request data json
// Baru: Memuat data dari cache terlebih dahulu sebelum melakukan request API
const getStandingInggris = () => {
    // Baru
    if ('caches' in window) {
        caches.match(Endpoint_Inggris).then(response => {
            if (response) {
                response.json().then((data) => {
                    let articlesHTML = "";
                    
                    data.standings[0].table.forEach(function(standing) {
                        let clubImage = standing.team.crestUrl;
                        if (clubImage !== null) {
                            clubImage = standing.team.crestUrl.replace(/^http:\/\//i, 'https://');
                        }
                        articlesHTML += `
                        <table class="highlight centered" style="font-family: 'DM Sans'; font-weight: 400;">
                            <tr>
                                <td width="10%">Posisi ke-<strong>${standing.position}</td>
                                <td width="10%">
                                    <img src="${clubImage}" width="30px" alt="${standing.team.name} badge" onError="this.onerror=null;this.src='img/error-image.png';"/>
                                </td>
                                <td width="25%">
                                    <a href="./team.html?id=${standing.team.id}">${standing.team.name}</a>
                                </td>
                                <td width="25%">
                                    ${standing.won}<sup><a>Win</a></sup> - 
                                    ${standing.draw}<sup><a>Draw</a></sup> - 
                                    ${standing.lost}<sup><a>Lost</a></sup>
                                </td>
                                <td width="10%">Poin: <strong>${standing.points}</strong></td>
                            </tr>
                        </table>
                        `;
                    });
                    // Sisipkan komponen card ke dalam elemen dengan id articles
                    document.getElementById("standing").innerHTML = articlesHTML;
                })
            }
        })
    }

    fetchAPI(Endpoint_Inggris)
        .then(data => {
            // Objek/array JS dari response.json() masuk lewat data.

            // Menyusun komponen card artikel secara dinamis
            let articlesHTML = "";
            data.standings[0].table.forEach(function(standing) {
                let clubImage = standing.team.crestUrl;
                if (clubImage !== null) {
                    clubImage = standing.team.crestUrl.replace(/^http:\/\//i, 'https://');
                }
                articlesHTML += `
                <table class="highlight centered" style="font-family: 'DM Sans'; font-weight: 400;">
                    <tr>
                        <td width="10%">Posisi ke-<strong>${standing.position}</td>
                        <td width="10%">
                            <img src="${clubImage}" width="30px" alt="${standing.team.name} badge" onError="this.onerror=null;this.src='img/error-image.png';"/>
                        </td>
                        <td width="25%">
                            <a href="./team.html?id=${standing.team.id}">${standing.team.name}</a>
                        </td>
                        <td width="25%">
                            ${standing.won}<sup><a>Win</a></sup> - 
                            ${standing.draw}<sup><a>Draw</a></sup> - 
                            ${standing.lost}<sup><a>Lost</a></sup>
                        </td>
                        <td width="10%">Poin: <strong>${standing.points}</strong></td>
                    </tr>
                </table>
                `;
            });
            // Sisipkan komponen card ke dalam elemen dengan id #articles
            document.getElementById("standing").innerHTML = articlesHTML;
        })
        .catch(error => {
            console.log(error)
        });
}

const getStandingJerman = () => {
    // Baru
    if ('caches' in window) {
        caches.match(Endpoint_Jerman).then(response => {
            if (response) {
                response.json().then((data) => {
                    let articlesHTML = "";
                    data.standings[0].table.forEach(function(standing) {
                        let clubImage = standing.team.crestUrl;
                        if (clubImage !== null) {
                            clubImage = standing.team.crestUrl.replace(/^http:\/\//i, 'https://');
                        }
                        articlesHTML += `
                        <table class="highlight centered" style="font-family: 'DM Sans'; font-weight: 400;">
                            <tr>
                                <td width="10%">Posisi ke-<strong>${standing.position}</td>
                                <td width="10%">
                                    <img src="${clubImage}" width="30px" alt="${standing.team.name} badge" onError="this.onerror=null;this.src='img/error-image.png';"/>
                                </td>
                                <td width="25%">
                                    <a href="./team.html?id=${standing.team.id}">${standing.team.name}</a>
                                </td>
                                <td width="25%">
                                    ${standing.won}<sup><a>Win</a></sup> - 
                                    ${standing.draw}<sup><a>Draw</a></sup> - 
                                    ${standing.lost}<sup><a>Lost</a></sup>
                                </td>
                                <td width="10%">Poin: <strong>${standing.points}</strong></td>
                            </tr>
                        </table>
                        `;
                    });
                    // Sisipkan komponen card ke dalam elemen dengan id articles
                    document.getElementById("standing").innerHTML = articlesHTML;
                })
            }
        })
    }

    fetchAPI(Endpoint_Jerman)
        .then(data => {
            // Objek/array JS dari response.json() masuk lewat data.

            // Menyusun komponen card artikel secara dinamis
            let articlesHTML = "";
            data.standings[0].table.forEach(function(standing) {
                let clubImage = standing.team.crestUrl;
                if (clubImage !== null) {
                    clubImage = standing.team.crestUrl.replace(/^http:\/\//i, 'https://');
                }
                articlesHTML += `
                <table class="highlight centered" style="font-family: 'DM Sans'; font-weight: 400;">
                    <tr>
                        <td width="10%">Posisi ke-<strong>${standing.position}</td>
                        <td width="10%">
                            <img src="${clubImage}" width="30px" alt="${standing.team.name} badge" onError="this.onerror=null;this.src='img/error-image.png';"/>
                        </td>
                        <td width="25%">
                            <a href="./team.html?id=${standing.team.id}">${standing.team.name}</a>
                        </td>
                        <td width="25%">
                            ${standing.won}<sup><a>Win</a></sup> - 
                            ${standing.draw}<sup><a>Draw</a></sup> - 
                            ${standing.lost}<sup><a>Lost</a></sup>
                        </td>
                        <td width="10%">Poin: <strong>${standing.points}</strong></td>
                    </tr>
                </table>
                `;
            });
            // Sisipkan komponen card ke dalam elemen dengan id #articles
            document.getElementById("standing").innerHTML = articlesHTML;
        })
        .catch(error => {
            console.log(error)
        });
}

const getStandingBelanda = () => {
    // Baru
    if ('caches' in window) {
        caches.match(Endpoint_Belanda).then(response => {
            if (response) {
                response.json().then((data) => {
                    let articlesHTML = "";
                    data.standings[0].table.forEach(function(standing) {
                        let clubImage = standing.team.crestUrl;
                        if (clubImage !== null) {
                            clubImage = standing.team.crestUrl.replace(/^http:\/\//i, 'https://');
                        }
                        articlesHTML += `
                        <table class="highlight centered" style="font-family: 'DM Sans'; font-weight: 400;">
                            <tr>
                                <td width="10%">Posisi ke-<strong>${standing.position}</td>
                                <td width="10%">
                                    <img src="${clubImage}" width="30px" alt="${standing.team.name} badge" onError="this.onerror=null;this.src='img/error-image.png';"/>
                                </td>
                                <td width="25%">
                                    <a href="./team.html?id=${standing.team.id}">${standing.team.name}</a>
                                </td>
                                <td width="25%">
                                    ${standing.won}<sup><a>Win</a></sup> - 
                                    ${standing.draw}<sup><a>Draw</a></sup> - 
                                    ${standing.lost}<sup><a>Lost</a></sup>
                                </td>
                                <td width="10%">Poin: <strong>${standing.points}</strong></td>
                            </tr>
                        </table>
                        `;
                    });
                    // Sisipkan komponen card ke dalam elemen dengan id articles
                    document.getElementById("standing").innerHTML = articlesHTML;
                })
            }
        })
    }

    fetchAPI(Endpoint_Belanda)
        .then(data => {
            // Objek/array JS dari response.json() masuk lewat data.

            // Menyusun komponen card artikel secara dinamis
            let articlesHTML = "";
            data.standings[0].table.forEach(function(standing) {
                let clubImage = standing.team.crestUrl;
                if (clubImage !== null) {
                    clubImage = standing.team.crestUrl.replace(/^http:\/\//i, 'https://');
                }
                articlesHTML += `
                <table class="highlight centered" style="font-family: 'DM Sans'; font-weight: 400;">
                    <tr>
                        <td width="10%">Posisi ke-<strong>${standing.position}</td>
                        <td width="10%">
                            <img src="${clubImage}" width="30px" alt="${standing.team.name} badge" onError="this.onerror=null;this.src='img/error-image.png';"/>
                        </td>
                        <td width="25%">
                            <a href="./team.html?id=${standing.team.id}">${standing.team.name}</a>
                        </td>
                        <td width="25%">
                            ${standing.won}<sup><a>Win</a></sup> - 
                            ${standing.draw}<sup><a>Draw</a></sup> - 
                            ${standing.lost}<sup><a>Lost</a></sup>
                        </td>
                        <td width="10%">Poin: <strong>${standing.points}</strong></td>
                    </tr>
                </table>
                `;
            });
            // Sisipkan komponen card ke dalam elemen dengan id #articles
            document.getElementById("standing").innerHTML = articlesHTML;
        })
        .catch(error => {
            console.log(error)
        });
}

const getStandingSpanyol = () => {
    // Baru
    if ('caches' in window) {
        caches.match(Endpoint_SPanyol).then(response => {
            if (response) {
                response.json().then((data) => {
                    let clubImage = standing.team.crestUrl;
                    if (clubImage !== null) {
                        clubImage = standing.team.crestUrl.replace(/^http:\/\//i, 'https://');
                    }
                    let articlesHTML = "";
                    data.standings[0].table.forEach(function(standing) {
                        articlesHTML += `
                        <table class="highlight centered" style="font-family: 'DM Sans'; font-weight: 400;">
                            <tr>
                                <td width="10%">Posisi ke-<strong>${standing.position}</td>
                                <td width="10%">
                                    <img src="${clubImage}" width="30px" alt="${standing.team.name} badge" onError="this.onerror=null;this.src='img/error-image.png';"/>
                                </td>
                                <td width="25%">
                                    <a href="./team.html?id=${standing.team.id}">${standing.team.name}</a>
                                </td>
                                <td width="25%">
                                    ${standing.won}<sup><a>Win</a></sup> - 
                                    ${standing.draw}<sup><a>Draw</a></sup> - 
                                    ${standing.lost}<sup><a>Lost</a></sup>
                                </td>
                                <td width="10%">Poin: <strong>${standing.points}</strong></td>
                            </tr>
                        </table>
                        `;
                    });
                    // Sisipkan komponen card ke dalam elemen dengan id articles
                    document.getElementById("standing").innerHTML = articlesHTML;
                })
            }
        })
    }

    fetchAPI(Endpoint_SPanyol)
        .then(data => {
            // Objek/array JS dari response.json() masuk lewat data.

            // Menyusun komponen card artikel secara dinamis
            let articlesHTML = "";
            data.standings[0].table.forEach(function(standing) {
                let clubImage = standing.team.crestUrl;
                if (clubImage !== null) {
                    clubImage = standing.team.crestUrl.replace(/^http:\/\//i, 'https://');
                }
                articlesHTML += `
                <table class="highlight centered" style="font-family: 'DM Sans'; font-weight: 400;">
                    <tr>
                        <td width="10%">Posisi ke-<strong>${standing.position}</td>
                        <td width="10%">
                            <img src="${clubImage}" width="30px" alt="${standing.team.name} badge" onError="this.onerror=null;this.src='img/error-image.png';"/>
                        </td>
                        <td width="25%">
                            <a href="./team.html?id=${standing.team.id}">${standing.team.name}</a>
                        </td>
                        <td width="25%">
                            ${standing.won}<sup><a>Win</a></sup> - 
                            ${standing.draw}<sup><a>Draw</a></sup> - 
                            ${standing.lost}<sup><a>Lost</a></sup>
                        </td>
                        <td width="10%">Poin: <strong>${standing.points}</strong></td>
                    </tr>
                </table>
                `;
            });
            // Sisipkan komponen card ke dalam elemen dengan id #articles
            document.getElementById("standing").innerHTML = articlesHTML;
        })
        .catch(error => {
            console.log(error)
        });
}

const getTeamById = () => {
    return new Promise ((resolve, reject) => {
        const urlParams = new URLSearchParams(window.location.search);
        const idParam = urlParams.get("id");
        const Endpoint_Teams = `${base_url}teams/${idParam}`;

        fetchAPI(Endpoint_Teams)
        .then(function(data) {
            // Objek JS dari response.json() masuk lewat variabel data
            console.log(data);
            let clubImage = data.crestUrl;
            if (clubImage !== null) {
                clubImage = data.crestUrl.replace(/^http:\/\//i, 'https://');
            }
            // Menyusun komponen card artikel secara dinamis
            let articlesHTML = "";
                articlesHTML += `
                    <div class="card center" style="font-family: 'DM Sans'; font-weight: 400;">
                        <h4><strong>${data.name}</strong></h4>   
                        <img src="${clubImage}" alt="${data.name} badge" width="80%" margin="0 auto" onError="this.onerror=null;this.src='img/error-image.png';"/>
                        <div class="card-content">
                            <p>
                            <strong>${data.name}</strong> didirikan pada tahun ${data.founded}. 
                            Klub ini memiliki warna ${data.clubColors} dan stadium ${data.venue}.
                            Untuk info resmi dapat mengunjungi laman resmi <a href="${data.website}">${data.website}</a>
                            </p>
                        </div>
                    </div>

                    <div class="center" style="font-family: 'DM Sans'; font-weight: 500;">
                        <h5><strong>Daftar Nama Pemain</strong></h5>
                    </div>
                `;
            data.squad.forEach(function(squad) {
                articlesHTML += `
                <ul class="collapsible expandable" style="font-family: 'DM Sans'; font-weight: 400;">
                    <li>
                        <div class="collapsible-header">${squad.name}</div>
                        <div class="collapsible-body">
                            <p>
                            Posisi sebagai <strong>${squad.position}</strong> dan berperan sebagai <strong>${squad.role}</strong>. <strong>${squad.name}</strong>
                            berwarga negara <strong>${squad.nationality}</strong> dengan nomor punggung <strong>${squad.shirtNumber === null ? "tidak diketahui" : squad.shirtNumber}</strong>
                            </p>
                        </div>
                    </li>
                </ul>
                `;
            });

            // Sisipkan komponen card ke dalam elemen dengan id body-content
            document.getElementById("body-content").innerHTML = articlesHTML;
            const elems = document.querySelectorAll('.collapsible.expandable');
            const instances = M.Collapsible.init(elems);
            resolve(data);
        })
    })
}

const getSavedTeam = () => {
    checkTeam().then((team) => {
        console.log(team);
        let data = '';
        team.forEach((team) => {
            data += `
                <table class="highlight centered" style="font-family: 'DM Sans'; font-weight: 400;">
                    <tr>
                        <td width="40%">
                            <img src="${team.crestUrl}" alt="${team.name} badge" width="50px" onError="this.onerror=null;this.src='img/error-image.png';"/>
                        </td>
                        <td width="60%"><a href="./team.html?id=${team.id}&saved=true">${team.name}</a></td>
                    </tr>
                </table>
            `;
        });
        document.getElementById("favTeam").innerHTML = data;
    });
}

const getSavedById = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get("id");

    isTeamById(idParam).then((team) => {
        let clubImage = team.crestUrl;
        if (clubImage !== null) {
            clubImage = team.crestUrl.replace(/^http:\/\//i, 'https://');
        }
        let data = '';
        console.log(team);
        data += `
            <div class="card center" style="font-family: 'DM Sans'; font-weight: 400;">
                <h4><strong>${team.name}</strong></h4>   
                <img src="${clubImage}" alt="${team.name} badge" width="80%" margin="0 auto" onError="this.onerror=null;this.src='img/error-image.png';"/>
                <div class="card-content">
                    <p>
                    <strong>${team.name}</strong> didirikan pada tahun ${team.founded}. 
                    Klub ini memiliki warna ${team.clubColors} dan stadium ${team.venue}.
                    Untuk info resmi dapat mengunjungi laman resmi <a href="${team.website}">${team.website}</a>
                    </p>
                </div>
            </div>

            <div class="center" style="font-family: 'DM Sans'; font-weight: 500;">
                <h5><strong>Daftar Nama Pemain</strong></h5>
            </div>
        `;

        team.squad.forEach(function(squad) {
            data += `
            <ul class="collapsible expandable" style="font-family: 'DM Sans'; font-weight: 400;">
                <li>
                    <div class="collapsible-header">${squad.name}</div>
                    <div class="collapsible-body">
                        <p>
                        Posisi sebagai <strong>${squad.position}</strong> dan berperan sebagai <strong>${squad.role}</strong>. <strong>${squad.name}</strong>
                        berwarga negara <strong>${squad.nationality}</strong> dengan nomor punggung <strong>${squad.shirtNumber === null ? "tidak diketahui" : squad.shirtNumber}</strong>
                        </p>
                    </div>
                </li>
            </ul>
            `;
        });

        document.getElementById('body-content').innerHTML = data;

        const elems = document.querySelectorAll('.collapsible.expandable');
        const instances = M.Collapsible.init(elems);
    });
}