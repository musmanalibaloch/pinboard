

/*
*
* @Description: Create board endpoints 
* @Argument @Property{app(express instance)}   
* 
*/

module.exports = ( app ) =>
{

  app.get("/hello",(req,res)=>{
      res.send("hello");
  })
}