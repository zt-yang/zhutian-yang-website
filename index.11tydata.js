// The module.exports object at the bottom is the data that powers the index.njk
// template file. When you see {{name}}, for example, it refers to the name
// field of this object.
//
// This file is a JavaScript file that runs when the site is generated, which
// lets us flexibly prepare the data and simplifies the template.

'use strict';

// These are my frequent collaborators, so let's use some variables:
const yang = "Zhutian Yang";
const caelan = "Caelan Reed Garrett";
const lpk = "Leslie Pack Kaelbling";
const tlp = "Tomás Lozano-Pérez";
const dieter = "Dieter Fox";
const aidan = "Aidan Curtis";
const patrick = "Patrick Henry Winston";
const hsu = "David Hsu";
const jiayuan = "Jiayuan Mao"
const jiajun = "Jiajun Wu"
const yilun = "Yilun Du"
const jbt = "Joshua Brett Tenenbaum"
const yajvan = "Yajvan Ravan"
const tao = "Tao Chen"


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
  var shoutout = "shoutout" in options ? options.shoutout : "";
  var talk = "talk" in options ? options.talk : "";
  var demo = "demo" in options ? options.demo : "";
  var tldr = "tldr" in options ? options.tldr : "";
  var code = "code" in options ? options.code : "";
  var paper = "paper" in options ? options.paper : "";
  var id = "id" in options ? options.id : "";
  var poster = "poster" in options ? options.poster : "";
  var postersize = "postersize" in options ? options.postersize : [800, 440];
  var video = "video" in options ? options.video : "";
  var videosize = "videosize" in options ? options.videosize : [800, 440];
  var page = "page" in options ? options.page : "";
  var media = "media" in options ? options.media : [];
  var bibtex = "bibtex" in options ? options.bibtex : "";

  if (tldr !== "") {
    line += `<p style="color:#e67e22"><i><b>TLDR</b>: ${tldr}</i></p>`
  }
  if (shoutout !== "") {
    line += `<p style="color: grey"><i>${shoutout}</i></p>`
  }
  if (paper !== "") {
    list.push(`<a class="highlightable" href="${paper}" target="_blank">Paper</a>`)
  }
  if (page !== "") {
    list.push(`<a class="highlightable" href="${page}" target="_blank">Project Page</a>`)
  }
  if (code !== "") {
    list.push(`<a class="highlightable" href="${code}" target="_blank">Code</a>`)
  }
  if (bibtex !== "") {
    list.push(`<a class="highlightable buttona" onclick="${bibtex}();">Bibtex</a>`)
    // list.push(`<a class="buttona" onclick="copyToClipboard(${bibtex});">Bibtex</a>`)
  }
  if (talk !== "") {
    list.push(`<a class="highlightable" href="${talk}" target="_blank">Talk</a>`)
  }
  if (demo !== "") {
    list.push(`<a class="highlightable" href="${demo}" target="_blank">Video Demo</a>`)
  }
  for (const [medianame, mediaurl] of Object.entries(media)) {
    list.push(`<a class="highlightable" href="${mediaurl}" target="_blank">${medianame}</a>`)
  }
  if (video !== "" && id !== "") {
    list.push(`<span id="showvid${id}" class="highlightable posterbutton"  onclick="document.getElementById('vid${id}').style.display='block'; document.getElementById('hidevid${id}').style.display='inline'; document.getElementById('showvid${id}').style.display='none'"  onmouseout="normalSpan(this)">Video (click to show)</span>
    <span id="hidevid${id}" class="highlightable posterbutton" style="display:none" onclick="document.getElementById('vid${id}').style.display='none'; document.getElementById('hidevid${id}').style.display='none'; document.getElementById('showvid${id}').style.display='inline'"  onmouseout="normalSpan(this)"">Video (click to hide)</span>
    <iframe class="posterlink" frameborder="0" id="vid${id}" src="${video}" style="display:none;" width="${videosize[0]}px"
    height="${videosize[1]}px" allow="autoplay"></iframe>`)
  }
  if (poster !== "" && id !== "") {
    list.push(`<span id="show${id}" class="highlightable posterbutton"  onclick="document.getElementById('${id}').style.display='block'; document.getElementById('hide${id}').style.display='inline'; document.getElementById('show${id}').style.display='none'" onmouseout="normalSpan(this)">Poster (click to show)</span>
    <span id="hide${id}" class="highlightable posterbutton" style="display:none" onclick="document.getElementById('${id}').style.display='none'; document.getElementById('hide${id}').style.display='none'; document.getElementById('show${id}').style.display='inline'"   onmouseout="normalSpan(this)"">Poster (click to hide)</span>
    <iframe class="posterlink" id="${id}" src="${poster}" style="display:none;" width="${postersize[0]}px"
    height="${postersize[1]}px" allow="autoplay"></iframe>`)
  }
  return line + list.join("&nbsp;&nbsp;|&nbsp;&nbsp;");
}

