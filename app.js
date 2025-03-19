document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("nomapper-btn").addEventListener("click", function() {
        loadData("no_mapper_games.json", "container");
    });

    document.getElementById("mbc1-btn").addEventListener("click", function() {
        loadData("mbc1_games.json", "container");
    });
    
    document.getElementById("mbc2-btn").addEventListener("click", function() {
        loadData("mbc2_games.json", "container");
    });

    document.getElementById("mbc3-btn").addEventListener("click", function() {
        loadData("mbc3_games.json", "container");
    });

    document.getElementById("mbc5-btn").addEventListener("click", function() {
        loadData("mbc5_games.json", "container");
    });

    document.getElementById("mbc6-btn").addEventListener("click", function() {
        loadData("mbc6_games.json", "container");
    });

    document.getElementById("mbc7-btn").addEventListener("click", function() {
        loadData("mbc7_games.json", "container");
    });

    document.getElementById("huc1-btn").addEventListener("click", function() {
        loadData("huc1_games.json", "container");
    });

    document.getElementById("huc3-btn").addEventListener("click", function() {
        loadData("huc3_games.json", "container");
    });

    document.getElementById("tama5-btn").addEventListener("click", function() {
        loadData("tama5_games.json", "container");
    });
});

function loadData(url, containerId) {
    fetch(url)
        .then(response => response.json())
        .then(data => displayItems(data, containerId))
        .catch(error => console.error('Error fetching JSON:', error));
}

function displayItems(data, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        // Clear existing content
        container.innerHTML = '';
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p><strong>ROM Name:</strong> ${item.title}</p>
                <p><strong>ROM Size:</strong> ${item.rom}</p>
                <p><strong>RAM:</strong> ${item.ram}</p>
                <p><strong>Mapper:</strong> ${item.mapper}</p>
                <p><strong>Region:</strong> ${item.destination}</p>
                <p><strong>Super Game Boy Compatible:</strong> ${item.sgb}</p>
                <p><strong>Color GB Compatible:</strong> ${item.cgb}</p>
            `;
            container.appendChild(itemElement);
        });
    } else {
        console.error('Container not found:', containerId);
    }
}
