import {
  FormControl,
  FormErrorMessage,
  Icon,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  nameInput: string;
  icon?: React.ComponentType;
  label: string;
  error?: FieldError;
  width?: string | number;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { icon, label, error = null, nameInput, width, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      <InputGroup color="gray.100" _focusWithin={{ color: "blue.100" }}>
        {icon && (
          <InputLeftElement h={"full"} pointerEvents="none">
            <Icon as={icon} fontSize="20" />
          </InputLeftElement>
        )}
        <ChakraInput
          w={width}
          name={nameInput}
          id={nameInput}
          placeholder={label}
          focusBorderColor="blue.100"
          borderColor="gray.200"
          bgColor="transparent"
          variant="filled"
          _hover={{
            borderColor: "gray.100",
          }}
          paddingY="6"
          ref={ref}
          {...rest}
        />
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const SingleInput = forwardRef(InputBase);
