import { useState } from 'react';
import './App.css';
import PvhListTask from './Hoa051204/PvhListTask';
import PvhTaskOrEdit from './Hoa051204/PvhTaskOrEdit';

function App() {
  // mock data
  const pvh_listTasks = [
    { pvh_taskId:2210900023, pvh_taskName:"Phan Văn Hòa", pvh_level:"Small" },
    { pvh_taskId:1, pvh_taskName:"Trần Đăng Dương", pvh_level:"Small"},
    { pvh_taskId:2, pvh_taskName:"Nguyễn Quang Nam", pvh_level:"Small" },
    { pvh_taskId:3, pvh_taskName:"Nguyễn Phi Mạnh", pvh_level:"High"},
    { pvh_taskId:4, pvh_taskName:"Phan Lạc Việt", pvh_level:"Small"},
  ];
  // su dung ham useState de luu tru trang thai du lieu
  const [pvhListTasks, setpvhListTasks] = useState(pvh_listTasks);  
  //tao state lieu cho form (add, edit)
  const pvhTasksObj = {
    // doi tuoong task
      pvh_taskId:0,
      pvh_taskName:"NTU",
      pvh_Level:"smal",
  };
  // tao state
  const [pvhTask, setpvhTask] = useState(pvhTasksObj);
const [pvhIsAddOrEdit, setpvhIsAddOrEdit] = useState(true); // mac dinh ban dau
  // nhan du lieu khi sua
  const pvhHandleEdit = (param)=>{
   console.log("App - Edit:", param) ;
   // cap nhat lai pvhatask
   setpvhTask(param);
   // cap naht trang thai form suaa
   setpvhIsAddOrEdit(false);
  };
  const pvhHandleSubmit = (pvhParam)=>{
    console.log("App:",pvhParam);
    if(pvhIsAddOrEdit==true){
      setpvhListTasks((prew)=> {
        return [...prew, pvhParam];
      });
    } else {
      for (let i = 0; i < Array.length; i++){
        if(pvhListTasks[i].pvh_taskId==pvhParam.pvh_taskId){
          pvhListTasks[i] = pvhParam;
          break;
        }
      }
    }
    setpvhListTasks(prev=>{
      return[
        ...prev,
        pvhParam
      ]
    });
    
  };
// ham xoa 
const pvhHandleDelete = (param)=>{
  let pvhResult = pvhListTasks.fillter(x=>x.pvh_taskId != param.pvh_taskId);
  setpvhListTasks(pvhResult);
}
  return (
    <div className="container border">
      <h1>Phan Văn Hòa - K22CNT2</h1>
      <hr/>
      <div>
        {/* danh sach list task */}
        <PvhListTask renderpvhListTasks = {pvhListTasks}
                      onpvhtaskEdit = {pvhHandleEdit}
                      onpvhTaskDelete = {pvhHandleDelete}
        />
      </div>
      <div>
        <PvhTaskOrEdit renderpvhTask = {pvhTask} pvhOnSubmit={pvhHandleSubmit} />
      </div>
    </div>
  );
}

export default App;