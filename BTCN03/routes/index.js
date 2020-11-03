var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Calculator' });
});

router.post('/', (req, res)=> {
  const number1 = Number(req.body.number1);
  const number2 = Number(req.body.number2);
  const calculator = req.body.calc;
  //const result = req.body.reset;

  var result;
  if (calculator == '+') {
        result = number1 + number2;
    } else if (calculator == '-') {
        result = number1 - number2;
    } else if (calculator == '*') {
        result = number1 * number2;
    } else if (calculator == '/') {
        result = number1 / number2;
    }


  res.render('index', { number1, number2, result });
});

module.exports = router;
