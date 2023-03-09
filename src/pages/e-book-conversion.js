import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SidebarPageContainer from "@/components/SidebarPageContainer/SidebarPageContainer";
import { ebook } from "@/data/sidebarPageContainer";
import React from "react";

const EBookConversion = () => {
  return (
    <Layout pageTitle="E-Book Conversion">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner
        title="E-Book Conversion"
        parent="Services"
        parentHref="/services"
      />
      <SidebarPageContainer service={ebook} />
      <CallToSectionTwo className="alternate" />
      <MainFooter />
    </Layout>
  );
};

export default EBookConversion;
