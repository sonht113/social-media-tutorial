import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useChatScroll<T>(dep: T): any {
  const ref = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);

  return ref;
}