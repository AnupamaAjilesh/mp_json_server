// importing json -server package
const  JSONserver=require('json-server')

// cretaing server using create() method from json-server
const MPserver=JSONserver.create()

// generating path/route to server resource
const router=JSONserver.router('db.json')

// initialising json-server middlewear
const middlewear=JSONserver.defaults()

// creating PORT number to server
const PORT=3000 | process.env.PORT

// implement middlewear to server
MPserver.use(middlewear)

// implement route to resource to server
MPserver.use(router)


// run command for server
MPserver.listen(PORT,()=>{
    console.log(`server is running at:${PORT}`)
})