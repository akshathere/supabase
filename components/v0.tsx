/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SAYEUrtpXkc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Database } from "@/types/supabase"
import { User } from "@/types/custom"

export default function Component( {user}:{user:User} ) {

  return (
    <div className="mt-16 flex flex-col items-center justify-center h-full w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-900">
      <div className="flex flex-col items-center mb-6">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
          <div className="flex items-center justify-center mb-2">
            <InboxIcon className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-500 dark:text-gray-400">{user.email}</span>
          </div>
          <div className="flex items-center justify-center">
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-2 py-1 rounded-full">
              <UserIcon className="h-4 w-4 mr-1" />
              {user.role}
            </Badge>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Separator className="mb-4" />
        <div className="text-gray-500 dark:text-gray-400 mb-6">
          <p>
            {user.bio}
          </p>
        </div>
        <Separator className="mb-4" />
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            className="mr-2 bg-gray-900 text-gray-50 hover:bg-gray-700 hover:text-gray-200 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-300 dark:hover:text-gray-900 dark:focus-visible:ring-gray-300"
          >
            Edit Profile
          </Button>
          <Button  size="sm">
            Settings
          </Button>
        </div>
      </div>
    </div>
  )
}

function InboxIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  )
}


function UserIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}