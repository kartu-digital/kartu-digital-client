import React from "react";
import Navigation from "@/components/sections/navbar-footer/Navigation";
import Footer from "@/components/sections/navbar-footer/Footer";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <Navigation />
      {children}
      <Footer />
    </React.Fragment>
  );
}
