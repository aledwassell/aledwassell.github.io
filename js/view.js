fetch('js/list.json')
  .then((result) => result.json())
  .then((data) => makeHTML(data));

Handlebars.registerHelper('mainTitle', function() {

});

const makeHTML = (data) => {
  let middleList = Math.floor(data.links.length) / 2;
  data.links.splice(middleList, 0, data.mainTitle);

  let templateInput = document.getElementById('template').innerHTML;
  let compileTemplate = Handlebars.compile(templateInput);
  let generatedHTML = compileTemplate(data);

  let targetDiv = document.getElementById('target');

  targetDiv.innerHTML = generatedHTML;
  console.log(data);
}
