import React, { useEffect, useState } from 'react'

export default function pvhTaskAddOrEdit(renderpvhTask, renderpvhIsAddOrEdit, pvhOnSubmit) {
    // doi tuoong task
    //const pvhTaksObj = {
      //  pvh_taskId:0,
      //  pvh_taskName:"",
      //  pvh_Level:""
 //   }
    const [pvhTask, setpvhTask] = useState(renderpvhTask);
    useEffect(()=>{
        setpvhTask(renderpvhTask)
    },[renderpvhTask])
    const pvhTieuDe = renderpvhIsAddOrEdit==true?"them moi task":"sua thong tin task"
    const pvhHandlechange = (pvhEvent)=>{
        let name = pvhEvent.target.name;
        let value = pvhEvent.target.value;
        setpvhTask(prev =>{
            return{
                ...prev,
                [name]:value,
            }
        })
    }
    const pvhHandleSubmit = (pvhEvent)=>{
        pvhEvent.preventDefault();
        pvhOnSubmit(pvhTask)
    }
  return (
    <div>
        <h2>{pvhTieuDe}</h2>
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Task ID</span>
                <input type="text" 
                name='pvh_taskId' value={pvhTask.pvh_taskId} onChange={pvhHandlechange}
                className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <div>
                
                <input name='pvh_taskId' value={pvhTask.pvh_taskId} onChange={''} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Task Name</span>
                <input type="text" 
                name='pvh_taskName' value={pvhTask.pvh_taskName} onChange={pvhHandlechange}
                className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2"></input>
            </div>
            <div>
                
                <input name='pvh_taskName' value={pvhTask.pvh_taskName} onChange={''} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Task Level</span>
                <input type="text" 
                name='pvh_taskLevel' value={pvhTask.pvh_taskLevel} onChange={pvhHandlechange}
                className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon3"></input>
            </div>
            <div>
                
                <select name='pvh_Level' value={pvhTask.pvh_Level} onChange={pvhHandlechange} className="form-control"
                    aria-describedby="basic-addon"> 
                    <option value={'smail'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={pvhHandleSubmit} className='btn btn-primary'>Ghi lai</button>
        </form>
    </div>
  )
}