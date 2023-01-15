
const tareas= [
    {   Titulo: "Estudiar html",
        Estado: "Terminado",
     },
    {
        Titulo: "Estudiar css",
        Estado: "En progreso",

     },
    {
        Titulo: "Estudiar js ",
        Estado: "Pendiente",

     },
     {
        Titulo: "Practicar js ",
        Estado: "En progreso",

     },
]

/*const agregoTarea= (titulo, estado)=>{
    tareas.push({Titulo: titulo, Estado:estado} )
    return tareas;
}*/
   
const agregoTarea= (titulo, estado)=>{
    for (let i = 0; i < tareas.length; i++) {
        if(tareas[i].Titulo===titulo){
            return "Error: Ya existe"
        }
        tareas.push({Titulo: titulo, Estado:estado} )
        return tareas;
    }
}
   
  console.log(agregoTarea("Practicar js", "Pendiente"))



    /*for(let i=0; i<tareas.length; i++){
        if(tareas[i].Titulo===titulo){
        return "Error, la tarea ya existe"
        }
    }
    tareas.push({Titulo: titulo, Estado:estado} )
    return agregoTareas;
}

console.log("lavar acolchados", "pendiente");*/
