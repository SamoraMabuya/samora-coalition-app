type ImageLoaderProps = {
  src: string;
  width?: number;
  quality?: number;
};

export default function imageLoader({ src }: ImageLoaderProps): string {
  return src;
}
