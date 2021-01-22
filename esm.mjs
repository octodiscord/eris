import Eris from "./index.js";

export default function(token, options) {
  return new Eris.Client(token, options);
}

export const {
  Base,
  Bucket,
  CategoryChannel,
  Channel,
  Client,
  Collection,
  Constants,
  DiscordHTTPError,
  DiscordRESTError,
  Guild,
  GuildChannel,
  GuildIntegration,
  GuildPreview,
  Invite,
  Member,
  Message,
  NewsChannel,
  Permission,
  PermissionOverwrite,
  PrivateChannel,
  Relationship,
  RequestHandler,
  Role,
  SequentialBucket,
  Shard,
  SharedStream,
  StoreChannel,
  TextChannel,
  UnavailableGuild,
  User,
  VERSION,
  VoiceChannel,
  VoiceConnection,
  VoiceConnectionManager,
  VoiceState
} = Eris;
