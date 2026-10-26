/**
 * The reference's link label treatment (its c-LinkCharShift component): on
 * hover the text slides up out of its box while an identical copy rises in
 * behind it. The copy is hidden from assistive tech so the label is only
 * announced once, and it collapses entirely under reduced motion.
 *
 * Wrap the label, not the anchor — the hover is keyed off the parent.
 */
export default function ShiftText({ children }) {
  return (
    <span className="shift">
      <span className="shift__a">{children}</span>
      <span className="shift__b" aria-hidden="true">
        {children}
      </span>
    </span>
  );
}
