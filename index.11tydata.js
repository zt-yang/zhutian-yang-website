// The module.exports object at the bottom is the data that powers the index.njk
// template file. When you see {{name}}, for example, it refers to the name
// field of this object.
//
// This file is a JavaScript file that runs when the site is generated, which
// lets us flexibly prepare the data and simplifies the template.

// These are my frequent collaborators, so let's use some variables:
const yang = "Zhutian Yang";
const caelan = "Caelan Reed Garrett";
const lpk = "Leslie Pack Kaelbling";
const tlp = "Tomás Lozano-Pérez";
const dieter = "Dieter Fox";
const aidan = "Aidan Curtis";

// authorList generates the HTML for the author list from a JS array
function authorList(authors) {
  var list = [];
  authors.forEach((name, i) => {
    if (name == yang) {
      name = '<span class="self-author">' + name + "</span>";
    }
    if (i == authors.length - 1) {
      list.push("and " + name);
    } else {
      list.push(name);
    }
  });
  return list.join(", ");
}

// sometimes there are paper links, project pages, talk videos, and news
function extraInfo(options) {
  var line = "";
  var list = [];
  var news = "news" in options ? options.news : "";
  var paper = "paper" in options ? options.paper : "";
  var page = "page" in options ? options.page : "";
  var talk = "talk" in options ? options.talk : "";
  if (news !== "") {
    line = `<p style="color: grey"><i>${news}</i></p>`
  }
  if (paper !== "") {
    list.push(`<a href="${paper}">[Paper]</a>`)
  }
  if (page !== "") {
    list.push(`<a href="${page}">[Project Page]</a>`)
  }
  if (talk !== "") {
    list.push(`<a href="${talk}">[Talk]</a>`)
  }
  return line + list.join("&nbsp;");
}

module.exports = {
  name: "Zhutian Yang",
  email: "ztyang {at} mit {dot} edu",
  publications: [
    {
      title: "Sequence-Based Plan Feasibility Prediction for Efficient Task and Motion Planning",
      authors: authorList([ yang, caelan, dieter ]),
      conference: "CoRL 2022, Workshop on Learning, Perception, and Abstraction for Long-Horizon Planning (in submission)",
      extra: extraInfo({paper: "http://arxiv.org/abs/2211.01576"})
    },
    {
      title: "Let’s Handle It: Generalizable Manipulation of Articulated Objects",
      authors: authorList([ yang, aidan ]),
      conference: "ICRL 2022, Generalizable Policy Learning in the Physical World",
      extra: extraInfo({
        paper: "https://openreview.net/pdf?id=SObVnEp4yb9",
        news: "&#128293; We won 2nd place in the ManiSkill Challenge 2022 Robotics Track"
      }),
    },
  ],
};
