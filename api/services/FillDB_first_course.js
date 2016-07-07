const request = require('request');

var group_11 = [];
var group_12 = [];
var group_13 = [];
var group_16 = [];
var group_17 = [];

//	day - день недели
//	subgroup - подгруппа
//	name - название предмета
//	number - номер пары
//	fraction - 0 - всегда, 1 - числитель, 2 - знаменатель
//	teacher - препод

//11
{
	group_11.push({
		day: "pn",
		group: 11, subgroup: 3,
		name: "Фізичний практикум",
		number: 1,
		fraction: 0,
		teacher: "Донець"
	});
	group_11.push({
		day: "pn",
		group: 11, subgroup: 0,
		name: "Матеріалознавство",
		number: 2,
		fraction: 0,
		teacher: "Рябець"
	});
	group_11.push({
		day: "pn",
		group: 11, subgroup: 0,
		name: "Вікова фізіологія та валеологія",
		number: 3,
		fraction: 0,
		teacher: "Руденко"
	});
	group_11.push({
		day: "pn",
		group: 11, subgroup: 0,
		name: "Вікова фізіологія та валеологія",
		number: 4,
		fraction: 2,
		teacher: "Руденко"
	});

	group_11.push({
		day: "vt",
		group: 11, subgroup: 1,
		name: "Матеріалознавство",
		number: 2,
		fraction: 1,
		teacher: "Рябець"
	});
	group_11.push({
		day: "vt",
		group: 11, subgroup: 2,
		name: "Матеріалознавство",
		number: 2,
		fraction: 2,
		teacher: "Рябець"
	});
	group_11.push({
		day: "vt",
		group: 11, subgroup: 0,
		name: "Загальна фізика",
		number: 3,
		fraction: 0,
		teacher: "Сірик"
	});
	group_11.push({
		day: "vt",
		group: 11, subgroup: 0,
		name: "Психологія",
		number: 4,
		fraction: 1,
		teacher: "Уличний"
	});
	group_11.push({
		day: "vt",
		group: 11, subgroup: 0,
		name: "Економіка і організація виробництва",
		number: 4,
		fraction: 2,
		teacher: "Корецька"
	});
	group_11.push({
		day: "vt",
		group: 11, subgroup: 0,
		name: "Креслення",
		number: 5,
		fraction: 0,
		teacher: "Чубар"
	});

	group_11.push({
		day: "sr",
		group: 11, subgroup: 0,
		name: "Креслення",
		number: 2,
		fraction: 0,
		teacher: "Чубар"
	});
	group_11.push({
		day: "sr",
		group: 11, subgroup: 0,
		name: "Психологія",
		number: 3,
		fraction: 0,
		teacher: "Зубченко"
	});
	group_11.push({
		day: "sr",
		group: 11, subgroup: 1,
		name: "Фізичний практикум",
		number: 4,
		fraction: 0,
		teacher: "Донець"
	});
	group_11.push({
		day: "sr",
		group: 11, subgroup: 2,
		name: "Іноз. мова за проф. спр",
		number: 4,
		fraction: 0,
		teacher: "Капітан"
	});
	group_11.push({
		day: "sr",
		group: 11, subgroup: 3,
		name: "Іноз. мова за проф. спр",
		number: 4,
		fraction: 0,
		teacher: "Капітан"
	});
	group_11.push({
		day: "sr",
		group: 11, subgroup: 1,
		name: "Іноз. мова за проф. спр",
		number: 5,
		fraction: 0,
		teacher: "Рожкова"
	});
	group_11.push({
		day: "sr",
		group: 11, subgroup: 2,
		name: "Фізичний практикум",
		number: 5,
		fraction: 0,
		teacher: "Донець"
	});

	group_11.push({
		day: "ch",
		group: 11, subgroup: 0,
		name: "Основи дизайну",
		number: 2,
		fraction: 0,
		teacher: "Чистякова"
	});
	group_11.push({
		day: "ch",
		group: 11, subgroup: 0,
		name: "Креслення",
		number: 3,
		fraction: 0,
		teacher: "Чубар"
	});
	group_11.push({
		day: "ch",
		group: 11, subgroup: 0,
		name: "Іноз. мова за проф. спр",
		number: 4,
		fraction: 1,
		teacher: "Рожкова"
	});
	group_11.push({
		day: "ch",
		group: 11, subgroup: 0,
		name: "Матеріалознавство",
		number: 4,
		fraction: 2,
		teacher: "Рябець"
	});

	group_11.push({
		day: "pt",
		group: 11, subgroup: 0,
		name: "Основи дизайну",
		number: 1,
		fraction: 2,
		teacher: "Чистякова"
	});
	group_11.push({
		day: "pt",
		group: 11, subgroup: 0,
		name: "Економіка і організація виробництва",
		number: 2,
		fraction: 0,
		teacher: "Корецька"
	});
	group_11.push({
		day: "pt",
		group: 11, subgroup: 0,
		name: "Загальна фізика",
		number: 3,
		fraction: 0,
		teacher: "Сірик"
	});
	group_11.push({
		day: "pt",
		group: 11, subgroup: 0,
		name: "Фізичний практикум",
		number: 1,
		fraction: 1,
		teacher: "Сірик"
	});
}
//12
{
	group_12.push({
		day: "pn",
		group: 12, subgroup: 0,
		name: "Вікова фізіологія та валеологія",
		number: 2,
		fraction: 0,
		teacher: "Руденко"
	});
	group_12.push({
		day: "pn",
		group: 12, subgroup: 0,
		name: "Загальна фізика",
		number: 3,
		fraction: 0,
		teacher: "Трифонова"
	});
	group_12.push({
		day: "pn",
		group: 12, subgroup: 0,
		name: "Вікова фізіологія та валеологія",
		number: 4,
		fraction: 2,
		teacher: "Руденко"
	});

	group_12.push({
		day: "vt",
		group: 12, subgroup: 0,
		name: "Іноземна мова за професійним спрямуванням",
		number: 3,
		fraction: 0,
		teacher: "Смірнова"
	});
	group_12.push({
		day: "vt",
		group: 12, subgroup: 0,
		name: "Психологія",
		number: 4,
		fraction: 1,
		teacher: "Уличний"
	});
	group_12.push({
		day: "vt",
		group: 12, subgroup: 0,
		name: "Іноземна мова за професійним спрямуванням",
		number: 5,
		fraction: 2,
		teacher: "Смірнова"
	});

	group_12.push({
		day: "sr",
		group: 12, subgroup: 0,
		name: "Загальна фізика",
		number: 1,
		fraction: 1,
		teacher: "Трифонова"
	});
	group_12.push({
		day: "sr",
		group: 12, subgroup: 0,
		name: "Пр. розв. вибіркових задач з фізики: механіка",
		number: 1,
		fraction: 2,
		teacher: "Трифонова"
	});
	group_12.push({
		day: "sr",
		group: 12, subgroup: 0,
		name: "Психологія",
		number: 2,
		fraction: 0,
		teacher: "Зубченко"
	});
	group_12.push({
		day: "sr",
		group: 12, subgroup: 0,
		name: "Математичний аналіз",
		number: 3,
		fraction: 0,
		teacher: "Гуртовий"
	});
	group_12.push({
		day: "sr",
		group: 12, subgroup: 0,
		name: "Іноземна мова за професійним спрямуванням",
		number: 4,
		fraction: 0,
		teacher: "Капітан"
	});

	group_12.push({
		day: "ch",
		group: 12, subgroup: 0,
		name: "Інформатика",
		number: 2,
		fraction: 0,
		teacher: "Рєзіна"
	});
	group_12.push({
		day: "ch",
		group: 12, subgroup: 0,
		name: "Математичний аналіз",
		number: 3,
		fraction: 1,
		teacher: "Гуртовий"
	});
	group_12.push({
		day: "ch",
		group: 12, subgroup: 0,
		name: "Інформатика",
		number: 3,
		fraction: 2,
		teacher: "Рєзіна"
	});

	group_12.push({
		day: "pt",
		group: 12, subgroup: 0,
		name: "Загальна фізика",
		number: 2,
		fraction: 1,
		teacher: "Антонова"
	});
	group_12.push({
		day: "pt",
		group: 12, subgroup: 0,
		name: "Безпека життєдіяльності та основи охорони праці",
		number: 2,
		fraction: 2,
		teacher: "Завітренко"
	});
	group_12.push({
		day: "pt",
		group: 12, subgroup: 0,
		name: "Безпека життєдіяльності та основи охорони праці",
		number: 3,
		fraction: 0,
		teacher: "Завітренко"
	});
}
//13
{
	group_13.push({
		day: "pn",
		group: 13, subgroup: 0,
		name: "Алгебра",
		number: 1,
		fraction: 1,
		teacher: "Ізюмченко"
	});
	group_13.push({
		day: "pn",
		group: 13, subgroup: 0,
		name: "Вікова фізіологія та валеологія",
		number: 2,
		fraction: 0,
		teacher: "Руденко"
	});
	group_13.push({
		day: "pn",
		group: 13, subgroup: 0,
		name: "Геометрія",
		number: 3,
		fraction: 0,
		teacher: "Яременко"
	});
	group_13.push({
		day: "pn",
		group: 13, subgroup: 0,
		name: "Вікова фізіологія та валеологія",
		number: 4,
		fraction: 2,
		teacher: "Руденко"
	});

	group_13.push({
		day: "vt",
		group: 13, subgroup: 0,
		name: "Алгебра",
		number: 1,
		fraction: 0,
		teacher: "Ізюмченко"
	});
	group_13.push({
		day: "vt",
		group: 13, subgroup: 0,
		name: "Математичний аналіз",
		number: 2,
		fraction: 0,
		teacher: "Ботузова"
	});
	group_13.push({
		day: "vt",
		group: 13, subgroup: 0,
		name: "Іноземна мова за професійним спрямуванням",
		number: 3,
		fraction: 0,
		teacher: "Смірнова"
	});
	group_13.push({
		day: "vt",
		group: 13, subgroup: 0,
		name: "Психологія",
		number: 4,
		fraction: 1,
		teacher: "Уличний"
	});
	group_13.push({
		day: "vt",
		group: 13, subgroup: 0,
		name: "Іноземна мова за професійним спрямуванням",
		number: 4,
		fraction: 2,
		teacher: "Смірнова"
	});

	group_13.push({
		day: "sr",
		group: 13, subgroup: 0,
		name: "Психологія",
		number: 2,
		fraction: 0,
		teacher: "Зубченко"
	});
	group_13.push({
		day: "sr",
		group: 13, subgroup: 0,
		name: "Інформатика",
		number: 3,
		fraction: 0,
		teacher: "Присяжнюк"
	});
	group_13.push({
		day: "sr",
		group: 13, subgroup: 0,
		name: "Інформатика",
		number: 4,
		fraction: 0,
		teacher: "Присяжнюк"
	});

	group_13.push({
		day: "ch",
		group: 13, subgroup: 0,
		name: "Алгебра",
		number: 1,
		fraction: 0,
		teacher: "Ізюмченко"
	});
	group_13.push({
		day: "ch",
		group: 13, subgroup: 0,
		name: "Інформатика",
		number: 2,
		fraction: 0,
		teacher: "Присяжнюк"
	});
	group_13.push({
		day: "ch",
		group: 13, subgroup: 0,
		name: "Математичний аналіз",
		number: 3,
		fraction: 0,
		teacher: "Ботузова"
	});
	group_13.push({
		day: "ch",
		group: 13, subgroup: 0,
		name: "Математичний аналіз",
		number: 4,
		fraction: 0,
		teacher: "Ботузова"
	});

	group_13.push({
		day: "pt",
		group: 13, subgroup: 0,
		name: "Геометрія",
		number: 1,
		fraction: 0,
		teacher: "Яременко"
	});
	group_13.push({
		day: "pt",
		group: 13, subgroup: 0,
		name: "Геометрія",
		number: 2,
		fraction: 1,
		teacher: "Яременко"
	});
	group_13.push({
		day: "pt",
		group: 13, subgroup: 0,
		name: "Безпека життєдіяльності та основи охорони праці",
		number: 2,
		fraction: 2,
		teacher: "Завітренко"
	});
	group_13.push({
		day: "pt",
		group: 13, subgroup: 0,
		name: "Безпека життєдіяльності та основи охорони праці",
		number: 3,
		fraction: 0,
		teacher: "Завітренко"
	});
}
//16
{
	group_16.push({
		day: "pn",
		group: 16, subgroup: 0,
		name: "Програмування",
		number: 1,
		fraction: 0,
		teacher: "Паращук"
	});
	group_16.push({
		day: "pn",
		group: 16, subgroup: 0,
		name: "Алгоритми та структура даних",
		number: 2,
		fraction: 0,
		teacher: "Паращук"
	});
	group_16.push({
		day: "pn",
		group: 16, subgroup: 1,
		name: "Іноз. мова за проф. спр",
		number: 3,
		fraction: 0,
		teacher: "Ковальчук"
	});
	group_16.push({
		day: "pn",
		group: 16, subgroup: 2,
		name: "Іноз. мова за проф. спр",
		number: 3,
		fraction: 0,
		teacher: "Лабенко"
	});
	group_16.push({
		day: "pn",
		group: 16, subgroup: 1,
		name: "Іноз. мова за проф. спр",
		number: 4,
		fraction: 2,
		teacher: "Ковальчук"
	});
	group_16.push({
		day: "pn",
		group: 16, subgroup: 2,
		name: "Іноз. мова за проф. спр",
		number: 4,
		fraction: 2,
		teacher: "Лабенко"
	});

	group_16.push({
		day: "vt",
		group: 16, subgroup: 0,
		name: "Алгебра та аналітична геометрія",
		number: 1,
		fraction: 0,
		teacher: "Халецька"
	});
	group_16.push({
		day: "vt",
		group: 16, subgroup: 0,
		name: "Програмування",
		number: 2,
		fraction: 0,
		teacher: "Паращук"
	});
	group_16.push({
		day: "vt",
		group: 16, subgroup: 0,
		name: "Теорія алгоритмів та математична логіка",
		number: 3,
		fraction: 0,
		teacher: "Паращук"
	});

	group_16.push({
		day: "sr",
		group: 16, subgroup: 0,
		name: "Математичний аналіз",
		number: 1,
		fraction: 0,
		teacher: "Шевченко"
	});
	group_16.push({
		day: "sr",
		group: 16, subgroup: 0,
		name: "Алгебра та аналітична геометрія",
		number: 2,
		fraction: 0,
		teacher: "Халецька"
	});
	group_16.push({
		day: "sr",
		group: 16, subgroup: 0,
		name: "Дискретна математика",
		number: 3,
		fraction: 0,
		teacher: "Болілий"
	});

	group_16.push({
		day: "ch",
		group: 16, subgroup: 0,
		name: "Алгоритми та структура даних",
		number: 1,
		fraction: 1,
		teacher: "Паращук"
	});
	group_16.push({
		day: "ch",
		group: 16, subgroup: 0,
		name: "Теорія алгоритмів та математична логіка",
		number: 1,
		fraction: 2,
		teacher: "Паращук"
	});
	group_16.push({
		day: "ch",
		group: 16, subgroup: 0,
		name: "Дискретна математика",
		number: 2,
		fraction: 0,
		teacher: "Болілий"
	});
	group_16.push({
		day: "ch",
		group: 16, subgroup: 0,
		name: "Математичний аналіз",
		number: 3,
		fraction: 1,
		teacher: "Шевченко"
	});

	group_16.push({
		day: "pt",
		group: 16, subgroup: 0,
		name: "Безпека життєдіяльності та основи охорони праці",
		number: 2,
		fraction: 1,
		teacher: "Завітренко"
	});
	group_16.push({
		day: "pt",
		group: 16, subgroup: 0,
		name: "Математичний аналіз",
		number: 2,
		fraction: 2,
		teacher: "Шевченко"
	});
	group_16.push({
		day: "pt",
		group: 16, subgroup: 0,
		name: "Математичний аналіз",
		number: 3,
		fraction: 0,
		teacher: "Шевченко"
	});
	group_16.push({
		day: "pt",
		group: 16, subgroup: 0,
		name: "Безпека життєдіяльності та основи охорони праці",
		number: 4,
		fraction: 0,
		teacher: "Завітренко"
	});
}
//17
{
	group_17.push({
		day: "pn",
		group: 17, subgroup: 0,
		name: "Дискретна математика та комбінаторний аналіз",
		number: 2,
		fraction: 0,
		teacher: "Макарчук"
	 });
	group_17.push({
		day: "pn",
		group: 17, subgroup: 0,
		name: "Іноз. мова за проф. спр",
		number: 3,
		fraction: 0,
		teacher: "Лабенко"
	});
	group_17.push({
		day: "pn",
		group: 17, subgroup: 0,
		name: "Іноз. мова за проф. спр",
		number: 4,
		fraction: 2,
		teacher: "Лабенко"
	});

	group_17.push({
		day: "vt",
		group: 17, subgroup: 0,
		name: "Математичний аналіз",
		number: 1,
		fraction: 0,
		teacher: "Нарадовий"
	});
	group_17.push({
		day: "vt",
		group: 17, subgroup: 0,
		name: "Алгебра",
		number: 2,
		fraction: 0,
		teacher: "Халецька"
	});
	group_17.push({
		day: "vt",
		group: 17, subgroup: 0,
		name: "Інформатика та програмування",
		number: 3,
		fraction: 0,
		teacher: "Лупан"
	});
	group_17.push({
		day: "vt",
		group: 17, subgroup: 0,
		name: "Інформатика та програмування",
		number: 4,
		fraction: 1,
		teacher: "Лупан"
	});

	group_17.push({
		day: "sr",
		group: 17, subgroup: 0,
		name: "Математичний аналіз",
		number: 2,
		fraction: 0,
		teacher: "Нарадовий"
	});
	group_17.push({
		day: "sr",
		group: 17, subgroup: 0,
		name: "Алгебра",
		number: 3,
		fraction: 0,
		teacher: "Нарадовий"
	});
	group_17.push({
		day: "sr",
		group: 17, subgroup: 0,
		name: "Іноземна мова за професійним спрямуванням",
		number: 4,
		fraction: 0,
		teacher: "Капітан"
	});

	group_17.push({
		day: "ch",
		group: 17, subgroup: 0,
		name: "Математичний аналіз",
		number: 1,
		fraction: 0,
		teacher: "Нарадовий"
	});
	group_17.push({
		day: "ch",
		group: 17, subgroup: 0,
		name: "Алгебра",
		number: 2,
		fraction: 0,
		teacher: "Нарадовий"
	});
	group_17.push({
		day: "ch",
		group: 17, subgroup: 0,
		name: "Інформатика та програмування",
		number: 3,
		fraction: 0,
		teacher: "Лупан"
	});
	group_17.push({
		day: "ch",
		group: 17, subgroup: 0,
		name: "Алгебра",
		number: 4,
		fraction: 2,
		teacher: "Халецька"
	});

	group_17.push({
		day: "pt",
		group: 17, subgroup: 0,
		name: "Математичний аналіз",
		number: 1,
		fraction: 1,
		teacher: "Нарадовий"
	});
	group_17.push({
		day: "pt",
		group: 17, subgroup: 0,
		name: "Математичний аналіз",
		number: 2,
		fraction: 0,
		teacher: "Нарадовий"
	});
	group_17.push({
		day: "pt",
		group: 17, subgroup: 0,
		name: "Дискретна математика та комбінаторний аналіз",
		number: 1,
		fraction: 0,
		teacher: "Макарчук"
	});
	group_17.push({
		day: "pt",
		group: 17, subgroup: 0,
		name: "Дискретна математика та комбінаторний аналіз",
		number: 1,
		fraction: 2,
		teacher: "Макарчук"
	});

	/*group_17.push({
		day: "pt",
		group: 17, subgroup: 0,
		name: "",
		number: 1,
		fraction: 0,
		teacher: ""
	});*/
}

