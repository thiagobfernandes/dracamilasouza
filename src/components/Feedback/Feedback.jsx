// Feedback.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Feedback.css";

const Feedback = () => {
  const mockFeedbacks = [
    {
      name: "Joana Silva",
      rating: 5,
      comment:
        "A doutora foi incrível, muito atenciosa e profissional. Recomendo a todos!",
    },
    {
      name: "Carlos Pereira",
      rating: 4,
      comment:
        "Atendimento ótimo e a doutora é muito atenciosa e excelente no que faz.",
    },
    {
      name: "Luciana Costa",
      rating: 5,
      comment:
        "Excelente profissional, me senti muito bem cuidada. Super recomendo!",
    },
  ];

  return (
    <div className="feedback-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {mockFeedbacks.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="feedback-review">
              <h3 className="feedback-title">{item.name}</h3>
              <div className="feedback-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="star">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="feedback-comment">{item.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Feedback;
