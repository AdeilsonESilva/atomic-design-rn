import React from "react";
import { View } from "react-native";
import { ImageProps } from "react-native";

import { styles } from "./styles";

import { PostLiked } from "../../atoms/PostLiked";
import { PostLikedAvatar } from "../../atoms/PostLikedAvatar";

type Props = {
  avatar: ImageProps;
  likes: string;
};

export const PostAbout = ({ avatar, likes }: Props) => {
  return (
    <View style={styles.postAbout}>
      <PostLikedAvatar source={avatar} />
      <PostLiked value={likes} />
    </View>
  );
};
