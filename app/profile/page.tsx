"use client"
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

  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
        const { data, error } = await supabase
          .from('users')
          .select()// Type the select method

        if (error) throw error
        setUsers(data || []) // Default to an empty array if data is null
      }

    fetchUsers()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return <Component user={users[0]} />
  //   const pp={
  //     bio: "hello there",
  //     id: "123",
  //     inserted_at: "22/32/32",
  //     name: "iliya",
  //     role: "manager",
  //     user_id: "ue21",
  //     email: "t@gmail.com"
  // }
}
