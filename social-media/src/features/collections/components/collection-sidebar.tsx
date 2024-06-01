import {
  Box,
  Text,
  Divider,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import { SideBarButton } from '@/components';
import { CreateCollection } from './create-collection';
import { useGetCollections, useGetSaved } from '../hooks/use-collections-query';
import { useMemo, useState } from 'react';
import { LIMIT, PAGE } from '@/data';
import { CiEdit, CiTrash, CiMenuBurger } from 'react-icons/ci';
import DeleteCollection from './delete-collection';
import EditCollection from './edit-collection';
import { eventSideBar } from '../service/constant';

export const CollectionSideBar = () => {
  const [page] = useState(PAGE);
  const [actionsCollection, setActionsCollection] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data: getSaved } = useGetSaved();
  const idSaved = useMemo(() => {
    return getSaved?.getSaved?.id;
  }, [getSaved]);

  const { data: getCollections, refetch } = useGetCollections(
    idSaved as string,
    LIMIT,
    page,
  );

  return (
    <>
      <Text className="font-bold" fontSize="2xl">
        Collections
      </Text>
      <Divider className="my-4" />
      <Box className="flex flex-col">
        {eventSideBar.map((item) => (
          <SideBarButton
            key={item.name}
            buttonIcon={item.icon}
            buttonName={item.name}
          />
        ))}
      </Box>
      <Divider className="my-4" />
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        All your collection
      </Text>
      {getCollections?.getCollections.data.map((item) => (
        <Box
          key={item.id}
          className="flex justify-between items-center my-2 cursor-pointer hover:bg-slate-200 p-2 rounded-xl"
        >
          <Box className="flex items-center gap-2">
            <Avatar src={item.avatar} />
            <Text className="font-bold">{item.name}</Text>
          </Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<CiMenuBurger className="text-xl" />}
              variant="outline"
            />
            <MenuList>
              <MenuItem
                icon={<CiEdit className="text-xl" />}
                command="⌘E"
                onClick={() => {
                  onOpen();
                  setActionsCollection('edit');
                }}
              >
                Edit Collection
              </MenuItem>
              <MenuItem
                icon={<CiTrash className="text-xl" />}
                command="⌘D"
                onClick={() => {
                  onOpen();
                  setActionsCollection('del');
                }}
              >
                Delete Collection
              </MenuItem>
            </MenuList>
          </Menu>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                {actionsCollection === 'del'
                  ? 'Delete Collection'
                  : 'Edit Collection'}
              </ModalHeader>
              <Divider />
              <ModalCloseButton />
              <ModalBody>
                {actionsCollection === 'del' ? (
                  <DeleteCollection
                    idCollection={item.id}
                    name={item.name}
                    avatar={item.avatar}
                    refetch={() => refetch()}
                    onClose={onClose}
                  />
                ) : (
                  <EditCollection
                    idCollection={item.id}
                    name={item.name}
                    avatar={item.avatar}
                    refetch={() => refetch()}
                    onClose={onClose}
                  />
                )}
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      ))}
      <CreateCollection refetch={refetch} />
      <Divider className="my-4" />
    </>
  );
};
