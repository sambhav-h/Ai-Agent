import { AgentsView, AgentsViewErrror, AgentsViewLoading } from "@/modules/agents/ui/views/agents-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import {ErrorBoundary} from "react-error-boundary"
const Page = () => { 
    const queryClient = getQueryClient()
    void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions())

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<AgentsViewLoading/>}>
            <ErrorBoundary fallback={<AgentsViewErrror/>}>
                <AgentsView/>
            </ErrorBoundary>
            </Suspense>
        </HydrationBoundary>
    )
    
}
 
export default Page;