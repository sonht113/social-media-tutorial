import { gql } from '@apollo/client';

export const UPLOAD_SINGLE_FILE = gql`
  mutation UploadSingleFiles($file: Upload!) {
    uploadSingleFiles(file: $file) {
      url
    }
  }
`;

export const UPLOAD_MULTIPLE_FILE = gql`
  mutation UploadMultipleFiles($files: [Upload!]!) {
    uploadMultipleFiles(files: $files) {
      url
    }
  }
`;
