import MenuDashboard from "./components/MenuDashboard";

export default function DashboardLayout({children} : Readonly<{children: React.ReactNode}>) {
    return(
        <>
            <MenuDashboard/>
            {children}
        </>
    )
}