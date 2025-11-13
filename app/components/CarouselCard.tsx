'use client'

import { useEffect, useState, useRef } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'motion/react';
import React, { JSX } from 'react';

// replace icons with your own if needed
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ButtonDonate} from "@/components/shared/ButtonDonate";
export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
  link: string;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
    {
        title: 'Asociația Ramses',
        description: 'Inspirată din povestea motanului Ramses, misiunea Asociației Ramses constă în strângerea' +
            ' de fonduri pentru adăposturile și asociațiile din întreaga țară.',
        id: 1,
        icon: <Image src={'/ong/asociatia-ramses.png'} alt={'Asociația Ramses'} width={500} height={500}
                     draggable={false} className={"text-white"}/>,
        link: 'https://asociatiaramses.ro/'
    },
    {
        title: 'Centrul Filia',
        description: 'Centrul FILIA este o organizație feministă care face auzite vocile femeilor prin lucru' +
            ' direct în comunități și activități de advocacy, activism și sensibilizare, studii și analize.',
        id: 2,
        icon: <Image src={'/ong/centrul-filia.png'} alt={'Centrul Filia'} width={400} height={400}
                     draggable={false} className={"text-white"}/>,
        link: 'https://centrulfilia.ro/'
    }, {
        title: 'O Mână De Ajutor',
        description: 'Asociația Eco-Durabil este o organizație non-profit, apolitică și independentă ' +
            'din București, fondată în 2007 la inițiativa unor tineri din diferite domenii.',
        id: 3,
        icon: <Image src={'/ong/o-mana-de-ajutor.png'} alt={'O mână de ajutor'} width={400} height={400}
                     draggable={false} className={"text-white"}/>,
        link: 'https://omanadeajutor.eu/'
    }, {
        title: 'Agenția Împreună',
        description: 'Misiunea Agenției este să păstreze și să promoveze identitatea romilor prin cercetare,' +
            ' documentare și implementarea politicilor sociale dedicate lor.',
        id: 4,
        icon: <Image src={'/ong/agentia-impreuna.png'} alt={'Agenția împreună'} width={350} height={350}
                     draggable={false} className={"text-white mx-4"}/>,
        link: 'https://www.agentiaimpreuna.ro/'
    }, {
        title: 'Vocea copiilor abandonați',
        description: 'Scopul nostru este să susținem copiii și tinerii abandonați, oferindu-le sprijin' +
            ' educativ și un mediu în care să fie ascultați, înțeleși și iubiți. ',
        id: 5,
        icon: <Image src={'/ong/vocea-copiilor-abandonati.png'} alt={'Vocea copiilor abandonati'} width={400} height={400}
                     draggable={false} className={"text-white"}/>,
        link: 'https://voceacopiilor.ro/'
    },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function CarouselCard({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}: CarouselProps): JSX.Element {
  const containerPadding = 0;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0
        }
      };

    return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-0 ${
        round ? 'rounded-full border border-white' : 'rounded-[24px]'
      }`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` })
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
          // @ts-expect-error-ignore
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
          const outputRange = [90, 0, -90];
            // eslint-disable-next-line react-hooks/rules-of-hooks
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={index}
              className={`shrink-0 flex flex-row ${
                round
                  ? 'items-center justify-center text-center bg-[#060010] border-0'
                  : 'items-center justify-center bg-green-600 rounded-[12px]'
              } overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : '100%',
                rotateY: rotateY,
                ...(round && { borderRadius: '50%' })
              }}
                // @ts-expect-error-ignore
              transition={effectiveTransition}
            >
              <div className={`${round ? 'p-0 m-0' : 'pl-5'}`}>
                <span className="flex items-center justify-center">
                  {item.icon}
                </span>
                  <Button asChild className={'block md:hidden mt-4 md:mt-0'}>
                      <Link href={item.link}>
                          Află Mai Mult
                      </Link>
                  </Button>
              </div>
              <div className="p-5">
                <div className="mb-1 font-black text-lg text-white">{item.title}</div>
                <p className="text-sm text-white">{item.description}</p>
                  <div className={'flex flex-col md:flex-row mt-2 justify-center md:justify-between'}>
                      <Button asChild className={'hidden md:block mt-4 md:mt-0'}>
                          <Link href={item.link}>
                              Află Mai Mult
                          </Link>
                      </Button>
                      <ButtonDonate link={'#'}/>
                  </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
