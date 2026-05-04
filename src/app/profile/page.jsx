"use client"
import { UpdateProfileModal } from "@/components/updateProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const profilePage = () => {
    const userInfo = authClient.useSession();
    const user = userInfo.data?.user;

    return (
        <div className="px-4 sm:px-6">
            <div className="max-w-sm sm:max-w-md mx-auto mt-10 mb-10">

                <Card className="flex flex-col items-center border py-8 px-6 gap-4 bg-linear-to-r from-red-200 to-sky-300">

                    <Avatar className="h-20 w-20 sm:h-24 sm:w-24">
                        <Avatar.Image
                            alt="User"
                            src={user?.image}
                            referrerPolicy="no-referrer"
                        />
                        <Avatar.Fallback>
                            {user?.name?.[0]}
                        </Avatar.Fallback>
                    </Avatar>

                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
                        {user?.name}
                    </h2>

                    <p className="text-sm sm:text-base text-gray-700 text-center break-all">
                        {user?.email}
                    </p>

                    <div className="w-full flex justify-center">
                        <UpdateProfileModal />
                    </div>

                </Card>

            </div>
        </div>
    );
};

export default profilePage;