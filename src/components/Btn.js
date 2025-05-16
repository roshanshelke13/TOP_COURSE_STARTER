
function Btn(props){

    function filterHandler(){
        props.getTitle(props.data.title);
    }

    return(
        <div>
            <button onClick={filterHandler} className="btn">{props.data.title}</button>
        </div>
    )
}

export default Btn;