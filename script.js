window.onload = () => {
    let iframeName = document.querySelector(".badge");
    let iframeContent = iframeName.contentDocument;
    iframeContent.body.innerHTML = iframeContent.body.innerHTML + "<style>.iframe-css{background: #eb7a7a}</style>";
}