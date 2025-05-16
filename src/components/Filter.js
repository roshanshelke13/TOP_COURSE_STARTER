import Btn from "./Btn";

function Filter({datas,getTitle}){

    return(
        <div className="box">
            {
                datas.map((data) => {
                    return <Btn key={data.id} data={data}
                     getTitle={getTitle}> </Btn>
                })
            }
        </div>
    );
}

export default Filter;