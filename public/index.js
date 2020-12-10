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

    console.log(1);

    res.render('index');
})

app.get('/aaa',function(req,res){
    res.locals.foot_name = "Group13";
  

    res.render('../public/views/index');
})


app.listen(app.get('port'),function(){
  console.log("Server is listening on port "+ app.get('port'));
});
