
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const nextBtn = document.getElementById("next-btn");
const postMe = document.getElementById("postMe");
let realData = "";
let quotesData = "";

const postNow = ()=>{
  let quotePost = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
  window.open(quotePost);
}
const getNewQuotes = ()=>{
  let num = Math.floor(Math.random()*1000);
  console.log(num);
  quotesData = realData[num];
  quote.innerText=`${quotesData.text}`;

  quotesData.author ==null ? 
(author.innerText= "Unknown")
:(author.innerText=`${quotesData.author}`);

};
const getQuotes = async () => {
  const api ="https://type.fit/api/quotes";


try{
  let data = await fetch(api);
  realData = await data.json();
  getNewQuotes();
} catch(error){

}
};

postMe.addEventListener("click", postNow);
nextBtn.addEventListener("click", getNewQuotes);
getQuotes();