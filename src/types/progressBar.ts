export interface ProgressBarProps {
  color?: string;
  startPosition?: number;
  stopDelayMs?: number;
  height?: number;
  showOnShallow?: boolean;
  options?: {
    minimum?: number;
    easing?: string;
    speed?: number;
    trickle?: boolean;
    trickleSpeed?: number;
    showSpinner?: boolean;
    barSelector?: string;
    spinnerSelector?: string;
    parent?: string;
    template?: string;
  };
  nonce?: string;
}
