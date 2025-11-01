interface UserAuth {
    username: string;
    password: string;
}

interface resetPasswordRequest {
    token: string,
    password: string,
    confirm_password: string
}


interface UserDetailsRegisterForm {
    first_name: string,
    last_name: string,
    username: string,
    email: string
    password: string,
    confirm_password: string
}

interface OrganizationDetailsRegisterForm {
    name: string,
    email: string,
    // org_pic: File
}

interface SignUpRequest extends UserDetailsRegisterForm {
    organization: OrganizationDetailsRegisterForm
}