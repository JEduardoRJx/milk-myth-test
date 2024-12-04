import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MainHero`.
 */
export type MainHeroProps = SliceComponentProps<Content.MainHeroSlice>;

/**
 * Component for "MainHero" Slices.
 */
const MainHero = ({ slice }: MainHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for main_hero (variation: {slice.variation}) Slices
    </section>
  );
};

export default MainHero;
