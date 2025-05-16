
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props){
    let course = props.courses;
    let likedCourses =props.likedCourses;
    let setLikedCourse=props.setLikedCourses;
    function popUp(){
        if(likedCourses.includes(course.id)){
            //liked hai
            setLikedCourse((prev) =>prev.filter((cid)=>
            cid !== course.id ));
            toast.warning("Removed from favourites",{
                style:{
                    backgroundColor:"black",
                    color:"blanchedalmond",
                }
            });
        }
        else{
            //liked nahi he
            if(likedCourses.length === 0){
                setLikedCourse([course.id]);
            }
            else{
                //non empty
                setLikedCourse((prev) => [...prev,course.id]);
            }
            toast.success("Added to favourites",{
                style:{
                    backgroundColor:"black",
                    color:"blanchedalmond",
                }
            });
        }
    }

    return(
        <div className="container">
            <div className="img-div">
                <img src={course.image.url} alt="hi" className="img"></img>
                <div className="fav">
                <button className="fav-btn" onClick={popUp} >
                    {
                        likedCourses.includes(course.id)? <FcLike></FcLike>:<FcLikePlaceholder></FcLikePlaceholder>
                  
                    }
                </button>
            </div>
            </div>

            <div className="text-div">
                <p className="title">{course.title}</p>
                <p className="description">
                    {
                        course.description.length>100 ? 
                        (`${course.description.substring(0,200)}...`):
                        (course.description)
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;