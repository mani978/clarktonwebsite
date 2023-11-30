import React, { lazy, Component, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import { ReactComponent as IconLaptop } from "bootstrap-icons/icons/laptop.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconTv } from "bootstrap-icons/icons/tv.svg";
import { ReactComponent as IconDisplay } from "bootstrap-icons/icons/display.svg";
import { ReactComponent as IconHdd } from "bootstrap-icons/icons/hdd.svg";
import { ReactComponent as IconUpcScan } from "bootstrap-icons/icons/upc-scan.svg";
import { ReactComponent as IconTools } from "bootstrap-icons/icons/tools.svg";
import {ReactComponent as TireIcon} from "../icons/tire.svg";
import {ReactComponent as BatteryIcon} from "../icons/battery.svg";
import {ReactComponent as AccesoriesIcon} from "../icons/accessories.svg";
import {ReactComponent as CablesIcon} from "../icons/cables.svg";
import {ReactComponent as HeadlightIcon} from "../icons/headlight.svg";
import {ReactComponent as PartsIcon} from "../icons/parts.svg";
import {ReactComponent as RadioIcon} from "../icons/radio.svg";
import {ReactComponent as WindshieldIcon} from "../icons/windshield.svg"






const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));
const Carousel = lazy(() => import("../components/carousel/Carousel"));
const CardIcon = lazy(() => import("../components/card/CardIcon"));
const CardLogin = lazy(() => import("../components/card/CardLogin"));
const CardImage = lazy(() => import("../components/card/CardImage"));
const CardDealsOfTheDay = lazy(() =>
  import("../components/card/CardDealsOfTheDay")
);




  


class HomeView extends Component {
  
  components = {
    IconLaptop: IconLaptop,
    IconHeadset: IconHeadset,
    IconPhone: IconPhone,
    IconTv: IconTv,
    IconDisplay: IconDisplay,
    IconHdd: IconHdd,
    IconUpcScan: IconUpcScan,
    IconTools: IconTools,
    TireIcon: TireIcon,
    BatteryIcon:BatteryIcon,
    AccesoriesIcon:AccesoriesIcon,
    CablesIcon:CablesIcon,
    HeadlightIcon:HeadlightIcon,
    PartsIcon:PartsIcon,
    RadioIcon:RadioIcon,
    WindshieldIcon:WindshieldIcon,
  };

  

  render() {
    
    

    const iconProducts = data.iconProducts;
    const rows = [...Array(Math.ceil(iconProducts.length / 4))];
    // chunk the products into the array of rows
    const productRows = rows.map((row, idx) =>
      iconProducts.slice(idx * 4, idx * 4 + 4)
    );
    // map the rows as div.row
    const carouselContent = productRows.map((row, idx) => (
      <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
        <div className="row g-3">
          {row.map((product, idx) => {
            const ProductImage = this.components[product.img];
            return (
              <div key={idx} className="col-md-3">
                <CardIcon
                  title={product.title}
                  text={product.text}
                  tips={product.tips}
                  to={product.to}
                >
                  <ProductImage className={product.cssClass} width="80" height="80" />
                </CardIcon>
              </div>
            );
          })}
        </div>
      </div>
    ));

    return (
      <React.Fragment>
        <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />
        <div className="container-fluid bg-light mb-3">
          <div className="row g-3">
            <div className="col-md-9">
              <Carousel id="elect-product-category" className="mb-3">
                {carouselContent}
              </Carousel>
              <Support />
            </div>
            <div className="col-md-3">
              <CardLogin className="mb-3" />
              <CardImage src="../../images/banner/offer.webp" to="promo" />
            </div>
          </div>
        </div>
        <div className="container-fluid bg-light mb-3">
          <div className="row">
            <div className="col-md-12">
              <CardDealsOfTheDay
                endDate={Date.now() + 1000 * 60 * 60 * 14}
                title="Deals of the Day"
                to="/"
              >
                <Carousel id="elect-product-category1">
                  {carouselContent}
                </Carousel>
              </CardDealsOfTheDay>
            </div>
          </div>
        </div>

        <div className="bg-danger text-light bg-gradient p-3 text-center mb-3">
          <h4 className="m-0">Explore Auto Parts Collection</h4>
        </div>
        <div className="container">
          <div className="row justify-content-center align-items-center" >
            <div className="col-md-3 text-center ">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/alternators.jpg"
                  className="img-fluid rounded"
                  alt="..."
                  style={{width:200,height:200}}
                />
                <div className="text-center h6">Alternators</div>
              </Link>
            </div>
            <div className="col-md-3 text-center">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/jump.jpg"
                  className="img-fluid rounded"
                  alt="..."
                  style={{width:200,height:200}}
                />
                <div className="text-center h6">Jump Starters</div>
              </Link>
            </div>
            <div className="col-md-3 text-center">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/oil.webp"
                  className="img-fluid rounded"
                  alt="..."
                  style={{width:200,height:200}}
                />
                <div className="text-center h6">Engine Oil</div>
              </Link>
            </div>
            <div className="col-md-3 text-center">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/mats.webp"
                  className="img-fluid rounded"
                  alt="..."
                  style={{width:250,height:250}}
                />
                <div className="text-center h6">Mats</div>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeView;
