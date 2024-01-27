function sortObjectValuesToFemaleOrMale([...arr]) {
  let obj = { males: [], females: [] };

  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i].split(",");
    let currentValueName = currentValue[0].split(" ");

    if (currentValue[2].trim() === "male") {
      obj.males.push({
        [currentValueName[0].trim()]: {
          secondName: currentValueName[1].trim(),
          age: currentValue[1].trim(),
        },
      });
    } else {
      obj.females.push({
        [currentValueName[0].trim()]: {
          secondName: currentValueName[1].trim(),
          age: currentValue[1].trim(),
        },
      });
    }
  }

  return obj;
}

console.log(
  sortArray([
    "Patrick wyne, 30, male",
    "lil wyne, 32, male",
    "Eric mimi, 21, female",
    "Dodos deck, 21, male",
    "Alian Dwine, 22, male",
    "Patrick wyne, 33, male",
    "Patrick wyne, 10, male",
    "Patrick wyne, 40, male",
  ])
);
