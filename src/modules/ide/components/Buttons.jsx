export const Buttons = ({fn})=>{
    return(<div className="container text-center">
        <div className="row">
            <div className="col">
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-success" value='cpp'>C++</button>
                <button onClick={(e)=>{fn(e.target.value)}} type="button" className="btn btn-success" value='python'>Python</button>
            </div>
        </div>
    </div>
        )
}