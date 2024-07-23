import { projects } from "./data"
import { Project } from "./Models/Project"

const table_body = document.querySelector(".table-body")
table_body!.innerHTML = ''

export const display_projects = ()=>{
    projects.map((projet : Project, index: number)=>{
        table_body!.innerHTML += `
         <tr>

               
                <td class="border p-2 border-slate-300">${index<10? '0'+(index+1):index}</td>
                <td class="border p-2 border-slate-300">${projet.project_title}</td>
                
                 <td class="border p-2 border-slate-300"><img class="h-[4rem]" src="assets/img/blog.jpg" alt="edit" /></td>
      
                <td class="border p-2 border-slate-300">
                ${projet.technologies}
                </td>
                <td class="border p-2 border-slate-300">${projet.type_of_project}</td>
                <td class="border p-2 border-slate-300">${projet.contributors}</td>
                <td class="border p-2 border-slate-300"><div class="  p-2  flex-col flex gap-2 items-center">
                  <span class="cursor-pointer"><img src="assets/img/icon-edit.svg" alt="edit" /></span>
                  <span class="cursor-pointer"><img src="assets/img/eye.svg" alt="view" /></span>
                  <span class="cursor-pointer"><img src="assets/img/icon-delete.svg" alt="delete" /></span>
                </div></td>
               
              </tr>`
    })
}