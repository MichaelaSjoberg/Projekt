// let showAlert = () => {
//   alert("What?! Don't click me!")
// }
//
// let hideDiv = () => {
//   document.querySelector(".text").classList.toggle("hide");
//   let name = "Michaela"
//   document.querySelector(".name").innerHTML=name
// }
//
// document.querySelector(".myButton").onclick = showAlert
// document.querySelector(".myButton2").onclick = hideDiv
//
// let variabel = "Michaela"
// console.log(variabel)
//
// let siffra1 = 5
// let siffra2 = 10
// console.log(siffra1+siffra2)
//
// let nyhet = "hej hej"
// nyhet.toUpperCase()
// document.querySelector(".nyhet").innerHTML=nyhet
// }

let clickCount = 0

let incrementCount = () => {
  clickCount += 1
  console.log(clickCount)
  document.querySelector(".output").innerHTML=clickCount
}
document.querySelector(".myButton").onclick = incrementCount

let fruits = ["Apple", "Orange", "Lemon", "Kiwi"]

fruits.push("Mango");

fruits.forEach((fruitName) => {
  console.log(fruitName)
})

let newsTitles = ["Hotet mot handbollens framtid i Stockholm", "jo, placebo funkar – även när man vet att det är fejk", "Vilken version av dig umgås dina vänner med i kväll?"]


// newsTitles.forEach((news) => {
//   console.log(news)
// })
//
// let articlesDiv = document.querySelector(".demo")
//
// newsTitles.forEach(title => {
//   articlesDiv.innerHTML += `<h2>${title}</h2>`
// })
//

let newsArticles = [{
  title: "Article 1",
  preamble: "Article about space",
  image: "https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg"
},
{
  title: "Article 2",
  preamble: "Article about planets",
  image: "https://r.hswstatic.com/w_907/gif/tesla-cat.jpg"
}
]

// let manyArticles = document.querySelector(".artiklar")
// newsArticles.forEach(article => {
//   manyArticles.innerHTML += `<h2>${article.title}</h2>`
//   manyArticles.innerHTML += `<h3>${article.preamble}</h3>`
// })

let manyArticles = document.querySelector(".artiklar")
newsArticles.forEach((article) => {
  manyArticles.innerHTML += `
  <div class="artiklar">
  <h2>${article.title}</h2>
  <h3>${article.preamble}</h3>
  <img src="${article.image}"/>
  </div>
  `
})
