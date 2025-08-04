"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";



export default function Home() {

    const {data: session} = authClient.useSession() 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email({
      email,
      name,
      password,
    },{
      onError: () => {
        window.alert("something went wrong");
      },
      onSuccess: () => {
        window.alert("success");
      }
    });
  }


  const onLogin = () => {
    authClient.signUp.email({
      email,
      name,
      password,
    },{
      onError: () => {
        window.alert("something went wrong");
      },
      onSuccess: () => {
        window.alert("success");
      }
    });
  }

  if(session){
    return(
      <div className="flex flex-col p-4 gap-y-4">
        <p>Logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>
          Sign Out
        </Button>
      </div>
    )
  }


  return (
    <div className="p=4 flex flex-col gap-y-4">
      <Input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={onSubmit}>
        create user
      </Button>

      <Button onClick={onLogin}>
        Log In
      </Button>

    </div>
  );
}
