const express=require('express');
const exhbs=require('express-handlebars');
const bodyParser=require('body-parser');
const path=require('path')
const app=express();
const db=require('./config/database');
const PORT=process.env.PORT||5000;


//Test db connection 
db.authenticate()
    .then(()=>console.log("Database connected"))
    .catch(err=>console.log("Err"+err))
//@handlebar
app.engine('handlebars',exhbs({defaultLayout:'main',runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }}))
app.set('view engine','handlebars');
// @body-parser
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>res.render('index',{layout:'landing'}));
// Gig routes
app.use('/gigs',require('./routes/gigs'))
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
