import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PostService } from './post.service';
import { PaginationPostDto } from './dto/common.dto';
import { PostDto } from './dto/post.dto';
import { ParamsQueryDto, ResponseDto } from 'src/ts/common';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/route/auth/guard/jwt-auth.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { UserService } from '../user/user.service';
import { getUserIdFromJwt } from 'src/helper/getIdUserFromJwt';
import { TopicService } from '../topic/topic.service';

@Resolver(() => PostDto)
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
    private readonly topicService: TopicService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => PaginationPostDto)
  getAllPost(
    @Args('filter') filter: ParamsQueryDto,
    @Args('page') page: number,
    @Args('limit') limit: number,
  ) {
    return this.postService.getPosts(filter, page, limit);
  }

  @Query(() => PaginationPostDto)
  @UseGuards(JwtAuthGuard)
  getPostsByGroup(
    @Args('idGroup') idGroup: string,
    @Args('page') page: number,
    @Args('limit') limit: number,
  ) {
    return this.postService.getPostByGroup(idGroup, page, limit);
  }

  @Query(() => PaginationPostDto)
  @UseGuards(JwtAuthGuard)
  getPostByAuthor(
    @Args('idAuthor') idAuthor: string,
    @Args('page') page: number,
    @Args('limit') limit: number,
  ) {
    return this.postService.getPostByAuthor(idAuthor, page, limit);
  }

  @Query(() => PostDto)
  @UseGuards(JwtAuthGuard)
  getPostById(@Args('id') id: string) {
    return this.postService.getPostById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => PostDto)
  createPost(@Context() context, @Args('body') body: CreatePostDto) {
    const userId = getUserIdFromJwt(context);
    return this.postService.createPost(userId, body);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  updatePost(@Args('id') id: string, @Args('body') body: UpdatePostDto) {
    return this.postService.updatePost(id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  ghimPost(@Context() context, @Args('idPost') idPost: string) {
    const idUser = getUserIdFromJwt(context);
    return this.postService.ghimPost(idPost, idUser);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  sharePost(@Args('idPost') idPost: string, @Args('idUser') idUser: string) {
    return this.postService.sharePost(idPost, idUser);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  likePost(@Args('idPost') idPost: string, @Args('idUser') idUser: string) {
    return this.postService.likePost(idPost, idUser);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  deletePost(@Context() context, @Args('id') id: string) {
    const idUser = getUserIdFromJwt(context);
    return this.postService.deletePost(id, idUser);
  }

  @ResolveField()
  author(@Parent() post: Post) {
    return this.userService.getUserById(post.author);
  }

  @ResolveField()
  usersLiked(@Parent() post: Post) {
    return this.userService.getManyUsersById(post.usersLiked);
  }

  @ResolveField()
  authorsPostShared(@Parent() post: Post) {
    return this.userService.getManyUsersById(post.authorsPostShared);
  }

  @ResolveField()
  topic(@Parent() post: Post) {
    return this.topicService.getTopicById(post.topic);
  }
}
