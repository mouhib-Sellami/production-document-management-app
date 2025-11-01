import { lazy } from "react";
import { PATH_AUTH } from "./paths";
import { useRoutes } from "react-router-dom";
import Loadable from "./Loadable";
import GuestGuard from "@/guards/GuestGuard";


export default function AppRoutes() {

    return useRoutes([

        {
            path: PATH_AUTH.login,
            element: (
                <GuestGuard>
                    <LoginPage />
                </GuestGuard>
            ),
        },
        //     {
        //         path: PATH_AUTH.register,
        //         element: (
        //             <GuestGuard>
        //                 <TenantGuard>
        //                     <RegisterPage />
        //                 </TenantGuard>
        //             </GuestGuard>
        //         ),
        //     },
        //     {
        //         path: PATH_AUTH.forgetPassword,
        //         element: (
        //             <GuestGuard>
        //                 <TenantGuard>
        //                     <ForgetPasswordRequest />
        //                 </TenantGuard>
        //             </GuestGuard>
        //         ),
        //     },
        //     {
        //         path: PATH_AUTH.resetPassword,
        //         element: (
        //             <GuestGuard>
        //                 <TenantGuard>
        //                     <ResetPasswordRequest />
        //                 </TenantGuard>
        //             </GuestGuard>
        //         ),
        //     },
        //     {
        //         path: PATH_APP.general.dashboard.builder,
        //         element: (
        //             <AuthGuard>
        //                 <ReactFlowProvider>
        //                     <WorkFlowProvider>
        //                         <BuilderProvider>
        //                             <PermissionGuardRedirection permission="can_change_project">
        //                                 <BuilderPage />
        //                             </PermissionGuardRedirection>
        //                         </BuilderProvider>
        //                     </WorkFlowProvider>
        //                 </ReactFlowProvider>
        //             </AuthGuard>
        //         ),
        //     },
        //     {
        //         path: PATH_APP.general.dashboard.projectWorkflows,
        //         element: (
        //             <AuthGuard>
        //                 <ReactFlowProvider>
        //                     <WorkFlowProvider>
        //                         <PermissionGuardRedirection permission="can_change_project">
        //                             <ProjectWorkflowPage />
        //                         </PermissionGuardRedirection>
        //                     </WorkFlowProvider>
        //                 </ReactFlowProvider>
        //             </AuthGuard>
        //         ),
        //     },
        //     {
        //         path: PATH_APP.general.dashboard.projectLog,
        //         element: (
        //             <BuilderViewerProvider>
        //                 <ReactFlowProvider>
        //                     <AuthGuard>
        //                         <PermissionGuardRedirection permission="can_view_project">
        //                             <ViewProjectLogPage />
        //                         </PermissionGuardRedirection>
        //                     </AuthGuard>
        //                 </ReactFlowProvider>
        //             </BuilderViewerProvider>
        //         )
        //     },
        //     {
        //         path: PATH_APP.root,
        //         element: (
        //             <AuthGuard>
        //                 <DashboardLayout />
        //             </AuthGuard>
        //         ), children: [
        //             {
        //                 path: PATH_APP.general.dashboard.home,
        //                 element: (
        //                     <HomePage />
        //                 )
        //             },
        //             {
        //                 path: PATH_APP.general.dashboard.roles,
        //                 element: (
        //                     <PermissionGuardRedirection permission="can_view_role">
        //                         <RolePage />
        //                     </PermissionGuardRedirection>
        //                 )
        //             },
        //             {
        //                 path: PATH_APP.general.dashboard.users,
        //                 element: (
        //                     <PermissionGuardRedirection permission="can_view_user">
        //                         <UsersPage />
        //                     </PermissionGuardRedirection>
        //                 )
        //             },
        //             {
        //                 path: PATH_APP.general.dashboard.projects,
        //                 element: (
        //                     <PermissionGuardRedirection permission="can_view_project">
        //                         <ProjectsPage />
        //                     </PermissionGuardRedirection>
        //                 )
        //             },
        //             {
        //                 path: PATH_APP.general.dashboard.runnerAgent,
        //                 element: (
        //                     <PermissionGuardRedirection permission="can_view_runner_agent">
        //                         <RunnerAgentPage />
        //                     </PermissionGuardRedirection>
        //                 )
        //             },
        //             {
        //                 path: PATH_APP.general.dashboard.projectLogsList,
        //                 element: (
        //                     <PermissionGuardRedirection permission="can_view_project">
        //                         <ProjectLogs />
        //                     </PermissionGuardRedirection>
        //                 )
        //             }

        //         ]
        //     },
        //     {
        //         path: PATH_APP.general.notFound,
        //         element: (
        //             <Page404 />
        //         )
        //     },
        {
            path: "*",
            element: (
                <Page404 />
            )
        },
    ])
};

// AUTH
const LoginPage = Loadable(lazy(() => import('@pages/auth/login/LoginPage')));


//OTHER
const Page404 = Loadable(lazy(() => import('@pages/errors/Page404')));
// const LandingPage = Loadable(lazy(() => import('@pages/landing/LandingPage')));