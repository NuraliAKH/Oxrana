const userService = {
  fetchUsers() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve([
          { fio:"nurli", to:"to", from:"from", cause:"cause"},
          { fio2:"Nurali"},
        ]);
      }, 300);
    });
  },
  createUser({ fio, to, from, cause}) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve({ fio, to, from, cause});
        console.log(fio);
      }, 300);
    });
  },
  User({fio2}){
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve({fio2});
        console.log(fio2);
      }, 300);
    });
  },
};

export default userService;
