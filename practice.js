require("./src/db/mongoose");

const User = require("./src/models/user");

// User.findOneAndUpdate("5fac2b02c3083321afffa987", { age: 40, name: "salim" })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 28 });
//   })
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e));

const updateAgeCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeCount("5fac2b02c3083321afffa987", 28)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });

const Task = require("./src/models/task");

// Task.findByIdAndDelete("5fac2cab0f369022be0d67ab")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e));

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5fac2e5750730f237a4fa290")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
