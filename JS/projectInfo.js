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
