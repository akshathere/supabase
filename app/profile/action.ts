'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { Provider } from '@supabase/supabase-js'
import { getURL } from '@/utils/helpers'

export async function addUser(formData : FormData){
    const supabase=createClient();
    const text=formData.get('user') as string | null
    if(!text){
        throw new Error("text is required")
    }
    const {data:{
        user
    }}=await (await supabase).auth.getUser()
    if(!user){
        throw new Error("user not logged in")
    }
    const { data, error } = await (await supabase).from('users')
        .insert({
            bio: text,
        user_id: user.id,
        name:"a"
        });
    if (error) {
        throw new Error("Error adding task")
    }

    revalidatePath("/profile")
}