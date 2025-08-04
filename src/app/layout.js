import "./globals.css";

export const metadata = {
  title: "Video Recorder",
  description: "A web based video recorder (screen studio replacer)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
