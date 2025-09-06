import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";


export default async function Home() {
  const { userId } = await auth();

  
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <div className="flex-1 flex flex-col items-center justify-center">

        {/*Welcome Screen Div*/}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Welcome to <br/>
          <span className="text-blue-700 text-5xl md:text-6xl">
            SchedulCare
            </span>
          </h1>
        </div> {/*Welcome Screen Div*/}

        {/*Description div*/}
        <div className="text-center max-w-xl flex flex-col items-center justify-center">
          <p className="mb-8"> 
            A healthcare management system where
            you can book appointments with doctors.
          </p>

          <div className="flex gap-4">
            {
              userId ? (<></>) : (
              <>
              {/*New Patient*/}
              <Link href="/sign-up">
              <Button className="md:text-base font-light">New Patient</Button>
              </Link>


              {/*Login Link*/}
              <Link href="/sign-in">
              <Button variant="outline" 
                className="md:text-base underline hover text-blue-600">
                Login to Account
              </Button>
              </Link>
              </>
              )
            }

          </div>
        </div> {/*Description div*/}

      </div>
      <footer className="mt-8">
        <p className="text-center text-sm">
            &copy; 2025 SchedulCare H Management System. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
