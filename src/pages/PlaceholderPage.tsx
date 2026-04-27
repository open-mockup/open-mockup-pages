import React from "react";
import { Center, Stack, Text } from "@mantine/core";

interface PlaceholderPageProps {
  id: string;
}

export function PlaceholderPage({ id }: PlaceholderPageProps) {
  return (
    <Center py={80}>
      <Stack align="center" gap="xs">
        <Text size="xl" fw={700}>
          {id}
        </Text>
        <Text c="dimmed" size="sm">
          Documentation coming soon.
        </Text>
      </Stack>
    </Center>
  );
}
