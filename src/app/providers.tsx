"use client"
import theme from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export function Providers({ children }: {children: React.ReactNode}) {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}