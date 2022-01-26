async function getData() {
    const response = await fetch("https://api.jikan.moe/v3/search/anime?q=Naruto");
    data = await response.json();        
    return data.results;
}

async function getAnimedata1() {
    try {
        let res = await getData();
        console.log(res)
        displayResult(res);
    } 
    catch (err) {
        console.error(err);
    }
}

function displayResult(res) {
   
    let Animedata = document.getElementById("Animedata");
    Animedata.innerHTML = "";

    for (let content in res) {
        let div = document.createElement('div');
        div.className = 'col-3'
        let img = document.createElement("img")
        
        img.src = res[content].image_url;
        img.className = "img-fluid";
        img.style.width = "180px";
        div.appendChild(img);

        let title = document.createElement("h4");
        title.innerHTML = "Title: " + res[content].title;
        div.appendChild(title);

        let type = document.createElement("h4");
        type.innerHTML = "Type of series: " + res[content].type;
        div.appendChild(type);

        let score = document.createElement("h4");
        score.innerHTML = "IMDB Rating: " + res[content].score;
        div.appendChild(score);
        
        let startdate = document.createElement("h4");
        startdate.innerHTML = "Start Date: " + res[content].start_date;
        div.appendChild(startdate);

        let enddate = document.createElement("h4");
        enddate.innerHTML = "End Date: " + res[content].end_date;
        div.appendChild(enddate);

        let rated = document.createElement("h4");
        rated.innerHTML = "Rated: " + res[content].type;
        div.appendChild(rated);

        Animedata.appendChild(div);
    }
}
getAnimedata1();