import "../styles/globals.css"

export default function DashboardLayout({ children,  }: { children: React.ReactNode, }) {
    return (
        <html>
            <head>
                <title>Like chat</title>
            </head>
            <body>{children}</body>
        </html>

    )
}