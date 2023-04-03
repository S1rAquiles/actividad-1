const  express  =  require ("express") 
const  app  =  express ( )

app.get ('/', function(req, res)  { 
  res.send ( "Hola mundo. Javier Suarez CI 30148370 Seccion 1 " ) 
} )

app.listen ( 3000 )