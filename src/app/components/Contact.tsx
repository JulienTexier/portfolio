'use client';

import { contact, contactConfig } from '@/app/resources';
import { Button, Flex, Heading, Text } from '@/once-ui/components';
import { Background } from '@/once-ui/components/Background';

export const Contact = () => {
  const onOpenEmail = () => {
    window.open(contactConfig.email, '_blank');
  };

  return (
    <Flex
      style={{ overflow: 'hidden' }}
      position="relative"
      fillWidth
      padding="l"
      radius="l"
      marginBottom="m"
      direction="column"
      alignItems="center"
      align="center"
      background="surface"
      border="neutral-medium"
      borderStyle="solid-1"
    >
      <Background
        position="absolute"
        gradient={contactConfig.effects.gradient}
        dots={contactConfig.effects.dots}
        lines={contactConfig.effects.lines}
      />
      <Heading
        style={{ position: 'relative' }}
        marginBottom="s"
        variant="display-strong-xs"
      >
        {contact.title}
      </Heading>
      <Text
        style={{
          position: 'relative',
          maxWidth: 'var(--responsive-width-xs)',
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {contact.description}
      </Text>

      <Flex height="48" alignItems="center">
        <Button onClick={onOpenEmail}>Send me an email</Button>
      </Flex>
    </Flex>
  );
};
