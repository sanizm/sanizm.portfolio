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
  <img class="project-img" src="../IMAGES/EdgeLedger.gif" alt="" />
</div>
<div class="project-title">EdgeLedger</div>
<div class="project-description hide-scrollbars">
A financial website template. It is a template website where there is view of 
Investment banking, portfolio manager. sections for blogs
 . Business card viewer. creative viewing of team members 
 and a contact form. this is simply made with html css 
 and little bit of javascript in order to allow smooth scroll
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
</div>
<div class="project-code">
  <a class="code-link" href="https://github.com/sanizm/Project_EdgeLedger" target="_blank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/Netflix.gif" alt="Netlfix.gif" />
</div>
<div class="project-title">Netlfix</div>
<div class="project-description hide-scrollbars">
A clone website made by referring netflix website. made with the purpose to 
solidify learn html css basics and widening my knowledge about the various 
design styles that the website has. Little bit of JS is also used 
in order to add functionality on button click
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
</div>
<div class="project-code">
  <a class="code-link" href="https://github.com/sanizm/Project_Netflix" target="_blank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/Microsoft.gif" alt="" />
</div>
<div class="project-title">Microsoft</div>
<div class="project-description hide-scrollbars">
a clone of microsoft home page made to understand
 css grid property along with other design patterns.
 made with html css with the purpose of learning.
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
</div>
<div class="project-code">
  <a class="code-link" href="https://github.com/sanizm/Project_Microsoft" target="_blank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/MyTunes.gif" alt="" />
</div>
<div class="project-title">My Tunes</div>
<div class="project-description hide-scrollbars">
a clone website which looks like apple's itunes website made to understand
the design pattern of the website and to better understanding about css 
properties and their use. little bit of javascript typed in order to implement 
smooth scrolling.
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
</div>
<div class="project-code">
  <a class="code-link" href="https://github.com/sanizm/Project_MyTunes/tree/master" target="_blank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/Parallax.gif" alt="" />
</div>
<div class="project-title">Parallax</div>
<div class="project-description hide-scrollbars">
A simple website made with few images and section block to understand
 the parallax effect. I made this website while learning this parallax
  effect by following Brad Traversy youtube video.
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
</div>
<div class="project-code">
  <a class="code-link" href="https://github.com/sanizm/Project_ParallaxWebiste/tree/master" target = "_blank">Source Code</a>
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
  <img class="project-img" src="../IMAGES/TouchTyping.gif" alt="" />
</div>
<div class="project-title">Touch Typing</div>
<div class="project-description hide-scrollbars">
A Typing speed test web based application made using html, css and JavaScript. Using Asynchronous JavaScript 
online API is used in order to fetch different paragraph for typing every time the page is refreshed.A visual keyBoard
 is used which prompts the user what the next key press should be in case user types a wrong character key, the visual 
 keyboard colors the wrong key-press with red color. on finishing the code calculates and displays Accuracy, Mistakes, Speed.
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
  <div class="tag js-tag gradient-blue">js</div>
</div>
<div class="project-code">
  <a class="code-link" href="https://github.com/sanizm/Project_TypingSpeed" target = "_blank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/AlgoVisualiser.gif" alt="" />
</div>
<div class="project-title">AlgoVisualiser.edu</div>
<div class="project-description hide-scrollbars">
A visualising website that takes Sorting Algorithms like InsertionSort, 
QuickSort, MergeSort and sorts them by visualising with different colors
you can generate elements with different sizes and colors and you can also change the 
width of the elements. 
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
  <div class ="tag js-tag gradient-blue">js</div>
</div>
<div class="project-code">
  <a class="code-link" href="https://github.com/sanizm/AlgoVisualiser.edu" target="_blank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/bankist.gif" alt="" />
</div>
<div class="project-title">Bankist</div>
<div class="project-description hide-scrollbars">
While mastering javascript concepts came across these project which involves design 
of lazy loading of image, use of The Intersection Observer API, Event Delegation, Lifecycle 
of DOM elements credits <strong>@JonasSchmedtmann</strong>
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
  <div class= "tag js-tag gradient-blue">js</div>
</div>
<div class="project-code">
  <a class="code-link" href="https://github.com/sanizm/WebBank" target="_blank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/Bank.gif" alt="" />
</div>
<div class="project-title">Web Bank</div>
<div class="project-description hide-scrollbars">
A minimalist web based bank application made using fundamentals of OOP ( Object Oriented Programming) where
 a user can Login with user and pin. The application will show an interface that shows the balance
 recent transactions, functions such as Transferring money, requesting a loan or closing an account is
  provided credits <strong>@JonasSchmedtmann</strong>.
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
  <div class = "tag js-tag gradient-blue">js</div>
</div>
<div class="project-code">
  <a class="code-link" target="_blank" href="https://github.com/sanizm/Project_Bankist">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/GuessMyNumber!.gif" alt="" />
</div>
<div class="project-title">Guess_My_Number</div>
<div class="project-description hide-scrollbars">
A simple guess the number game between 0-20 with user-interface built with retro design like in the 80s game.
 This project was made while learning and mastering JavaScript credits <strong>@JonasSchmedtmann</strong>
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
  <div class = "tag js-tag gradient-blue">js</div>
</div>
<div class="project-code">
  <a class="code-link" target="_blank" href="https://github.com/sanizm/Project_GuessMyNumber">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/MyLearningKit.gif" alt="" />
</div>
<div class="project-title">My Learning Kit</div>
<div class="project-description hide-scrollbars">
A simple web application that has 40 computational problems with solutions 
both for the flowchart and code in javascript. you can see the flowchart and code solutions by clicking 
on the checkboxes.
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
  <div class = "tag js-tag gradient-blue">js</div>
