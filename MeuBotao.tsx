import React from "react";
import { Button } from "react-native";
type MeuBotaoProps = {
    titulo: string;
    OnPress: () => void;
}
const MeuBotao:React.FC<MeuBotaoProps>=({titulo, OnPress})=>{
return(
    <Button onPress={OnPress} title="(titulo)"></Button>
);
}
export default MeuBotao;