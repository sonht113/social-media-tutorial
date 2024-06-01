/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation Login($body: LoginUserDto!) {\n    login(body: $body) {\n      user {\n        fullname\n        avatar\n        dayOfBirth\n        description\n        gender\n        id\n        phone\n        email\n        role\n        createdAt\n      }\n      access_token\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Signup($body: SignUpUserDto!) {\n    signup(body: $body) {\n      username\n    }\n  }\n": types.SignupDocument,
    "\n  query GetInfoUser {\n    getInfoUser {\n      avatar\n      createdAt\n      coverImage\n      dayOfBirth\n      description\n      email\n      address\n      description\n      company\n      university\n      relationship\n      fullname\n      gender\n      id\n      phone\n    }\n  }\n": types.GetInfoUserDocument,
    "\n  mutation CreateCollection($body: CreateCollectionDto!) {\n    createCollection(body: $body) {\n      id\n      name\n    }\n  }\n": types.CreateCollectionDocument,
    "\n  query GetSaved {\n    getSaved {\n      id\n      markets\n      posts {\n        author {\n          id\n          fullname\n          avatar\n        }\n        authorsPostShared {\n          id\n          fullname\n          avatar\n        }\n        content\n        createdAt\n        id\n        images\n        topic {\n          name\n        }\n        updatedAt\n        usersLiked {\n          id\n          fullname\n          avatar\n        }\n        videos\n      }\n    }\n  }\n": types.GetSavedDocument,
    "\n  query GetCollections($idSaved: String!, $limit: Float!, $page: Float!) {\n    getCollections(idSaved: $idSaved, limit: $limit, page: $page) {\n      page\n      total\n      data {\n        id\n        name\n        avatar\n      }\n    }\n  }\n": types.GetCollectionsDocument,
    "\n  mutation UpdateCollection($id: String!, $body: UpdateCollectionDto!) {\n    updateCollection(id: $id, body: $body) {\n      status\n    }\n  }\n": types.UpdateCollectionDocument,
    "\n  mutation DeleteCollection($id: String!) {\n    deleteCollection(id: $id) {\n      status\n    }\n  }\n": types.DeleteCollectionDocument,
    "\n  mutation CreateComment($body: CreateCommentDto!) {\n    createComment(body: $body) {\n      id\n    }\n  }\n": types.CreateCommentDocument,
    "\n  query GetComments($limit: Float!, $page: Float!, $postId: String!) {\n    getComments(limit: $limit, page: $page, postId: $postId) {\n      page\n      total\n      data {\n        author {\n          avatar\n          fullname\n          id\n        }\n        postId\n        content\n        createdAt\n        id\n        images\n        videos\n        replies {\n          author {\n            avatar\n            fullname\n            id\n          }\n          content\n          createdAt\n          id\n        }\n      }\n    }\n  }\n": types.GetCommentsDocument,
    "\n  mutation ReplyComment($body: CreateCommentDto!, $idCmtParent: String!) {\n    replyComment(body: $body, idCmtParent: $idCmtParent) {\n      message\n      status\n    }\n  }\n": types.ReplyCommentDocument,
    "\n  query GetFriends {\n    getFriends {\n      friends {\n        id\n        fullname\n        avatar\n      }\n      friendsReq {\n        id\n        fullname\n        avatar\n      }\n    }\n  }\n": types.GetFriendsDocument,
    "\n  mutation createGroup($body: CreateGroupDto!) {\n    createGroup(body: $body) {\n      name\n      avatar\n      createdAt\n    }\n  }\n": types.CreateGroupDocument,
    "\n  query GetGroups($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {\n    getGroups(filter: $filter, page: $page, limit: $limit) {\n      data {\n        name\n        id\n        avatar\n        description\n      }\n    }\n  }\n": types.GetGroupsDocument,
    "\n  query GetGroupById($id: String!) {\n    getGroupById(id: $id) {\n      allFiles\n      avatar\n      coverImage\n      createdAt\n      description\n      id\n      name\n      updatedAt\n      isPrivate\n      admins {\n        fullname\n        id\n        avatar\n      }\n      members {\n        fullname\n        id\n        avatar\n      }\n      membersReq {\n        fullname\n        id\n        avatar\n      }\n      author {\n        fullname\n        id\n        avatar\n      }\n    }\n  }\n": types.GetGroupByIdDocument,
    "\n  mutation JoinGroup($id: String!) {\n    joinGroup(id: $id) {\n      status\n      message\n    }\n  }\n": types.JoinGroupDocument,
    "\n  mutation AcceptMemberReqJoinGroup($idGroup: String!, $idMemberReq: String!) {\n    acceptMemberReqJoinGroup(idGroup: $idGroup, idMemberReq: $idMemberReq) {\n      status\n      message\n    }\n  }\n": types.AcceptMemberReqJoinGroupDocument,
    "\n  mutation LeaveGroup($id: String!) {\n    leaveGroup(id: $id) {\n      status\n      message\n    }\n  }\n": types.LeaveGroupDocument,
    "\n  mutation DeleteGroup($id: String!) {\n    deleteGroup(id: $id) {\n      status\n      message\n    }\n  }\n": types.DeleteGroupDocument,
    "\n  mutation UpdateGroup($id: String!, $body: UpdateGroupDto!) {\n    updateGroup(id: $id, body: $body) {\n      status\n      message\n    }\n  }\n": types.UpdateGroupDocument,
    "\n  mutation CreateProduct($body: CreateMarketDto!) {\n    createProduct(body: $body) {\n      id\n    }\n  }\n": types.CreateProductDocument,
    "\n  query GetProducts($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {\n    getProducts(filter: $filter, page: $page, limit: $limit) {\n      page\n      total\n      data {\n        id\n        name\n        description\n        price\n        images\n        videos\n        location\n        author {\n          id\n          fullname\n          avatar\n        }\n        createdAt\n      }\n    }\n  }\n": types.GetProductsDocument,
    "\n  query GetProductById($id: String!) {\n    getProductById(id: $id) {\n      id\n      name\n      description\n      price\n      images\n      videos\n      location\n      author {\n        id\n        fullname\n        avatar\n      }\n      createdAt\n    }\n  }\n": types.GetProductByIdDocument,
    "\n  query GetProductsByUser(\n    $filter: ParamsQueryDto!\n    $limit: Float!\n    $page: Float!\n  ) {\n    getProductsByUser(filter: $filter, page: $page, limit: $limit) {\n      page\n      total\n      data {\n        id\n        name\n        description\n        price\n        images\n        videos\n        location\n        author {\n          id\n          fullname\n          avatar\n        }\n        createdAt\n      }\n    }\n  }\n": types.GetProductsByUserDocument,
    "\n  mutation UpdateProduct($id: String!, $body: CreateMarketDto!) {\n    updateProduct(id: $id, body: $body) {\n      id\n    }\n  }\n": types.UpdateProductDocument,
    "\n  mutation CreateRoom($body: CreateRoomDto!) {\n    createRoom(body: $body) {\n      id\n    }\n  }\n": types.CreateRoomDocument,
    "\n  query GetAllPost($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {\n    getAllPost(filter: $filter, page: $page, limit: $limit) {\n      page\n      total\n      data {\n        id\n        authorsPostShared {\n          fullname\n          avatar\n          id\n        }\n        author {\n          fullname\n          avatar\n          id\n        }\n        content\n        images\n        topic {\n          image\n          name\n          color\n          id\n        }\n        createdAt\n        updatedAt\n        usersLiked {\n          fullname\n          avatar\n          id\n        }\n      }\n    }\n  }\n": types.GetAllPostDocument,
    "\n  query GetPostById($id: String!) {\n    getPostById(id: $id) {\n      content\n      createdAt\n      id\n      updatedAt\n      images\n      isGhim\n      author {\n        fullname\n        id\n        avatar\n      }\n      isPostToGroup {\n        status\n        idGroup\n      }\n      topic {\n        name\n      }\n      usersLiked {\n        avatar\n        createdAt\n        dayOfBirth\n        description\n        email\n        fullname\n        gender\n        id\n        phone\n      }\n      authorsPostShared {\n        avatar\n        createdAt\n        dayOfBirth\n        description\n        email\n\n        fullname\n        gender\n        id\n        phone\n      }\n    }\n  }\n": types.GetPostByIdDocument,
    "\n  query GetPostsByGroup($idGroup: String!, $limit: Float!, $page: Float!) {\n    getPostsByGroup(idGroup: $idGroup, limit: $limit, page: $page) {\n      page\n      total\n      data {\n        authorsPostShared {\n          avatar\n          fullname\n          id\n        }\n        content\n        createdAt\n        id\n        author {\n          fullname\n          id\n          avatar\n        }\n        images\n        isGhim\n        isPostToGroup {\n          idGroup\n          status\n        }\n        topic {\n          id\n          name\n        }\n        updatedAt\n        usersLiked {\n          id\n          fullname\n        }\n      }\n    }\n  }\n": types.GetPostsByGroupDocument,
    "\n  mutation createPost($body: CreatePostDto!) {\n    createPost(body: $body) {\n      content\n      createdAt\n      id\n      images\n      isGhim\n      updatedAt\n      usersLiked {\n        fullname\n        avatar\n      }\n      authorsPostShared {\n        fullname\n        avatar\n      }\n    }\n  }\n": types.CreatePostDocument,
    "\n  mutation likePost($idPost: String!, $idUser: String!) {\n    likePost(idPost: $idPost, idUser: $idUser) {\n      message\n      status\n    }\n  }\n": types.LikePostDocument,
    "\n  query GetPostByAuthor($idAuthor: String!, $limit: Float!, $page: Float!) {\n    getPostByAuthor(idAuthor: $idAuthor, limit: $limit, page: $page) {\n      page\n      total\n      data {\n        id\n        authorsPostShared {\n          fullname\n          avatar\n          id\n        }\n        author {\n          fullname\n          avatar\n          id\n        }\n        content\n        images\n        topic {\n          image\n          name\n          color\n          id\n        }\n        createdAt\n        updatedAt\n        usersLiked {\n          fullname\n          avatar\n          id\n        }\n      }\n    }\n  }\n": types.GetPostByAuthorDocument,
    "\n  mutation deletePost($id: String!) {\n    deletePost(id: $id) {\n      message\n      status\n    }\n  }\n": types.DeletePostDocument,
    "\n  mutation ghimPost($idPost: String!) {\n    ghimPost(idPost: $idPost) {\n      message\n      status\n    }\n  }\n": types.GhimPostDocument,
    "\n  mutation updatePost($id: String!, $body: UpdatePostDto!) {\n    updatePost(id: $id, body: $body) {\n      status\n      message\n    }\n  }\n": types.UpdatePostDocument,
    "\n  mutation sharePost($idPost: String!, $idUser: String!) {\n    sharePost(idPost: $idPost, idUser: $idUser) {\n      status\n      message\n    }\n  }\n": types.SharePostDocument,
    "\n  mutation Update($body: UpdateUserDto!, $id: String!) {\n    update(body: $body, id: $id) {\n      message\n      status\n    }\n  }\n": types.UpdateDocument,
    "\n  mutation deleteFriend($friendId: String!) {\n    deleteFriend(friendId: $friendId) {\n      status\n      message\n    }\n  }\n": types.DeleteFriendDocument,
    "\n  mutation rejectReqFriend($friendId: String!) {\n    rejectReqFriend(friendId: $friendId) {\n      status\n      message\n    }\n  }\n": types.RejectReqFriendDocument,
    "\n  mutation requestAddFriend($friendId: String!) {\n    requestAddFriend(friendId: $friendId) {\n      status\n      message\n    }\n  }\n": types.RequestAddFriendDocument,
    "\n  mutation acceptFriendReq($friendId: String!) {\n    acceptFriendReq(friendId: $friendId) {\n      status\n      message\n    }\n  }\n": types.AcceptFriendReqDocument,
    "\n  query getTopics {\n    topics {\n      name\n      color\n      image\n      rank\n      id\n    }\n  }\n": types.GetTopicsDocument,
    "\n  query GetUserById($id: String!) {\n    getUserById(id: $id) {\n      id\n      phone\n      avatar\n      createdAt\n      coverImage\n      dayOfBirth\n      description\n      email\n      address\n      description\n      company\n      university\n      relationship\n      fullname\n      gender\n    }\n  }\n": types.GetUserByIdDocument,
    "\n  mutation UploadSingleFiles($file: Upload!) {\n    uploadSingleFiles(file: $file) {\n      url\n    }\n  }\n": types.UploadSingleFilesDocument,
    "\n  mutation UploadMultipleFiles($files: [Upload!]!) {\n    uploadMultipleFiles(files: $files) {\n      url\n    }\n  }\n": types.UploadMultipleFilesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Login($body: LoginUserDto!) {\n    login(body: $body) {\n      user {\n        fullname\n        avatar\n        dayOfBirth\n        description\n        gender\n        id\n        phone\n        email\n        role\n        createdAt\n      }\n      access_token\n    }\n  }\n"): (typeof documents)["\n  mutation Login($body: LoginUserDto!) {\n    login(body: $body) {\n      user {\n        fullname\n        avatar\n        dayOfBirth\n        description\n        gender\n        id\n        phone\n        email\n        role\n        createdAt\n      }\n      access_token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Signup($body: SignUpUserDto!) {\n    signup(body: $body) {\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation Signup($body: SignUpUserDto!) {\n    signup(body: $body) {\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetInfoUser {\n    getInfoUser {\n      avatar\n      createdAt\n      coverImage\n      dayOfBirth\n      description\n      email\n      address\n      description\n      company\n      university\n      relationship\n      fullname\n      gender\n      id\n      phone\n    }\n  }\n"): (typeof documents)["\n  query GetInfoUser {\n    getInfoUser {\n      avatar\n      createdAt\n      coverImage\n      dayOfBirth\n      description\n      email\n      address\n      description\n      company\n      university\n      relationship\n      fullname\n      gender\n      id\n      phone\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateCollection($body: CreateCollectionDto!) {\n    createCollection(body: $body) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation CreateCollection($body: CreateCollectionDto!) {\n    createCollection(body: $body) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSaved {\n    getSaved {\n      id\n      markets\n      posts {\n        author {\n          id\n          fullname\n          avatar\n        }\n        authorsPostShared {\n          id\n          fullname\n          avatar\n        }\n        content\n        createdAt\n        id\n        images\n        topic {\n          name\n        }\n        updatedAt\n        usersLiked {\n          id\n          fullname\n          avatar\n        }\n        videos\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSaved {\n    getSaved {\n      id\n      markets\n      posts {\n        author {\n          id\n          fullname\n          avatar\n        }\n        authorsPostShared {\n          id\n          fullname\n          avatar\n        }\n        content\n        createdAt\n        id\n        images\n        topic {\n          name\n        }\n        updatedAt\n        usersLiked {\n          id\n          fullname\n          avatar\n        }\n        videos\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCollections($idSaved: String!, $limit: Float!, $page: Float!) {\n    getCollections(idSaved: $idSaved, limit: $limit, page: $page) {\n      page\n      total\n      data {\n        id\n        name\n        avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCollections($idSaved: String!, $limit: Float!, $page: Float!) {\n    getCollections(idSaved: $idSaved, limit: $limit, page: $page) {\n      page\n      total\n      data {\n        id\n        name\n        avatar\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateCollection($id: String!, $body: UpdateCollectionDto!) {\n    updateCollection(id: $id, body: $body) {\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateCollection($id: String!, $body: UpdateCollectionDto!) {\n    updateCollection(id: $id, body: $body) {\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteCollection($id: String!) {\n    deleteCollection(id: $id) {\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteCollection($id: String!) {\n    deleteCollection(id: $id) {\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateComment($body: CreateCommentDto!) {\n    createComment(body: $body) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateComment($body: CreateCommentDto!) {\n    createComment(body: $body) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetComments($limit: Float!, $page: Float!, $postId: String!) {\n    getComments(limit: $limit, page: $page, postId: $postId) {\n      page\n      total\n      data {\n        author {\n          avatar\n          fullname\n          id\n        }\n        postId\n        content\n        createdAt\n        id\n        images\n        videos\n        replies {\n          author {\n            avatar\n            fullname\n            id\n          }\n          content\n          createdAt\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetComments($limit: Float!, $page: Float!, $postId: String!) {\n    getComments(limit: $limit, page: $page, postId: $postId) {\n      page\n      total\n      data {\n        author {\n          avatar\n          fullname\n          id\n        }\n        postId\n        content\n        createdAt\n        id\n        images\n        videos\n        replies {\n          author {\n            avatar\n            fullname\n            id\n          }\n          content\n          createdAt\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ReplyComment($body: CreateCommentDto!, $idCmtParent: String!) {\n    replyComment(body: $body, idCmtParent: $idCmtParent) {\n      message\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation ReplyComment($body: CreateCommentDto!, $idCmtParent: String!) {\n    replyComment(body: $body, idCmtParent: $idCmtParent) {\n      message\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetFriends {\n    getFriends {\n      friends {\n        id\n        fullname\n        avatar\n      }\n      friendsReq {\n        id\n        fullname\n        avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetFriends {\n    getFriends {\n      friends {\n        id\n        fullname\n        avatar\n      }\n      friendsReq {\n        id\n        fullname\n        avatar\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createGroup($body: CreateGroupDto!) {\n    createGroup(body: $body) {\n      name\n      avatar\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation createGroup($body: CreateGroupDto!) {\n    createGroup(body: $body) {\n      name\n      avatar\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetGroups($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {\n    getGroups(filter: $filter, page: $page, limit: $limit) {\n      data {\n        name\n        id\n        avatar\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetGroups($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {\n    getGroups(filter: $filter, page: $page, limit: $limit) {\n      data {\n        name\n        id\n        avatar\n        description\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetGroupById($id: String!) {\n    getGroupById(id: $id) {\n      allFiles\n      avatar\n      coverImage\n      createdAt\n      description\n      id\n      name\n      updatedAt\n      isPrivate\n      admins {\n        fullname\n        id\n        avatar\n      }\n      members {\n        fullname\n        id\n        avatar\n      }\n      membersReq {\n        fullname\n        id\n        avatar\n      }\n      author {\n        fullname\n        id\n        avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetGroupById($id: String!) {\n    getGroupById(id: $id) {\n      allFiles\n      avatar\n      coverImage\n      createdAt\n      description\n      id\n      name\n      updatedAt\n      isPrivate\n      admins {\n        fullname\n        id\n        avatar\n      }\n      members {\n        fullname\n        id\n        avatar\n      }\n      membersReq {\n        fullname\n        id\n        avatar\n      }\n      author {\n        fullname\n        id\n        avatar\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation JoinGroup($id: String!) {\n    joinGroup(id: $id) {\n      status\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation JoinGroup($id: String!) {\n    joinGroup(id: $id) {\n      status\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AcceptMemberReqJoinGroup($idGroup: String!, $idMemberReq: String!) {\n    acceptMemberReqJoinGroup(idGroup: $idGroup, idMemberReq: $idMemberReq) {\n      status\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation AcceptMemberReqJoinGroup($idGroup: String!, $idMemberReq: String!) {\n    acceptMemberReqJoinGroup(idGroup: $idGroup, idMemberReq: $idMemberReq) {\n      status\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LeaveGroup($id: String!) {\n    leaveGroup(id: $id) {\n      status\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation LeaveGroup($id: String!) {\n    leaveGroup(id: $id) {\n      status\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteGroup($id: String!) {\n    deleteGroup(id: $id) {\n      status\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteGroup($id: String!) {\n    deleteGroup(id: $id) {\n      status\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateGroup($id: String!, $body: UpdateGroupDto!) {\n    updateGroup(id: $id, body: $body) {\n      status\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateGroup($id: String!, $body: UpdateGroupDto!) {\n    updateGroup(id: $id, body: $body) {\n      status\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateProduct($body: CreateMarketDto!) {\n    createProduct(body: $body) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateProduct($body: CreateMarketDto!) {\n    createProduct(body: $body) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProducts($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {\n    getProducts(filter: $filter, page: $page, limit: $limit) {\n      page\n      total\n      data {\n        id\n        name\n        description\n        price\n        images\n        videos\n        location\n        author {\n          id\n          fullname\n          avatar\n        }\n        createdAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProducts($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {\n    getProducts(filter: $filter, page: $page, limit: $limit) {\n      page\n      total\n      data {\n        id\n        name\n        description\n        price\n        images\n        videos\n        location\n        author {\n          id\n          fullname\n          avatar\n        }\n        createdAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProductById($id: String!) {\n    getProductById(id: $id) {\n      id\n      name\n      description\n      price\n      images\n      videos\n      location\n      author {\n        id\n        fullname\n        avatar\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GetProductById($id: String!) {\n    getProductById(id: $id) {\n      id\n      name\n      description\n      price\n      images\n      videos\n      location\n      author {\n        id\n        fullname\n        avatar\n      }\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProductsByUser(\n    $filter: ParamsQueryDto!\n    $limit: Float!\n    $page: Float!\n  ) {\n    getProductsByUser(filter: $filter, page: $page, limit: $limit) {\n      page\n      total\n      data {\n        id\n        name\n        description\n        price\n        images\n        videos\n        location\n        author {\n          id\n          fullname\n          avatar\n        }\n        createdAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProductsByUser(\n    $filter: ParamsQueryDto!\n    $limit: Float!\n    $page: Float!\n  ) {\n    getProductsByUser(filter: $filter, page: $page, limit: $limit) {\n      page\n      total\n      data {\n        id\n        name\n        description\n        price\n        images\n        videos\n        location\n        author {\n          id\n          fullname\n          avatar\n        }\n        createdAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateProduct($id: String!, $body: CreateMarketDto!) {\n    updateProduct(id: $id, body: $body) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProduct($id: String!, $body: CreateMarketDto!) {\n    updateProduct(id: $id, body: $body) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateRoom($body: CreateRoomDto!) {\n    createRoom(body: $body) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateRoom($body: CreateRoomDto!) {\n    createRoom(body: $body) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllPost($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {\n    getAllPost(filter: $filter, page: $page, limit: $limit) {\n      page\n      total\n      data {\n        id\n        authorsPostShared {\n          fullname\n          avatar\n          id\n        }\n        author {\n          fullname\n          avatar\n          id\n        }\n        content\n        images\n        topic {\n          image\n          name\n          color\n          id\n        }\n        createdAt\n        updatedAt\n        usersLiked {\n          fullname\n          avatar\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllPost($filter: ParamsQueryDto!, $limit: Float!, $page: Float!) {\n    getAllPost(filter: $filter, page: $page, limit: $limit) {\n      page\n      total\n      data {\n        id\n        authorsPostShared {\n          fullname\n          avatar\n          id\n        }\n        author {\n          fullname\n          avatar\n          id\n        }\n        content\n        images\n        topic {\n          image\n          name\n          color\n          id\n        }\n        createdAt\n        updatedAt\n        usersLiked {\n          fullname\n          avatar\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPostById($id: String!) {\n    getPostById(id: $id) {\n      content\n      createdAt\n      id\n      updatedAt\n      images\n      isGhim\n      author {\n        fullname\n        id\n        avatar\n      }\n      isPostToGroup {\n        status\n        idGroup\n      }\n      topic {\n        name\n      }\n      usersLiked {\n        avatar\n        createdAt\n        dayOfBirth\n        description\n        email\n        fullname\n        gender\n        id\n        phone\n      }\n      authorsPostShared {\n        avatar\n        createdAt\n        dayOfBirth\n        description\n        email\n\n        fullname\n        gender\n        id\n        phone\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPostById($id: String!) {\n    getPostById(id: $id) {\n      content\n      createdAt\n      id\n      updatedAt\n      images\n      isGhim\n      author {\n        fullname\n        id\n        avatar\n      }\n      isPostToGroup {\n        status\n        idGroup\n      }\n      topic {\n        name\n      }\n      usersLiked {\n        avatar\n        createdAt\n        dayOfBirth\n        description\n        email\n        fullname\n        gender\n        id\n        phone\n      }\n      authorsPostShared {\n        avatar\n        createdAt\n        dayOfBirth\n        description\n        email\n\n        fullname\n        gender\n        id\n        phone\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPostsByGroup($idGroup: String!, $limit: Float!, $page: Float!) {\n    getPostsByGroup(idGroup: $idGroup, limit: $limit, page: $page) {\n      page\n      total\n      data {\n        authorsPostShared {\n          avatar\n          fullname\n          id\n        }\n        content\n        createdAt\n        id\n        author {\n          fullname\n          id\n          avatar\n        }\n        images\n        isGhim\n        isPostToGroup {\n          idGroup\n          status\n        }\n        topic {\n          id\n          name\n        }\n        updatedAt\n        usersLiked {\n          id\n          fullname\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPostsByGroup($idGroup: String!, $limit: Float!, $page: Float!) {\n    getPostsByGroup(idGroup: $idGroup, limit: $limit, page: $page) {\n      page\n      total\n      data {\n        authorsPostShared {\n          avatar\n          fullname\n          id\n        }\n        content\n        createdAt\n        id\n        author {\n          fullname\n          id\n          avatar\n        }\n        images\n        isGhim\n        isPostToGroup {\n          idGroup\n          status\n        }\n        topic {\n          id\n          name\n        }\n        updatedAt\n        usersLiked {\n          id\n          fullname\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createPost($body: CreatePostDto!) {\n    createPost(body: $body) {\n      content\n      createdAt\n      id\n      images\n      isGhim\n      updatedAt\n      usersLiked {\n        fullname\n        avatar\n      }\n      authorsPostShared {\n        fullname\n        avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createPost($body: CreatePostDto!) {\n    createPost(body: $body) {\n      content\n      createdAt\n      id\n      images\n      isGhim\n      updatedAt\n      usersLiked {\n        fullname\n        avatar\n      }\n      authorsPostShared {\n        fullname\n        avatar\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation likePost($idPost: String!, $idUser: String!) {\n    likePost(idPost: $idPost, idUser: $idUser) {\n      message\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation likePost($idPost: String!, $idUser: String!) {\n    likePost(idPost: $idPost, idUser: $idUser) {\n      message\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPostByAuthor($idAuthor: String!, $limit: Float!, $page: Float!) {\n    getPostByAuthor(idAuthor: $idAuthor, limit: $limit, page: $page) {\n      page\n      total\n      data {\n        id\n        authorsPostShared {\n          fullname\n          avatar\n          id\n        }\n        author {\n          fullname\n          avatar\n          id\n        }\n        content\n        images\n        topic {\n          image\n          name\n          color\n          id\n        }\n        createdAt\n        updatedAt\n        usersLiked {\n          fullname\n          avatar\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPostByAuthor($idAuthor: String!, $limit: Float!, $page: Float!) {\n    getPostByAuthor(idAuthor: $idAuthor, limit: $limit, page: $page) {\n      page\n      total\n      data {\n        id\n        authorsPostShared {\n          fullname\n          avatar\n          id\n        }\n        author {\n          fullname\n          avatar\n          id\n        }\n        content\n        images\n        topic {\n          image\n          name\n          color\n          id\n        }\n        createdAt\n        updatedAt\n        usersLiked {\n          fullname\n          avatar\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deletePost($id: String!) {\n    deletePost(id: $id) {\n      message\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation deletePost($id: String!) {\n    deletePost(id: $id) {\n      message\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ghimPost($idPost: String!) {\n    ghimPost(idPost: $idPost) {\n      message\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation ghimPost($idPost: String!) {\n    ghimPost(idPost: $idPost) {\n      message\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updatePost($id: String!, $body: UpdatePostDto!) {\n    updatePost(id: $id, body: $body) {\n      status\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation updatePost($id: String!, $body: UpdatePostDto!) {\n    updatePost(id: $id, body: $body) {\n      status\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation sharePost($idPost: String!, $idUser: String!) {\n    sharePost(idPost: $idPost, idUser: $idUser) {\n      status\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation sharePost($idPost: String!, $idUser: String!) {\n    sharePost(idPost: $idPost, idUser: $idUser) {\n      status\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Update($body: UpdateUserDto!, $id: String!) {\n    update(body: $body, id: $id) {\n      message\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation Update($body: UpdateUserDto!, $id: String!) {\n    update(body: $body, id: $id) {\n      message\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteFriend($friendId: String!) {\n    deleteFriend(friendId: $friendId) {\n      status\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation deleteFriend($friendId: String!) {\n    deleteFriend(friendId: $friendId) {\n      status\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation rejectReqFriend($friendId: String!) {\n    rejectReqFriend(friendId: $friendId) {\n      status\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation rejectReqFriend($friendId: String!) {\n    rejectReqFriend(friendId: $friendId) {\n      status\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation requestAddFriend($friendId: String!) {\n    requestAddFriend(friendId: $friendId) {\n      status\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation requestAddFriend($friendId: String!) {\n    requestAddFriend(friendId: $friendId) {\n      status\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation acceptFriendReq($friendId: String!) {\n    acceptFriendReq(friendId: $friendId) {\n      status\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation acceptFriendReq($friendId: String!) {\n    acceptFriendReq(friendId: $friendId) {\n      status\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getTopics {\n    topics {\n      name\n      color\n      image\n      rank\n      id\n    }\n  }\n"): (typeof documents)["\n  query getTopics {\n    topics {\n      name\n      color\n      image\n      rank\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUserById($id: String!) {\n    getUserById(id: $id) {\n      id\n      phone\n      avatar\n      createdAt\n      coverImage\n      dayOfBirth\n      description\n      email\n      address\n      description\n      company\n      university\n      relationship\n      fullname\n      gender\n    }\n  }\n"): (typeof documents)["\n  query GetUserById($id: String!) {\n    getUserById(id: $id) {\n      id\n      phone\n      avatar\n      createdAt\n      coverImage\n      dayOfBirth\n      description\n      email\n      address\n      description\n      company\n      university\n      relationship\n      fullname\n      gender\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UploadSingleFiles($file: Upload!) {\n    uploadSingleFiles(file: $file) {\n      url\n    }\n  }\n"): (typeof documents)["\n  mutation UploadSingleFiles($file: Upload!) {\n    uploadSingleFiles(file: $file) {\n      url\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UploadMultipleFiles($files: [Upload!]!) {\n    uploadMultipleFiles(files: $files) {\n      url\n    }\n  }\n"): (typeof documents)["\n  mutation UploadMultipleFiles($files: [Upload!]!) {\n    uploadMultipleFiles(files: $files) {\n      url\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;