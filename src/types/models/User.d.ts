import { BaseModal } from "./BaseModel";
import { Organization } from "./Organization";
import { Role } from "./Role";

export interface User {
    id: number;
    email: string;
    username: string;
    email: string;
    first_name: string,
    last_name: string,
    is_active?: boolean;
    profession: string;
    tenant_user_id: number,
    role?: Role;
    organization?: Organization;
}

export interface createUpdateUser {
    id?: number,
    user: {
        username: string,
        email: string
    }
    role?: number,
    role_id?: string,
    first_name: string,
    last_name: string,
    profession: string
}

export interface AppUser extends BaseModal {
    id: number;
    email: string;
    username: string;
    email: string;
    first_name: string,
    last_name: string,
    profession: string;
    is_active?: boolean;
    role?: Role;
}