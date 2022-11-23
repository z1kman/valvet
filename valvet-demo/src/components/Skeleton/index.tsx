import { ReactNode, RefObject, useEffect, useRef } from "react";

import styles from "./styles.module.scss";

type Props = {
  loading: boolean;
  children: ReactNode;
};

export function Skeleton({ loading, children }: Props) {
  const skeletonWrapperRef: RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);
  const skeletonRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skeletonWrapperRef && skeletonRef && loading) {
      const skeletonWrapper = skeletonWrapperRef.current ;
      const skeleton = skeletonRef.current as HTMLDivElement;
      if (skeletonWrapper) {
        const children = skeletonWrapper["children"][0] as HTMLDivElement;
        if (children) {
          const width = children["offsetWidth"] + "px";
          const height = children["offsetHeight"] + "px";

          skeleton.style.width = width;
          skeleton.style.height = height;
          skeletonWrapper.style.width = width;
          skeletonWrapper.style.height = height;
        }
      }
    }
  }, [children]);

  return (
    <>
      {loading ? (
        <div ref={skeletonRef} className={styles.Skeleton}>
          <div ref={skeletonWrapperRef} className={styles.Skeleton__Wrapper}>
            {children}
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

Skeleton.defaultProps = {
  loading: true,
};
