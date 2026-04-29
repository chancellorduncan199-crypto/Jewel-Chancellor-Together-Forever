const letters = {

  sad: "I know things feel heavy and you don’t have to carry it all alone. I’m here with you, even if it’s just through this message. You can always lean on me, I am always here for you. Even if it’s just for a moment, no need to explain or hesitate to come to me. I’m not going anywhere.",

  miss: "I miss you too. Especially in the quiet moments where I wish you were here beside me. But even when we’re apart, I carry you with me in my heart. You’re always close, even when you can’t see it.",

  sleep: "Close your eyes. Breathe slowly. Imagine the calmest, comforting, or warmest moment you’ve had with me and stay there for a while. Let the warmth of that memory ease you into rest. I’m right there with you in that moment, holding you close hoping you get a good night's rest.",

  happy: "I love seeing you like this. Please hold onto this feeling, it matters more than you think. And remember, I’m here celebrating with you, even if it’s just through this message. You deserve all the happiness in the world.",

  mad: "It’s okay to be angry. Just don’t let it turn into something you have to carry alone. Let it pass through you, not stay inside you. And when you’re ready, I’m here to listen without judgment. We can work through it together.",

  insecure: "Hard to imagine you will need to open this often but we are all human, everyone can feel this way. You don’t have to prove your worth to me or anyone else. The way I see you doesn’t change just because your mind gets loud sometimes. You are enough, just as you are, and I love you for it.",

  frustrated: "I think frustration can just be a sign that you care deeply about something. It’s okay to feel this way, but don’t let it consume you. You’re doing your best, and that’s all anyone can ask for. I’m here to support you through it.",

  overthinking: "Not every thought deserves your attention, I should kinow. Some are just noise pretending to be truth. You’re okay. You’re doing better than you think. Try to focus on what’s real and present, not the endless loop of 'what ifs'. I’m here with you, even in the silence of your thoughts.",

  lost: "Even if you don’t feel it right now, you’re still moving forward. You’re not as lost as it feels and always remember that you will never be as lost as I am 😂! I’m here to help you find your way, even if it’s just through this message. You’re not alone in this.",

  love: "If you’re here reading this, just know that you matter to me. More than I probably say, but never less than I feel. I love you for who you are, not for what you do or how you make me feel. You are loved. I’m here for you, always."
};

function typeWriter(text, element, speed) {
  let i = 0;

  clearInterval(typingInterval);

  typingInterval = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, speed);
}

let typingInterval;

function openLetter(type) {
  const modal = document.getElementById("modal");
  const textEl = document.getElementById("letterText");

  modal.style.display = "flex";
  textEl.innerHTML = "";

  typeWriter(letters[type], textEl, 25);
}

function closeLetter() {
  document.getElementById("modal").style.display = "none";
}

/* Close if clicking outside modal */
function closeLetter() {
  document.getElementById("modal").style.display = "none";

  const textEl = document.getElementById("letterText");
  textEl.innerHTML = "";

  clearInterval(typingInterval);
}

function scrollLetters(direction) {
  const row = document.getElementById("lettersRow");

  const scrollAmount = 180;

  row.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

const photos = document.querySelectorAll(".photo");

let lastTap = 0;
let carouselIndex = 0;

photos.forEach(photo => {
  photo.addEventListener("click", (e) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;

    const text = photo.getAttribute("data-text");
    const index = parseInt(photo.getAttribute("data-index"));

    if (tapLength < 300 && tapLength > 0) {
      openCarousel(index);
    } 
    else {
      showOverlay(text);
    }

    lastTap = currentTime;
  });
});

function showOverlay(text) {
  const overlay = document.getElementById("overlay");
  const overlayText = document.getElementById("overlayText");

  overlayText.innerText = text;
  overlay.style.display = "block";

  setTimeout(() => {
    overlay.style.display = "none";
  }, 2500);
}

const images = [
  "images/us_01.webp",
    "images/us_02.webp",
    "images/us_03.webp",
    "images/us_04.webp",
    "images/us_05.webp",
    "images/us_06.webp",
    "images/us_07.webp",
    "images/us_08.webp",
    "images/us_09.webp",
    "images/us_10.webp",
    "images/us_11.webp",
    "images/us_12.webp",
    "images/us_13.webp",
    "images/us_14.webp",
    "images/us_15.webp",
    "images/us_16.webp",
    "images/us_17.webp",
    "images/us_18.webp",
    "images/us_19.webp",
    "images/us_20.webp",
    "images/us_21.webp",
    "images/us_22.webp",
    "images/us_23.webp",
    "images/us_24.webp",
    "images/us_25.webp",
    "images/us_26.webp",
    "images/us_27.webp",
    "images/us_28.webp",
    "images/us_29.webp"
];

function openCarousel(index) {
  carouselIndex = index;

  document.getElementById("carousel").style.display = "flex";
  document.getElementById("carouselImg").src = images[index];
}

function closeCarousel() {
  document.getElementById("carousel").style.display = "none";
}

function changeImage(dir) {
  carouselIndex += dir;

  if (carouselIndex < 0) carouselIndex = images.length - 1;
  if (carouselIndex >= images.length) carouselIndex = 0;

  document.getElementById("carouselImg").src = images[carouselIndex];
}

const carousel = document.getElementById("carousel");

carousel.addEventListener("click", (e) => {
  const width = window.innerWidth;
  const clickX = e.clientX;

  if (clickX < width / 2) {
    changeImage(-1);
  } 
  else {
    changeImage(1);
  }
});

document.querySelector(".close").addEventListener("click", (e) => {
  e.stopPropagation();
  closeCarousel();
});

function openFinalLetter() {
  document.getElementById("finalModal").style.display = "flex";
}

function closeFinalLetter() {
  document.getElementById("finalModal").style.display = "none";
}

