import {User} from "@prisma/client";
import {FullConverstionType} from "../types";
import {useSession} from "next-auth/react";
import {useMemo} from "react";

const useOtherUser = (
  conversation:
    | FullConverstionType
    | {
        users: User[];
      }
) => {
  const session = useSession();

  const otherUser = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email;

    const otherUsers = conversation.users.filter(
      (user) => user.email !== currentUserEmail
    );

    return otherUsers[0];
  }, [session?.data?.user?.email, conversation.users]);

  return otherUser;
};

export default useOtherUser;
