// input
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

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

//decision
function filterByRange(arr = [], prop, range = []) {
    function filterConditions(prop, range) {
        if (range[0] === null && range[1] === null) return true;

        if (range[0] === null) {
            if (prop[1] !== null) {
                return range[1] >= prop[1];
            } else {
                return false;
            }
        }

        if (range[1] === null) return range[0] <= prop[0];

        if (prop[1] === null) return false;

        return range[0] <= prop[0] && range[1] >= prop[1];
    }

    function sortingByPrice(a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    }

    const filteredArray = arr.filter((elem) =>
        filterConditions(elem[prop], range)
    );
    return filteredArray.sort((a, b) => sortingByPrice(a[prop][0], b[prop][0]));
}

// using and checking
const filteredCourses1 = filterByRange(courses, 'prices', requiredRange1);
const filteredCourses2 = filterByRange(courses, 'prices', requiredRange2);
const filteredCourses3 = filterByRange(courses, 'prices', requiredRange3);
