"use client"
import { addUser } from "@/app/profile/action";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "@/types/custom";
import { useOptimistic, useRef } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { useFormStatus } from "react-dom";
function FormContent() {
  const { pending } = useFormStatus();
  return (
    <>
      <Textarea
        disabled={pending}
        minLength={4}
        name="bio"
        required
        placeholder="Add bio"
      />
      <Button type="submit" size="icon" className="min-w-10" disabled={pending}>
        <Send className="h-5 w-5" />
        <span className="sr-only">Submit Bio</span>
      </Button>
    </>
  );
}
export default function Userform(){
    const formRef = useRef<HTMLFormElement>(null);
    return (
      <Card>
      <CardContent className="p-3">
        <form
          ref={formRef}
          className="flex gap-4"
          action={async (data) => {
            await addUser(data);
            formRef.current?.reset();
          }}
        >
          <FormContent />
        </form>
      </CardContent>
    </Card>
    )
}