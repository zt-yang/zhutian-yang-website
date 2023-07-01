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
const patrick = "Patrick H. Winston";
const hsu = "David Hsu";

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
  var talk = "talk" in options ? options.talk : "";
  var demo = "demo" in options ? options.demo : "";
  var paper = "paper" in options ? options.paper : "";
  var id = "id" in options ? options.id : "";
  var poster = "poster" in options ? options.poster : "";
  var postersize = "postersize" in options ? options.postersize : [800, 440];
  var video = "video" in options ? options.video : "";
  var videosize = "videosize" in options ? options.videosize : [800, 440];
  var page = "page" in options ? options.page : "";
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
  if (demo !== "") {
    list.push(`<a href="${demo}">[Video Demo]</a>`)
  }
  if (video !== "" && id !== "") {
    list.push(`<span id="showvid${id}" class="posterbutton"  onclick="document.getElementById('vid${id}').style.display='block'; document.getElementById('hidevid${id}').style.display='inline'; document.getElementById('showvid${id}').style.display='none'"  onmouseover="underlineSpan(this)" onmouseout="normalSpan(this)">[Video (click to show)]</span>
    <span id="hidevid${id}" class="posterbutton" style="display:none" onclick="document.getElementById('vid${id}').style.display='none'; document.getElementById('hidevid${id}').style.display='none'; document.getElementById('showvid${id}').style.display='inline'"  onmouseover="underlineSpan(this)" onmouseout="normalSpan(this)"">[Video (click to hide)]</span>
    <iframe class="posterlink" frameborder="0" id="vid${id}" src="${video}" style="display:none;" width="${videosize[0]}px"
    height="${videosize[1]}px" allow="autoplay"></iframe>`)
  }
  if (poster !== "" && id !== "") {
    list.push(`<span id="show${id}" class="posterbutton"  onclick="document.getElementById('${id}').style.display='block'; document.getElementById('hide${id}').style.display='inline'; document.getElementById('show${id}').style.display='none'"  onmouseover="underlineSpan(this)" onmouseout="normalSpan(this)">[Poster (click to show)]</span>
    <span id="hide${id}" class="posterbutton" style="display:none" onclick="document.getElementById('${id}').style.display='none'; document.getElementById('hide${id}').style.display='none'; document.getElementById('show${id}').style.display='inline'"  onmouseover="underlineSpan(this)" onmouseout="normalSpan(this)"">[Poster (click to hide)]</span>
    <iframe class="posterlink" id="${id}" src="${poster}" style="display:none;" width="${postersize[0]}px"
    height="${postersize[1]}px" allow="autoplay"></iframe>`)
  }
  return line + list.join("&nbsp;");
}

module.exports = {
  name: "Zhutian Yang",
  email: "ztyang {at} mit {dot} edu",
  publications: [
    {
      title: "Sequence-Based Plan Feasibility Prediction for Efficient Task and Motion Planning",
      authors: authorList([ yang, caelan, lpk, tlp, dieter ]),
      conference: "RSS 2023",
      visual: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/rss23kitchens.gif?raw=true",
      extra: extraInfo({
        paper: "https://arxiv.org/abs/2211.01576",
        id: "piginet",
        page: "https://piginet.github.io/",
        news: "&#128293; We won Best Paper Runner-Up in CoRL 2022 Workshop on Learning, Perception, and Abstraction for Long-Horizon Planning",
        // poster: "https://drive.google.com/file/d/1wnBqlRWs2qvFNoK2X20d6SMYNGieqe6t/preview",
        // postersize: [800, 440], // 20.86 x 11.46 inches
      })
    },
    {
      title: "Let’s Handle It: Generalizable Manipulation of Articulated Objects",
      authors: authorList([ yang, aidan ]),
      conference: "ICRL 2022 Workshop on Generalizable Policy Learning in the Physical World",
      visual: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/iclr22cover_cropped.jpg?raw=true",
      extra: extraInfo({
        paper: "https://openreview.net/pdf?id=SObVnEp4yb9",
        id: "maniskill",
        poster: "https://drive.google.com/file/d/1arsOQ_e9Ydt12QbYNd6uIswdKFz-fcHP/preview",
        postersize: [800, 534], // 2592×1728
        news: "&#128293; We won 2nd place in the ManiSkill Challenge 2022 Robotics Track"
      }),
    },
    {
      title: "Flexibly Instructable Robots",
      authors: authorList([ yang, patrick, hsu ]),
      conference: "Undergraduate thesis work; Also appeared in Advances in Cognitive Systems 2019 and DSpace@MIT",
      visual: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/robochef19cover.png?raw=true",
      extra: extraInfo({
        paper: "https://dspace.mit.edu/handle/1721.1/119668",
        id: "robotchef",
        demo: "https://youtu.be/oGgHGs0lKPU",
        poster: "https://drive.google.com/file/d/1FMIQsfJN5r8Rkqw435AHijorCHgjXDkq/preview",
        postersize: [800, 534], 
      }),
    },
  ],
};
