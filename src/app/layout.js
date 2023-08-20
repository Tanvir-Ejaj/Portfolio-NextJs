import "./styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "My Portfolio",
  description: "Generated by Tushar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// suppressHydrationWarning={true} body te bosano lage