"use client"
import { UpdateProfileModal } from "@/components/updateProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { email } from "better-auth";


const profilePage = () => {
    const userInfo = authClient.useSession()
    const user = userInfo.data?.user
    console.log(user)
    console.log(userInfo)
    return (
        <div className="max-w-96 mx-auto ">
            
            <Card className=" flex flex-col items-center border bg-linear-to-r from-red-200 to-sky-300">
                <Avatar >
                    <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer"  className="h-20 w-20"/>

                    {/* <Avatar.Fallback>{user.name[0]}</Avatar.Fallback> */}
                </Avatar>

                <h2 className="text-xl ">{user?.name}</h2>
                <p>{user?.email}</p>


            <UpdateProfileModal/>
            </Card>
        </div>
    );
};

export default profilePage;