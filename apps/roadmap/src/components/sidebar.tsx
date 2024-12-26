import { Box, Chip, Drawer, Link, Stack } from "@mui/joy";
import { useAtom } from "jotai";
import { sidebarAtom } from "../states";

export function Sidebar() {
  const [sidebarState, setSidebarState] = useAtom(sidebarAtom);

  return (
    <Drawer
      open={sidebarState.open}
      onClose={() => {
        setSidebarState({ open: false, references: [] });
      }}
      anchor="right"
      size="lg"
    >
      <div>
        <Section
          title="Basic"
          tagColor="primary"
          urls={sidebarState.references
            .filter((item) => item.type === "basic")
            .map((e) => e.url)}
        />

        <Section
          title="Advanced"
          tagColor="danger"
          urls={sidebarState.references
            .filter((item) => item.type === "advanced")
            .map((e) => e.url)}
        />
      </div>
    </Drawer>
  );
}

interface SectionProps {
  title: string;
  urls: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tagColor: any;
}
function Section({ title, urls, tagColor }: SectionProps) {
  return (
    Boolean(urls?.length) && (
      <Stack spacing={2} padding={6}>
        <div className="w-6">
          <Chip color={tagColor}>{title}</Chip>
        </div>

        {urls.map((url) => (
          <Box key={url} className="flex flex-row justify-start">
            <Link href={url} target="_blank">
              {url}
            </Link>
          </Box>
        ))}
      </Stack>
    )
  );
}
