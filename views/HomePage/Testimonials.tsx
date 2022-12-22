import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import Separator from 'components/Separator';
import { media } from 'utils/media';

const TESTIMONIALS = [
  {
    content: `Oldukça iyi bir hizmet aldım. Gayet memnun kaldım.`,
    author: {
      name: 'Onur Dindar',
      title: 'Danışan',
      avatarUrl: '/testimonials/onur.png',
    },
  },
  {
    content: `Genel olarak aldığım hizmetle beraber 10 kg zayıfladım. Diyetim oldukça yapabilmeme uygun. Özetle harika bir deneyim!`,
    author: {
      name: 'Birsen Berki',
      title: 'Danışan',
      avatarUrl: '/testimonials/birsenberki.png',
    },
  },
  {
    content: `Uzunca bir zamandır kilo almak istiyordum. Bildiğiniz üzere kilo insanın hayat standartları üzerinde oldukça önemli bir etkisi var. Birçok diyetisyenle çalıştım ancak en memnun kaldığım Zişan hanım oldu!`,
    author: {
      name: 'Rabia Alca',
      title: 'Danışan',
      avatarUrl: '/testimonials/rabiaalca.png',
    },
  },
  {
    content: `Sporcu diyetim için destek aldım. Yaptığım antremanlara destek olan bu program ile kütle kazanımım oldukça hızlandı.`,
    author: {
      name: 'Barkın Angın',
      title: 'Danışan',
      avatarUrl: '/testimonials/barkinangin.png',
    },
  },
  {
    content: `Okulda giderken, çeşitli öğünlere ulaşmam oldukça zordu. Ancak beraber çalışarak kendime en uygun proramı bulduk. Bu sayede programıma uymam kolaylaştı. Harika bir diyetisyen kesinlikle öneriyorum.`,
    author: {
      name: 'Nimet Beriş',
      title: 'Danışan',
      avatarUrl: '/testimonials/nimetberis.png',
    },
  },
  {
    content: `İş hayatımda kilo vermek oldukça zordu. Ancak Zişan hanımla beraber çalışarak istediğim ideal kiloma düştük. Herşey için teşekkürler!`,
    author: {
      name: 'Merve Taşan',
      title: 'Danışan',
      avatarUrl: '/testimonials/mervetasan.png',
    },
  },
];

export default function Testimonials() {
  return (
    <div>
      <Separator />
      <TestimonialsWrapper>
        <Swiper modules={[Navigation, Autoplay, A11y]} slidesPerView={1} autoplay={{ delay: 8000 }} centeredSlides navigation loop>
          {TESTIMONIALS.map((singleTestimonial, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard>
               
                <Content>“{singleTestimonial.content}”</Content>
                <AuthorContainer>
                  <AuthorImageContainer>
                    <NextImage src={singleTestimonial.author.avatarUrl} alt={singleTestimonial.author.name} width={48} height={48} />
                  </AuthorImageContainer>
                  <AuthorContent>
                    <AuthorName>{singleTestimonial.author.name}</AuthorName>
                    <AuthorTitle>{singleTestimonial.author.title}</AuthorTitle>
                  </AuthorContent>
                </AuthorContainer>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialsWrapper>
      <Separator />
    </div>
  );
}

const TestimonialsWrapper = styled(Container)`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    color: rgb(var(--secondary));

    ${media('<=desktop')} {
      display: none;
    }
  }

  .swiper-button-prev {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-next {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const Content = styled.blockquote`
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  font-style: italic;
  max-width: 60%;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;
`;

const AuthorTitle = styled.p`
  font-weight: bold;
`;

const AuthorName = styled.p`
  font-weight: normal;
`;

const AuthorImageContainer = styled.div`
  display: flex;
  border-radius: 10rem;
  margin-right: 1rem;
  overflow: hidden;
`;
