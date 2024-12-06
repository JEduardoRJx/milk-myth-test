import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { EmbedVideo } from '@/components/EmbedVideo';

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className='text-5xl md:text-7xl font-bold leading-tight tracking-tight text-slate-700 '>
      {children}
    </h1>
  ),
  paragraph: ({ children }) => (
    <p className='text-2xl font-normal leading-10 text-slate-600 md:my-4'>
      {children}
    </p>
  ),
};

/**
 * Props for `MainContent`.
 */
export type MainContentProps = SliceComponentProps<Content.MainContentSlice>;

/**
 * Component for "MainContent" Slices.
 */
const MainContent = ({ slice }: MainContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <PrismicRichText field={slice.primary.heading} components={components} />
      {slice.primary.timestamp}
      <PrismicRichText field={slice.primary.content1} components={components} />
      <PrismicNextImage className='mb-4' field={slice.primary.image} alt='' />
      <EmbedVideo html={slice.primary.video1.html} />
      <PrismicRichText field={slice.primary.content3} components={components} />
      <EmbedVideo html={slice.primary.video2.html} />
      <PrismicRichText field={slice.primary.content4} components={components} />
    </section>
  );
};

export default MainContent;
