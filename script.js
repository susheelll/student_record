
const form = document.getElementById("studentForm");
const list= document.getElementById("studentList");
const error = document.getElementById("error");

const students = [];

form.addEventListener("submit",function(e){
    alert("Submit function working ✅");   // 👈 TEST LINE
    e.preventDefault();

    const id=document.getElementById("studentId").value;
    const name=document.getElementById("studentName").value;
    const age=document.getElementById("studentAge").value;

    if(id===""||name===""||age==="")
      { error.textContent="All field are required";
        return;
    }
    if(age<=0)
      {  error.textContent="Age must be greater than zero";
        form.reset();
        return;
      }
    for(let i=0;i<students.length;i++){
        if(students[i].id===id){
            error.textContent="id aready exist";
            form.reset();//*imp
            return;
        }
    }
    const std={ //imp
        id: id,//not = and semicoolon
        name: name,
        age:Number(age)
    };// must end with
    students.push(std);

    list.innerHTML="";//imp 

    for(let i=0;i<students.length;i++)
    {
        const li = document.createElement("li");
        li.textContent=
        "id: "+students[i].id+
        ", name: "+students[i].name+
        ", Age: "+students[i].age;
        list.appendChild(li);//is used to add a new HTML element inside another element at the end.
    }
    error.textContent=""
    form.reset();
});
alert("JS working");
