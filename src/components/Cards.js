import { useState } from "react";
import Card from "./Card";

function Cards(props){
    let courses = props.data; 
    let category=props.category;
    const [likedCourses,setLikedCourses] =useState([]);
    function getCourses(){
        if(category ==="All"){
            let allCourses =[];
        
        Object.values(courses).forEach((courseCategory) =>{
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
        }

        else{
            return courses[category];
        }
        
    } 

    return(
        <div className="big-cntr">
            {
                getCourses().map((course) => {
                    return <Card key={course.id} courses={course}
                     popUp={props.popUp}
                     likedCourses={likedCourses}
                     setLikedCourses={setLikedCourses}></Card>
                })
            }
        </div>
    );
}

export default Cards;