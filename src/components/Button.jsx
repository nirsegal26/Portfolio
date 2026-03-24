/**
 * A reusable CTA button component.
 * Optimized to prevent forced reflows during initialization.
 */
const Button = ({ text, className, id }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById("counter");

    if (target && id) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <a onClick={handleScroll} className={`${className ?? ""} cta-wrapper cursor-pointer`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;