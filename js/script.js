var app = new Vue({
  el: "#app",
  data: {
    title: "Список задач",
    items: []
  },
  // Получение из локального хранилища
  mounted() {
    if (localStorage.getItem("items")) {
      try {
        this.items = JSON.parse(localStorage.getItem("items"));
      } catch (e) {
        localStorage.removeItem("items");
      }
    }
  },

  methods: {
    // Добавление задачи
    addTask: function() {
      var inputAdd = document.querySelector(".input_add");
      if (inputAdd.value !== "") {
        this.items.push({
          text: inputAdd.value
        });
        inputAdd.value = "";
        this.saveTask();
      }
    },
    // Удаление задачи
    deleteTask: function(index) {
      this.items.splice(index, 1);
      this.saveTask();
    },
    // Сохранение в локальное хранилище
    saveTask: function() {
      const parsed = JSON.stringify(this.items);
      localStorage.setItem("items", parsed);
    }
  }
});
