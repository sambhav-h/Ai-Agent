"use client"

import { useTRPC } from "@/trpc/client"
import { useQuery } from "@tanstack/react-query"

export const HomeView = () => {
  const trpc = useTRPC()
  const {data} = useQuery(trpc.hello.queryOptions({text: "Sambhav"}))

  
  return (
    <div className="flex flex-col p-4 gap-y-4">
      {data?.greeting}
    </div>
  )
}




































































































// import { Button } from "@/components/ui/button"
// import { authClient } from "@/lib/auth-client"
// import router from "next/router"

// export const HomeView = () => {
//   const {data : session} = authClient.useSession()

//   if(!session){
//     return(
//       <p>Loading...</p>
//     )
//   }
//   return (
//     <div className="flex flex-col p-4 gap-y-4">
//       <p>Logged  in as {session.user.name}</p>
//       <Button onClick={() => authClient.signOut(
//         {
//             fetchOptions: {
//                 onSuccess: async () => { 
//                     await router.push("/sign-in");
//                 }
//             }
//         }) 
//     }>Sign Out</Button>
//     </div>
//   )
// }

