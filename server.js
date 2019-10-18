
const express= require('express'),
    path = require('path');

const app = express();

app.use(express.static('./dist/cruduf'));
//app.use(express.static('./dist'));
/*app.get('*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});*/

app.get('/*', (req, res)=>{

    //res.sendFile(path.join('','/dist/rachid-app/index.html'));
    //res.sendFile(path.join('','/dist/rachid/index.html'));
    //res.sendFile(path.join('','/dist/index.html'));
    //res.sendFile(path.join('','/index.html'));
    //res.sendFile(path.join('','/dist'));

});

app.listen(process.env.PORT || 8080, ()=>{
    console.log('Server started');
});