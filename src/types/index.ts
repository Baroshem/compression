import { ComputedRef } from 'vue'

export type LazyLoadOptions = {
  selector?: string;
  options?: {
    rootMargin: string;
    threshold: number;
    enableAutoReload: boolean;
    [key: string]: any;
  };
  [key: string]: any;
};

export type Observer = {
  observe: Function;
  observer: IntersectionObserver;
  triggerLoad: Function;
}

export type UseLazyLoad = {
  init(): Observer;
  observer: ComputedRef<Observer>;
}
