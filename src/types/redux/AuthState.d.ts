import { Organization } from "../models/Organization";
import { Permission, Role } from "../models/Role";
import { User } from "../models/User";


export type AuthState = {
    user: User | null;
    isError: boolean;
    isAuthenticated: boolean;
    isLoading: boolean;
    message: string;
    permissions: Array<Permission>,
    role: Role,
    organization: Organization | null
}
