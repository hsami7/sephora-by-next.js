export const metadata = {
  title: 'sephora',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
      </head>
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: "'Montserrat', Arial, sans-serif",
        background: "#fffafd"
      }}>
        {children}
      </body>
    </html>
  );
}
