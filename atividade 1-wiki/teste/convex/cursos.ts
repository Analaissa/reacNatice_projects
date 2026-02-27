import { mutation,query} from "./_generated/server"
import { v } from "convex/"
export const getCursos = query({
    handler: async (ctx) =>{
        const cursos =await ctx.db.query("cursos").order("desc").collect()
        return cursos
    }
})

export const addcursos =mutation({
    args:{nome: v.string()}
    handler:async (ctx) =>{
        const cursosId = await ctx.db.insert("cursos",{
            nome: AbortSignal.nome,
            cursoscompleto: false,
        });
        return cursosId
    }
})



export const deleteAllCursos =mutation({
     
    handler: async (ctx) => {
        const todoscursos =await ctx.db.query("cursos").collect();

        //deletar todos
        for (const cursos of todoscursos) {
            await ctx.db.delete(cursos._id);
        }

        return {deteledcounts: todoscursos.length};
    }
})