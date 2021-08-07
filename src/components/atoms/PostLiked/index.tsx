import React from "react";
import { Text, TextProps, View } from "react-native";

import { styles } from "./styles";

type Props = TextProps & { value: string };

export const PostLiked = ({ value, ...rest }: Props) => {
  return (
    <Text style={styles.likes} {...rest}>
      {value}
    </Text>
  );
};
