import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { SavedService } from './saved.service';
import { PostService } from '../post/post.service';
import { UserService } from '../user/user.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/route/auth/guard/jwt-auth.guard';
import { SavedDto } from './dto/saved.dto';
import { CreateSavedDto } from './dto/create-saved.dto';
import { ResponseDto } from 'src/ts/common';
import { Saved } from './entities/saved.entity';
import { getUserIdFromJwt } from 'src/helper/getIdUserFromJwt';

@Resolver(() => SavedDto)
export class SavedResolver {
  constructor(
    private readonly savedService: SavedService,
    private readonly postService: PostService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => SavedDto)
  getSaved(@Context() context) {
    const userId = getUserIdFromJwt(context);
    return this.savedService.getSaved(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => SavedDto)
  createSaved(@Args('body') body: CreateSavedDto) {
    return this.createSaved(body);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  updatePostSaved(
    @Args('idSaved') idSaved: string,
    @Args('idPost') idPost: string,
  ) {
    return this.savedService.updatePostSaved(idSaved, idPost);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  updateMarketSaved(
    @Args('idSaved') idSaved: string,
    @Args('idMarket') idMarket: string,
  ) {
    return this.savedService.updateMarketSaved(idSaved, idMarket);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  deletePostSaved(
    @Args('idSaved') idSaved: string,
    @Args('idPost') idPost: string,
  ) {
    return this.savedService.deletePostSaved(idSaved, idPost);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  deleteMarketSaved(
    @Args('idSaved') idSaved: string,
    @Args('idMarket') idMarket: string,
  ) {
    return this.savedService.deleteMarketSaved(idSaved, idMarket);
  }

  @ResolveField()
  async posts(@Parent() saved: Saved) {
    return this.postService.getManyPostsById(saved.posts);
  }
}
