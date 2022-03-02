// THIS IS FOR HTML-CSS-PROJECTS
const htmlCssProjectContainer = document.querySelector(
  `.html-css-project-container`
);
const leftHCProjectArray = []; // projects added on action of pressing left button
const liveHCProjectArray = []; // this array keeps track of current projects live on screen
const rightHCProjectArray = []; // projects added on action of pressing right button
const hcleftArrow = document.querySelector(`.html-css-left`);
const hcrightArrow = document.querySelector(`.html-css-right`);
const HtmlCssProjectArray = [
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/HackerRank.gif" alt="Hackerrank.gif" />
</div>
<div class="project-title">HackerRank</div>
<div class="project-description hide-scrollbars">
A clone website made by referring style and design of HackerRank 
website. the goal of building this was to understand and solidify
html and css. 
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
</div>
<div class="project-code">
  <a class="code-link" target = "_blank" href="https://github.com/sanizm/Project_HackeRank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/eclass.gif" alt="eclass.gif" />
</div>
<div class="project-title">Eclass</div>
<div class="project-description hide-scrollbars">
This is a clone website made by referring the York University 's Eclass website. 
A website where students access their course material, grades, exams. 
Made with the sole purpose of improving and better understanding html and css Concepts.
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
</div>
<div class="project-code">
  <a class="code-link" href="https://github.com/sanizm/Project_Eclass" target = "_blank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/NewsGrid.gif" alt="" />
</div>
<div class="project-title">NewsGrid</div>
<div class="project-description hide-scrollbars">
A news website with the name of newsGrid. This is a template website which has various sections to display pictures and news content you can select different new articles.
there is about page as well which tells you more about what newsGrid is. Note this is just a template website made with html and css with the sole purpose of brushing up 
concepts and better understanding of css Grid property.
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
</div>
<div class="project-code">
  <a class="code-link" href="https://github.com/sanizm/Project_NewsGrid" target= "_blank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/Hotel.gif" alt="" />
</div>
<div class="project-title">Hotel Website</div>
<div class="project-description hide-scrollbars">
A Presentational website whose design is eye-catching simply made with html css.
 The sole purpose of building this is to learn and solidify and sharpen my 
 html css skills. Presents history of hotel, hotel amenities,
 guest responses to hotel hospitality and a contact form design
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
</div>
<div class="project-code">
  <a class="code-link" href="https://github.com/sanizm/HotelWebsite/tree/master" target ="_blank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/education.jpg" alt="" />
</div>
<div class="project-title">lorem</div>
<div class="project-description hide-scrollbars">
  Lorem ipsum dolor, sit amet consectetur adipisicing555 elit.
  Perferendis est commodi rem inventore illo fuga! Lorem ipsum dolor
  sit amet consectetur, adipisicing elit. Corporis, ipsa?
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
</div>
<div class="project-code">
  <a class="code-link" href="#">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/education.jpg" alt="" />
</div>
<div class="project-title">lorem</div>
<div class="project-description hide-scrollbars">
  Lorem ipsum dolor, sit amet consectetur adipisicing666 elit.
  Perferendis est commodi rem inventore illo fuga! Lorem ipsum dolor
  sit amet consectetur, adipisicing elit. Corporis, ipsa?
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
</div>
<div class="project-code">
  <a class="code-link" href="#">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/education.jpg" alt="" />
</div>
<div class="project-title">lorem</div>
<div class="project-description hide-scrollbars">
  Lorem ipsum dolor, sit amet consectetur adipisicing777 elit.
  Perferendis est commodi rem inventore illo fuga! Lorem ipsum dolor
  sit amet consectetur, adipisicing elit. Corporis, ipsa?
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
</div>
<div class="project-code">
  <a class="code-link" href="#">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/education.jpg" alt="" />
</div>
<div class="project-title">lorem</div>
<div class="project-description hide-scrollbars">
  Lorem ipsum dolor, sit amet consectetur adipisicing888 elit.
  Perferendis est commodi rem inventore illo fuga! Lorem ipsum dolor
  sit amet consectetur, adipisicing elit. Corporis, ipsa?
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
</div>
<div class="project-code">
  <a class="code-link" href="#">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/education.jpg" alt="" />
</div>
<div class="project-title">lorem</div>
<div class="project-description hide-scrollbars">
  Lorem ipsum dolor, sit amet consectetur adipisicing999 elit.
  Perferendis est commodi rem inventore illo fuga! Lorem ipsum dolor
  sit amet consectetur, adipisicing elit. Corporis, ipsa?
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
</div>
<div class="project-code">
  <a class="code-link" href="#">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/education.jpg" alt="" />
</div>
<div class="project-title">lorem</div>
<div class="project-description hide-scrollbars">
  Lorem ipsum dolor, sit amet consectetur adipisicing10 elit.
  Perferendis est commodi rem inventore illo fuga! Lorem ipsum dolor
  sit amet consectetur, adipisicing elit. Corporis, ipsa?
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
</div>
<div class="project-code">
  <a class="code-link" href="#">Source Code</a>
</div>
</div>`,
];

const htmlCssJsProjectContainer = document.querySelector(
  `.html-css-js-project-container`
);
const leftHCJProjectArray = []; // projects added on action of pressing left button
const liveHCJProjectArray = []; // this array keeps track of current projects live on screen
const rightHCJProjectArray = []; // projects added on action of pressing right button
const hcjleftArrow = document.querySelector(`.html-css-js-left`);
const hcjrightArrow = document.querySelector(`.html-css-js-right`);
const HtmlCssJsProjectArray = [
  `
 <div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/education.jpg" alt="" />
</div>
<div class="project-title">lorem</div>
<div class="project-description hide-scrollbars">
  Lorem ipsum dolor, sit amet consectetur adipisicing111 elit.
  Perferendis est commodi rem inventore illo fuga! Lorem ipsum dolor
  sit amet consectetur, adipisicing elit. Corporis, ipsa?
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
  <div class="tag js-tag gradient-blue">js</div>
</div>
<div class="project-code">
  <a class="code-link" href="#">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/education.jpg" alt="" />
</div>
<div class="project-title">lorem</div>
<div class="project-description hide-scrollbars">
  Lorem ipsum dolor, sit amet consectetur adipisicing222 elit.
  Perferendis est commodi rem inventore illo fuga! Lorem ipsum dolor
  sit amet consectetur, adipisicing elit. Corporis, ipsa?
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
  <div class ="tag js-tag gradient-blue">js</div>
</div>
<div class="project-code">
  <a class="code-link" href="#">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/education.jpg" alt="" />
</div>
<div class="project-title">lorem</div>
<div class="project-description hide-scrollbars">
  Lorem ipsum dolor, sit amet consectetur adipisicing333 elit.
  Perferendis est commodi rem inventore illo fuga! Lorem ipsum dolor
  sit amet consectetur, adipisicing elit. Corporis, ipsa?
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
  <div class= "tag js-tag gradient-blue">js</div>
</div>
<div class="project-code">
  <a class="code-link" href="#">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/education.jpg" alt="" />
</div>
<div class="project-title">lorem</div>
<div class="project-description hide-scrollbars">
  Lorem ipsum dolor, sit amet consectetur adipisicing444 elit.
  Perferendis est commodi rem inventore illo fuga! Lorem ipsum dolor
  sit amet consectetur, adipisicing elit. Corporis, ipsa?
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
  <div class = "tag js-tag gradient-blue">js</div>
</div>
<div class="project-code">
  <a class="code-link" href="#">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/education.jpg" alt="" />
</div>
<div class="project-title">lorem</div>
<div class="project-description hide-scrollbars">
  Lorem ipsum dolor, sit amet consectetur adipisicing555 elit.
  Perferendis est commodi rem inventore illo fuga! Lorem ipsum dolor
  sit amet consectetur, adipisicing elit. Corporis, ipsa?
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
  <div class = "tag js-tag gradient-blue">js</div>
</div>
<div class="project-code">
  <a class="code-link" href="#">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/education.jpg" alt="" />
</div>
<div class="project-title">lorem</div>
<div class="project-description">
  Lorem ipsum dolor, sit amet consectetur adipisicing666 elit.
  Perferendis est commodi rem inventore illo fuga! Lorem ipsum dolor
  sit amet consectetur, adipisicing elit. Corporis, ipsa?
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
  <div class = "tag js-tag gradient-blue">js</div>
</div>
<div class="project-code">
  <a class="code-link" href="#">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/education.jpg" alt="" />
</div>
<div class="project-title">lorem</div>
<div class="project-description hide-scrollbars">
  Lorem ipsum dolor, sit amet consectetur adipisicing777 elit.
  Perferendis est commodi rem inventore illo fuga! Lorem ipsum dolor
  sit amet consectetur, adipisicing elit. Corporis, ipsa?
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
  <div class= "tag js-tag gradient-blue">js</div>
</div>
<div class="project-code">
  <a class="code-link" href="#">Source Code</a>
</div>
</div>`,
];

const javaProjectContainer = document.querySelector(`.java-project-container`);
const leftJProjectArray = []; // projects added on action of pressing left button
const liveJProjectArray = []; // this array keeps track of current projects live on screen
const rightJProjectArray = []; // projects added on action of pressing right button
const jleftArrow = document.querySelector(`.java-left`);
const jrightArrow = document.querySelector(`.java-right`);
const JavaProjectArray = [
  `
 <div class="project-card">
<div class="project-i hide-scrollbarsmage">
  <img class="project-img" src="../IMAGES/education.jpg" alt="" />
</div>
<div class="project-title">lorem</div>
<div class="project-description hide-scrollbars">
  Lorem ipsum dolor, sit amet consectetur adipisicing111 elit.
  Perferendis est commodi rem inventore illo fuga! Lorem ipsum dolor
  sit amet consectetur, adipisicing elit. Corporis, ipsa?
</div>
<div class="project-tags">
  <div class="tag java-tag gradient-purple">java</div>
<div class="tag sql-tag gradient-teal">sql</div>
</div>
<div class="project-code">
  <a class="code-link" href="#">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-i hide-scrollbarsmage">
 <img class="project-img" src="../IMAGES/education.jpg" alt="" />
</div>
<div class="project-title">lorem</div>
<div class="project-description hide-scrollbars">
 Lorem ipsum dolor, sit amet consectetur adipisicing222 elit.
 Perferendis est commodi rem inventore illo fuga! Lorem ipsum dolor
 sit amet consectetur, adipisicing elit. Corporis, ipsa?
</div>
<div class="project-tags">
 <div class="tag java-tag gradient-purple">java</div>
<div class="tag sql-tag gradient-teal">sql</div>
</div>
<div class="project-code">
 <a class="code-link" href="#">Source Code</a>
</div>
</div>`,
];
