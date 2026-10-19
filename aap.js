function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");

  // 1. چیک باکس بنانا
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // 2. ٹاسک کا ٹیکسٹ
  const span = document.createElement("span");
  span.textContent = task;
  span.style.marginLeft = "10px";

  // 3. ڈیلیٹ بٹن
  const delBtn = document.createElement("button");
  delBtn.textContent = "🗑️";
  delBtn.style.marginLeft = "auto";
  delBtn.onclick = function () {
    li.remove();
  };

  // چیک باکس پر کلک سے لائن کٹ جائے
  checkbox.onchange = function () {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);

  li.style.display = "flex";
  li.style.alignItems = "center";
  li.style.marginTop = "10px";

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
