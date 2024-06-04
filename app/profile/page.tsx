
// import { TodoList } from "@/components/todo-list";
import { Separator } from "@/components/ui/separator";
import Component from "@/components/v0";
import { User } from "@/types/custom";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default async function TodosPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

        const { data, error } = await supabase
          .from('users')
          .select()// Type the select method

        if (error) throw error
        
        return <Component user={data[0]} />
      }


  

  //   const pp={
  //     bio: "hello there",
  //     id: "123",
  //     inserted_at: "22/32/32",
  //     name: "iliya",
  //     role: "manager",
  //     user_id: "ue21",
  //     email: "t@gmail.com"
  // }

