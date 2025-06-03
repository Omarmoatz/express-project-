const express = require("express");

const app = express()

const courses = [
    {
        "id":1,
        "title":"js course",
        "price":102
    },
    {
        "id":2,
        "title":"ts course",
        "price":1000
    },
]


app.get("/api/courses", (req, res)=>{
    res.json(courses)
})


app.get("/api/courses/:courseId", (res, req) => {
    const courseId = +res.params.courseId

    console.log(courseId);
    
    const course = courses.find(courses.id === courseId)
    
    res.json(course)
})













app.listen(4000, ()=>{
    console.log("listening on port 4000");
})