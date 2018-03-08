require('./location.js');
require('./pop.js');

const template = require('./hbs_template.hbs');

fetch('js/list.json')
  .then((result) => result.json())
  .then((data) => makeHTML(data))
  .catch((ex) => {
    console.log('parsing failed', ex)
  });

const makeHTML = (data) => {
  let middleList = Math.floor(data.links.length) / 2;
  data.links.splice(middleList, 0, data.mainTitle);

  // let templateInput = document.getElementById('template').innerHTML;
  // let compileTemplate = Handlebars.compile(templateInput);
  // let generatedHTML = compileTemplate(data);

  let targetDiv = document.getElementById('target');

  targetDiv.innerHTML = template(data);
}
