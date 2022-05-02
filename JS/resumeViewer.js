const PDFURL = "../RESUME/Saniz_Resume.pdf";
const canvas = document.querySelector(`.pdf-viewer`);
const toolbar = document.querySelector(`.toolbar`);
const resumeBtn = document.querySelector(`.resume-btn`);
const pageNumHolder = document.querySelector(`.page-num`);
const pageCountHolder = document.querySelector(`.page-count`);
const ctx = canvas.getContext(`2d`);
const failedRenderMsg = document.querySelector(`.render-fail-msg`);

let pdfDoc = null;
let scale = 1.5;
let pageNum = 1;
let viewport;
let page;

const renderPage = (num) => {
  pageIsRendering = true;

  pdfDoc.getPage(num).then((page_) => {
    page = page_;
    viewport = page_.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: ctx,
      viewport,
    };

    page_.render(renderContext);
    pageNumHolder.textContent = num;
  });
};

const changeViewport = (num) => {
  if (scale + num > 0.5) {
    scale += num;
    viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: ctx,
      viewport,
    };

    page.render(renderContext);
  }
};

const showPrevPage = () => {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  renderPage(pageNum);
};

const showNextPage = () => {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  renderPage(pageNum);
};

pdfjsLib
  .getDocument(PDFURL)
  .promise.then((pdfDoc_) => {
    pdfDoc = pdfDoc_;
    renderPage(pageNum);
    pageCountHolder.textContent = pdfDoc.numPages;
  })
  .catch((err) => {
    failedRenderMsg.textContent = `Sorry! unable to open because of 
    ${err.message}
    view Resume by clicking below link.`;
    failedRenderMsg.style.display = `block`;
    setTimeout(() => {
      resumeBtn.style.display = `block`;
    }, 2000);
    toolbar.style.opacity = 0;
  });

toolbar.addEventListener("click", (e) => {
  if (e.target.closest(`.prev-btn`)) {
    showPrevPage();
  } else if (e.target.closest(`.next-btn`)) {
    showNextPage();
  } else if (e.target.closest(`.zoom-in`)) {
    changeViewport(0.05);
  } else if (e.target.closest(`.zoom-out`)) {
    changeViewport(-0.05);
  }
});
