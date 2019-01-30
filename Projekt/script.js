// Our variables
let mercuryURL = "https://newsapi.org/v2/everything?sortBy=relevancy&q=mercury AND planet NOT (venus OR saturn)&language=en&excludeDomains=gizmodo.com&pageSize=3&apiKey=408117f4a74a49d4abca4ce93c06f24e"
let venusURL = "https://newsapi.org/v2/everything?sortBy=relevancy&q=planet AND venus NOT saturn&language=en&excludeDomains=techcrunch.com&pageSize=3&apiKey=408117f4a74a49d4abca4ce93c06f24e"
let earthURL = "https://newsapi.org/v2/everything?sortBy=relevancy&q=earth AND space NOT (venus OR mercury)&language=en&pageSize=3&apiKey=408117f4a74a49d4abca4ce93c06f24e"
let marsURL = "https://newsapi.org/v2/everything?sortBy=relevancy&q=mars AND planet&language=en&pageSize=3&apiKey=408117f4a74a49d4abca4ce93c06f24e"
let jupiterURL = "https://newsapi.org/v2/everything?sortBy=relevancy&q=jupiter AND planet NOT saturn&language=en&pageSize=3&apiKey=408117f4a74a49d4abca4ce93c06f24e"
let saturnusURL = "https://newsapi.org/v2/everything?sortBy=relevancy&q=saturn AND planet NOT mercury&language=en&pageSize=3&apiKey=408117f4a74a49d4abca4ce93c06f24e"
let uranusURL = "https://newsapi.org/v2/everything?sortBy=relevancy&q=uranus AND planet NOT (mercury OR venus)&language=en&pageSize=3&apiKey=408117f4a74a49d4abca4ce93c06f24e"
let neptunusURL = "https://newsapi.org/v2/everything?sortBy=relevancy&q=mercury AND space&language=en&pageSize=3&apiKey=408117f4a74a49d4abca4ce93c06f24e"
let plutoURL = "https://newsapi.org/v2/everything?sortBy=relevancy&q=planet AND pluto NOT saturn&language=en&excludeDomains=techcrunch.com&pageSize=3&apiKey=408117f4a74a49d4abca4ce93c06f24e"

// Mercury
let receivedNews = (newsData) => {
  newsData.articles.forEach((article) => {
    document.querySelector(".innehall").innerHTML +=
      `
      <div class="lanktext">
      <h2>${article.title}</h2>
      <h4>${article.author}</h4>
      <h3>${article.source.name} - ${moment(article.publishedAt).fromNow()}</h3>
      <p>${article.description}</p>
      <a href="${article.url}">Läs hela artikeln här</a>
      </div>
      `
  })
}

// Venus
let venusNews = (newsData) => {
  newsData.articles.forEach((article) => {
    document.querySelector(".venus").innerHTML +=
      `
      <div class="lanktext">
      <h2>${article.title}</h2>
      <h4>${article.author}</h4>
      <h3>${article.source.name} - ${moment(article.publishedAt).fromNow()}</h3>
      <p>${article.description}</p>
      <a href="${article.url}">Läs hela artikeln här</a>
      </div>
      `
  })
}

// Earth
let earthNews = (newsData) => {
  newsData.articles.forEach((article) => {
    document.querySelector(".earth").innerHTML +=
      `
      <div class="lanktext">
      <h2>${article.title}</h2>
      <h4>${article.author}</h4>
      <h3>${article.source.name} - ${moment(article.publishedAt).fromNow()}</h3>
      <p>${article.description}</p>
      <a href="${article.url}">Läs hela artikeln här</a>
      </div>
      `
  })
}

// Mars
let marsNews = (newsData) => {
  newsData.articles.forEach((article) => {
    document.querySelector(".mars").innerHTML +=
      `
      <div class="lanktext">
      <h2>${article.title}</h2>
      <h4>${article.author}</h4>
      <h3>${article.source.name} - ${moment(article.publishedAt).fromNow()}</h3>
      <p>${article.description}</p>
      <a href="${article.url}">Läs hela artikeln här</a>
      </div>
      `
  })
}

// Jupiter
let jupiterNews = (newsData) => {
  newsData.articles.forEach((article) => {
    document.querySelector(".jupiter").innerHTML +=
      `
      <div class="lanktext">
      <h2>${article.title}</h2>
      <h4>${article.author}</h4>
      <h3>${article.source.name} - ${moment(article.publishedAt).fromNow()}</h3>
      <p>${article.description}</p>
      <a href="${article.url}">Läs hela artikeln här</a>
      </div>
      `
  })
}

// Saturnus
let saturnusNews = (newsData) => {
  newsData.articles.forEach((article) => {
    document.querySelector(".saturnus").innerHTML +=
      `
      <div class="lanktext">
      <h2>${article.title}</h2>
      <h4>${article.author}</h4>
      <h3>${article.source.name} - ${moment(article.publishedAt).fromNow()}</h3>
      <p>${article.description}</p>
      <a href="${article.url}">Läs hela artikeln här</a>
      </div>
      `
  })
}

// Uranus
let uranusNews = (newsData) => {
  newsData.articles.forEach((article) => {
    document.querySelector(".uranus").innerHTML +=
      `
      <div class="lanktext">
      <h2>${article.title}</h2>
      <h4>${article.author}</h4>
      <h3>${article.source.name} - ${moment(article.publishedAt).fromNow()}</h3>
      <p>${article.description}</p>
      <a href="${article.url}">Läs hela artikeln här</a>
      </div>
      `
  })
}

// Neptunus
let neptunusNews = (newsData) => {
  newsData.articles.forEach((article) => {
    document.querySelector(".neptunus").innerHTML +=
      `
      <div class="lanktext">
      <h2>${article.title}</h2>
      <h4>${article.author}</h4>
      <h3>${article.source.name} - ${moment(article.publishedAt).fromNow()}</h3>
      <p>${article.description}</p>
      <a href="${article.url}">Läs hela artikeln här</a>
      </div>
      `
  })
}

// Pluto
let plutoNews = (newsData) => {
  newsData.articles.forEach((article) => {
    document.querySelector(".pluto").innerHTML +=
      `
      <div class="lanktext">
      <h2>${article.title}</h2>
      <h4>${article.author}</h4>
      <h3>${article.source.name} - ${moment(article.publishedAt).fromNow()}</h3>
      <p>${article.description}</p>
      <a href="${article.url}">Läs hela artikeln här</a>
      </div>
      `
  })
}

// Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
// These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
fetch(mercuryURL)
  .then(response => response.json())
  .then(receivedNews)

  fetch(venusURL)
    .then(response => response.json())
    .then(venusNews)

fetch(earthURL)
  .then(response => response.json())
  .then(earthNews)

fetch(marsURL)
  .then(response => response.json())
  .then(marsNews)

fetch(jupiterURL)
  .then(response => response.json())
  .then(jupiterNews)

fetch(saturnusURL)
  .then(response => response.json())
  .then(saturnusNews)

  fetch(uranusURL)
    .then(response => response.json())
    .then(uranusNews)

  fetch(neptunusURL)
    .then(response => response.json())
    .then(neptunusNews)

  fetch(plutoURL)
    .then(response => response.json())
    .then(plutoNews)
