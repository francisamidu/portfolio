import { Component } from "solid-js";
import { Button } from "./ui/button";
import { ButtonProps } from "@/types/ButtonProps";

const AppButton: Component<ButtonProps> = ({ text, ...rest }) => {
  return (
    <Button variant="default" {...rest}>
      {text}
    </Button>
  );
};

export default AppButton;
