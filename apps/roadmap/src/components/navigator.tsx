import { Button, ButtonGroup } from "@mui/joy";
import { Link } from "@tanstack/react-router";
import { routeTree } from "./../routeTree.gen";
import { useMemo } from "react";

const ORDER: string[] = ["root", "common"];

export function Navigator() {
  const routeTreeList = useMemo(() => {
    const orderedRoutes = ORDER.map((routeName) => {
      if (!Array.isArray(routeTree?.children)) return null;
      return routeTree.children.find((child) => child.path.includes(routeName));
    });

    const unorderedRoutes = !Array.isArray(routeTree?.children)
      ? []
      : routeTree.children.filter(
          (child) => !ORDER.includes(child.path.replaceAll("/", "")),
        );

    return [...orderedRoutes, ...unorderedRoutes];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeTree?.children]);

  return (
    <div className="fixed top-0 pl-4">
      <ButtonGroup
        sx={{
          p: 2,
          width: 500,
          maxWidth: "100%",
          overflow: "auto",
        }}
        color="primary"
      >
        {Array.isArray(routeTreeList) &&
          routeTreeList.map((child) => (
            <Link key={child.path} to={`/${child.path}`}>
              <Button>{child.path}</Button>
            </Link>
          ))}
      </ButtonGroup>
    </div>
  );
}
