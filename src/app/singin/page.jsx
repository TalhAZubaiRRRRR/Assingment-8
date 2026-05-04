"use client";


import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsGoogle } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";


import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify/unstyled";


export default function SignINPage() {
    const router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault();




        const email = e.target.email.value
        const password = e.target.password.value

        console.log({ email, password })


        const { data, error } = await authClient.signIn.email({
            email, password,
            // callbackURL:"/"


        })
        if (error) {
            toast.error("Invalid email or password")
        }
        if (data) {
            toast.success("Login successfull")
            setTimeout(() => {
                router.push("/");
            }, 500);

        }

    };

    const handleGoogleSingIn = async () =>{
        await authClient.signIn.social({
            provider: 'google'
        })
    }

    return (
        <div className="mb-5 px-4">

    <Card className="border mx-auto w-full max-w-md sm:max-w-lg py-8 sm:py-10 mt-5 bg-linear-to-r from-red-200 to-sky-300">

        <h1 className="text-center text-2xl font-bold">Sign In</h1>

        <div>
            <Image
                src="/loogo.png"
                alt="SkillSphere"
                width={60}
                height={60}
                className="object-contain rounded-full mx-auto"
            />
        </div>

        <Form
            className="w-full px-4 sm:px-6 flex flex-col gap-4"
            onSubmit={onSubmit}
        >

            <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label>Email</Label>
                <Input placeholder="johnkarmahbub@example.com" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                    if (value.length < 8) return "Password must be at least 8 characters";
                    if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
                    if (!/[0-9]/.test(value)) return "Password must contain at least one number";
                    return null;
                }}
            >
                <Label>Password</Label>
                <Input placeholder="Enter your password" />
                <Description>
                    Must be at least 8 characters with 1 uppercase and 1 number
                </Description>
                <FieldError />
            </TextField>

            <div className="flex flex-col sm:flex-row gap-2">
                <Button type="submit" className="w-full sm:w-auto">
                    <Check />
                    Submit
                </Button>

                <Button type="reset" variant="secondary" className="w-full sm:w-auto">
                    Reset
                </Button>
            </div>
        </Form>

        <p className="text-center my-3">or</p>

        <Button
            className="mx-auto w-full max-w-xs mb-4 flex items-center justify-center gap-2"
            onClick={handleGoogleSingIn}
        >
            <FaGoogle />
            Sign In with Google
        </Button>
    </Card>

    <ToastContainer />
</div>

    );
}