import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const SidePanel = () => {
  return (
    <div className="flex flex-col">
      <ul>
        <li>
          <Button variant={"default"} asChild>
            <Link to={"ghost-writer"}>Ghost Writer</Link>
          </Button>
        </li>
        <li>
          <Button variant={"secondary"} asChild>
            <Link to={"humanizer"}>Humanizer</Link>
          </Button>
        </li>
        <li>
          <Button variant={"secondary"} asChild>
            <Link to={"researcher"}>Researcher</Link>
          </Button>
        </li>
        <li>
          <Button variant={"secondary"} asChild>
            <Link to={"translator"}>Translator</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default SidePanel;
