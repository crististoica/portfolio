/* <div class="message">
  <img src="./assets/images/checkmark.png" />
  <p>Mail copied to clipboard.</p>
</div> */
const messages = document.querySelector(".messages");
const copyMailToClipboard = document.querySelector(".copy-mail-icon");

const createMessageEl = (msg) => {
  if (messages.childNodes.length > 0) return;

  const div = document.createElement("div");
  div.classList.add("message");

  const img = document.createElement("img");
  img.src = "./assets/images/checkmark.png";

  const p = document.createElement("p");
  p.textContent = msg;

  div.appendChild(img);
  div.appendChild(p);

  messages.appendChild(div);
  setTimeout(() => {
    div.classList.add("active");
    setTimeout(() => {
      div.classList.add("inactive");
      setTimeout(() => {
        messages.removeChild(div);
      }, 600);
    }, 2000);
  }, 150);
};

copyMailToClipboard.addEventListener("click", () => {
  const input = document.createElement("input");
  input.value = "cristianstoica802@gmail.com";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);

  createMessageEl("Mail copied to clipboard");
});
