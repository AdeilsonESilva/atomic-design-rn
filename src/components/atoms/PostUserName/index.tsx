import React from "react";
import { Text, TextProps, View } from "react-native";

import { styles } from "./styles";

type Props = TextProps & { value: string };

export const PostUserName = ({ value, ...rest }: Props) => {
  return (
    <Text style={styles.postUsername} {...rest}>
      {value}
    </Text>
  );
};
