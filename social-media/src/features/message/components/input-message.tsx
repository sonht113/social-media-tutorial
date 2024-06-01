/* eslint-disable */
import { SetStateAction, useEffect, useMemo, useState } from 'react';

import { Box, Input, Spinner, Image } from '@chakra-ui/react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import toast from 'react-hot-toast';
import { BiImage, BiSmile, BiVideo, BiSend } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';
import { Socket } from 'socket.io-client';

import { useCreateMessage } from '@/features';
import { useUploadMultipleFilesMutation } from '@/hooks';

type Props = {
  refetch?: () => void;
  className?: string;
  idRoom: string;
  socket: Socket<any, any>;
  userInfo: any;
};

export const InputMessage = ({ className, idRoom, socket, userInfo }: Props) => {
  const [openEmoij, setOpenEmoij] = useState(false);
  const [content, setContent] = useState('');
  const [files, setFiles] = useState<FileList | null>();
  const [filesPreview, setFilesPreview] = useState<string[]>([]);

  const [uploadMultipleFiles, { loading }] = useUploadMultipleFilesMutation();
  const [createMessage] = useCreateMessage();

  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
    setOpenEmoij(false);
  };

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setContent((prevContent) => prevContent + emojiData.emoji);
  };

  const handleUploadFile = () => {
    if (files) {
      void uploadMultipleFiles({
        variables: {
          files: files,
        },
        onCompleted: (data) => {
          const result: SetStateAction<string[]> = [];
          data.uploadMultipleFiles.map((item) => result.push(item.url));
          setFilesPreview([...filesPreview, ...result]);
        },
        onError: (errors) => {
          toast.error(errors.message);
        },
      });
    }
  };

  useEffect(() => {
    void handleUploadFile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  const imageFiles: string[] | undefined = useMemo(() => {
    if (filesPreview) {
      return filesPreview.filter((file: string) => !file.endsWith('.mp4'));
    }
  }, [filesPreview]);

  const videoFiles: string[] | undefined = useMemo(() => {
    if (filesPreview) {
      return filesPreview.filter((file: string) => file.endsWith('.mp4'));
    }
  }, [filesPreview]);

  const handleCreateMessage = () => {
    socket.emit("sendMessage", {
      content,
      type: "text",
    });
    void createMessage({
      variables: {
        body: {
          author: userInfo.id,
          content: content,
          room: idRoom,
          typeMessage: 'text',
        },
      },
      onCompleted: () => {
        setContent('');
        setFilesPreview([]);
        setFiles(null);
        setOpenEmoij(false);
      },
      onError: (errors) => {
        toast.error(errors.message);
      },
    });
  };

  return (
    <Box className={` ${className}`}>
      {openEmoij && (
        <EmojiPicker onEmojiClick={handleEmojiClick} className="mt-4" />
      )}
      {loading && (
        <Box className="w-full flex justify-center items-center mt-4">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      )}
      <Box className="columns-3 mt-4">
        {imageFiles &&
          imageFiles.map((item) => (
            <Box key={item} className="relative group">
              <Image src={item} />
              <IoCloseSharp
                className="text-3xl cursor-pointer absolute top-2 right-0 -translate-x-1/2 hidden group-hover:block transform hover:rotate-[45deg] hover:scale-105 hover:duration-300 text-red-700"
                onClick={() => {
                  const result = imageFiles;
                  result.splice(result.indexOf(item), 1);
                  setFilesPreview([...result]);
                }}
              />
            </Box>
          ))}
      </Box>
      <Box className="columns-3">
        {videoFiles &&
          videoFiles.map((item) => (
            <Box key={item} className="relative group">
              <video src={item} />
              <IoCloseSharp
                className="text-3xl cursor-pointer absolute top-2 right-0 -translate-x-1/2 hidden group-hover:block transform hover:rotate-[45deg] hover:scale-105 hover:duration-300 text-red-700"
                onClick={() => {
                  const result = videoFiles;
                  result.splice(result.indexOf(item), 1);
                  setFilesPreview([...result]);
                }}
              />
            </Box>
          ))}
      </Box>
      <Box className="flex justify-center items-center gap-2 text-2xl mt-2">
        <label className="" htmlFor="images">
          <BiImage className="cursor-pointer" />
        </label>
        <Input
          id="images"
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            if (e.target.files) setFiles(e.target.files);
          }}
        />
        <label className="" htmlFor="video">
          <BiVideo className="cursor-pointer" />
        </label>
        <Input
          id="video"
          type="file"
          accept="video/*"
          multiple
          className="hidden"
          onChange={(e) => {
            if (e.target.files) setFiles(e.target.files);
          }}
        />
        <BiSmile
          className="cursor-pointer"
          onClick={() => setOpenEmoij(!openEmoij)}
        />
        <Input value={content} onChange={handleChangeContent} />
        <button disabled={!content} type="submit" onClick={handleCreateMessage}>
          <BiSend className="cursor-pointer" />
        </button>
      </Box>
    </Box>
  );
};
