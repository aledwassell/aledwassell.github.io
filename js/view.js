fetch('https://raw.githubusercontent.com/aledwassell/jason_data/master/list.json')
  .then((result) => result.json())
  .then((data) => makeHTML(data));

Handlebars.registerHelper('mainTitle', (header) => {
  
})

const makeHTML = (data) => {
  let middleList = Math.floor(data.links.length) / 2;

  let templateInput = document.getElementById('template').innerHTML;
  let compileTemplate = Handlebars.compile(templateInput);
  let generatedHTML = compileTemplate(data);

  let targetDiv = document.getElementById('target');

  targetDiv.innerHTML = generatedHTML;
}
