import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Profile } from './profile.types';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto';
import { GraphqlAuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => Profile)
  async createProfile(@Args('input') input: CreateProfileDto) {
    return this.profileService.createProfile(input);
  }

  @Query(() => Profile)
  async getProfileById(@Args('profileId') profileId: number) {
    return this.profileService.getProfileById(profileId);
  }
}
