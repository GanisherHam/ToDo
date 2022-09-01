function toDo() {
  const inputTask = document.querySelector(".input-task");
  const save = document.querySelector(".save");

  let list = JSON.parse(localStorage.getItem("toDo"));
  if (list === null) {
    list = [];
    localStorage.setItem("toDo", JSON.stringify(list));
  }

  list.forEach((li, i) => {
    const newTask = document.querySelector(".new-task");
    const input = document.createElement("input");
    const div = document.createElement("div");
    const button = document.createElement("button");
    const button2 = document.createElement("button");
    button.innerHTML = "rewrite";
    button2.innerHTML = "delete";
    inputTask.value = "";

    button.classList.add("btn");
    button2.classList.add("btn2");

    input.value = li;
    input.readOnly = true;
    div.append(input, button, button2);
    newTask.append(div);

    button.addEventListener("click", () => {
      if (button.innerHTML == "rewrite") {
        button.innerHTML = "save";
        input.readOnly = false;
        input.focus();
        button.classList.add("btn3");
        button.classList.remove("btn");
      } else {
        button.innerHTML = "rewrite";
        input.readOnly = true;

        button.classList.remove("btn3");
        button.classList.add("btn");

        let list = JSON.parse(localStorage.getItem("toDo"));
        if (li[i] !== input.value) {
          list[i] = input.value;
        }
        localStorage.setItem("toDo", JSON.stringify(list));
      }
    });

    button2.addEventListener("click", () => {
      div.remove();
      let list = JSON.parse(localStorage.getItem("toDo"));
      let newArray = list.filter((l) => l !== input.value);
      localStorage.setItem("toDo", JSON.stringify(newArray));
    });
  });

  save.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputTask.value !== "") {
      let text = inputTask.value;
      let list = JSON.parse(localStorage.getItem("toDo"));
      list.push(text);

      const newTask = document.querySelector(".new-task");
      const input = document.createElement("input");
      const div = document.createElement("div");
      const button = document.createElement("button");
      const button2 = document.createElement("button");
      button.innerHTML = "rewrite";
      button2.innerHTML = "delete";
      inputTask.value = "";

      button.classList.add("btn");
      button2.classList.add("btn2");

      list.forEach((li) => {
        input.value = li;
        input.readOnly = true;
        div.append(input, button, button2);
        newTask.append(div);
      });
      localStorage.setItem("toDo", JSON.stringify(list));

      button.addEventListener("click", (e) => {
        if (button.innerHTML == "rewrite") {
          button.innerHTML = "save";
          input.readOnly = false;
          input.focus();
          button.classList.add("btn3");
          button.classList.remove("btn");
        } else {
          button.innerHTML = "rewrite";
          input.readOnly = true;

          button.classList.remove("btn3");
          button.classList.add("btn");

          let list2 = JSON.parse(localStorage.getItem("toDo"));
          const el = e.target;
          const elIndex = Array.from(
            el.parentNode.parentElement.children
          ).indexOf(el.parentNode);
          list2[elIndex] = input.value;
          localStorage.setItem("toDo", JSON.stringify(list2));
        }
      });
      button2.addEventListener("click", () => {
        div.remove();
        let list = JSON.parse(localStorage.getItem("toDo"));
        let newArray = list.filter((l) => l !== input.value);
        localStorage.setItem("toDo", JSON.stringify(newArray));
      });
    }
  });
}

toDo();
