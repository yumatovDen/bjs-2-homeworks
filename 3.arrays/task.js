// Задание 1
function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((number, i) => number === arr2[i])
}

// Задание 2
function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, age, index, usersAge) => acc + age/usersAge.length, 0)
    return result;
}
