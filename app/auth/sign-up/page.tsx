import SignupForm from "@/app/auth/sign-up/components/signup-form";
import RotatingText from "@/app/auth/sign-up/components/RotatingText";

export default function SignIn() {
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col gap-12">
            <div className={'flex justify-center items-center font-bold text-3xl flex-col gap-3'}>
                <h3 className={'text-6xl'}>Hai să </h3>
                <RotatingText
                    texts={['dăm o mână de ajutor', 'facem bine', 'fim parte din schimbare!', 'schimbăm lumea', 'construim împreună',
                    'aducem un zâmbet', 'susținem pe cei care au nevoie', 'creăm impact', 'facem un pas înainte.', 'dăm exemplu']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-white overflow-hidden py-0.5 sm:py-1
                    md:py-2 justify-center rounded-lg bg-green-500"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                />
            </div>
            <SignupForm />
        </div>
    );
}
