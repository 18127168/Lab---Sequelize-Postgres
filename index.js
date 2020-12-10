const express = require('express');
const hbs = require('express-handlebars');

var app = express();

app.use(express.static(__dirname));

app.engine('hbs', hbs({
    extname:'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname +'/views/layouts',
    partialsDir: __dirname +'/views/particals',
    runtimeOption: {
      allowProtoPropertiesByDefault: true
    }
}));

app.set('view engine', 'hbs');
app.set('port',(process.env.PORT || 5000));

// main
app.get('/',function(req,res){
    res.locals.foot_name = "Group13";

    res.render('index');
})

app.get('/recipes',function(req,res){
    res.locals.foot_name = "18127153 - Phan Nhat Minh";
  
    res.render('recipes');
})

var models = require('./models');
app.get('/sync',function(req,res){
  models.sequelize.sync().then(function(){
      res.send('database sync complete!');
  })
})

app.get('/t',(req, res) => {
	let blogController = require('./controllers/blogController');
	blogController.getAll().then(data => {
    console.log(data);
		res.locals.data = data;
		res.render('task3');
	});
});


app.get('/featured/',function(req,res){
  res.locals.foot_name = "18127176 - To Dong Phat";

  res.render('recipes');
})

app.get('/search/:id',function(req,res){
  res.locals.foot_name = "18127168 - Tran Bui Tai Nhan";

  res.render('search');
})



app.listen(app.get('port'),function(){
  console.log("Server is listening on port "+ app.get('port'));
});
