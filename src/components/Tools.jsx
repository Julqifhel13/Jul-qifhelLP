import ToolMark from './ToolMark.jsx';
import { tools } from '../data/site.js';
import './Tools.css';

/**
 * The stack strip: a continuously scrolling row of the tools behind the work,
 * built on the reference's own list-ticker (translateX(0) to translateX(-50%)).
 *
 * The list is rendered twice so the halves meet seamlessly at the wrap. The
 * duplicate is hidden from assistive tech, and the real list is announced
 * once, in order.
 */
export default function Tools() {
  const lane = (duplicate) =>
    tools.map((tool) => (
      <li className="tools__item" key={`${duplicate ? 'dup-' : ''}${tool.name}`}>
        <ToolMark name={tool.mark} />
        <span className="tools__name">{tool.name}</span>
      </li>
    ));

  return (
    <section className="tools" aria-label="Tools and platforms">
      <div className="tools__track">
        <ul className="tools__lane">{lane(false)}</ul>
        <ul className="tools__lane" aria-hidden="true">
          {lane(true)}
        </ul>
      </div>
    </section>
  );
}
