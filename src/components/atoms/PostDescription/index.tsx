import React from "react";
import { Text, TextProps, View } from "react-native";

// import { Container } from './styles';

import { styles } from "./styles";

type Props = TextProps & { value: string };

export const PostDescription = ({ value, ...rest }: Props) => {
  return (
    <Text style={styles.description} {...rest}>
      {value}
    </Text>
  );
};
