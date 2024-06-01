import { Box, Text, Button, Avatar } from '@chakra-ui/react';
import { AiOutlineMessage } from 'react-icons/ai';
import {
  useAcceptReqFriend,
  useRejectReqFriend,
} from '../hooks/use-friend-query';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { BsPersonAdd } from 'react-icons/bs';
type Props = {
  avatar: string;
  fullname: string;
  id: string;
  isFriend?: boolean;
  isSuggest?: boolean;
  refetch: () => void;
};

export const Friend = ({
  avatar,
  fullname,
  id,
  isFriend = false,
  isSuggest = false,
  refetch,
}: Props) => {
  const [acceptFriend] = useAcceptReqFriend();
  const [rejectFriend] = useRejectReqFriend();

  const handleAcceptFriend = () => {
    void acceptFriend({
      variables: { friendId: id },
      onCompleted: () => {
        refetch && void refetch();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const handleRejectFriend = () => {
    void rejectFriend({
      variables: { friendId: id },
      onCompleted: () => {
        refetch && void refetch();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <Box className="bg-white rounded-lg p-4 flex flex-col justify-center items-center gap-4">
      <Avatar src={avatar} size="2xl" />
      <Text className="text-xl font-bold cursor-pointer">{fullname}</Text>
      {isFriend == true ? (
        <Box className="flex flex-col gap-2 w-full">
          <Link to={`/profile/${id}`}>
            <Button
              leftIcon={<AiOutlineMessage />}
              colorScheme="blue"
              variant="outline"
              className="w-full"
            >
              View Profile
            </Button>
          </Link>
          {isSuggest === true && (
            <Button
              leftIcon={<BsPersonAdd />}
              colorScheme="blue"
              variant="solid"
              className="w-full"
            >
              Add Friend
            </Button>
          )}
        </Box>
      ) : (
        <Box className="flex flex-col gap-2 w-full">
          <Button
            colorScheme="blue"
            variant="solid"
            onClick={handleAcceptFriend}
          >
            Confirm
          </Button>

          <Button
            colorScheme="blue"
            variant="outline"
            onClick={handleRejectFriend}
          >
            Delete
          </Button>
        </Box>
      )}
    </Box>
  );
};
