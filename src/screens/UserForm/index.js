import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Box } from "../../components/Spacing";
import { TextInput } from "react-native-paper";
import { Colors } from "../../contants";
import { TextLow, TextRegular } from "../../components/Title";
import { RadioButton } from "react-native-paper";

// import { Container } from './styles';

const UserForm = () => {
  const [text, setText] = React.useState("");
  const [checked, setChecked] = React.useState("first");

  return (
    <Box p={20} color={Colors.quaternary} style={{ flex: 1 }}>
      <Box>
        <TextLow>
          Precisamos de alguns dados para trazer o melhor imovel
        </TextLow>
      </Box>
      <Box>
        <Box mt="10">
          <TextInput
            label="Nome Completo"
            value={text}
            onChangeText={(text) => setText(text)}
            selectionColor={Colors.primary}
            outlineColor={Colors.primary}
            underlineColor={Colors.primary}
            theme={{ colors: { primary: Colors.primary } }}
            placeholderTextColor={Colors.primary}
          />
        </Box>

        <Box mt="10">
          <TextInput
            label="Com o que voce trabalha ?!"
            value={text}
            onChangeText={(text) => setText(text)}
            selectionColor={Colors.primary}
            outlineColor={Colors.primary}
            underlineColor={Colors.primary}
            theme={{ colors: { primary: Colors.primary } }}
            placeholderTextColor={Colors.primary}
          />
        </Box>

        <Box mt="10">
          <TextInput
            label="Qual sua renda bruta"
            value={text}
            onChangeText={(text) => setText(text)}
            selectionColor={Colors.primary}
            outlineColor={Colors.primary}
            underlineColor={Colors.primary}
            theme={{ colors: { primary: Colors.primary } }}
            placeholderTextColor={Colors.primary}
          />
        </Box>

        <Box mt={10}>
          <TextLow>Quero morar proximo a locais como</TextLow>

          <Box flexDirection="row" alignItems="center">
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
              color={Colors.secondary}
            />
            <TextRegular>Shoppings </TextRegular>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
              color={Colors.secondary}
            />
            <TextRegular>Metros </TextRegular>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <RadioButton
              value="third"
              status={checked === "third" ? "checked" : "unchecked"}
              onPress={() => setChecked("third")}
              color={Colors.secondary}
            />
            <TextRegular>Escolas </TextRegular>
          </Box>
        </Box>

        <Box>
          <TouchableOpacity>
            <Text>Buscar Imoveis com meu perfil</Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

export default UserForm;
