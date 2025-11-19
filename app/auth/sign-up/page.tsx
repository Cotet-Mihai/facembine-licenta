import SignupForm from "@/app/auth/sign-up/components/signup-form";
import RotatingText from "@/app/auth/sign-up/components/RotatingText";

export default function SignIn() {

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col gap-12 p-15 bg-green-50">
            <div className={'flex justify-center items-center font-bold text-3xl flex-col gap-3 max-w-xl grow-0 shrink-0'}>
                <h3 className={'text-4xl'}>Hai să </h3>
                <RotatingText
                    texts={['dăm o mână de ajutor', 'facem bine', 'fim parte din schimbare!', 'schimbăm lumea', 'construim împreună',
                    'aducem un zâmbet', 'fim alături', 'creăm impact', 'facem un pas înainte.', 'dăm exemplu']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-white overflow-hidden py-0.5 sm:py-1
                    md:py-2 justify-center rounded-lg bg-green-500"
                    staggerFrom={"last"}
                    initial={{ y: "150%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.1}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "tween", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                />
            </div>
            <SignupForm />
        </div>
    );
}
