// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})


/*
fetch = Hàm sử dụng 

Tìm nạp (fetch) = Chức năng được sử dụng để thực hiện các yêu cầu HTTP để tìm nạp tài nguyên.(Dữ liệu, hình ảnh, tệp kiểu JSON). Đơn giản hóa việc tìm nạp dữ liệu không đồng bộ trong JavaScript và được sử dụng để tương tác với các API nhằm truy xuất và gửi dữ liệu không đồng bộ qua web. fetch(url, {options})

fetch(url, {method: 'GET'})
fetch(url, {method: 'POST'})
fetch(url, {method: 'PUT'})
*/


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => console.log(response))
//     .catch(error => console.error(error))


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json())
//     .then(data => console.log(data.name, data.weight, data.height))
//     .catch(error => console.error(error))


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Could not fetch resource")
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error))


async function fetchData() {
    try {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        // console.log(pokemonName)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("Couldn't fetch resource")
        }
        const data = await response.json();
        console.log(data)
        
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite
        imgElement.style.display = "block"
    } catch (error) {
        console.error(error)
    }
}

// fetchData()
