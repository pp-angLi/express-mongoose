var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/blog');

var someSchema = new mongoose.Schema({
    kid: {
      type : String
    },
    name: {
      type : String
    },
    method: {
      type : String
    },
    money: {
      type : Number
    },
    date: {
      type : Date,
      default: Date.now
    },
    address: {
      type : String
    },
});

var lendSchema = new mongoose.Schema({
    name:{
      type : String,
    },
    lendDate: {
      type : Date,
      default: Date.now
    },
    use:{
      type : String
    },
    backDate: {
      type : Date
    },
    useCase: {
      type : String
    },
    evaluate: {
      type : String
    },
});

var maintainSchema = new mongoose.Schema({
    name: {
      type : String,
    },
    useDate: {
      type : Date,
      default: Date.now
    },
    reason: {
      type : String
    },
    end: {
      type : String
    },
    user: {
      type : String
    },
    money: {
      type : Number
    },
});

var usingSchema = new mongoose.Schema({
  name: String,
  useDate:{
    type: Date,
    default: Date.now
  },
  backDate: {
    type: Date
  },
  useCase: String,
  evaluate: String
})

var someThing = mongoose.model('someThing', someSchema);
var lending = mongoose.model('lending', lendSchema);
var mainTain = mongoose.model('mainTain', maintainSchema);
var using = mongoose.model('using', usingSchema);

//////////////////////////////////////////////

router.get('/', function(req, res, next) {
  someThing.find(function (err, data) {
    if(err){ return console.log(err) }
    res.render('index', {
      thing: data,
      title:""
    })
  });
});

router.get('/addThing', function(req, res, next) {
  res.render('addThing', {title:""});
});

router.post('/addThing', function(req, res, next) {
  someThing.findOne({name:req.body.name}, function (err, data) {
    if(data == null || data == "") {
      var newThing = new someThing ({
        kid: req.body.kid,
        name: req.body.name,
        method: req.body.method,
        money: req.body.money,
        address: req.body.address
      })
      newThing.save(function (err, data) {
        if(err){ return console.log(err) }
        res.redirect('/')
      })
    }
    else {
      res.render('addThing', {title: "已经有同样的东西啦!"});
    }
  })

});

router.post('/fixThing', function (req, res, next) {
  var id = req.query.id;

  someThing.findOne({name: req.body.name}, function (err, data) {
    if(err) {console.log(err)}
    if(data == null || data == "") {
      someThing.remove({_id:id}, function (err, data) {
        if(err) {console.log(err)}
      })
        var newThing = new someThing ({
        kid: req.body.kid,
        name: req.body.name,
        method: req.body.method,
        money: req.body.money,
        address: req.body.address
      })
      newThing.save(function (err, data) {
        if(err){ return console.log(err) }
        res.redirect('/')
      })
    }
    else {
      someThing.find(function (err, data) {
        if(err){ return console.log(err) }
        res.render('index', {
          thing: data,
          title:"它的名字被占用啦!"
        })
      });
    }
  })
});

router.get('/removeThing', function (req, res, next) {
  var name = req.query.name;
  someThing.remove({name:name}, function (err, data) {
    if(err) {console.log(err)}
    lending.remove({name:name}, function (err, data) {
      if(err) {console.log(err)}
       mainTain.remove({name:name}, function (err, data) {
        if(err) {console.log(err)}
          using.remove({name:name}, function (err, data) {
            res.redirect('/')
          })
      })
    })
  })

})

////////////////////////////////////////////////////

router.get('/lending', function (req, res, next) {
  lending.find(function (err, data) {
    if(err) {return console.log(err)}
    res.render('lending', {
      lending: data,
      title:""
    })
  })
});

router.get('/addLending', function (req, res, next) {
    res.render('addLending', {title:""})
});

router.post('/addLending', function (req, res, next) {
     someThing.findOne({name:req.body.name}, function (err, data) {
      if(err) {console.log(err)}
      if(data == null || data == "") {
        // res.redirect('/addLending');
        res.render('addLending', {title: "没有这件物品哦"})
      }
      else {
          var newLend = new lending({
          name: req.body.name,
          lendDate: req.body.lendDate,
          use: req.body.use,
          backDate: req.body.backDate,
          useCase: req.body.useCase,
          evaluate: req.body.evaluate
        })
        newLend.save(function (err, data) {
          if(err) {return console.log(err)}
            res.redirect('/lending')
        })
      }
     })
});

