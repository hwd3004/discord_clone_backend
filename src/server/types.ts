import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Member } from 'src/member/member.types';
import { Profile } from 'src/profile/profile.types';

@ObjectType()
export class Channel {
  @Field()
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field(() => ChannelType)
  type: ChannelType;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field(() => [Member], { nullable: true })
  members: Member[];
}

export enum ChannelType {
  TEXT = 'TEXT',
  AUDIO = 'AUDIO',
  VIDEO = 'VIDEO',
}

// graphql에서 해당 enumType을 인식하게 할 수 있음.
registerEnumType(ChannelType, {
  name: 'ChannelType',
  description: 'Defines the type of channel',
});

@ObjectType()
export class Server {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  imgaeUrl: string;

  @Field({ nullable: true })
  inviteCode: string;

  @Field()
  profileId: number;

  @Field(() => Profile, { nullable: true })
  profle: Profile;

  @Field(() => [Member], { nullable: 'itemsAndList' })
  members: Member[];

  @Field(() => [Channel], { nullable: 'itemsAndList' })
  channels: Channel[];
}
