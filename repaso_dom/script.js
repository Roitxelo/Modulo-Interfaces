const tareas = ["Comenzar proyecto DART", "Rehacer CV", "Repaso Python"]

let lista = document.getElementById("lista")

tareas.forEach(tarea => {
    lista.createElement("li")
    lista.appendChild(tarea)
})

