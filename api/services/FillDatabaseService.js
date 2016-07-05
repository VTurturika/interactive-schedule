"use strict";

const request = require('request');

let group36Teachers = {
  lupan: {
    name: "І. В.",
    surname: "доц. Лупан",
    email: "lupan@gmail.com",
  },
  makarchuk: {
    name: "О. П.",
    surname: "Макарчук",
    email: "makarchuk@gmail.com",
  },
  kotyak: {
    name: "В. В.",
    surname: "Котяк",
    email: "kotyak@gmail.com",
  },
  naradoviy: {
    name: "В. В.",
    surname: "Нарадовий",
    email: "naradoviy@gmail.com",
  },
  akbash: {
    name: "К. С.",
    surname: "Акбаш",
    email: "akbash@gmail.com",
  },
  nesterenko: {
    name: "Т. А.",
    surname: "Нестеренко",
    email: "nesterenko@gmail.com",
  },
};

let group36Lessons = [
  {
    name: "Паралельні та розподілені обчислення",
    datetime: new Date("2016-09-05T09:40:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },
  {
    name: "Теорія ймовірностей і математична статистика",
    datetime: new Date("2016-09-05T11:00:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },
  {
    name: "Програмування та підтримка веб-застосувань",
    datetime: new Date("2016-09-05T12:30:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },
  {
    name: "Паралельні та розподілені обчислення",
    datetime: new Date("2016-09-06T08:00:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },
  {
    name: "Програмування та підтримка веб-застосувань",
    datetime: new Date("2016-09-05T08:00:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },
  {
    name: "Програмування та підтримка веб-застосувань",
    datetime: new Date("2016-09-05T09:40:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },
  {
    name: "Паралельні та розподілені обчислення",
    datetime: new Date("2016-09-06T09:40:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },

  {
    name: "Обчислювальні методи",
    datetime: new Date("2016-09-07T08:00:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },
  {
    name: "Теорія ймовірностей і математична статистика",
    datetime: new Date("2016-09-07T09:40:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },
  {
    name: "МО та ДО",
    datetime: new Date("2016-09-07T11:00:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },
  {
    name: "Бази Даних та Інформаційні системи",
    datetime: new Date("2016-09-08T09:40:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },
  {
    name: "МО та ДО",
    datetime: new Date("2016-09-08T11:00:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },
  {
    name: "Українська мова",
    datetime: new Date("2016-09-08T12:30:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },
  {
    name: "Обчислювальні методи",
    datetime: new Date("2016-09-09T11:00:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },
  {
    name: "Бази Даних та Інформаційні системи",
    datetime: new Date("2016-09-09T11:00:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },
  {
    name: "Бази Даних та Інформаційні системи",
    datetime: new Date("2016-09-09T12:30:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },
  {
    name: "Обчислювальні методи",
    datetime: new Date("2016-09-09T12:30:00"),
    building: 7,
    classroom: "214",
    faculty: "fizmat",
    groupId: "36",
    teacherId: "",
  },
];

function sendTeacherToServer(user) {
  let req = {
    method: 'POST',
    url: 'http://localhost:1337/user/createUser',
    json: true,
    body: {name: user.name, surname: user.surname, role: "teacher", email: user.email},
  };

  request(req, (err, res, body) => {
    if (err)
      console.log(err);
    console.log(body);
  });
}

function getTeachersIdFromServer(next) {
  let users = [];
  let req = {
    method: 'GET',
    url: 'http://localhost:1337/user/getUsers?role=teacher',
  };

  request(req, (err, res, body) => {
    if (err)
      console.log(err);
    users = JSON.parse(body);
    // console.log(body);
    next(users);
  });
}

function sendLessonsToServer(users) {
  let lessons = group36Lessons;

  let teacher = "";
  lessons.forEach(lesson => {
    switch (lesson.name) {
      case "Паралельні та розподілені обчислення":
        teacher = users.filter(user => user.surname === "доц. Лупан");
        lesson.teacherId = teacher[0].id;
        break;
      case "Теорія ймовірностей і математична статистика":
        teacher = users.filter(user => user.surname === "Макарчук");
        lesson.teacherId = teacher[0].id;
        break;
      case "Програмування та підтримка веб-застосувань":
        teacher = users.filter(user => user.surname === "Котяк");
        lesson.teacherId = teacher[0].id;
        break;
      case "Обчислювальні методи":
        teacher = users.filter(user => user.surname === "Нарадовий");
        lesson.teacherId = teacher[0].id;
        break;
      case "МО та ДО":
      case "Бази Даних та Інформаційні системи":
        teacher = users.filter(user => user.surname === "Акбаш");
        lesson.teacherId = teacher[0].id;
        break;
      case "Українська мова":
        teacher = users.filter(user => user.surname === "Нестеренко");
        lesson.teacherId = teacher[0].id;
        break;
      default:
        break;
    }
  });
  lessons.forEach(lesson => sendLessonToServer(lesson));

}

function sendLessonToServer(lesson) {
  let req = {
    method: 'POST',
    url: 'http://localhost:1337/lesson/createLesson',
    json: true,
    body: {
      name: lesson.name,
      datetime: lesson.datetime,
      building: lesson.building,
      classroom: lesson.classroom,
      faculty: lesson.faculty,
      groupId: lesson.groupId,
      teacherId: lesson.teacherId
    },
  };

  request(req, (err, res, body) => {
    if (err)
      console.log(err);
    console.log(body);
  });
}

Object.keys(group36Teachers).forEach(key => {
  sendTeacherToServer(group36Teachers[key]);
});

getTeachersIdFromServer(sendLessonsToServer);
