function _1(md){return(
md`# Untitled`
)}

function _data(FileAttachment){return(
FileAttachment("data.json").json()
)}

function _yearGenderCounts(){return(
[]
)}

function _years(data){return(
data.map(record => record.Year)
)}

function _5(yearGenderCounts,years,data)
{
  yearGenderCounts.length = 0; // 清空陣列
  var minYear = Math.min(...years);
  var maxYear = Math.max(...years);
  for (var y = minYear; y <= maxYear; y++) {
    yearGenderCounts.push({ year: y, gender: "male", count: 0 });
    yearGenderCounts.push({ year: y, gender: "female", count: 0 });
  }
  data.forEach(record => {
    var index = (record.Year - minYear) * 2 + (record.Gender == "男" ? 0 : 1);
    yearGenderCounts[index].count++;
  })
  return yearGenderCounts;
}


function _6(Plot,yearGenderCounts){return(
Plot.plot({
  
  grid: true,
  y: {label: "count"},

  marks: [
    Plot.ruleY([0]),
    Plot.barY(yearGenderCounts, {x: "year", y: "count"}),
  ]
})
)}

function _formMargins(Inputs){return(
Inputs.form({
  marginTopValue: Inputs.range([0, 100], { label: "Margin Top", step: 1 }),
  marginRightValue: Inputs.range([0, 100], { label: "Margin Right", step: 1 }),
  marginBottomValue: Inputs.range([0, 100], { label: "Margin Bottom", step: 1 }),
  marginLeftValue: Inputs.range([0, 100], { label: "Margin Left", step: 1 }),
})
)}

function _8(Plot,formMargins,yearGenderCounts){return(
Plot.plot({
  marginTop: formMargins.marginTopValue,
  marginRight: formMargins.marginRightValue,
  marginBottom: formMargins.marginBottomValue,
  marginLeft: formMargins.marginLeftValue,
  
  y: { label: "Count", grid: true },
  marks: [
    Plot.ruleY([0]),
    Plot.barY(yearGenderCounts, { x: "year", y: "count", fill: "gender", tip: true })
  ]
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["data.json", {url: new URL("./files/2259824662fb612853b8873b8814ace51e8cbac39ba881850d66e26df63f1897b01d1bd3459af6529669fd912da9dd607a30666a93278d7fdfa10bbe22b8913d.json", import.meta.url), mimeType: "application/json", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("data")).define("data", ["FileAttachment"], _data);
  main.variable(observer("yearGenderCounts")).define("yearGenderCounts", _yearGenderCounts);
  main.variable(observer("years")).define("years", ["data"], _years);
  main.variable(observer()).define(["yearGenderCounts","years","data"], _5);
  main.variable(observer()).define(["Plot","yearGenderCounts"], _6);
  main.variable(observer("viewof formMargins")).define("viewof formMargins", ["Inputs"], _formMargins);
  main.variable(observer("formMargins")).define("formMargins", ["Generators", "viewof formMargins"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","formMargins","yearGenderCounts"], _8);
  return main;
}
