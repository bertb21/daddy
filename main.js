const text = `Meine wundervolle Sarah, ich weiß gar nicht, wo ich anfangen soll. Jedes Lächeln von dir bringt meine Welt zum Leuchten. Deine Augen sind wie ein Fenster in meine Lieblingsgalaxie. Du bist stark, klug, lustig, süß, mutig und meine ganze Welt. Ich liebe deine Stimme, dein Lachen, deine Art, wie du mich anschaust, wie du mich ärgerst, wie du mich beruhigst. Du bist mein Zuhause, mein Licht, mein Lieblingsmensch. Danke, dass du da bist.`;

let i = 0;
const container = document.getElementById("text-container");

function showText() {
  if (i < text.length) {
    container.innerHTML += text.charAt(i);
    i++;
    setTimeout(showText, 50);
  } else {
    document.getElementById("geheim").style.display = "inline-block";
  }
}

window.onload = showText;