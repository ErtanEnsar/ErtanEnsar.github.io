var pic = document.querySelector('.photo:hover .glow');


var styles = `
   div#outer  .glow{
    transform: rotate(45deg) translate(450%, 0);
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  `

function glow () {
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
}
window.onload=glow;


function CopyEmail() {
    navigator.clipboard.writeText("Erta0015@live.dk").then(() => {
        console.log('Content copied to clipboard');
      },() => {
        console.error('Failed to copy');
        alert("Failed to copy(HTTPS?), Email:Erta0015@live.dk");
      });
  }


