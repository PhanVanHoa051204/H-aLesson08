import React from 'react'

export default function pvhListTask({renderpvhListTasks, onpvhTaskEdit, onpvhTaskDelete}) {
    console.log(renderpvhListTasks);
    // ham xu ly
const pvhHandleEdit = (param)=>{
    console.log("Click edit:", param);
    onpvhTaskEdit(param)
}
    // ham xu ly xoa
    const pvhHandleDelete = (param) => {
        if(window.location.confirm("ban co chac chan xoa khong")){
            onpvhTaskDelete(param)
        }
    }
    // render data
    let pvhElementTask = renderpvhListTasks.map((task, index)=>{
        return (
            <>
            <tr key={index}>
            <td>{index+1}</td>
            <td>{task.pvh_taskId}</td>
            <td>{task.pvh_taskName}</td>
            <td>{task.pvh_level}</td>
            <td>{task.pvh_level}</td>
            <td>
                <button className='btn btn-success'
                onClick={()=>pvhHandleEdit(task)}
                >Edit</button>
                <button className='btn btn-danger' onClick={()=>pvhHandleDelete(task)}>Del</button>
            </td>
            </tr>
            </>
        )
    })
  return (
    <div>
        <h2>Danh sach nhiem vu</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Task Id</th>
                    <th>Task Name</th>
                    <th>Task Level</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {pvhElementTask}
            </tbody>
        </table>
    </div>
  )
}