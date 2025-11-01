import React from "react";
import { PATH_APP } from "@/routes/paths";
import { Container, Flex, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const Page404: React.FC = () => {

    return (
        <Container h={"100vh"}>
            <Flex direction={"column"} justify={"center"} align={"center"} h={"100vh"} gap={"md"}>
                <Text fz={96}>404</Text>
                <Text>Sorry, page not found</Text>
                <Text>The page you requested cannot be found.</Text>
                <Link
                    to={PATH_APP.general.dashboard.home}
                    style={{
                        padding: "12px 24px",
                        textDecoration: "none",
                        color: "white",
                        backgroundColor: "#7F56D9",
                        borderRadius: 16,
                        fontWeight: 700
                    }}
                >
                    Back to home page
                </Link>
            </Flex>
        </Container>
    )
}

export default Page404;