module.exports = {
  name: "Zhutian (Skye) Yang",
  pronounciation: "ju tin-yen young",
  // email: "ztyang {at} mit {dot} edu",
  // emailme: "mailto:ztyang@mit.edu",
  email: "oxskye {at} gmail {dot} com",
  emailme: "mailto:oxskye@gmail.com",
  twitter: "https://twitter.com/ZhutianYang_",
  linkedin: "https://www.linkedin.com/in/zhutian-yang/",
  github: "https://github.com/zt-yang",
  scholar: "https://scholar.google.com/citations?user=vW5LLmUAAAAJ&hl=en",
  youtube: "https://cap.csail.mit.edu/engage/spotlights/zhutian-yang?utm_source=linkedin&utm_medium=social&utm_campaign=zhutianspot24",
  resume: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/ztyang-CV-2025.pdf?raw=true",
  publications: [
    {
      title: "(PhD Thesis) Learning to Solve Long-Horizon Manipulation Problems",
      authors: authorList([ yang]),
      conference: "Thesis Committee: Leslie Pack Kaelbling, Tomás Lozano-Pérez, Caelan Reed Garrett, Danfei Xu",
      visual: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/research/phd.jpg?raw=true",
      extra: extraInfo({
        paper: "https://drive.google.com/file/d/1C3IroMEMOVUbv3E8aXQFWkolWh6GTxAr/preview",
        id: "thesis",
        talk: "https://www.youtube.com/watch?v=w43wHR3Kr4o&ab_channel=ZhutianYang",
      })
    },
    {
      title: "Guiding Long-Horizon Task and Motion Planning with Vision Language Models",
      page: "https://zt-yang.github.io/vlm-tamp-robot",
      authors: authorList([ yang, caelan, lpk, tlp, dieter ]),
      conference: "ICRA 2025; CoRL 2024 LangRob Workshop (Spotlight)",
      visual: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/research/icra25vlmtamp.gif?raw=true",
      visual2: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/research/icra25method.png?raw=true",
      extra: extraInfo({
        paper: "http://arxiv.org/abs/2410.02193",
        code: "https://github.com/Learning-and-Intelligent-Systems/kitchen-worlds/tree/main",
        id: "vlmtamp",
        page: "https://zt-yang.github.io/vlm-tamp-robot",
        talk: "https://youtu.be/1JDua3opFuM",
        // media: {
        //   "MIT News": "https://news.mit.edu/2023/ai-helps-household-robots-cut-planning-time-half-0714",
        //   "Tech Crunch": "https://techcrunch.com/2023/07/07/mit-develops-a-motion-and-task-planning-system-for-home-robots/"
        // },
        // shoutout: "&#128293; Accepted for Oral in CoRL 2024 LangRob Workshop",
        poster: "https://drive.google.com/file/d/1mawmZZYIiHII_5xag9E3Va554wRQ9onB/preview", 
        postersize: [800, 991], // 46 x 57 inch
        bibtex: "copyVLMTAMPToClipboard",
        tldr: "Pretrained VLMs make mistakes in predicting robot actions when prompted with open language goals, so we use VLMs to break down long-horizon goals into subgoals, which are then solved by TAMP, in an interative replanning system. It's used to solve problems that involve interactions with 20+ objects and require 30-50 actions to complete.",
      })
    },
    {
      title: "Combining Planning and Diffusion for Mobility with Unknown Dynamics",
      page: "https://yravan.github.io/plannerorderedpolicy",
      authors: authorList([ yajvan, yang, tao, lpk, tlp ]),
      conference: "In Submission",
      visual: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/research/icra25popi.gif?raw=true",
      visual2: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/research/icra25popimethod.png?raw=true",
      extra: extraInfo({
        paper: "https://arxiv.org/abs/2410.06911",
        // code: "https://github.com/Learning-and-Intelligent-Systems/kitchen-worlds/tree/main",
        id: "popi",
        page: "https://yravan.github.io/plannerorderedpolicy",
        // talk: "https://youtu.be/1JDua3opFuM",
        // media: {
        //   "MIT News": "https://news.mit.edu/2023/ai-helps-household-robots-cut-planning-time-half-0714",
        //   "Tech Crunch": "https://techcrunch.com/2023/07/07/mit-develops-a-motion-and-task-planning-system-for-home-robots/"
        // },
        // shoutout: "&#128293; We won Best Paper Runner-Up in CoRL 2022 Workshop on Learning, Perception, and Abstraction for Long-Horizon Planning",
        // poster: "https://drive.google.com/file/d/1cpzkM4o91fNaOBnwIM_-YC58Yt5vOHML/preview",
        // postersize: [800, 440], // 1500×825
        // tldr: "Behabior cloning policies.",
        bibtex: "copyPopiToClipboard",
        tldr: "Rearranging large objects with unprediatble dynamics is hard because the relative pose between robot and object is changing. Diffusion policies that output global robot configurations struggle to generalize to new initial and goal conditions, or new environments and objects. So, we use motion planning to generating waypoints that guide a local diffusion policy, which is trained to achieve relative movements of the chair."
      })
    },
    {
      title: "Compositional Diffusion-Based Continuous Constraint Solvers",
      page: "https://diffusion-ccsp.github.io/",
      authors: authorList([ yang, jiayuan, yilun, jiajun, jbt, tlp, lpk]),
      conference: "CoRL 2023",
      visual: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/research/corl23packing.gif?raw=true",
      visual2: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/research/corl23method.gif?raw=true",
      extra: extraInfo({
        paper: "http://arxiv.org/abs/2309.00966",
        code: "https://github.com/zt-yang/diffusion-ccsp",
        id: "diffusion-ccsp",
        page: "https://diffusion-ccsp.github.io/",
        talk: "https://youtu.be/mhtYU7IevtE",
        bibtex: "copyDiffusionCCSPToClipboard",
        media: {
          "MIT News": "https://news.mit.edu/2023/new-technique-helps-robots-pack-objects-tight-space-1017",
        },
        poster: "https://drive.google.com/file/d/1uKmcsuBO0D5o5QrXBCKQfx4cPTTJ8mGv/preview",
        postersize: [800, 600], // 2880x2160
        tldr: "Multi-step manipulation problems involve a lot of collision-free, physical stability, and culture-defined spatial constraints. Conventional methods usually solve it by sampling then rejection, which is too slow. Therefore, we find global solutions by diffusion-based optimization, using diffusion models trained for each contraint type.",
      })
    },
    {
      title: "Sequence-Based Plan Feasibility Prediction for Efficient Task and Motion Planning",
      page: "https://piginet.github.io/",
      authors: authorList([ yang, caelan, lpk, tlp, dieter ]),
      conference: "RSS 2023",
      visual: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/research/rss23kitchens.gif?raw=true",
      visual2: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/research/rss23method.png?raw=true",
      extra: extraInfo({
        paper: "https://arxiv.org/abs/2211.01576",
        code: "https://github.com/Learning-and-Intelligent-Systems/kitchen-worlds/tree/main",
        id: "piginet",
        page: "https://piginet.github.io/",
        talk: "https://youtu.be/QXmcu9fVnak?t=23991",
        media: {
          "MIT News": "https://news.mit.edu/2023/ai-helps-household-robots-cut-planning-time-half-0714",
          "Tech Crunch": "https://techcrunch.com/2023/07/07/mit-develops-a-motion-and-task-planning-system-for-home-robots/"
        },
        shoutout: "&#128293; We won Best Paper Runner-Up in CoRL 2022 Workshop on Learning, Perception, and Abstraction for Long-Horizon Planning",
        poster: "https://drive.google.com/file/d/1cpzkM4o91fNaOBnwIM_-YC58Yt5vOHML/preview",
        postersize: [800, 440], // 1500×825
        bibtex: "copyPiginetToClipboard",
        tldr: "In long-horizon mobile manipulation problems in complex environments with lots of articulated and movable obstacles, task and motion planners spend most computation on solving motion planning problems that aren't solvable. So we train a plan feasibility prediction model that quickly sort candidate plans by their likelihood of success using visual and language features of the problem, which cuts down planning time by 50 - 80 %.",
      })
    },
    {
      title: "Let’s Handle It: Generalizable Manipulation of Articulated Objects",
      page: "",
      authors: authorList([ yang, aidan ]),
      conference: "ICRL 2022 Workshop on Generalizable Policy Learning in the Physical World (Spotlight)",
      visual: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/research/iclr22cover_cropped.jpg?raw=true",
      visual2: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/research/iclr22cover_cropped.jpg?raw=true",
      extra: extraInfo({
        paper: "https://openreview.net/pdf?id=SObVnEp4yb9",
        id: "maniskill",
        poster: "https://drive.google.com/file/d/1arsOQ_e9Ydt12QbYNd6uIswdKFz-fcHP/preview",
        postersize: [800, 534], // 2592×1728
        shoutout: "&#128293; We won 2nd place in the ManiSkill Challenge 2022 Robotics Track"
      }),
    },
    {
      title: "Flexibly Instructable Robots",
      page: "",
      authors: authorList([ yang, patrick, hsu ]),
      conference: "Undergraduate thesis work; Also appeared in Advances in Cognitive Systems 2019 and DSpace@MIT",
      visual: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/research/robochef19cover.png?raw=true",
      visual2: "https://github.com/zt-yang/zhutian-yang-website/blob/main/img/research/robochef19cover.png?raw=true",
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
