import {
  ChangeEvent,
  FC,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  Avatar,
  Box,
  Divider,
  Input,
  Text,
  Image,
  Select,
  Spinner,
} from '@chakra-ui/react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoCloseSharp } from 'react-icons/io5';

import { optionInput } from '../constant';
import { PostInput } from '../service/type';
import { useCreatePostMutation } from '@/features';
import { useQueryInfoUser } from '@/features/auth';
import { useGetAllTopic } from '@/features/topic';
import { useUploadMultipleFilesMutation } from '@/hooks';
import { useParams } from 'react-router-dom';

type Props = {
  value?: string[];
  onChange?: (_v: string[]) => void;
  refetch?: () => void;
  isGroup?: boolean;
};

export const CreatePost: FC<Props> = ({
  value,
  onChange,
  refetch,
  isGroup = false,
}) => {
  const param = useParams();
  const idGroup = isGroup === true ? param?.id : undefined;
  const [files, setFiles] = useState<FileList | null>();
  const [filesPreviews, setFilePreviews] = useState(value || []);
  const [openEmoji, setOpenEmoji] = useState(false);
  const [content, setContent] = useState('');

  const { data } = useQueryInfoUser();
  const { data: topicsData } = useGetAllTopic();
  const [uploadMultipleFiles, { loading }] = useUploadMultipleFilesMutation();
  const [createPost] = useCreatePostMutation();
  const [topic, setTopic] = useState('');
  const inputPost = optionInput.slice(0, 3);

  const authPost = useMemo(() => {
    if (data) {
      const result = {
        avatar: data.getInfoUser.avatar,
        id: data.getInfoUser.id,
      };
      return result;
    }
  }, [data]);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setContent((prevContent) => prevContent + emojiData.emoji);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
    setOpenEmoji(false);
  };

  const topicOptions = useMemo(() => {
    if (topicsData) {
      const result: { label: string; value: string }[] = [];
      for (const topic of topicsData.topics) {
        result.push({ label: topic.name || 'N/A', value: topic.id });
      }
      return result;
    }
    return [];
  }, [topicsData]);

  const handleChooseTopic = (e: ChangeEvent<HTMLSelectElement>) => {
    setTopic(e.target.value);
  };

  const imageFiles: string[] | undefined = useMemo(() => {
    if (filesPreviews) {
      return filesPreviews.filter((file: string) => !file.endsWith('.mp4'));
    }
  }, [filesPreviews]);

  const videoFiles: string[] | undefined = useMemo(() => {
    if (filesPreviews) {
      return filesPreviews.filter((file: string) => file.endsWith('.mp4'));
    }
  }, [filesPreviews]);

  const handleUploadFile = () => {
    if (files) {
      void uploadMultipleFiles({
        variables: { files: files },
        onCompleted: (data) => {
          const result: SetStateAction<string[]> = [];
          data.uploadMultipleFiles.map((item) => result.push(item.url));
          onChange && onChange([...filesPreviews, ...result]);
          setFilePreviews([...filesPreviews, ...result]);
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

  const { handleSubmit, reset } = useForm<PostInput>();
  const onSubmit: SubmitHandler<PostInput> = (data) => {
    data.video = videoFiles;
    data.images = imageFiles;
    data.content = content;
    data.topic = topic;
    data.createdAt = new Date();
    data.idGroup = idGroup;
    void createPost({
      variables: { body: data },
      onCompleted: () => {
        toast.success('Create post successfully!');
        setFiles(null);
        setFilePreviews([]);
        setContent('');
        setTopic('');
        setFiles(null);
        setOpenEmoji(false);
        refetch && void refetch();
        reset();
      },
      onError: (errors) => {
        toast.error(errors.message);
      },
    });
  };

  return (
    <Box className="bg-white mt-4 p-4 rounded-lg border-2">
      <Box className="flex items-center gap-4">
        <Avatar src={authPost?.avatar} />
        <Text className="text-gray-500">Share something...</Text>
      </Box>
      {loading && (
        <Box className="w-full flex justify-center items-center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      )}
      <Box className="mt-4 columns-4 space-y-4">
        {imageFiles &&
          imageFiles.map((item) => (
            <Box key={item} className="relative group ">
              <Image src={item} className="rounded-md w-full" />
              <IoCloseSharp
                className="text-3xl cursor-pointer absolute top-2 right-0 -translate-x-1/2 hidden group-hover:block transform hover:rotate-[45deg] hover:scale-105 hover:duration-300 text-red-700"
                onClick={() => {
                  const result = filesPreviews;
                  result.splice(result.indexOf(item), 1);
                  setFilePreviews([...result]);
                  onChange && onChange([...result]);
                }}
              />
            </Box>
          ))}
        {videoFiles &&
          videoFiles.map((item) => (
            <Box key={item} className="relative group">
              <Image src={item} className="w-full h-[150px] rounded-md" />
              <IoCloseSharp
                className="text-3xl cursor-pointer absolute top-2 right-0 -translate-x-1/2 hidden group-hover:block transform hover:rotate-[45deg] hover:scale-105 hover:duration-300 text-red-700"
                onClick={() => {
                  const result = filesPreviews;
                  result.splice(result.indexOf(item), 1);
                  setFilePreviews([...result]);
                  onChange && onChange([...result]);
                }}
              />
            </Box>
          ))}
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Insert your content"
          className="!border-0 !outline-none w-full mt-4"
          value={content}
          onChange={handleChangeInput}
        />
        <Divider className="mb-4" />
        <Select
          placeholder="Select topic"
          className="mb-4"
          value={topic}
          onChange={(e) => handleChooseTopic(e)}
          id="topic"
          name="topic"
        >
          {topicOptions.map((item) =>
            item.value ? (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ) : null,
          )}
        </Select>
        <Box className="flex justify-between items-center">
          <Box className="flex gap-4 text-2xl text-gray-500">
            {inputPost.map((item) => (
              <Box key={item.id}>
                <label htmlFor={item.value}>
                  {item.open ? (
                    <Box
                      className="cursor-pointer"
                      onClick={() => setOpenEmoji(!openEmoji)}
                    >
                      {item.icon}
                    </Box>
                  ) : (
                    <Box className="cursor-pointer">{item.icon}</Box>
                  )}
                </label>
                <Input
                  multiple
                  type="file"
                  name={item.value}
                  id={item.value}
                  accept={item.value}
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files) {
                      setFiles(e.target.files);
                    }
                  }}
                />
              </Box>
            ))}
          </Box>
          <Input
            type="submit"
            colorScheme="whatsapp"
            className="my-4 cursor-pointer !bg-[#3182CE] !w-40 text-white font-bold"
          />
        </Box>
        {openEmoji && <EmojiPicker onEmojiClick={handleEmojiClick} />}
      </form>
    </Box>
  );
};
