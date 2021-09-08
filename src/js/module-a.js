const wrapper = document.getElementById("root");

const msg = document.createElement("p");
msg.className = "wrapper__msg";
msg.id = "hint";
msg.textContent = "What do we need to learn developing?";

const list = document.createElement("div");
list.className = "wrapper__list";
list.innerHTML = `
<div id="flex1"></div>
<div id="flex2"></div>
<div id="flex3"></div>
`;

wrapper.append(msg, list);
