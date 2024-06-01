import { FC, SetStateAction, useEffect, useState } from 'react';

import { Box, Input, Spinner, Text } from '@chakra-ui/react';
import imageCompression from 'browser-image-compression';
import { IoClose } from 'react-icons/io5';
import { LuUploadCloud } from 'react-icons/lu';

import {
  useToast,
  useUploadMultipleFilesMutation,
  useUploadSingleFileMutation,
} from '@/hooks';

type Props = {
  value?: string[];
  onChange?: (_: unknown) => void;
  disable?: boolean;
  typeUpload?: 'avatar' | 'coverImage' | 'normal';
  isMultiple?: boolean;
};

export const Upload: FC<Props> = ({
  value,
  onChange,
  disable = false,
  typeUpload = 'normal',
  isMultiple,
}) => {
  const { toast } = useToast();
  const [filesUpload, setFilesUpload] = useState<FileList | null>();
  const [imagePreviews, setImagePreviews] = useState(value || []);
  const [loading, setLoading] = useState(false);

  const [uploadSingleFiles, { loading: loadingSingleUpload }] =
    useUploadSingleFileMutation();
  const [uploadMultipleFiles, { loading: loadingMultipleUpload }] =
    useUploadMultipleFilesMutation();

  const uploadHandler = async () => {
    if (!filesUpload) return;
    if (filesUpload.length === 1) {
      setLoading(true);
      const compressedFile = await imageCompression(filesUpload[0], {
        maxSizeMB: 1,
      });
      if (!compressedFile) {
        return setLoading(false);
      }
      if (compressedFile) {
        void uploadSingleFiles({
          variables: { file: compressedFile },
          onCompleted: (data) => {
            onChange &&
              onChange([...imagePreviews, data.uploadSingleFiles.url]);
            setImagePreviews([...imagePreviews, data.uploadSingleFiles.url]);
            setLoading(false);
          },
          onError: (error) => {
            setLoading(false);
            toast.error(error.message);
          },
        });
      }
    } else {
      void uploadMultipleFiles({
        variables: {
          files: filesUpload,
        },
        onCompleted: (data) => {
          const result: SetStateAction<string[] | undefined> = [];
          data.uploadMultipleFiles.map((res) => {
            result.push(res.url);
          });
          onChange && onChange([...imagePreviews, ...result]);
          setImagePreviews([...imagePreviews, ...result]);
          setLoading(false);
        },
        onError: (error) => {
          toast.error(error.message);
          setLoading(false);
        },
      });
    }
  };

  useEffect(() => {
    void uploadHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filesUpload]);

  useEffect(() => {
    value && setImagePreviews(value);
  }, [value]);

  return (
    <>
      {imagePreviews && imagePreviews.length > 0 && (
        <Box className="flex flex-wrap justify-start items-center gap-2">
          {imagePreviews.map((url, index) => (
            <Box key={url} className="relative">
              <img src={url} alt="pic" />
              <IoClose
                onClick={() => {
                  const result = imagePreviews;
                  result.splice(index, 1);
                  setImagePreviews([...result]);
                  onChange && onChange([...result]);
                }}
                className="text-2xl absolute top-0 right-0 text-red-800 hover:rotate-[45deg] hover:scale-105 hover:duration-300 cursor-pointer "
              />
            </Box>
          ))}
        </Box>
      )}
      {(loading || loadingSingleUpload || loadingMultipleUpload) && (
        <Box className="w-full flex justify-center items-center mb-5">
          <Spinner />
        </Box>
      )}
      {typeUpload === 'normal' && (
        <>
          <Box className="border-dotted border-4 border-sky-500 flex justify-center items-center py-10 rounded-lg ">
            <label
              htmlFor="upload"
              className="w-full h-full flex flex-col justify-center items-center cursor-pointer"
            >
              <LuUploadCloud className="text-6xl" />
              <Text className="font-bold">Choose your image</Text>
            </label>
          </Box>
          <Input
            className="hidden"
            id="upload"
            type="file"
            multiple={true}
            disabled={disable}
            onChange={(e) => {
              if (e.target.files) {
                setFilesUpload(e.target.files);
              }
            }}
          />
        </>
      )}
      {(typeUpload === 'avatar' || typeUpload === 'coverImage') &&
        imagePreviews.length === 0 && (
          <>
            <Box className="border-dotted border-4 border-sky-500 flex justify-center items-center py-10 rounded-lg ">
              <label
                htmlFor="upload"
                className="w-full h-full flex flex-col justify-center items-center cursor-pointer"
              >
                <LuUploadCloud className="text-6xl" />
                <Text className="font-bold">Choose your image</Text>
              </label>
            </Box>
            <Input
              className="hidden"
              id="upload"
              type="file"
              multiple={isMultiple}
              disabled={disable}
              onChange={(e) => {
                if (e.target.files) {
                  setFilesUpload(e.target.files);
                }
              }}
            />
          </>
        )}
    </>
  );
};
