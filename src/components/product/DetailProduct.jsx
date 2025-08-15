import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap, { Back, Power4 } from "gsap";
import useScrollBlock from "../../custonhooks/useScrollBlock";

import style from "../../styles";
import { getWaApi } from "../../constants";

const DetailProduct = ({ isDetailActive, product, setIsDetailActive }) => {
  const [blockScroll, allowScroll] = useScrollBlock();

  const container = useRef(null);
  const title = useRef(null);
  const subTitle = useRef(null);
  const paragraph1 = useRef(null);
  const paragraph2 = useRef(null);
  const btn = useRef(null);
  const img = useRef(null);
  const circleTransRef = useRef(null);

  const detailTl = useRef(
    gsap.timeline({ defaults: { duration: 1, ease: Back.easeOut } })
  ).current;

  useEffect(() => {
    if (isDetailActive) {
      detailTl
        .to(container.current, { opacity: 1, y: 0, ease: Power4.easeOut })
        .to(circleTransRef.current, { scale: 1, y: 0 }, "-.5")
        .to(circleTransRef.current, { scale: 18, duration: 1.5 })
        .to(container.current, { backgroundColor: "#fff" }, "-=1")
        .to(title.current, { opacity: 1, x: 0, ease: Power4.easeOut }, "-=1")
        .to(subTitle.current, { opacity: 1, ease: Power4.easeOut })
        .to(img.current, { scale: 1, opacity: 1 }, "-=2")
        .to(paragraph1.current, { y: 0, opacity: 1 }, "-=1")
        .to(paragraph2.current, { y: 0, opacity: 1 }, "-=.8")
        .to(btn.current, { opacity: 1, ease: Back.easeIn });
      blockScroll();
    } else {
      detailTl.to(container.current, { y: "100%" });
      allowScroll();
    }
  }, [isDetailActive, blockScroll, allowScroll, detailTl]);

  const setTitleColor = () => {
    if (product.id === "Chocolate") return "text-chocolate";
    else if (product.id === "balado") return "text-balado";
    else return "text-primary";
  };

  return (
    <div
      ref={container}
      className="fixed top-0 left-0 h-full overflow-y-scroll sm:overflow-hidden w-full z-50 flex translate-y-full"
    >
      <div
        className={`max-w-[1300px] m-auto p-6 flex flex-col sm:flex-row sm:justify-center sm:py-10 lg:py-18 w-full ${style.paddingX}`}
      >
        <div className="mb-10 sm:mr-6 max-w-xl">
          <h1
            ref={title}
            className={`${style.heading1} mb-4 opacity-0 -translate-x-10`}
          >
            Varian
            <span
              ref={subTitle}
              className={`${setTitleColor()} opacity-50 overflow-hidden`}
            >
              {" "}
              {product.title}
            </span>
          </h1>
          <p
            ref={paragraph1}
            className={`${style.paragraph} mb-6 translate-y-10 opacity-0`}
          >
            {product.detail.desc1}
          </p>
          <p
            ref={paragraph2}
            className={`${style.paragraph} mb-8 lg:mb-10 translate-y-10 opacity-0`}
          >
            {product.detail.desc2}
          </p>
          <div ref={btn} className="flex opacity-0">
            <a
              href={getWaApi(product.id)}
              target="blank"
              className={`${style.btnYellow} mr-3`}
            >
              Order Sekarang
            </a>
            <button
              className={`${style.btnChocolate}`}
              onClick={() => setIsDetailActive(false)}
            >
              Kembali
            </button>
          </div>
        </div>
        <img
          ref={img}
          className="w-1/2 sm:w-1/3 lg:w-72 m-auto drop-shadow-lg scale-[.3] opacity-0"
          src={product.detail.img}
          alt=""
        />
      </div>

      <div className="absolute overflow-hidden w-full h-full z-[-1] flex justify-center items-center">
        <div
          ref={circleTransRef}
          className="w-[100px] h-[100px] scale-[3] -translate-y-full rounded-full bg-white"
        ></div>
      </div>
    </div>
  );
};

DetailProduct.propTypes = {
  isDetailActive: PropTypes.bool.isRequired,
  setIsDetailActive: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    detail: PropTypes.shape({
      desc1: PropTypes.string,
      desc2: PropTypes.string,
      img: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default DetailProduct;
