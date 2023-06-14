import React, { ReactNode } from 'react';
import Image, { ImageLoader, ImageProps, StaticImageData } from 'next/image'
import Link from 'next/link';

type EducationProps = {
  img: StaticImageData;
  height: number;
  width: number;
};

export default function Education({ img, height, width }: EducationProps) {
  return (
      <div className="Education" data-cy="element" id='education'>
        <section>
            <div className='Education-title' id="Education-title">
                <h2>Education</h2>
                <Image src={img} width={width} height={height} alt="logo"/>
            </div>
            <div className="education-text">
                <div className='education-institution'>
                    <h3>Universidade Norte do Paraná</h3>
                </div>
                <div className='education-detail'>
                    <p>Technologist - Systems Analysis and Development</p>
                </div>
                <div className='education-detail'>
                    <p>Fev 2020 - 2022</p>
                </div>
            </div>
        </section>
      </div>
  );
};
