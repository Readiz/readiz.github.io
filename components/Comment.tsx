import React, { useEffect, useRef } from "react";

export default function Comment() {
  const commentsEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.src = "https://giscus.app/client.js";
    scriptEl.setAttribute("data-repo", "Readiz/blog-comment");
    scriptEl.setAttribute("data-repo-id", "MDEwOlJlcG9zaXRvcnkzNTk4NTY4MTc=");
    scriptEl.setAttribute("data-category", "Announcements");
    scriptEl.setAttribute("data-category-id", "DIC_kwDOFXL6sc4CWMdT");
    scriptEl.setAttribute("data-mapping", "pathname");
    scriptEl.setAttribute("data-reactions-enabled", "1");
    scriptEl.setAttribute("data-emit-metadata", "0");
    scriptEl.setAttribute("data-input-position", "bottom");
    scriptEl.setAttribute("data-theme", "light_tritanopia");
    scriptEl.setAttribute("data-lang", "ko");
    scriptEl.setAttribute("crossorigin", "anonymous");
    commentsEl.current?.appendChild(scriptEl);
  }, []);

  return (
    <div style={{
      marginTop: 50,
      maxWidth: 800
    }}>
      <div ref={commentsEl} />
    </div>
  );
}
