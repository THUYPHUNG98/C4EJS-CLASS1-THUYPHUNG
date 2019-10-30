function viewQuote(quote, author) {
    const quote_content = document.getElementById('quote_content');
    const quote_author = document.getElementById('quote_author');
    quote_content.textContent = quote;
    quote_author.textContent = author;
}
async function loadData() {
    const conn = await fetch('http://quotes.rest/qod.json');
    const data = await conn.json();
    console.log(data);
    console.log(data.contents.quotes[0]);
    viewQuote(data.contents.quotes[0].quote, data.contents.quotes[0].author)
}
loadData();