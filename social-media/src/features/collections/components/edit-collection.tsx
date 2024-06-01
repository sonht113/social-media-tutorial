import { Box, Divider, Input, Text, Image, Spinner } from '@chakra-ui/react';
import { useUpdateCollection } from '../hooks/use-collections-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CollectionUpdateInputType } from '../service';
import toast from 'react-hot-toast';
import { SetStateAction, useEffect, useState } from 'react';
import { useUploadSingleFileMutation } from '@/hooks';
import { GrCloudUpload } from 'react-icons/gr';
import { IoCloseSharp } from 'react-icons/io5';
import imageCompression from 'browser-image-compression';

export type Props = {
  idCollection: string;
  name: string;
  avatar?: string;
  refetch?: () => void;
  onClose?: () => void;
};

const EditCollection = ({
  idCollection,
  name,
  avatar,
  refetch,
  onClose,
}: Props) => {
  const [updateCollection] = useUpdateCollection();
  const [uploadSingleFile] = useUploadSingleFileMutation();

  const [nameCollection, setNameCollection] = useState(name);
  const [file, setFile] = useState<File | null>();
  const [filePreviews, setFilePreviews] = useState(avatar);

  const [loading, setLoading] = useState(false);

  const handleChangeNameCollection = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNameCollection(e.target.value);
  };

  const handleUploadSingleFile = async () => {
    if (!file) return;
    if (file) {
      setLoading(true);
      const compressedFile = await imageCompression(file, { maxSizeMB: 1 });
      if (!compressedFile) {
        return setLoading(false);
      }
      if (compressedFile) {
        void uploadSingleFile({
          variables: { file: file },
          onCompleted: (data) => {
            const result: SetStateAction<string> = data.uploadSingleFiles.url;
            setFilePreviews(result);
            setLoading(false);
          },
          onError: (errors) => {
            toast.error(errors.message);
          },
        });
      }
    }
  };

  useEffect(() => {
    void handleUploadSingleFile();
  }, [file]);

  const { handleSubmit } = useForm<CollectionUpdateInputType>();

  const onSubmit: SubmitHandler<CollectionUpdateInputType> = (data) => {
    data.avatar = filePreviews;
    data.name = nameCollection;
    if (data.avatar) {
      void updateCollection({
        variables: {
          body: data,
          id: idCollection,
        },
        onCompleted: () => {
          toast.success('Update collection successfully!');
          refetch && void refetch();
          onClose && void onClose();
        },
        onError: (errors) => {
          toast.error(errors.message);
        },
      });
    }
  };

  return (
    <>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <Text className="font-bold">Name Collection</Text>
        <Input value={nameCollection} onChange={handleChangeNameCollection} />
        <Divider className="mb-4" />
        <Text className="font-bold">Change your collection image</Text>
        <Box className="relative group">
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
          <Box className="relative">
            <Image src={filePreviews} className="w-full rounded-md mt-2" />
            <IoCloseSharp
              className="text-3xl cursor-pointer absolute top-2 right-0 -translate-x-1/2 hidden group-hover:block transform hover:rotate-[45deg] hover:scale-105 hover:duration-300 text-red-700"
              onClick={() => setFilePreviews('')}
            />
          </Box>
        </Box>
        {filePreviews ? (
          ''
        ) : (
          <Box className="w-full flex justify-center items-center cursor-pointer">
            <label htmlFor="avatar">
              <GrCloudUpload className="text-6xl" />
            </label>
            <Input
              type="file"
              accept="image/*"
              id="avatar"
              className="hidden"
              onChange={(e) => {
                setFile(e.target.files![0]);
              }}
            />
          </Box>
        )}
        <Divider className="my-4" />
        <Input
          type="submit"
          className="!bg-[#1DA1F2] text-white cursor-pointer"
        />
      </form>
    </>
  );
};

export default EditCollection;
