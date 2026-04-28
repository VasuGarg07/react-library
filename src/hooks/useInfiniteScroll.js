import { useEffect, useRef } from "react";

export function useInfiniteScroll(onLoadMore) {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onLoadMore();
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [onLoadMore]);

  return ref;
}