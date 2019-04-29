/*
*
* ALL COMMON HELPER FUNCTIONS FOR CONTROLLER GOES HERE
*
*/

/*
*  @Properties {res,entity,enityType} it could be any db model returned by sequelize query
*  entityType is the name of enity
* it checks if entity(board,comment) provided during db queries are null or objects 
* and on the base of checks generate the response
*/
exports.responseHandler = (res,entityType,entity) =>{

     //check if pin created
     if(entity)
     res.send({message:`${entityType} created`}).status(200);
     else
     res.send({message:`${entityType} failed to create`}).status(400);
 
}