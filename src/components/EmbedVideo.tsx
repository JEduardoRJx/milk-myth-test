'use client';

type EmbedVideoProps = {
  html: string | null;
};

export const EmbedVideo = ({ html }: EmbedVideoProps): JSX.Element | null => {
  if (!html) return null;

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const iframe = doc.querySelector('iframe');
  const src = iframe ? iframe.getAttribute('src') : '';

  if (iframe && src) {
    const title = iframe.getAttribute('title') || 'Embedded Video';

    return (
      <iframe
        src={src}
        allowFullScreen
        title={title}
        style={{
          maxWidth: '100%',
          border: 'none',
          width: '100%',
          height: '100%',
          aspectRatio: `16/9`,
        }}></iframe>
    );
  }

  return null;
};
