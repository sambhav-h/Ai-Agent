import { db } from "@/db";
import { agents } from "@/db/schema";
import { agentsInsertSchema } from "@/modules/schemas";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { eq, getTableColumns, sql } from "drizzle-orm";
import {z} from "zod"


export const agentsRouter = createTRPCRouter({
      getOne: protectedProcedure.input(z.object({id: z.string()})).query(async({input}) => {
        const [existingAgent] = await db
        .select({
          meetingCount: sql<number> `5`,
          ...getTableColumns(agents),

        })
        .from(agents)
        .where(eq(agents.id, input.id))
        return existingAgent
    }),
    getMany: protectedProcedure.query(async() => {
        const data = await db
        .select()
        .from(agents);
        return data
    }),

create: protectedProcedure
  .input(agentsInsertSchema)
  .mutation(async ({ input, ctx }) => {
    if (!ctx.auth?.user.id) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    const [createdAgent] = await db
      .insert(agents)
      .values({
        ...input,
        userId: ctx.auth.user.id, // ✅ fixed path
      })
      .returning();

    return createdAgent;
  })

})