router.post('/fixLending', function (req, res, next) {
  var id = req.query.id;
  someThing.findOne({name: req.body.name}, function (err, data) {
    if(err) {console.log(err)}
    if(data == null || data == "") {
      lending.find(function (err, data) {
        if(err) {return console.log(err)}
        res.render('lending', {
          lending: data,
          title: "没有这件物品哦!"
        })
      })
    }
    else {
        lending.remove({_id:id}, function (err,data) {
          if(err){return console.log(err)}
        })
        var newLend = new lending({
          name: req.body.name,
          lendDate: req.body.lendDate,
          use: req.body.use,
          backDate: req.body.backDate,
          useCase: req.body.useCase,
          evaluate: req.body.evaluate
        })
        newLend.save(function (err, data) {
          if(err) {return console.log(err)}
            res.redirect('/lending')
        })
    }
   })
});

router.get('/removeLending', function (req, res, next) {
  var id = req.query.id;
  lending.remove({_id:id}, function (err,data) {
    if(err){return console.log(err)}
      res.redirect('/lending')
  })
});

////////////////////////////////////////////////////////////

router.get('/maintain', function (req, res, next) {
  mainTain.find(function (err, data) {
    if(err) {return console.log(err)}
      res.render('maintain', {
        maintains: data,
        title: ""
      })
  })
});
router.get('/addMaintain', function (req, res, next) {
  res.render('addMaintain', {title:""});
});
router.post('/addMaintain', function (req, res, next) {
  someThing.findOne({name: req.body.name}, function (err, data) {
    if(err) {console.log(err)}
    if(data == null || data == "") {
      res.render('addMaintain', {title: "没有这件物品哦"})
    }
    else {
      var newMaintain = new mainTain({
        name: req.body.name,
        reason: req.body.reason,
        end: req.body.end,
        user: req.body.user,
        money: req.body.money
      })
      newMaintain.save(function (err, data) {
        if(err) {return console.log(err)}
          res.redirect('/maintain')
      })
    }
  })
});
router.post('/fixMaintain', function (req, res, next) {
  var id = req.query.id;
  someThing.findOne({name: req.body.name}, function (err, data) {
    if(err) {console.log(err)}
    if(data == null || data == "") {
      mainTain.find(function (err, data) {
        if(err) {return console.log(err)}
          res.render('maintain', {
            maintains: data,
            title:"没有这件物品哦!"
          })
      })
    }
    else {
        mainTain.remove({_id:id}, function (err, data){
          if(err){console.log(err)}
        });
        var newMaintain = new mainTain({
          name: req.body.name,
          reason: req.body.reason,
          end: req.body.end,
          user: req.body.user,
          money: req.body.money
        });
        newMaintain.save(function (err, data) {
          if(err) {return console.log(err)}
            res.redirect('/maintain')
        })
    }
  })
});
router.get('/removeMaintain', function (req, res, next) {
  var id = req.query.id;
  mainTain.remove({_id:id}, function (err, data){
    if(err){console.log(err)}
      res.redirect('/maintain')
  })
});

////////////////////////////////////////////////////////////

router.get('/using', function (req, res, next) {
  using.find(function (err, data) {
    if(err) {return console.log(err)}
    res.render('using', {
      using: data,
      title:""
    })
  })
});

router.get('/addUsing', function (req, res, next) {
    res.render('addUsing', {title:""})
});

router.post('/addUsing', function (req, res, next) {
     someThing.findOne({name:req.body.name}, function (err, data) {
      if(err) {console.log(err)}
      if(data == null || data == "") {
        // res.redirect('/addLending');
        res.render('addUsing', {title: "没有这件物品哦"})
      }
      else {
          var newUse = new using({
          name: req.body.name,
          useDate:req.body.useDate,
          backDate: req.body.backDate,
          useCase: req.body.useCase,
          evaluate: req.body.evaluate
        })
        newUse.save(function (err, data) {
          if(err) {return console.log(err)}
            res.redirect('/using')
        })
      }
     })
});

router.post('/fixUsing', function (req, res, next) {
  var id = req.query.id;
  someThing.findOne({name: req.body.name}, function (err, data) {
    if(err) {console.log(err)}
    if(data == null || data == "") {
      using.find(function (err, data) {
        if(err) {return console.log(err)}
        res.render('using', {
          using: data,
          title: "没有这件物品哦!"
        })
      })
    }
    else {
        using.remove({_id:id}, function (err,data) {
          if(err){return console.log(err)}
        })
        var newUse = new using({
          name: req.body.name,
          useDate:req.body.useDate,
          backDate: req.body.backDate,
          useCase: req.body.useCase,
          evaluate: req.body.evaluate
        })
        newUse.save(function (err, data) {
          if(err) {return console.log(err)}
            res.redirect('/using')
        })
    }
   })
});

router.get('/removeUsing', function (req, res, next) {
  var id = req.query.id;
  using.remove({_id:id}, function (err,data) {
    if(err){return console.log(err)}
      res.redirect('/using')
  })
});

///////////////////////////////////////////////////////

module.exports = router;
