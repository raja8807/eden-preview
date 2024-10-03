import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import React from "react";
import styles from "./our_flavours.module.scss";
import { Carousel, Image } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const Product = () => {
  return (
    <Carousel.Item>
      <div className={styles.Product}>
        <Image src="/assets/bottle.avif" fluid alt="bottle" />
      </div>
    </Carousel.Item>
  );
};

const OurFlavours = () => {
  const flavours = [
    {
      id: "Water Melon",
      color: "red",
    },
    {
      id: "Lychee",
      color: "green",
    },
    {
      id: "Blueberry",
      color: "blue",
    },
  ];

  return (
    <section className={styles.OurFlavours}>
      <CustomContainer>
        <CustomSection>
          <div className={styles.head}>
            <h1>OUR FLAVOURS</h1>
          </div>
          <div>
            <Carousel
              nextIcon={
                <div className={styles.btn}>
                  <ChevronRight />
                </div>
              }
              prevIcon={
                <div className={styles.btn}>
                  <ChevronLeft />
                </div>
              }
            >
              {flavours.map((f) => {
                return (
                  <Carousel.Item key={f.id}>
                    <div className={styles.Product}>
                      <h4
                        style={{ 
                          color: f.color,
                        }}
                      >
                        {f.id}
                      </h4>
                      <Image src="/assets/watermelon.png" alt="bottle" />
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </CustomSection>
      </CustomContainer>
    </section>
  );
};

export default OurFlavours;
