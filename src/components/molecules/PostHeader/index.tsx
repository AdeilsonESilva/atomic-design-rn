import React from "react";
import { View } from "react-native";

import { PostAvatar } from "../../atoms/PostAvatar";
import { PostLocation } from "../../atoms/PostLocation";
import { PostUserName } from "../../atoms/PostUserName";

import { ProfileIcon } from "../../../global/styles/icons";
import { styles } from "./styles";

type Props = {
  username: string;
  location: string;
};

export const PostHeader = ({ username, location }: Props) => {
  return (
    <View style={styles.postHeader}>
      <PostAvatar source={ProfileIcon} />
      <View>
        <PostUserName value={username} />
        <PostLocation value={location} />
      </View>
    </View>
  );
};
