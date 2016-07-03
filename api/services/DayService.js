// DEPRECATED

// "use strict";
//
// module.exports = {
//   getDays: function (constraints, next) {
//     Day.find(constraints).exec((err, found) => {
//       if (err)
//         throw err;
//       next(found);
//     });
//   },
//   createDay: function (info, next) {
//     Day.create(info).exec((err, created) => {
//       if (err)
//         return next(err);
//       next(created);
//     });
//   },
//   destroyDay: function (info, next) {
//     Day.destroy(info).exec((err, destroyed) => {
//       if (err)
//         return next(err);
//       next(destroyed);
//
//     });
//   },
//   updateDay: function (oldId, newData, next) {
//     Day.update(oldId, newData).exec((err, updated) => {
//       if (err)
//         return next(err);
//       next(updated);
//     });
//
//   }
// };
