import React from "react";
import { Center, Checkbox, Group, Paper, PasswordInput, Stack, Text, TextInput, Title } from "@mantine/core";
import { useForm } from '@mantine/form';
import { Link } from "react-router";
import { SessionContext } from "@/contexts/SessionContext";
import PrimaryButton from "@/components/buttons/PrimaryButton";


const LoginPage: React.FC = ({ }) => {
    const { isLoading, signIn } = React.useContext(SessionContext);

    const form = useForm<UserAuth>({
        mode: "uncontrolled",
        initialValues: {
            username: '',
            password: '',
        },
        validate: {
            username: (val: string) => (val.length > 0 ? null : "username Invalid."),
            password: (val: string) => (val.length >= 4 ? null : "Password invalid.")
        },
        enhanceGetInputProps: () => ({ disabled: isLoading }),
    });

    const submit = React.useCallback(async (values: UserAuth) => {
        await signIn?.(values)
    }, [])

    return (
        <Paper w={"100%"} h={"100%"}>
            <Center w={"100%"} h={"100%"}>
                <Stack w={{ base: "80%", xl: "70%", lg: "70%", md: "50%", sm: "50%" }} gap={20}>
                    <Group w={"100%"} align='flex-start' style={{ flexDirection: "column" }} mb={"xl"} gap={0}>
                        <Title order={2} fz={{ xl: 26, lg: 24, md: 20 }}>Login</Title>
                        <Text c={"dimmed"} fz={{ xl: 16, lg: 14, md: 12 }}>Please enter your login credentials.</Text>
                    </Group>
                    <form onSubmit={form.onSubmit((values) => submit(values))} style={{ width: "100%" }}>
                        <Stack w={"100%"} gap={"sm"}>
                            <TextInput
                                required
                                label="Username"
                                placeholder="Jhon.doe"
                                key={form.key('username')}
                                {...form.getInputProps('username')}
                                withAsterisk={false}
                            />
                            <PasswordInput
                                required
                                label="Password"
                                placeholder="••••••••"
                                key={form.key('password')}
                                {...form.getInputProps('password')}
                                withAsterisk={false}
                            />
                            <Group justify="space-between" mb={"md"}>
                                <Checkbox
                                    label="Remember me"
                                    key={form.key('rememberMe')}
                                    {...form.getInputProps('rememberMe', { type: 'checkbox' })} />
                                <Link to={"/forget-password"} style={{ textDecoration: "none" }} >
                                    <Text fz={{ xl: 14, lg: 14, md: 12 }}>
                                        Forget Password ?
                                    </Text>
                                </Link>
                            </Group>
                            <PrimaryButton type='submit' loading={isLoading}>
                                <Text size='md' fz={{ xl: 16, lg: 14, md: 12 }}>
                                    Log in
                                </Text>
                            </PrimaryButton>
                        </Stack>
                    </form>
                </Stack>
            </Center>
        </Paper>
    )
}

export default LoginPage;