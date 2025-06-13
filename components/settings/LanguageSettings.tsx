import React from 'react';
import { Pressable } from 'react-native';
import { VStack } from '../ui/vstack';
import { HStack } from '../ui/hstack';
import { Text } from '../ui/text';
import { Heading } from '../ui/heading';
import { Pressable as UIPressable } from '../ui/pressable';
import { Icon } from '../ui/icon';
import { Card } from '../ui/card';
import { Box } from '../ui/box';
import { useLanguage, availableLanguages } from '../i18n/LanguageContext';
import { Check, X } from 'lucide-react-native';

interface LanguageSettingsProps {
  onClose: () => void;
}

const LanguageSettings: React.FC<LanguageSettingsProps> = ({ onClose }) => {
  const { currentLanguage, setLanguage } = useLanguage();

  const handleLanguageChange = async (languageCode: 'en' | 'es' | 'pt') => {
    await setLanguage(languageCode);
    onClose();
  };

  return (
    <Box className="absolute inset-0 bg-black/50 flex justify-center items-center z-50">
      <Pressable 
        className="absolute inset-0" 
        onPress={onClose} 
      />
      <Card className="p-6 m-4 max-w-md w-full">
        <VStack className="space-y-4">
          <HStack className="justify-between items-center">
            <Heading size="md" className="text-typography-900 dark:text-typography-100">
              Select Language
            </Heading>
            <UIPressable onPress={onClose}>
              <Icon as={X} size="md" className="text-typography-500" />
            </UIPressable>
          </HStack>
          
          <VStack className="space-y-3">
            {availableLanguages.map((language) => (
              <UIPressable
                key={language.code}
                onPress={() => handleLanguageChange(language.code)}
                className="p-4 rounded-lg border border-outline-200 dark:border-outline-700"
              >
                <HStack className="justify-between items-center">
                  <VStack>
                    <Text className="font-semibold text-typography-900 dark:text-typography-100">
                      {language.nativeName}
                    </Text>
                    <Text size="sm" className="text-typography-600 dark:text-typography-400">
                      {language.name}
                    </Text>
                  </VStack>
                  {currentLanguage === language.code && (
                    <Icon as={Check} size="md" className="text-primary-600 dark:text-primary-400" />
                  )}
                </HStack>
              </UIPressable>
            ))}
          </VStack>
        </VStack>
      </Card>
    </Box>
  );
};
};

export default LanguageSettings;
