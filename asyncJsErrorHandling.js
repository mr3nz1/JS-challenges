// let setStudentAgeApi = (student, age) => {
//   //async code below
//   console.log("1. Starting ..");
//   setTimeout(() => {
//     console.log("2. setting age for the student");
//     student.age = age;
//   }, 5  );
//   console.log("3. Done ..");
// };

// let setStudentAgeApi = (student, age) => {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       student.age = age;
//       if (age < 0) reject("Bad Age");
//       else resolve(student);
//     }, 500);
//   });
// };

// function asyncJsErrorHandling() {}

// let student = { name: "Paterne" };

// setStudentAgeApi(student, 19);

// setStudentAgeApi(student, -19).then((res) => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// });

let famApi = (arr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < arr.length; i++) {
        if (
          String(arr[i]["fatherName"]).toLowerCase() ===
          String("yves").toLowerCase()
        ) {
          reject("Yves is not an allowed dad in 2022");
        } else {
          arr[i] = {
            ...arr[i],
            totalNumberofFamilyMembers: arr[i]["childrenNumber"] + 2,
          };
        }
      }
      resolve(arr);
    });
  });
};

// famApi([
//   {
//     fatherName: "John",
//     motherName: "Mary",
//     childrenNumber: 2,
//   },
//   {
//     fatherName: "Mike",
//     motherName: "Alice",
//     childrenNumber: 3,
//   },
//   {
//     fatherName: "Yves",
//     motherName: "Emma",
//     childrenNumber: 1,
//   },
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const callFamApi = async () => {
  try {
    const res = await famApi([
      {
        fatherName: "John",
        motherName: "Mary",
        childrenNumber: 2,
      },
      {
        fatherName: "Mike",
        motherName: "Alice",
        childrenNumber: 3,
      },
      {
        fatherName: "Peter",
        motherName: "Emma",
        childrenNumber: 1,
      },
    ]);
    console.log(res)
  } catch (err) {
    console.log(err)
  }
};

callFamApi()