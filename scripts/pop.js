setTimeout(function(){
  var banner = document.createElement("div");
  banner.innerHTML = "<a href='#'><img style='max-width: 650px;' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv6HmZ1-hT-kbhKdkM6dFVatqrpQzYSPViYj1JSH-oqxScfr8bxEu8ifM9NfxSH2fMPEzFONaxgHbtXfG9r6-s7u6Mdi7J0x-gHQxGNgQSQRLNIf-k-6yqhvSFvpCb0ERz1RsOpm2498BVkM7mWWaokMm3enano9hvQUvmVO8SWZXKt0VVI8IgZar0b5U/s500/pankaj-patel-_SgRNwAVNKw-unsplash%20%28Custom%29.jpg'></a>";
  banner.style.position = "fixed";
  banner.style.top = "50%";
  banner.style.left = "50%";
  banner.style.transform = "translate(-50%, -50%)";
  banner.style.zIndex = "9999";
  
  
  var closeButton = document.createElement("button");
  closeButton.innerHTML = "X";
  closeButton.style.position = "absolute";
  closeButton.style.top = "0";
  closeButton.style.right = "0";
  closeButton.style.padding = "4px";
  closeButton.style.fontSize = "10px";
  closeButton.style.border = "none";
  closeButton.style.backgroundColor = "#8f7bff";
  closeButton.style.color = "#fff";
  closeButton.onclick = function() {
    banner.style.display = "none";
    overlay.style.display = "none";
  }
  banner.appendChild(closeButton);
  
  var overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.right = "0";
  overlay.style.bottom = "0";
  overlay.style.backgroundColor = "rgb(4 4 4 / 70%)";
  overlay.style.zIndex = "9998";
  
  document.body.appendChild(overlay);
  document.body.appendChild(banner);
}, 6000000);
