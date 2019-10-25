const reload_btn = document.getElementById('reload');
const display_quote = document.getElementById('display_quote');
const display_author = document.getElementById('display_author');
reload_btn.addEventListener('click', function() {
    loadData();
})
async function loadData() {
    const conn = await fetch('https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json');
    const data = await conn.json();
    let quote = data[Math.floor(Math.random()*data.length)];
    console.log(quote);
    display_quote.textContent = quote.quoteText;
    display_author.textContent = quote.quoteAuthor;
}
loadData();