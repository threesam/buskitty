export type Preload = 'auto' | 'metadata' | 'none' | boolean;
export interface IframeSrcOptions {
  muted?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  controls?: boolean;
  poster?: string;
  primaryColor?: string;
  letterboxColor?: string;
  startTime?: string | number;
  adUrl?: string;
  defaultTextTrack?: string;
  preload?: Preload;
}