import React from "react";
import { Text, TextProps, View } from "react-native";

import { styles } from "./styles";

type Props = TextProps & { value: string };

export const PostLocation = ({ value, ...rest }: Props) => {
  return (
    <Text style={styles.postLocation} {...rest}>
      {value}
    </Text>
  );
};
