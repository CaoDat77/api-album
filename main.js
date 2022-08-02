let apialbums = "https://jsonplaceholder.typicode.com/albums";
fetch(apialbums)
  .then(function (albums) {
    return albums.json();
  })
  .then(function (tag) {
    const htmls = tag.map(function (elm) {
      return `
        <p>${elm.userId} :${elm.id}:${elm.title}</p>
      `;
    });
    let html = htmls.join("");
    document.querySelector(".item").innerHTML = html;
  });
