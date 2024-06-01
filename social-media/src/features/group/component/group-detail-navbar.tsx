import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import GroupDetailMemberReq from './group-detail-memberReq';
import { GroupType } from '../service/type';
import GroupDetailContent from './group-detail-content';
import GroupDetailMembers from './group-detail-members';
import { useDeleteGroup, useLeaveGroup } from '../hooks/use-group-query';
import toast from 'react-hot-toast';
import Lottie from 'lottie-react';
import warning from '../../../lottie/warningwarning.json';
import { useQueryInfoUser } from '@/features/auth';
import { useNavigate } from 'react-router-dom';

const groupNav = [
  {
    name: 'All',
    element: 'all',
  },

  {
    name: 'Members',
    element: 'members',
  },
  {
    name: 'Members request',
    element: 'members-request',
  },
];

type Props = {
  data: GroupType | undefined;
  refetch: () => void;
};

export const GroupNavbar = ({ data, refetch }: Props) => {
  const [element, setElement] = useState(groupNav[0].element);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = useState('');
  const navigate = useNavigate();

  const { data: userData } = useQueryInfoUser();

  const handleButtonClick = (selectedElement: string) => {
    setElement(selectedElement);
  };

  const [leaveGroup] = useLeaveGroup();
  const [deleteGroup] = useDeleteGroup();

  const handleLeaveGroup = () => {
    void leaveGroup({
      variables: { id: data?.id },
      onCompleted: () => {
        onClose();
        navigate('/group', { replace: true });
        toast.success('Leave group successfully!');
      },
      onError: (errors) => {
        toast.error(errors.message);
      },
    });
  };

  const handleDeleteGroup = () => {
    void deleteGroup({
      variables: { id: data?.id },
      onCompleted: () => {
        onClose();
        navigate('/group', { replace: true });
        toast.success('Delete group successfully!');
      },
      onError: (errors) => {
        toast.error(errors.message);
      },
    });
  };

  return (
    <Box>
      <Box className="mb-8 flex flex-wrap justify-normal gap-4">
        {groupNav.map((item) => (
          <Button
            key={item.name}
            onClick={() => handleButtonClick(item.element)}
            colorScheme={element === item.element ? 'blue' : 'gray'}
          >
            {item.name}
          </Button>
        ))}
        {data?.members?.find(
          (member) => member.id === userData?.getInfoUser.id,
        ) && (
          <Button
            onClick={() => {
              onOpen();
              setModalContent('Leave');
            }}
          >
            Leave Group
          </Button>
        )}
        {data?.author?.id === userData?.getInfoUser.id && (
          <Button
            onClick={() => {
              onOpen();
              setModalContent('Delete');
            }}
          >
            Delete Group
          </Button>
        )}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box className="flex flex-col justify-center items-center">
                <Box className="w-20 h-20">
                  <Lottie animationData={warning} />
                </Box>
                <Text className="font-bold">
                  Do you want {modalContent} group?
                </Text>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                {...{
                  onClick:
                    modalContent === 'Delete'
                      ? handleDeleteGroup
                      : handleLeaveGroup,
                }}
              >
                {modalContent}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <Box>
        {element === 'all' && <GroupDetailContent />}
        {element === 'topic' && <div>Nội dung Topic</div>}
        {element === 'members' && <GroupDetailMembers data={data} />}
        {element === 'members-request' && (
          <GroupDetailMemberReq data={data} refetch={refetch} />
        )}
        {element === 'files' && <div>Nội dung Files</div>}
      </Box>
    </Box>
  );
};
