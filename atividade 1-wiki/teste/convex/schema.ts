import { defineSchama, defineTable } from "convex/server"

import {V } from "convex/values"

export default defineSchama({
    curso:defineTable({
        nome:V.string(),
        cursoCompleto: V.boolean(),
     }),
})

// npx convex dev 