var teachers = {
	lupan: {
		name: "І. В.",
		surname: "доц. Лупан",
		email: "lupan@gmail.com"
	},
	makarchuk: {
		name: "О. П.",
		surname: "Макарчук",
		email: "makarchuk@gmail.com"
	},
	kotyak: {
		name: "В. В.",
		surname: "Котяк",
		email: "kotyak@gmail.com"
	},
	naradoviy: {
		name: "В. В.",
		surname: "Нарадовий",
		email: "naradoviy@gmail.com"
	},
	akbash: {
		name: "К. С.",
		surname: "Акбаш",
		email: "akbash@gmail.com"
	},
	nesterenko: {
		name: "Т. А.",
		surname: "Нестеренко",
		email: "nesterenko@gmail.com"
	}
};




var all_lessons = [];
var all_groups = [];

all_groups.push(group_11);
all_groups.push(group_12);
all_groups.push(group_13);
all_groups.push(group_16);
all_groups.push(group_17);


function lesson () {
	this.name = "";
	this.datetime = new Date();
	this.building = 7;
	this.classroom = "";
	this.faculty = "";
	this.groupId = "";
	this.teacherId = "";
}

function create_arr_lessons (all_groups) {

	var week = 1;
	var months = [29, 31, 30, 31];
	var total_days = 121;
	var num_weeks = total_days / 7;
	var day;

	var time_of_lessons = [
		{
			hour: 8,
			minute: 0
		},
		{
			hour: 9,
			minute: 40
		},
		{
			hour: 11,
			minute: 10
		},
		{
			hour: 12,
			minute: 40
		},
		{
			hour: 14,
			minute: 20
		}
	];

	for (var i = 0; i < total_days; i++) {
		switch(i % 7) {
			case 0: day = "pn"; break;
			case 1: day = "vt"; break;
			case 2: day = "sr"; break;
			case 3: day = "ch"; break;
			case 4: day = "pt"; break;
			case 5:
			case 6: continue;
			default: alert("Error!!!");

		}


		for (var k = 0; k < all_groups.length; k++) {
			for (var l = 0; l < all_groups[k].length; l++) {
				if (all_groups[k][l].day == day) {

					var tmp = new lesson;

					var date_day = i, month = 0;
					while (date_day > months[month]) {
						date_day -= months[month];
						month++;
					}

					tmp.name = all_groups[k][l].name;
					tmp.datetime = new Date(
							2016,
							month + 1,
							date_day + 1,
							time_of_lessons[all_groups[k][l].number - 1].hour,
							time_of_lessons[all_groups[k][l].number - 1].minute,
							0,
							0
					);
					tmp.building = 7;
					tmp.classroom = -1;
					tmp.faculty = "fizmat";
					tmp.groupId = all_groups[k][l].group + "_" + all_groups[k][l].subgroup;

					all_lessons.push(tmp);
				}
			}
		}

		//tmp.name = all_groups[]


	}
}

create_arr_lessons (all_groups);

function sendTeacherToServer(user) {
	var req = {
		method: 'POST',
		url: 'http://localhost:1337/user/createUser',
		json: true,
		body: {name: user.name, surname: user.surname, role: "teacher", email: user.email}
	};

	request(req, function (err, res, body) {
		if (err)
			console.log(err);
		console.log(body);
	});
}
function getTeachersIdFromServer(next) {
	var users = [];
	var req = {
		method: 'GET',
		url: 'http://localhost:1337/user/getUsers?role=teacher',
	};

	request(req, function (err, res, body) {
		if (err)
			console.log(err);
		users = JSON.parse(body);
		// console.log(body);
		next(users);
	});
}
function sendLessonToServer(lesson) {
	var req = {
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
		}
	};

	request(req, function (err, res, body) {
		if (err)
			console.log(err);
		console.log(body);
	});
}
/*function sendLessonsToServer(users) {
 var lessons = group36Lessons;

 var teacher = "";
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

 }*/

Object.keys(teachers).forEach(key => {
	sendTeacherToServer(teachers[key]);
});
Object.keys(all_lessons).forEach(key => {
	sendLessonToServer(all_lessons[key]);
});

//getTeachersIdFromServer(sendLessonsToServer);



