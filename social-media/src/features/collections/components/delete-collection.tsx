import { Avatar, Box, Button, Text } from '@chakra-ui/react';
import Lottie from 'lottie-react';
import warning from '../../../lottie/warningwarning.json';
import { useDeleteCollection } from '../hooks/use-collections-query';
import toast from 'react-hot-toast';

type Props = {
  idCollection: string;
  name: string;
  avatar?: string;
  refetch?: () => void;
  onClose?: () => void;
};

const DeleteCollection = ({
  idCollection,
  avatar,
  name,
  refetch,
  onClose,
}: Props) => {
  const [deleteCollection] = useDeleteCollection();
  // const [onCloseModal, setOnCloseModal] = useState(false);

  const handleDeleteCollection = () => {
    void deleteCollection({
      variables: { id: idCollection },
      onCompleted: () => {
        toast.success('Delete collection successfully!');
        refetch && void refetch();
        onClose && void onClose();
      },
      onError: () => {
        toast.error('Delete collection failed!');
      },
    });
  };

  return (
    <Box className="flex flex-col justify-center items-center">
      <Box className="w-20 h-20 ">
        <Lottie animationData={warning} />
      </Box>
      <Text className="font-bold">Do you want delete collection?</Text>
      <Box className="flex justify-center items-center gap-2 mt-4 bg-slate-500 font-bold text-white p-2 rounded-2xl">
        <Avatar src={avatar} />
        <Text>{name}</Text>
      </Box>
      <Button
        onClick={handleDeleteCollection}
        className="mt-4 !bg-[#0B5FAE] !text-white w-full"
      >
        Confirm
      </Button>
    </Box>
  );
};

export default DeleteCollection;
