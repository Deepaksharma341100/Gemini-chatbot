const button = document.getElementById("btn");
const api = "AIzaSyAo_Fi_-GKKpOsIRl0d6M6DR09YhH6h_hY";
const input = document.getElementById("question");
const p = document.getElementById("prompt");

async function generate(prompt) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${api}`,
    {
      method: "POST",
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}

button.addEventListener("click", async () => {
  let value = input.value;
  const newdiv = document.createElement("div");
  newdiv.textContent = value;
  newdiv.className = "prompt-item2";
  p.appendChild(newdiv);
  const newdiv1 = document.createElement("div");
  let ans = await generate(value);
  newdiv1.textContent = ans;
  newdiv1.className = "prompt-item1";
  p.appendChild(newdiv1);
});
