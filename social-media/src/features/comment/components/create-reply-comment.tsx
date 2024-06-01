import { useUploadMultipleFilesMutation } from '@/hooks';
import { Box, Input, Spinner, Image } from '@chakra-ui/react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { FC, SetStateAction, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiImage, BiSend, BiSmile, BiVideo } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';
import { RepCommentInputType } from '../service';
import { useCreateReplyComment } from '../hooks/use-comment-query';
import { useQueryInfoUser } from '@/features/auth';

type Props = {
  postId?: string;
  idCmtParent?: string;
  value?: string[];
  onChange?: (_v: string[]) => void;
  refetch?: () => void;
};

export const CreateReplyCmt: FC<Props> = ({ postId, idCmtParent, refetch }) => {
  const [content, setContent] = useState('');
  const [openEmoij, setOpenEmoij] = useState(false);
  const [files, setFiles] = useState<FileList | null>();
  const [filesPreview, setFilesPreview] = useState<string[]>([]);

  const [uploadMultipleFiles, { loading }] = useUploadMultipleFilesMutation();
  const [createReplyComment] = useCreateReplyComment();
  const { data: userData } = useQueryInfoUser();

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

  const { handleSubmit, reset } = useForm<RepCommentInputType>();

  const onSubmit = (data: RepCommentInputType) => {
    if (userData?.getInfoUser) {
      void createReplyComment({
        variables: {
          body: {
            ...data,
            content,
            images: imageFiles,
            videos: videoFiles,
            postId: postId as string,
          },
          idCmtParent: idCmtParent as string,
        },
        onCompleted: () => {
          setContent('');
          setFilesPreview([]);
          setOpenEmoij(false);
          reset();
          refetch && void refetch();
        },
        onError: (errors) => {
          toast.error(errors.message);
        },
      });
    }
    console.log('🚀 ~ onSubmit ~ data:', data);
  };

  return (
    <Box>
      <form
        className="flex gap-2 justify-center items-center text-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input value={content} onChange={handleChangeContent} />
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
          onClick={() => setOpenEmoij(!openEmoij)}
          className="cursor-pointer"
        />
        <button type="submit">
          <BiSend className="cursor-pointer" />
        </button>
      </form>
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
    </Box>
  );
};
