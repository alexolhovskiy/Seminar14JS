//console.log(data);

const newData = JSON.parse(data);
console.log(newData);

const divContentElem = document.querySelector('.content');

newData.sort(function (a, b) {
    if (a.name == b.name) {
        return 0;
    } else {
        if (a.name > b.name) {
            return 1;
        } else {
            return -1;
        }
    }
}).forEach(element => {
    divContentElem.insertAdjacentHTML('beforeEnd',
        `<div class='wrapper'>
            <h2>${element.name}</h2>
            <div class='wrapper_img'>
                <img src=${element.img}>
            </div>
            <div class='wrapper_text'>
                <p>Caliber: ${element.caliber}</p>
                <p>Highway speed: ${element.highway_speed}</p>
                <p>Radius of action: ${element.radius_of_action}</p>
                <p>Manufacturer: ${element.manufacturer}</p>

            </div>
        </div>`
    )
});

