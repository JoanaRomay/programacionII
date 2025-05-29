/*Ejercicio 1: Gestor de Tareas Mejorado
Crea un gestor de tareas que utilice Map para almacenar las tareas, donde la clave sea un ID único y el valor sea un objeto de tarea. Cada tarea tendrá id, descripcion, completada (booleano) y un Set de etiquetas.

Implementa las siguientes funciones:

agregarTarea({ id, descripcion, etiquetas = [] }):
Debe usar desestructuración para los parámetros.
Si el id ya existe, no debe sobrescribir la tarea existente y podría devolver un mensaje de error o false.
Las etiquetas deben almacenarse en un Set dentro del objeto de la tarea.
La tarea se guarda en un Map global o encapsulado.
marcarCompletada(id): Cambia el estado completada de la tarea a true.
obtenerTareasPorEtiqueta(etiqueta): Devuelve un array con las descripciones de las tareas que contengan la etiqueta especificada.
obtenerResumenTareas(): Devuelve un objeto con { total, completadas, pendientes }.
Pistas:

Puedes usar un closure para encapsular el Map de tareas si lo deseas.
Para obtenerTareasPorEtiqueta, necesitarás iterar el Map y luego verificar el Set de etiquetas de cada tarea. */

    function crearGestorDeTareas() {
        const tareas = new Map();

    function agregarTarea({ id, descripcion, etiquetas = [] }){ 
            if (tareas.has(id)) {
                return false
            } else { 
                const nuevaTarea = {
                    id,
                    descripcion,
                    completada: false,
                    etiquetas: new Set(etiquetas)
                };
                tareas.set(id, nuevaTarea);
                return true; 
        }
        }
        function marcarCompletada(id) {
            if (tareas.has(id)) {
            const tarea =  tareas.get(id);
                tarea.completada = true;
                
            }
            
        }
        
        function obtenerTareasPorEtiqueta(etiqueta) {
            const arrayDescripciones = [];
            for (const [id, tarea] of tareas) {
                if (tarea.etiquetas.has(etiqueta)) {
                    arrayDescripciones.push(tarea.descripcion)
                }
                 
            }
            return arrayDescripciones
        }
        function obtenerResumenTareas() {
            let tareaCompletada = 0;
            let tareaPendiente = 0;
          
            for (const [id, tarea] of tareas) {
                if (tarea.completada) {
                    tareaCompletada++;
                } else { 
                    tareaPendiente++
                }
               
            }
            const totalTareas = tareaCompletada + tareaPendiente;
            return {
                total: totalTareas,
                completadas: tareaCompletada,
                pendientes: tareaPendiente
            };
        }

        return {
            agregarTarea,
            marcarCompletada, 
            obtenerTareasPorEtiqueta,
            obtenerResumenTareas
        };
    }
    
    const gestor = crearGestorDeTareas();

    gestor.agregarTarea({
        id: 1,
        descripcion: "Correr en el parque",
        etiquetas: ["salud", "ejercicio"]
    });
