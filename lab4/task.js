// ЗАВДАННЯ 1: Створити об’єкт «Задача»
function task1() {
    // Створення об'єкта "Задача"
    let task = {
        name: "TaskArio",
        description: "створити мобільний додаток-планер",
        startDate: "01.10.2023",
        endDate: "25.12.2023"
    };

    // Відображення результату
    alert("Назва задачі: " + task.name +
        "\nОпис: " + task.description +
        "\nДата початку: " + task.startDate +
        "\nДата кінця: " + task.endDate);
    return task;
}

// ЗАВДАННЯ 2: Створити об’єкт «Проект»,
function task2() {
    // Створення об'єкта "Проект"
    let project = {
        projectName: "",
        type: "",
    };

    // Відображення результату
    alert("Назва проекту: " + project.projectName +
        "\nТип: " + project.type);

    // Відображення результату
    project.add = function (projectName, type) {
        this.projectName = projectName;
        this.type = type;
    };

    project.add(" Написання курсової", " Курсова");
    alert("Додано назву проекту:" + project.projectName + "\n Додано тип:" + project.type);


    project.remove = function () {
        this.projectName = "";
        this.type = ""
    };

    project.remove();
    alert("Видалено назву проекту:" + project.projectName + "\nВидалено тип:" + project.type);

    // Додавання методу для редагування проекту
    project.edit = function (newProjectName, newType) {
        if (newProjectName) {
            this.projectName = newProjectName;
        }

        if (newType) {
            this.type = newType;
        }
    };

    project.edit(" Створення сайту", " Лабораторна");
    alert("Змінено назву проекту:" + project.projectName + "\n Змінено тип:" + project.type);

    return project;
}

// ЗАВДАННЯ 3: Об’єднання властивостей і методів об’єктів «Проект» і «Задача».
function task3() {
    // Виклик функцій для створення об'єктів "Проект" і "Задача"
    let project = task2();
    let task = task1();

    // Об'єднання властивостей і методів "Задача" в "Проект"
    Object.assign(project, task);

    // Відображення результату
    alert("Об'єкт 'Проект' після об'єднання з властивостями та методами 'Задача':\n" +
        "Назва проекту: " + project.projectName +
        "\nТип: " + project.type +
        "\nНазва задачі: " + project.name +
        "\nОпис задачі: " + project.description +
        "\nДата початку задачі: " + project.startDate +
        "\nДата закінчення задачі: " + project.endDate);

    return project;
}

function task4() {
    // Виклик функції для створення об'єкта "Задача"
    let task = task1();

    // Додавання методу до прототипу об'єкту "Задача"
    task.constructor.prototype.showData = function () {
        alert("Назва задачі: " + this.name +
            "\nОпис: " + this.description +
            "\nДата початку: " + this.startDate +
            "\nДата кінця: " + this.endDate);
    };

    // Виклик методу
    task.showData();

    return task;
}

// ЗАВДАННЯ 5: Створити об’єкт «Задача в процесі»
function task5() {
    // Створення об'єкта "Задача в процесі", який наслідує властивості і методи "Задача"
    let taskInProgress = Object.create(task1());

    // Додавання додаткових властивостей "процент виконання" і "прапор завершення задачі"
    taskInProgress.progress = 10;
    taskInProgress.completed = true;

    // Додавання методу "Показати дані" для "Задача в процесі"
    taskInProgress.showData = function () {
        alert("Назва задачі: " + this.name +
            "\nОпис: " + this.description +
            "\nДата початку: " + this.startDate +
            "\nДата кінця: " + this.endDate +
            "\nПроцент виконання: " + this.progress + "%" +
            "\nПрапор завершення задачі: " + this.completed);
    };

    // Виклик методу "Показати дані" для "Задача в процесі"
    taskInProgress.showData();

    return taskInProgress;
}

// ЗАВДАННЯ 6: Реалізувати класи «ЗадачаКлас» і «Задача в процесі Клас»
class TaskClass {
    constructor(name, description, startDate, endDate) {
        this._name = name;
        this._description = description;
        this._startDate = startDate;
        this._endDate = endDate;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get description() {
        return this._description;
    }

    set description(newDescription) {
        this._description = newDescription;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(newStartDate) {
        this._startDate = newStartDate;
    }

    get endDate() {
        return this._endDate;
    }

    set endDate(newEndDate) {
        this._endDate = newEndDate;
    }

    showData() {
        alert(`Назва задачі: ${this._name}\nОпис: ${this._description}\nДата початку: ${this._startDate}\nДата кінця: ${this._endDate}`);
    }
}

class TaskInProgressClass extends TaskClass {
    constructor(name, description, startDate, endDate, progress, completed) {
        super(name, description, startDate, endDate);
        this._progress = progress;
        this._completed = completed;
    }

    get progress() {
        return this._progress;
    }

    set progress(newProgress) {
        this._progress = newProgress;
    }

    get completed() {
        return this._completed;
    }

    set completed(newCompleted) {
        this._completed = newCompleted;
    }

    showData() {
        alert(`Назва задачі: ${this.name}\nОпис: ${this.description}\nДата початку: ${this.startDate}\nДата кінця: ${this.endDate}\nПроцент виконання: ${this.progress}%\nПрапор завершення задачі: ${this.completed}`);
    }
}

// Example usage of the classes
function task6() {
    let task1 = new TaskClass("TaskArio", "створити мобільний додаток-планер", "01.10.2023", "25.12.2023");
    let taskInProgress1 = new TaskInProgressClass("TaskArio", "створити мобільний додаток-планер", "01.10.2023", "25.12.2023", 10, true);

    task1.showData();
    taskInProgress1.showData();
}
