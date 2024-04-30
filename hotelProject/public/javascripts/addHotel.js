async function addHotel(url, hotelId){
    let name = prompt("Provide the new hotel's name:");
    let hotelLocation = prompt("Provide the hotel's location:")
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            Location: hotelLocation,
        })
    }).then((response) => {
        if (response.ok) {
            const resData = 'Hotel added'
            location.reload()
            return Promise.resolve(resData);
        }
        return Promise.reject(response);
    })
    .catch((response) => {
        alert(response.statusText);
    });;
}