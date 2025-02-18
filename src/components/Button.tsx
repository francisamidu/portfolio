import { Component } from "solid-js";
import { Button } from "./ui/button";
import { ButtonProps } from "@/types/ButtonProps";

const AppButton: Component<ButtonProps> = ({ icon, text, ...rest }) => {
  return (
    <Button variant="default" {...rest}>
      {text}
      {icon ? icon : null}
    </Button>
  );
};

export default AppButton;
