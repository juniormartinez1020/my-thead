import { Post } from "@/types";
import { Image, Pressable, Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';



dayjs.extend(relativeTime)

export default function PostListItem({ post }: { post: Post }) {
   return (
    <View className="flex-row p-4 border-4 border-gray-700/70">
      {/* user avatar */}
      <View className="mr-3">
        <Image
        source={{ uri: post.user.img }}
        className="w-12 h-12 rounded-full"
        />
      </View>

      {/* content */}
      <View className="flex-1">
        {/* user info */}
        <View className="flex-row items-center">
          <Text className="text-slate-50 font-bold mr-2">
            @{post.user.username}
          </Text>

          <Text className="text-slate-500">
            {dayjs(post.createdAt).fromNow()}
          </Text>
        </View>

        {/* post content */}
        <Text className="text-yellow-100 mt-2 mb-3">
          {post.content}
        </Text>


        {/* interation button */}
        <View className="flex-row gap-4 justify-between mt-2">
          <Pressable className="flex-row items-center">
            <FontAwesome 
            name="comment-o"
            size={15}
            color='gray'
            />

            <Text className="text-slate-200 ml-2">
              {post.replyby.length}
            </Text>
          </Pressable>


          <Pressable className="flex-row items-center">
            <FontAwesome 
            name="retweet"
            size={15}
            color='gray'
            />

            <Text className="text-slate-200 ml-2">
              0
            </Text>
          </Pressable>


          <Pressable className="flex-row items-center">
            <FontAwesome 
            name="heart-o"
            size={15}
            color='gray'
            />

            <Text className="text-slate-200 ml-2">
              0
            </Text>
          </Pressable>


          <Pressable className="flex-row items-center">
            <FontAwesome 
            name="share"
            size={15}
            color='gray'
            />
          </Pressable>


        </View>
      </View>
    </View>
   )
}