const Course = require("../models/Courses");
const { multipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  //[GET] /
  index(req, res, next) {
    // res.render("home");
    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     res.json(courses);
    //     return;
    //   }
    //   res.status(400).json({ error: "ERROR!" });
    // });

    Course.find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
  }

  //[GET] news/:lug
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
