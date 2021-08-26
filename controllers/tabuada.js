const tabuada = (req, res) => {
  res.render('./tabuada/tabuada', {
    num: req.params.num
  })
}

module.exports = {
  tabuada
}
