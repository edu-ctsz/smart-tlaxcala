async function getWikiImageUrl(title) {
  const res = await fetch(`https://es.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=1000`);
  const data = await res.json();
  const pages = data.query.pages;
  const pageId = Object.keys(pages)[0];
  if (pages[pageId].thumbnail) {
    console.log(title, "->", pages[pageId].thumbnail.source);
  } else {
    console.log(title, "->", "No image found");
  }
}

async function run() {
  await getWikiImageUrl("Xicohtzinco");
}
run();
