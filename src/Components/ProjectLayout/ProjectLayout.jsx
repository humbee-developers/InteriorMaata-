const { default: Link } = require("next/link");

const ProjectLayout = ({ children }) => {
  return (
    <div className="">
      <ul>
        <li>
          <Link href={"/Projects/Interior"}>Interior</Link>
        </li>
        <li>
          <Link href={"/Projects/Architecture"}>Architecture</Link>
        </li>
        <li>
          <Link href={"/Projects/Commercial"}>Commercial</Link>
        </li>
      </ul>
      <div className="">{children}</div>
    </div>
  );
};
export default ProjectLayout
