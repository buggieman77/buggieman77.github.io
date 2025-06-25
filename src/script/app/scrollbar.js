/* ============================
   SCROLL BAR JAVASCRIPT
   ============================ */

export default function scrollBarStyle() {
  const showScrollBar = () => {
    document.body.classList.add("hovering-scrollbar");
  };
  const hideScrollBar = (event) => {
    if (!event.relatedTarget && !event.toElement) {
      document.body.classList.remove("hovering-scrollbar");
    }
  };

  document.addEventListener("mousemove", showScrollBar);

  document.addEventListener("mouseout", hideScrollBar);
}