</div>
<div class="project-code">
  <a class="code-link" target="_blank" href="https://github.com/sanizm/MyLearningKit">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-image">
  <img class="project-img" src="../IMAGES/UI_Component.gif" alt="" />
</div>
<div class="project-title">UI_Component</div>
<div class="project-description hide-scrollbars">
A UI_Component that has a button onClick functionality. Basic goal of this project is to replicate how other websites 
show a modal window which has a overlay getting overlaid over the rest of webpage credits <strong>@JonasSchmedtmann</strong>
</div>
<div class="project-tags">
  <div class="tag html-tag gradient-green">html</div>
  <div class="tag css-tag gradient-yellow">css</div>
  <div class= "tag js-tag gradient-blue">js</div>
</div>
<div class="project-code">
  <a class="code-link" target="_blank" href="https://github.com/sanizm/UI_Component">Source Code</a>
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
  <img class="project-img" src="../IMAGES/DNS_Resolver.gif" alt="" />
</div>
<div class="project-title">DNS Resolver</div>
<div class="project-description hide-scrollbars">
A DNS resolver that involves building a query sending it and parsing the response. 
The main goal of this project is to show the route that a DNS request when requested 
takes from root servers to various Name servers and finally to dedicated authoritative
 servers that contain answers for the query. The interaction is made in the form of a 
 command-line UI where user inserts various commands to interact.
</div>
<div class="project-tags">
  <div class="tag java-tag gradient-purple">java</div>
</div>
<div class="project-code">
  <a class="code-link" href="https://github.com/sanizm/Project_DNS_Resolver" target="_blank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-i hide-scrollbarsmage">
<img class="project-img" src="../IMAGES/VideoStreamer.gif" alt="" />
</div>
<div class="project-title">Video Streamer</div>
<div class="project-description hide-scrollbars">
A video streaming application for stored videos. MJPEG type of file is requested by the client and streamed from the 
server over the network to the client. The client will then play the video as it arrives.
</div>
<div class="project-tags">
<div class="tag java-tag gradient-purple">java</div>
</div>
<div class="project-code">
<a class="code-link" href="https://github.com/sanizm/videoStreamer"
 target = "_blank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-i hide-scrollbarsmage">
<img class="project-img" src="../IMAGES/Dictionary.gif" alt="" />
</div>
<div class="project-title">Dictionary</div>
<div class="project-description hide-scrollbars">
A simple dictionary application made using JAVA. The dictionary functionality are provided through a graphical
 user interface by implementing a subset of Dictionary protocol referred from RFC 2229.
</div>
<div class="project-tags">
<div class="tag java-tag gradient-purple">java</div>
</div>
<div class="project-code">
<a class="code-link" href="https://github.com/sanizm/Dictionary"
 target = "_blank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-i hide-scrollbarsmage">
<img class="project-img" src="../IMAGES/SoccerGame.gif" alt="" />
</div>
<div class="project-title">Soccer Game</div>
<div class="project-description hide-scrollbars">
A mini soccer game written in Java 16 using Java Swing. Featuring design pattern/principle:
Singleton, Iterator, Factory, Sorting, Collection, Polymorphism, Inheritance
</div>
<div class="project-tags">
<div class="tag java-tag gradient-purple">java</div>
</div>
<div class="project-code">
<a class="code-link" href="https://github.com/a-mohamad/soccer-game"
 target = "_blank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-i hide-scrollbarsmage">
 <img class="project-img" src="../IMAGES/TicTacToe.gif" alt="" />
</div>
<div class="project-title">TIC TAC TOE</div>
<div class="project-description hide-scrollbars">
A simple console based multiplayer tictactoe game made using 2D array for grid if-else switch-case statement.
Two players have to provide their names and symbol 'X' or 'O' whichever one selected and than play turn by turn.
</div>
<div class="project-tags">
 <div class="tag java-tag gradient-purple">java</div>
</div>
<div class="project-code">
 <a class="code-link" href="https://github.com/sanizm/Project_TIC_TAC_TOE" target = "_blank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-i hide-scrollbarsmage">
 <img class="project-img" src="../IMAGES/shapeSorter.gif" alt="" />
</div>
<div class="project-title">Shape Sorter</div>
<div class="project-description hide-scrollbars">
The software project is about generating random six shapes 
and sorting them according to their surface area.The functionality to load the 
shapes randomly with random colors 
and sizes and sorting them is implemented through two buttons.
</div>
<div class="project-tags">
 <div class="tag java-tag gradient-purple">java</div>
</div>
<div class="project-code">
 <a class="code-link" href="https://github.com/sanizm/Shape-Sorter" target = "_blank">Source Code</a>
</div>
</div>`,
  `
<div class="project-card">
<div class="project-i hide-scrollbarsmage">
<img class="project-img" src="../IMAGES/unitConverter.gif" alt="" />
</div>
<div class="project-title">Unit Converter</div>
<div class="project-description hide-scrollbars">
The software project is about an application that allows the user to input
 a number and produce an output in feet and centimeters. The yellow rectangle is the 
 input box, and the output boxes are in green(feet) and orange(centimeters). The goal 
 is to input any real number and output that number in feet,
  and centimeters in their respective boxes.   
</div>
<div class="project-tags">
<div class="tag java-tag gradient-purple">java</div>
</div>
<div class="project-code">
<a class="code-link" href="https://github.com/sanizm/ConverterApplication" target= "_blank">Source Code</a>
</div>
</div>`,
];
