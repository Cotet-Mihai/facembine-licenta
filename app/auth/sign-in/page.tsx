import { SigninForm } from "@/app/auth/sign-in/components/signin-form"
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <h4 className={`text-xl font-extrabold text-green-800`}>CIVICOM</h4>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SigninForm />
          </div>
        </div>
      </div>
        <div className="bg-muted relative hidden lg:block">
            <Image
                src="/sign-in-page.png"
                alt="Image"
                fill
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
                sizes="100vw"
            />
        </div>

    </div>
  )
}
