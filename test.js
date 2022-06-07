// Список курсов
let courses = [
    { name: 'Courses in England', prices: [0, 100] },
    { name: 'Courses in Germany', prices: [500, null] },
    { name: 'Courses in Italy', prices: [100, 200] },
    { name: 'Courses in Russia', prices: [null, 400] },
    { name: 'Courses in China', prices: [50, 250] },
    { name: 'Courses in USA', prices: [200, null] },
    { name: 'Courses in Kazakhstan', prices: [56, 324] },
    { name: 'Courses in France', prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

//фильтрация
function filterByRange(item = [], range = []) {
    if (range[0] === null && range[1] === null) {
        return true;
    }

    if (range[0] === null) {
        if (item[1] !== null) {
            return range[1] >= item[1];
        } else {
            return false;
        }
    }

    if (range[1] === null) {
        return range[0] <= item[0];
    }

    if (item[1] === null) {
        return false;
    }

    return range[0] <= item[0] && range[1] >= item[1];
}

const filteredCourses1 = courses.filter((item) =>
    filterByRange(item.prices, requiredRange1)
);
const filteredCourses2 = courses.filter((item) =>
    filterByRange(item.prices, requiredRange2)
);
const filteredCourses3 = courses.filter((item) =>
    filterByRange(item.prices, requiredRange3)
);

//сортировка
function sortingByPrice(a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
}

const sortingCourses = courses.sort((a, b) =>
    sortingByPrice(a.prices[0], b.prices[0])
);

const sortingCourses2 = courses.sort((a, b) => a - b);
