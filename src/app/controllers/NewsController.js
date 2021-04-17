class NewsController {
  //[GET] news
  index(req, res) {
    res.render("news");
  }

  //[GET] news/:lug
  show(req, res) {
    res.send("aaaa");
  }
}

module.exports = new NewsController();
