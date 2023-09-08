import PrimarySearchAppBar from "@/components/layout/appBar/appBar";
import {ThemeProvider} from "@mui/material";
import {theme} from "@/theme.config";
import Menu from "@/components/layout/appBar/menu";

export default function Template({children,}: { children: React.ReactNode }) {
    return (
        <>
            <ThemeProvider theme = {theme}>
                <PrimarySearchAppBar/>
                <Menu/>
                <>
                    {children}
                </>
            </ThemeProvider>
        </>
    )
}
